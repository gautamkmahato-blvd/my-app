import { NextResponse } from "next/server";
import geminiAnalysis from "@/app/service/geminiAnalysis";



export async function POST(request: Request) {
  try {
    const { videoUrl, imageUrl, code } = await request.json();

    if (!videoUrl) {
      return NextResponse.json({ status: false, statusText: "videoUrl is required" }, { status: 400 });
    }

    if (!imageUrl || !code) {
      return NextResponse.json({ status: false, statusText: "html and css is required" }, { status: 400 });
    }

    const geminiApiKey = process.env.GEMINI_API_KEY?.trim();
    if (!geminiApiKey) {
      return NextResponse.json(
        { status: false, statusText: "GEMINI_API_KEY is not configured or is empty" },
        { status: 500 }
      );
    }

    const modelResponse = await geminiAnalysis(videoUrl, imageUrl, code);

    if(!modelResponse.status){
      return NextResponse.json({ status: false, statusText: modelResponse.message }, { status: 500 });
    }

    return NextResponse.json({ status: true, analysis: modelResponse, statusText: modelResponse.message }, { status: 200 });
  } catch (error) {
    console.error("Gemini video analysis error:", error);
    return NextResponse.json({ status: false, statusText: "Gemini request failed", details: error }, { status: 500 });
  }
}