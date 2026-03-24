/**
 * Pixel-level screenshot comparison using pixelmatch + pngjs.
 */

import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const PIXEL_THRESHOLD = 0.1;

export interface PixelCompareResult {
  similarityScore: number;
  mismatchedPixels: number;
  totalPixels: number;
  diffImage: Buffer;
}

/** Copy top-left (w x h) region from source PNG into a new PNG. */
function cropPng(source: PNG, w: number, h: number): PNG {
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (source.width * y + x) * 4;
      const dstIdx = (w * y + x) * 4;
      out.data[dstIdx] = source.data[srcIdx];
      out.data[dstIdx + 1] = source.data[srcIdx + 1];
      out.data[dstIdx + 2] = source.data[srcIdx + 2];
      out.data[dstIdx + 3] = source.data[srcIdx + 3];
    }
  }
  return out;
}

export function compareScreenshots(
  original: Buffer,
  generated: Buffer,
  threshold: number = PIXEL_THRESHOLD
): PixelCompareResult {
  const img1 = PNG.sync.read(original);
  const img2 = PNG.sync.read(generated);

  const width = Math.min(img1.width, img2.width);
  const height = Math.min(img1.height, img2.height);

  const a = img1.width === width && img1.height === height ? img1 : cropPng(img1, width, height);
  const b = img2.width === width && img2.height === height ? img2 : cropPng(img2, width, height);

  const diff = new PNG({ width, height });
  const mismatchedPixels = pixelmatch(
    a.data,
    b.data,
    diff.data,
    width,
    height,
    { threshold }
  );

  const totalPixels = width * height;
  const similarityScore = totalPixels > 0
    ? ((totalPixels - mismatchedPixels) / totalPixels) * 100
    : 100;

  return {
    similarityScore,
    mismatchedPixels,
    totalPixels,
    diffImage: PNG.sync.write(diff),
  };
}
