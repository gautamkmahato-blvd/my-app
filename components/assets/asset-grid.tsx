"use client";

import type { AssetRow } from "@/app/service/supabase/assets/types";
import { AssetCard } from "./asset-card";
import { PackageOpen } from "lucide-react";

export type AssetViewMode = "grid" | "list";

type Props = {
  assets: AssetRow[];
  viewMode?: AssetViewMode;
};

export function AssetGrid({ assets, viewMode = "grid" }: Props) {
  if (assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 py-20 text-center dark:border-zinc-700 dark:bg-zinc-900/30">
        <PackageOpen className="mb-3 size-12 text-zinc-400" aria-hidden />
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          No assets match your filters.
        </p>
        <p className="mt-1 max-w-sm text-xs text-zinc-500">
          Save items from the browser extension to see them here.
        </p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <ul className="flex flex-col gap-3 sm:gap-4">
        {assets.map((asset, index) => (
          <li key={asset.id}>
            <AssetCard asset={asset} variant="list" index={index} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-6">
      {assets.map((asset, index) => (
        <li key={asset.id} className="flex min-h-0 min-w-0">
          <AssetCard asset={asset} variant="grid" index={index} />
        </li>
      ))}
    </ul>
  );
}
