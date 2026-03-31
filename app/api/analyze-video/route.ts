import { NextResponse } from "next/server";
import geminiAnalysis from "@/app/service/geminiAnalysis";
import { EXTENSION_CORS_HEADERS, requirePremiumExtension } from "@/lib/extension-route-helpers";

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function POST(request: Request) {
  try {
    const gate = await requirePremiumExtension(request);
    if (!gate.ok) return gate.response;

    const { videoUrl, imageUrl, code } = await request.json();

    if (!videoUrl) {
      return NextResponse.json(
        { status: false, statusText: "videoUrl is required" },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    if (!imageUrl || !code) {
      return NextResponse.json(
        { status: false, statusText: "html and css is required" },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY?.trim();
    if (!geminiApiKey) {
      return NextResponse.json(
        { status: false, statusText: "GEMINI_API_KEY is not configured or is empty" },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const modelResponse = await geminiAnalysis(videoUrl, imageUrl, code);

    if (!modelResponse.status) {
      return NextResponse.json(
        { status: false, statusText: modelResponse.message },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }

    return NextResponse.json(
      { status: true, analysis: modelResponse, statusText: modelResponse.message },
      { status: 200, headers: EXTENSION_CORS_HEADERS }
    );
  } catch (error) {
    console.error("Gemini video analysis error:", error);
    return NextResponse.json(
      { status: false, statusText: "Gemini request failed", details: error },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}