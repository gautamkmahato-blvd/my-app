/**
 * Kie.ai Gemini 2.5 Pro chat completions with optional image input and tools.
 * Uses the same return schema as other app services: { status, result?, message }.
 */

const KIE_CHAT_URL = "https://api.kie.ai/gemini-2.5-pro/v1/chat/completions";

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

/**
 * Call Kie.ai Gemini 2.5 Pro chat completions. Streams and accumulates response text.
 */
export default async function kieGeminiChat(input: KieChatInput): Promise<KieChatResult> {
  const apiKey = process.env.KIE_API_KEY?.trim();
  if (!apiKey) {
    return {
      status: false,
      message: "KIE_API_KEY is not configured or is empty.",
    };
  }

  try {
    const body = {
      messages: input.messages,
      stream: input.stream ?? true,
      include_thoughts: input.include_thoughts ?? true,
      reasoning_effort: input.reasoning_effort ?? "high",
      ...(input.tools?.length ? { tools: input.tools } : {}),
    };

    const response = await fetch(KIE_CHAT_URL, {
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
        message: `Kie API error ${response.status}: ${errText || response.statusText}`,
      };
    }

    if (!response.body) {
      return {
        status: false,
        message: "Kie API returned no body.",
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

    // process any remaining buffer
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
      message: "Kie Gemini chat completed successfully.",
    };
  } catch (err) {
    console.error("Error in kieGeminiChat:", err);
    return {
      status: false,
      message:
        err instanceof Error ? err.message : "Unknown error in kieGeminiChat.",
    };
  }
}
