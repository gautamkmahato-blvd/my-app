import type { AssetRow } from "@/app/service/supabase/assets/types";

/** Normalized type label for UI (extension + app may use lowercase). */
export function formatAssetTypeLabel(type: string): string {
  const t = String(type || "").trim();
  if (!t) return "Unknown";
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}

export function formatAssetDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/** Short preview line for text-based assets (not full content). */
export function truncateText(text: string, max = 160): string {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + "…";
}

export function isImageLikeAsset(a: AssetRow): boolean {
  const t = a.type?.toLowerCase() ?? "";
  return t === "image" || t === "icon" || t === "background";
}

export function isVideoAsset(a: AssetRow): boolean {
  return a.type?.toLowerCase() === "video";
}

export function isColorAsset(a: AssetRow): boolean {
  return a.type?.toLowerCase() === "color";
}

export function parseHexFromContent(content: string | null): string | null {
  if (!content) return null;
  const m = String(content).trim().match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  return m ? m[0] : null;
}

/** Hostname from `source_url` (http/https only), lowercased — used as filter key. */
export function getHostnameFromSourceUrl(
  url: string | null | undefined
): string | null {
  if (!url || typeof url !== "string") return null;
  const t = url.trim();
  if (!t) return null;
  try {
    const u = new URL(t);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    const h = u.hostname.trim().toLowerCase();
    return h || null;
  } catch {
    return null;
  }
}

/**
 * Short label for filter UI: hostname without leading `www.`
 * (e.g. www.example.com → example.com, app.vercel.app → app.vercel.app).
 */
export function formatDomainFilterLabel(hostname: string): string {
  const h = String(hostname || "").toLowerCase();
  if (h.startsWith("www.")) return h.slice(4);
  return h;
}
