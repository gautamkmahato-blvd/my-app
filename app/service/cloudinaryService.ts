import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from "cloudinary";


// Initialize config once in the service file
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME?.trim();
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY?.trim();
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET?.trim();

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

/**
 * Uploads a buffer (video or image) to Cloudinary and returns the secure URL.
 * @param buffer - Raw file buffer (base64-decoded)
 * @param resourceType - "video" or "image". Defaults to "video" for backward compatibility.
 */
export default async function cloudinaryService(
  buffer: Buffer,
  resourceType: "image" | "video" = "video"
): Promise<string> {
  if (!CLOUDINARY_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env"
    );
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error || !result) {
          reject(error || new Error("Cloudinary upload failed with no result"));
        } else {
          resolve(result.secure_url);
        }
      }
    );

    uploadStream.end(buffer);
  });
}