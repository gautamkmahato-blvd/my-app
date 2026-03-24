/**
 * OpenRouter chat completions (OpenAI-compatible API).
 * Same return schema as kieGeminiChat: { status, result?, message }.
 * No reasoning; streaming supported.
 */

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// Default model (vision-capable for image_url content)
const DEFAULT_MODEL = "qwen/qwen3.5-397b-a17b";

export interface KieChatMessageContentPart {
  type: "text";
  text: string;
}

export interface KieChatImageUrlPart {
  type: "image_url";
  image_url: { url: string };
}

export type KieChatContentPart = KieChatMessageContentPart | KieChatImageUrlPart;

export interface KieChatMessage {
  role: "user" | "assistant" | "system";
  content: string | KieChatContentPart[];
}

export interface KieChatInput {
  messages: KieChatMessage[];
  stream?: boolean;
  include_thoughts?: boolean;
  reasoning_effort?: "low" | "medium" | "high";
  tools?: Array<{ type: "function"; function: { name: string } }>;
}

export type KieChatSuccess = { status: true; result: string; message: string };
export type KieChatFailure = { status: false; message: string };
export type KieChatResult = KieChatSuccess | KieChatFailure;

function mapMessageToOpenRouter(msg: KieChatMessage): { role: string; content: string | Array<{ type: string; text?: string; image_url?: { url: string } }> } {
  const role = msg.role;
  if (typeof msg.content === "string") {
    return { role, content: msg.content };
  }
  const content = msg.content.map((part) => {
    if (part.type === "text") return { type: "text" as const, text: part.text };
    return { type: "image_url" as const, image_url: part.image_url };
  });
  return { role, content };
}

/**
 * Call OpenRouter chat completions. Same interface and return as kieGeminiChat.
 * Reasoning is not used.
 */
export default async function openRouterChat(input: KieChatInput): Promise<KieChatResult> {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    return {
      status: false,
      message: "OPENROUTER_API_KEY is not configured or is empty.",
    };
  }

  const model = process.env.OPENROUTER_MODEL?.trim() || DEFAULT_MODEL;
  const stream = input.stream ?? true;

  try {
    const body = {
      model,
      messages: input.messages.map(mapMessageToOpenRouter),
      stream,
      // no reasoning
      ...(input.tools?.length ? { tools: input.tools } : {}),
    };

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        status: false,
        message: `OpenRouter API error ${response.status}: ${errText || response.statusText}`,
      };
    }

    if (!response.body) {
      return {
        status: false,
        message: "OpenRouter API returned no body.",
      };
    }

    if (!stream) {
      const data = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const text =
        data?.choices?.[0]?.message?.content ?? "";
      return {
        status: true,
        result: typeof text === "string" ? text : "",
        message: "OpenRouter chat completed successfully.",
      };
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("data: ")) {
          const data = trimmed.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data) as {
              choices?: Array<{
                delta?: { content?: string };
                message?: { content?: string };
              }>;
            };
            const choice = parsed?.choices?.[0];
            const content =
              choice?.delta?.content ?? choice?.message?.content ?? "";
            if (typeof content === "string" && content) {
              fullText += content;
            }
          } catch {
            // ignore parse errors for non-JSON lines
          }
        }
      }
    }

    if (buffer.trim().startsWith("data: ")) {
      const data = buffer.trim().slice(6);
      if (data !== "[DONE]") {
        try {
          const parsed = JSON.parse(data) as {
            choices?: Array<{
              delta?: { content?: string };
              message?: { content?: string };
            }>;
          };
          const choice = parsed?.choices?.[0];
          const content =
            choice?.delta?.content ?? choice?.message?.content ?? "";
          if (typeof content === "string" && content) {
            fullText += content;
          }
        } catch {
          // ignore
        }
      }
    }

    return {
      status: true,
      result: fullText,
      message: "OpenRouter chat completed successfully.",
    };
  } catch (err) {
    console.error("Error in openRouterChat:", err);
    return {
      status: false,
      message:
        err instanceof Error ? err.message : "Unknown error in openRouterChat.",
    };
  }
}
