import cloudinaryService from "@/app/service/cloudinaryService";
import { NextResponse } from "next/server";

type ResourceType = "image" | "video";

function parseMediaData(dataUrl: string): { base64: string; resourceType: ResourceType } {
  const trimmed = typeof dataUrl === "string" ? dataUrl.trim() : "";
  if (trimmed.startsWith("data:image/")) {
    const base64 = trimmed.replace(/^data:image\/\w+;base64,/, "");
    return { base64, resourceType: "image" };
  }
  if (trimmed.startsWith("data:video/")) {
    const base64 = trimmed.replace(/^data:video\/\w+;base64,/, "");
    return { base64, resourceType: "video" };
  }
  // Assume video for backward compatibility (raw base64 or other)
  const base64 = trimmed.replace(/^data:\w+\/\w+;base64,/, "");
  return { base64, resourceType: "video" };
}

export async function POST(request: Request) {
  try {
    const { videoData } = await request.json();

    if (!videoData || typeof videoData !== "string") {
      return NextResponse.json({ error: "No video or image data" }, { status: 400 });
    }

    const { base64: base64Data, resourceType } = parseMediaData(videoData);
    if (!base64Data) {
      return NextResponse.json({ error: "Invalid data URL format" }, { status: 400 });
    }

    const cloudName = process.env.CLOUDINARY_NAME?.trim();
    const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY?.trim();
    const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET?.trim();
    if (!cloudName || !cloudinaryApiKey || !cloudinaryApiSecret) {
      return NextResponse.json(
        { error: "Cloudinary is not configured (CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET required)" },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(base64Data, "base64");
    const secureUrl = await cloudinaryService(buffer, resourceType);

    return NextResponse.json({ url: secureUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        error: "Upload failed",
        details: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}