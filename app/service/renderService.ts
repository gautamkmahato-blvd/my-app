/**
 * Renders HTML in a headless browser and returns a screenshot.
 * Uses Puppeteer. For serverless (e.g. Vercel), consider an external screenshot API
 * or run this pipeline in a Node environment with Chromium.
 */

import puppeteer from "puppeteer";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;
const WAIT_MS = 2000;

export interface RenderOptions {
  width?: number;
  height?: number;
  waitMs?: number;
}

export async function renderAndScreenshot(
  htmlCode: string,
  options: RenderOptions = {}
): Promise<Buffer> {
  const width = options.width ?? DEFAULT_WIDTH;
  const height = options.height ?? DEFAULT_HEIGHT;
  const waitMs = options.waitMs ?? WAIT_MS;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.setContent(htmlCode, { waitUntil: "networkidle0" });
    await new Promise((resolve) => setTimeout(resolve, waitMs));

    const screenshot = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width, height },
    });

    if (Buffer.isBuffer(screenshot)) return screenshot;
    const u8 = screenshot as Uint8Array;
    return Buffer.from(u8.buffer, u8.byteOffset, u8.byteLength);
  } finally {
    await browser.close();
  }
}
