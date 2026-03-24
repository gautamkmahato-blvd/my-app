import { ThinkingLevel } from '@google/genai';
import ai from '../config/gemini';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { VIDEO_ANIMATION_RECONSTRUCTION_PROMPT } from '@/lib/prompts/video_generation_prompt';

export default async function geminiAnalysis(
  videoUrl: string,
  imageUrl: string,
  code: string
) {
  let tempVideoPath = '';
  let tempImagePath = '';

  try {
    /* ================================
       1️⃣ Download Video
    ================================= */
    console.log("Downloading video...");
    const videoResponse = await fetch(videoUrl);
    const videoBuffer = await videoResponse.arrayBuffer();

    tempVideoPath = path.join(os.tmpdir(), `temp_video_${Date.now()}.mp4`);
    fs.writeFileSync(tempVideoPath, Buffer.from(videoBuffer));

    /* ================================
       2️⃣ Download Image
    ================================= */
    console.log("Downloading image...");
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();

    tempImagePath = path.join(os.tmpdir(), `temp_image_${Date.now()}.png`);
    fs.writeFileSync(tempImagePath, Buffer.from(imageBuffer));

    /* ================================
       3️⃣ Upload Video to Gemini
    ================================= */
    console.log("Uploading video to Gemini...");
    const uploadedVideo = await ai.files.upload({
      file: tempVideoPath,
      config: { mimeType: 'video/mp4' },
    });

    /* ================================
       4️⃣ Upload Image to Gemini
    ================================= */
    console.log("Uploading image to Gemini...");
    const uploadedImage = await ai.files.upload({
      file: tempImagePath,
      config: { mimeType: 'image/png' },
    });

    /* ================================
       5️⃣ Wait for Video Processing
    ================================= */
    console.log("Waiting for Gemini to process video...");
    let fileState = await ai.files.get({ name: uploadedVideo.name as string });

    while (fileState.state === 'PROCESSING') {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      fileState = await ai.files.get({ name: uploadedVideo.name as string });
    }

    if (fileState.state === 'FAILED') {
      return {
        status: false,
        message: "Gemini failed to process the video.",
      };
    }

    /* ================================
       6️⃣ Send All Inputs to Model
    ================================= */
    console.log("Starting multimodal analysis...");

    const config = {
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
      systemInstruction: [{ text: VIDEO_ANIMATION_RECONSTRUCTION_PROMPT }],
    };

    const model = 'gemini-3-flash-preview';

    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `
The attached video shows the full animation.
The attached image represents the first static frame.
The following React + Tailwind component matches the first frame exactly.

Reconstruct the animation behavior and update the component accordingly.

Here is the component code:

\`\`\`tsx
${code}
\`\`\`
`,
          },
          {
            fileData: {
              fileUri: uploadedVideo.uri,
              mimeType: uploadedVideo.mimeType,
            },
          },
          {
            fileData: {
              fileUri: uploadedImage.uri,
              mimeType: uploadedImage.mimeType,
            },
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
      responseText += chunk.text;
    }

    console.log("Analysis complete.");

    return {
      status: true,
      result: responseText,
      message: "Successfully analyzed video + image + code.",
    };

  } catch (err) {
    console.error("Error in geminiAnalysis:", err);
    return {
      status: false,
      message: err instanceof Error ? err.message : "Unknown error occurred.",
    };
  } finally {
    // Cleanup temp files
    if (tempVideoPath && fs.existsSync(tempVideoPath)) {
      fs.unlinkSync(tempVideoPath);
    }
    if (tempImagePath && fs.existsSync(tempImagePath)) {
      fs.unlinkSync(tempImagePath);
    }
  }
}