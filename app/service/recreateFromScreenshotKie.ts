/**
 * Recreate a UI component from screenshot URL + HTML/CSS (from DevTools).
 * Same behavior as recreateFromScreenshot but uses Kie API to access Gemini.
 * Returns a single Next.js + Tailwind page component targeting 99% visual accuracy.
 */

import openRouterChat from "@/app/service/openRouterChat";
import { RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT } from "@/lib/prompts/recreate_from_screenshot_prompt";
import fs from "fs";
import path from "path";

export interface RecreateFromScreenshotKieInput {
  html: string;
  css: string;
  screenshotUrl: string;
}

export interface RecreateFromScreenshotqwenResult {
  code: string;
}

/**
 * Recreates the component from screenshot URL and DevTools HTML/CSS using Kie API.
 * Same logic and return schema as recreateFromScreenshot.
 */
export default async function recreateFromScreenshotKie(
  input: RecreateFromScreenshotKieInput
) {
  try {
    console.log("[recreateFromScreenshotKie] Starting code generation...");
    console.log("Recreate from screenshot (Kie API): downloading image reference...");

    const { html, css, screenshotUrl } = input;

    const userPrompt = `Recreate this component with 99% visual accuracy.

      The HTML and CSS below were copied from browser DevTools (Inspect Element). 
      Use them as the source of truth for structure and styles. 
      Match the screenshot as closely as possible.

      **HTML (from DevTools):**
      \`\`\`html
      ${html}
      \`\`\`

      **CSS (from DevTools):**
      \`\`\`css
      ${css}
      \`\`\`

      Return only the React/TSX code for a single Next.js page 
      component using Tailwind CSS. No markdown fences, no explanation.

    `;

    // Validate screenshot URL is reachable (same as original flow)
    const response = await fetch(screenshotUrl);
    if (!response.ok) {
      throw new Error("Failed to download image from URL");
    }

    console.log("Calling OpenRouter Qwen for analysis...");

    const qwenResult = await openRouterChat({
      messages: [
        {
          role: "system",
          content: RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: [
            { type: "text", text: userPrompt },
            {
              type: "image_url",
              image_url: { url: screenshotUrl },
            },
          ],
        },
      ],
      stream: true,
      include_thoughts: true,
      reasoning_effort: "high",
      tools: [{ type: "function", function: { name: "googleSearch" } }],
    });

    if (!qwenResult.status) {
      return {
        status: false,
        message: qwenResult.message,
      };
    }

    const responseText = qwenResult.result;
    console.log("responseText completed (Kie):", responseText);

    // Save AI response to project root / ai response / for debugging (same as recreateFromScreenshot)
    try {
      const dir = path.join(process.cwd(), "ai response");
      fs.mkdirSync(dir, { recursive: true });
      const filename = `recreate-kie-${Date.now()}.txt`;
      const filepath = path.join(dir, filename);
      const content = `=== RAW AI RESPONSE (Kie, full text) ===\n\n${responseText}\n\n`;
      fs.writeFileSync(filepath, content, "utf-8");
      console.log("[recreateFromScreenshotKie] Saved AI response to", filepath);
    } catch (err) {
      console.warn("[recreateFromScreenshotKie] Could not save AI response to file:", err);
    }

    console.log("[recreateFromScreenshotKie] Code generation complete, result length:", responseText?.length ?? 0);
    return {
      status: true,
      result: responseText,
      message: "Successfully recreated the component with Kie Gemini.",
    };
  } catch (err) {
    console.error("Error in recreateFromScreenshotKie:", err);

    return {
      status: false,
      message:
        err instanceof Error
          ? err.message
          : "An unknown error occurred.",
    };
  }
}
