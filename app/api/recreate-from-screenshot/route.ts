import { NextResponse } from "next/server";
import recreateFromScreenshotKie from "@/app/service/recreateFromScreenshotKie";
import { EXTENSION_CORS_HEADERS, requirePremiumExtension } from "@/lib/extension-route-helpers";

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function POST(request: Request) {
  try {
    const gate = await requirePremiumExtension(request);
    if (!gate.ok) return gate.response;

    const body = await request.json();
    const { html, css, screenshotUrl } = body;
 
    if (!html || !css) {
      return NextResponse.json(
        { success: false, error: "html and css are required" },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    if (!screenshotUrl || typeof screenshotUrl !== "string") {
      return NextResponse.json(
        { success: false, error: "screenshotUrl is required (string URL)" },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const kieApiKey = process.env.KIE_API_KEY?.trim();
    if (!kieApiKey) {
      return NextResponse.json(
        { success: false, error: "KIE_API_KEY is not configured or is empty" },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }

    console.log("[recreate-from-screenshot] Generating code...");
    const result = await recreateFromScreenshotKie({
      html,
      css,
      screenshotUrl,
    });

    if (!result.status) {
      console.log("[recreate-from-screenshot] Generation failed:", result.message);
      return NextResponse.json(
        { success: false, error: result.message },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const code = result.result ?? "";
    console.log("[recreate-from-screenshot] Generated code successfully, length:", code.length);
    return NextResponse.json(
      {
        success: true,
        code, // ✅ fixed
        message: result.message,
      },
      { headers: EXTENSION_CORS_HEADERS }
    );

  } catch (error) {
    console.error("Recreate from screenshot error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Recreate from screenshot failed",
      },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}