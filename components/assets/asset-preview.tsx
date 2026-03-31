"use client";

import type { AssetRow } from "@/app/service/supabase/assets/types";
import {
  isImageLikeAsset,
  isVideoAsset,
  truncateText,
} from "./asset-format";
import { Image as ImageLucide } from "lucide-react";

type Props = {
  asset: AssetRow;
  hex: string | null;
};

export function AssetPreview({ asset, hex }: Props) {
  if (hex) {
    return (
      <div
        className="group relative h-full w-full cursor-pointer overflow-hidden rounded-lg"
        style={{ backgroundColor: hex }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </div>
    );
  }

  if (isVideoAsset(asset) && asset.url) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
        <video
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={asset.url}
          muted
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  if (isImageLikeAsset(asset) && asset.url) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.url}
          alt={asset.title ?? ""}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  if (asset.type?.toLowerCase() === "svg" && asset.content) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-zinc-900 dark:to-zinc-950">
        <div
          className="max-h-full max-w-full [&_svg]:max-h-[100px] [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: asset.content }}
        />
      </div>
    );
  }

  const t = asset.type?.toLowerCase() ?? "";
  if (t === "typography" && asset.content) {
    return (
      <div className="flex h-full w-full min-h-0 flex-col justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-zinc-900 dark:to-zinc-950">
        <p className="mb-2 line-clamp-2 text-[10px] leading-relaxed text-gray-500 dark:text-zinc-400">
          {truncateText(asset.content, 120)}
        </p>
        <p
          className="text-center text-lg font-medium leading-snug tracking-tight text-gray-900 dark:text-zinc-50"
          style={{
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          The quick brown fox
        </p>
      </div>
    );
  }

  if (t === "code" && asset.content) {
    return (
      <div className="relative h-full w-full min-h-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-3">
        <pre className="font-mono text-[10px] leading-relaxed text-gray-300">
          {truncateText(asset.content, 400)}
        </pre>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
      </div>
    );
  }

  if (t === "report" && asset.content) {
    return (
      <div className="flex h-full w-full min-h-0 flex-col rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-3 dark:from-zinc-900 dark:to-zinc-950">
        <pre className="min-h-0 flex-1 overflow-hidden font-mono text-[10px] leading-relaxed text-gray-600 dark:text-zinc-400">
          {truncateText(asset.content, 320)}
        </pre>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full min-h-0 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 px-2 dark:from-zinc-800 dark:to-zinc-900">
      <ImageLucide className="size-8 text-gray-400 dark:text-zinc-600" aria-hidden />
      <span className="max-w-[90%] text-center font-mono text-[10px] text-gray-500 dark:text-zinc-500">
        {truncateText(asset.content ?? asset.url ?? "—", 100)}
      </span>
    </div>
  );
}
