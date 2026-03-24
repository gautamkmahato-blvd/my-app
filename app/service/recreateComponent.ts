/**
 * Full pipeline: HTML + CSS + Screenshot → AI Generate → Render → Screenshot → Compare → Fix Loop → Output
 * Uses Gemini for generation/comparison and Puppeteer for rendering.
 */

import ai from "@/app/config/gemini";
import { renderAndScreenshot } from "./renderService";
import { compareScreenshots } from "./compareScreenshots";

const MODEL = "gemini-2.0-flash";
const MAX_ITERATIONS = 3;
const PIXEL_GOOD_ENOUGH = 95;
const AI_GOOD_ENOUGH = 98;
const TARGET_SCORE = 99;

function toBase64(buffer: Buffer): string {
  return buffer.toString("base64");
}

function ensureBase64(screenshot: string | Buffer): string {
  if (typeof screenshot === "string") return screenshot.replace(/^data:image\/\w+;base64,/, "");
  return toBase64(screenshot);
}

function buildUserContentWithImage(imageBase64: string, text: string) {
  return {
    role: "user" as const,
    parts: [
      { inlineData: { data: imageBase64, mimeType: "image/png" } },
      { text },
    ],
  };
}

function buildUserContentWithTwoImages(
  image1Base64: string,
  image2Base64: string,
  text: string
) {
  return {
    role: "user" as const,
    parts: [
      { inlineData: { data: image1Base64, mimeType: "image/png" } },
      { inlineData: { data: image2Base64, mimeType: "image/png" } },
      { text },
    ],
  };
}

/**
 * Step 1: Generate initial self-contained HTML from HTML + CSS + screenshot.
 */
export async function generateInitialCode(
  html: string,
  css: string,
  screenshotBase64: string,
  elementWidth?: number,
  elementHeight?: number
): Promise<string> {
  const dimensions =
    elementWidth != null && elementHeight != null
      ? `\nElement dimensions: ${elementWidth}×${elementHeight}px. Set the viewport/container to this size for pixel-perfect match. Use inline styles where needed for exact colors/fonts.`
      : "";

  const prompt = `Recreate this component exactly.

HTML:
\`\`\`html
${html}
\`\`\`

CSS:
\`\`\`css
${css}
\`\`\`
${dimensions}

Return ONLY a complete self-contained HTML file (include <!DOCTYPE html>, <style> with the CSS, and the body content). No markdown code fences, no explanation.`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [buildUserContentWithImage(screenshotBase64, prompt)],
    config: { maxOutputTokens: 8192 },
  });

  const text = response.text ?? "";
  return extractHtmlFromResponse(text);
}

/**
 * Step 3B: AI-based semantic comparison.
 */
export async function aiCompare(
  originalScreenshotBase64: string,
  generatedScreenshotBase64: string
): Promise<{ score: number; issues: string[] }> {
  const prompt = `Compare these two UI components. Return valid JSON only, no markdown:
{
  "score": <0-100>,
  "issues": ["list of specific visual differences"]
}`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      buildUserContentWithTwoImages(
        originalScreenshotBase64,
        generatedScreenshotBase64,
        prompt
      ),
    ],
    config: { maxOutputTokens: 1024 },
  });

  const raw = response.text?.trim() ?? "{}";
  try {
    const parsed = JSON.parse(raw.replace(/^```json?\s*|\s*```$/g, ""));
    return {
      score: typeof parsed.score === "number" ? parsed.score : 0,
      issues: Array.isArray(parsed.issues) ? parsed.issues : [],
    };
  } catch {
    return { score: 0, issues: ["Failed to parse AI comparison response"] };
  }
}

/**
 * Ask AI to fix the code given current output, original, and list of issues.
 */
export async function fixCode(
  currentCode: string,
  originalScreenshotBase64: string,
  generatedScreenshotBase64: string,
  issues: string[]
): Promise<string> {
  const prompt = `The generated component has these issues: ${issues.join(", ")}

Current code:
\`\`\`html
${currentCode}
\`\`\`

Fix ONLY these specific issues. Return the complete fixed HTML file only (self-contained, with DOCTYPE and styles). No markdown fences, no explanation.`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      buildUserContentWithTwoImages(
        originalScreenshotBase64,
        generatedScreenshotBase64,
        prompt
      ),
    ],
    config: { maxOutputTokens: 8192 },
  });

  const text = response.text ?? "";
  return extractHtmlFromResponse(text);
}

function extractHtmlFromResponse(text: string): string {
  const trimmed = text.trim();
  const start = trimmed.startsWith("<!") ? 0 : trimmed.indexOf("<!");
  const end = trimmed.lastIndexOf(">") + 1;
  if (start >= 0 && end > start) return trimmed.slice(start, end);
  return trimmed;
}

export interface FixLoopOptions {
  elementWidth?: number;
  elementHeight?: number;
  maxIterations?: number;
}

export interface FixLoopResult {
  code: string;
  score: number;
  iterations: number;
  pixelScore: number;
  aiScore: number;
  diffImageBase64?: string;
}

/**
 * Step 4: Fix loop — generate, render, compare, fix until score >= threshold or max iterations.
 */
export async function fixLoop(
  html: string,
  css: string,
  originalScreenshot: string | Buffer,
  options: FixLoopOptions = {}
): Promise<FixLoopResult> {
  const maxIterations = options.maxIterations ?? MAX_ITERATIONS;
  const width = options.elementWidth ?? 800;
  const height = options.elementHeight ?? 600;
  const originalBase64 = ensureBase64(originalScreenshot);

  let currentCode = await generateInitialCode(html, css, originalBase64, width, height);
  let bestCode = currentCode;
  let bestScore = 0;
  let bestPixelScore = 0;
  let bestAiScore = 0;
  let bestDiffImage: Buffer | undefined;

  for (let i = 0; i < maxIterations; i++) {
    const generatedScreenshot = await renderAndScreenshot(currentCode, { width, height });
    const generatedBase64 = toBase64(generatedScreenshot);

    const pixelResult = compareScreenshots(
      Buffer.from(originalBase64, "base64"),
      generatedScreenshot
    );
    const aiResult = await aiCompare(originalBase64, generatedBase64);

    const pixelScore = pixelResult.similarityScore;
    const aiScore = aiResult.score;
    const finalScore = (pixelScore + aiScore) / 2;

    if (finalScore > bestScore) {
      bestScore = finalScore;
      bestCode = currentCode;
      bestPixelScore = pixelScore;
      bestAiScore = aiScore;
      bestDiffImage = pixelResult.diffImage;
    }

    if (finalScore >= TARGET_SCORE) {
      return {
        code: bestCode,
        score: bestScore,
        iterations: i + 1,
        pixelScore: bestPixelScore,
        aiScore: bestAiScore,
        diffImageBase64: bestDiffImage ? toBase64(bestDiffImage) : undefined,
      };
    }

    const goodEnough = pixelScore >= PIXEL_GOOD_ENOUGH && aiScore >= AI_GOOD_ENOUGH;
    if (goodEnough) {
      return {
        code: bestCode,
        score: bestScore,
        iterations: i + 1,
        pixelScore: bestPixelScore,
        aiScore: bestAiScore,
        diffImageBase64: bestDiffImage ? toBase64(bestDiffImage) : undefined,
      };
    }

    currentCode = await fixCode(currentCode, originalBase64, generatedBase64, aiResult.issues);
  }

  return {
    code: bestCode,
    score: bestScore,
    iterations: maxIterations,
    pixelScore: bestPixelScore,
    aiScore: bestAiScore,
    diffImageBase64: bestDiffImage ? toBase64(bestDiffImage) : undefined,
  };
}

export interface FullPipelineInput {
  html: string;
  css: string;
  screenshot: string | Buffer;
  elementWidth?: number;
  elementHeight?: number;
  maxIterations?: number;
}

export interface FullPipelineResult extends FixLoopResult {}

/**
 * Full orchestration: generate initial code then run fix loop.
 */
export async function fullPipeline(input: FullPipelineInput): Promise<FullPipelineResult> {
  const { html, css, screenshot, elementWidth, elementHeight, maxIterations } = input;
  return fixLoop(html, css, screenshot, {
    elementWidth,
    elementHeight,
    maxIterations,
  });
}
