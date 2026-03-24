/**
 * Recreate a UI component from screenshot URL + HTML/CSS (from DevTools).
 * Returns a single Next.js + Tailwind page component targeting 99% visual accuracy.
 */

import ai from "@/app/config/gemini";
import { RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT } from "@/lib/prompts/recreate_from_screenshot_prompt";
import fs from "fs";
import path from "path";
import os from 'os';
import { ThinkingLevel } from '@google/genai';


export interface RecreateFromScreenshotInput {
  html: string;
  css: string;
  screenshotUrl: string;
}

export interface RecreateFromScreenshotResult {
  code: string;
}

/**
 * Recreates the component from screenshot URL and DevTools HTML/CSS.
 * Returns a single Next.js + Tailwind page component code.
 */

export default async function recreateFromScreenshot(
  input: RecreateFromScreenshotInput
) {
  let tempFilePath = '';

  try {
    console.log("Downloading image from Cloudinary...");

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

    // 1️⃣ Download image from Cloudinary
    const response = await fetch(screenshotUrl);
    if (!response.ok) {
      throw new Error("Failed to download image from URL");
    }

    const buffer = await response.arrayBuffer();

    // Detect mime type from response headers
    const mimeType = response.headers.get("content-type") || "image/png";

    // Create temp file
    const extension =
      mimeType.includes("jpeg") ? "jpg" :
      mimeType.includes("webp") ? "webp" :
      "png";

    tempFilePath = path.join(
      os.tmpdir(),
      `temp_${Date.now()}.${extension}`
    );

    fs.writeFileSync(tempFilePath, Buffer.from(buffer));

    console.log("Uploading image to Gemini...");

    // 2️⃣ Upload image to Gemini File API
    const uploadResult = await ai.files.upload({
      file: tempFilePath,
      config: {
        mimeType,
      },
    });

    console.log("Image uploaded. Starting analysis...");

    // 3️⃣ Prepare model config
    const tools = [{ googleSearch: {} }];

    const config = {
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
      tools,
      systemInstruction: [
        { text: RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT },
      ],
    };

    const model = "gemini-3-flash-preview";

    // 4️⃣ Send image + HTML + CSS to model
    const contents = [
      {
        role: "user",
        parts: [
          {
            fileData: {
              fileUri: uploadResult.uri,
              mimeType: uploadResult.mimeType,
            },
          },
          {
            text: userPrompt,
          },
        ],
      },
    ];

    const stream = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let responseText = "";

    for await (const chunk of stream) {
      if (chunk.text) {
        responseText += chunk.text;
      }
    }

    console.log("responseText completed:", responseText);

      // Save AI response to project root / ai response / for debugging (match UI vs server)
    try {
      const dir = path.join(process.cwd(), "ai response");
      fs.mkdirSync(dir, { recursive: true });
      const filename = `recreate-${Date.now()}.txt`;
      const filepath = path.join(dir, filename);
      const content = `=== RAW AI RESPONSE (full text) ===\n\n${responseText}\n\n`;
      fs.writeFileSync(filepath, content, "utf-8");
      console.log("[recreateFromScreenshot] Saved AI response to", filepath);
    } catch (err) {
      console.warn("[recreateFromScreenshot] Could not save AI response to file:", err);
    }

    return {
      status: true,
      result: responseText,
      message: "Successfully recreated the component with Gemini.",
    };
  } catch (err) {
    console.error("Error in geminiCreation:", err);

    return {
      status: false,
      message:
        err instanceof Error
          ? err.message
          : "An unknown error occurred.",
    };
  } finally {
    // Cleanup temp file
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
    }
  }
}