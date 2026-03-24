/**
 * OpenRouter vision + reasoning via OpenAI-compatible client (captchas / images).
 */

import OpenAI from "openai";
import type { ChatCompletion } from "openai/resources/chat/completions";

export interface CaptchaAnalysisInput {
  /** Public URL or data URL of the image */
  imageUrl: string;
  /** Optional user question (defaults to describing the image) */
  prompt?: string;
}

export type CaptchaAnalysisSuccess = {
  ok: true;
  content: string | null;
  reasoningDetails?: unknown;
};

export type CaptchaAnalysisResult = CaptchaAnalysisSuccess | { ok: false; error: string };

export async function captchaAnalysis(input: CaptchaAnalysisInput): Promise<CaptchaAnalysisResult> {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, error: "OPENROUTER_API_KEY is not configured or is empty." };
  }

  const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey,
    defaultHeaders: {
      "HTTP-Referer": process.env.OPENROUTER_HTTP_REFERER ?? "https://your-site.com",
      "X-Title": process.env.OPENROUTER_X_TITLE ?? "My App",
    },
  });

  try {
    // OpenRouter-only `reasoning` is not on OpenAI SDK typings
    const apiResponse = (await client.chat.completions.create({
      model: "qwen/qwen3.5-397b-a17b",
      stream: false,
      messages: [
        {
          role: "system",
          content: "You are a CAPTCHA solver. Return ONLY the exact text shown in the CAPTCHA image. No explanations, no formatting, no extra words, no spaces. If unreadable, return an empty string."        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: input.imageUrl,
              },
            },
          ],
        },
      ],
      reasoning: { enabled: false },
    } as Parameters<typeof client.chat.completions.create>[0] & {
      reasoning?: { enabled: boolean };
    })) as ChatCompletion;

    const message = apiResponse.choices[0]?.message;
    const content = message?.content ?? null;

    let reasoningDetails: unknown;
    if (message && "reasoning_details" in message) {
      reasoningDetails = (message as { reasoning_details?: unknown }).reasoning_details;
    }

    console.log("captchaAnalysis", content)

    return {
      ok: true,
      content: typeof content === "string" ? content : null,
    };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return { ok: false, error: msg };
  }
}
