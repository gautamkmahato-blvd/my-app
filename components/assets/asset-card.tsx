"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import {
  formatAssetDate,
  formatAssetTypeLabel,
  formatDomainFilterLabel,
  getHostnameFromSourceUrl,
  isColorAsset,
  parseHexFromContent,
  truncateText,
} from "./asset-format";
import {
  categoryBadgeReferenceClass,
  getCategoryBadgeDisplay,
} from "./asset-category";
import { AssetTypePill } from "./asset-type-pill";
import { AssetPreview } from "./asset-preview";
import { Copy, ExternalLink, Globe } from "lucide-react";

/** Preview height aligned with reference (`h-32`). */
const PREVIEW_BOX = "h-32 shrink-0";

type Props = {
  asset: AssetRow;
  variant?: "grid" | "list";
  /** Stagger index for grid entrance animation. */
  index?: number;
};

export function AssetCard({ asset, variant = "grid", index = 0 }: Props) {
  const [copied, setCopied] = useState(false);
  const title = asset.title?.trim() || formatAssetTypeLabel(asset.type);
  const hex = isColorAsset(asset) ? parseHexFromContent(asset.content) : null;
  const categoryBadge = getCategoryBadgeDisplay(asset.category);
  const host = getHostnameFromSourceUrl(asset.source_url);
  const domainLabel = host ? formatDomainFilterLabel(host) : null;

  const t = asset.type?.toLowerCase() ?? "";
  const hasDedicatedPreview =
    !!hex ||
    ["image", "video", "svg", "icon", "background", "typography", "code", "report"].includes(
      t
    );
  const hasTextBody = Boolean(asset.content && !hasDedicatedPreview);

  const copyPayload = (): string => {
    if (hex) return hex;
    if (t === "code" && asset.content) return asset.content;
    if (t === "report" && asset.content) return asset.content;
    return asset.url?.trim() || asset.content?.trim() || "";
  };

  const copyContent = async () => {
    const text = copyPayload();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const openSource = () => {
    if (asset.source_url) window.open(asset.source_url, "_blank", "noopener,noreferrer");
  };

  if (variant === "list") {
    return (
      <article className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <AssetPreview asset={asset} hex={hex} />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <AssetTypePill type={asset.type} />
            <button
              type="button"
              onClick={() => void copyContent()}
              className="inline-flex h-6 items-center gap-1 rounded-md border border-gray-200 bg-white px-2 text-[11px] font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-blue-600 dark:hover:bg-blue-950/40"
            >
              <Copy className="size-3" aria-hidden />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <h3 className="truncate text-sm font-medium text-gray-900 dark:text-zinc-50">
            {title}
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-gray-500 dark:text-zinc-400">
              {formatAssetDate(asset.created_at)}
            </span>
            <span className={categoryBadgeReferenceClass}>{categoryBadge}</span>
          </div>
          {domainLabel && asset.source_url ? (
            <button
              type="button"
              onClick={openSource}
              className="group/link mt-1 flex max-w-full items-center gap-2 self-start rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 text-left transition-all duration-200 hover:from-blue-100 hover:to-indigo-100 dark:border-blue-900 dark:from-blue-950/50 dark:to-indigo-950/50 dark:hover:from-blue-900/60 dark:hover:to-indigo-900/60"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white shadow-sm dark:bg-zinc-900">
                <Globe className="size-3.5 text-blue-600 dark:text-blue-400" aria-hidden />
              </div>
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-blue-700 dark:text-blue-300">
                {domainLabel}
              </span>
              <ExternalLink className="size-3 shrink-0 text-blue-600 opacity-0 transition-opacity group-hover/link:opacity-100 dark:text-blue-400" />
            </button>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <motion.article
      role="article"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative flex h-full min-h-[420px] w-full max-w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
          <AssetTypePill type={asset.type} />
          <button
            type="button"
            onClick={() => void copyContent()}
            className="inline-flex h-6 items-center gap-1 rounded-md border border-gray-200 bg-white px-2 text-[11px] font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-blue-600 dark:hover:bg-blue-950/40"
          >
            <Copy className="size-3" aria-hidden />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div
          className={`${PREVIEW_BOX} w-full overflow-hidden rounded-lg ring-1 ring-gray-200/80 dark:ring-zinc-700/80`}
        >
          <AssetPreview asset={asset} hex={hex} />
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col">
          <h3 className="mb-1 truncate text-sm font-medium text-gray-900 dark:text-zinc-50">
            {title}
          </h3>
          <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
            <p className="text-xs text-gray-500 dark:text-zinc-400">
              {formatAssetDate(asset.created_at)}
            </p>
            <span className={categoryBadgeReferenceClass}>{categoryBadge}</span>
          </div>

          {hasTextBody ? (
            <div className="mb-3 max-h-14 min-h-0 shrink overflow-hidden rounded-lg bg-gray-50 p-2 dark:bg-zinc-900">
              <pre className="font-mono text-[10px] leading-relaxed text-gray-700 dark:text-zinc-300">
                {truncateText(asset.content ?? "", 120)}
              </pre>
            </div>
          ) : null}

          {domainLabel && asset.source_url ? (
            <button
              type="button"
              onClick={openSource}
              className="group/link mt-auto flex w-full shrink-0 items-center gap-2 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 text-left transition-all duration-200 hover:from-blue-100 hover:to-indigo-100 dark:border-blue-900 dark:from-blue-950/50 dark:to-indigo-950/50 dark:hover:from-blue-900/60 dark:hover:to-indigo-900/60"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white shadow-sm dark:bg-zinc-900">
                <Globe className="size-3.5 text-blue-600 dark:text-blue-400" aria-hidden />
              </div>
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-blue-700 dark:text-blue-300">
                {domainLabel}
              </span>
              <ExternalLink className="size-3 shrink-0 text-blue-600 opacity-0 transition-opacity group-hover/link:opacity-100 dark:text-blue-400" />
            </button>
          ) : (
            <div className="mt-auto min-h-0 flex-1 shrink-0" aria-hidden />
          )}
        </div>
      </div>
    </motion.article>
  );
}
