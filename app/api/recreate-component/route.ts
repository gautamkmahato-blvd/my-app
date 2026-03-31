import { NextResponse } from "next/server";
import { fullPipeline } from "@/app/service/recreateComponent";
import { EXTENSION_CORS_HEADERS, requirePremiumExtension } from "@/lib/extension-route-helpers";

export const maxDuration = 120;

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function POST(request: Request) {
  try {
    const gate = await requirePremiumExtension(request);
    if (!gate.ok) return gate.response;

    const body = await request.json();
    const {
      html,
      css,
      screenshot,
      elementWidth,
      elementHeight,
      maxIterations,
    } = body;

    if (!html || !css) {
      return NextResponse.json(
        { success: false, error: "html and css are required" },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    if (!screenshot) {
      return NextResponse.json(
        { success: false, error: "screenshot is required (base64 string or buffer)" },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY?.trim();
    if (!geminiApiKey) {
      return NextResponse.json(
        { success: false, error: "GEMINI_API_KEY is not configured or is empty" },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const result = await fullPipeline({
      html,
      css,
      screenshot,
      elementWidth,
      elementHeight,
      maxIterations,
    });

    return NextResponse.json(
      {
        success: true,
        code: result.code,
        score: result.score,
        iterations: result.iterations,
        pixelScore: result.pixelScore,
        aiScore: result.aiScore,
        diffImageBase64: result.diffImageBase64,
      },
      { headers: EXTENSION_CORS_HEADERS }
    );
  } catch (error) {
    console.error("Recreate component error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Recreate pipeline failed",
      },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}
