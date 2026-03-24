import { NextResponse } from "next/server";
import { captchaAnalysis } from "@/app/service/captchaAnalysis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const imageUrl = body?.imageUrl;
    const prompt = typeof body?.prompt === "string" ? body.prompt : undefined;

    if (!imageUrl || typeof imageUrl !== "string") {
      return NextResponse.json(
        { success: false, error: "imageUrl is required (string)" },
        { status: 400 }
      );
    }

    const result = await captchaAnalysis({ imageUrl, prompt });

    if (!result.ok) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      content: result.content,
      reasoningDetails: result.reasoningDetails,
    });
  } catch (error) {
    console.error("[captcha-analysis]", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
