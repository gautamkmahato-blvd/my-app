"use client";

import { ChevronDown, LayoutGrid, List, RefreshCw, Search } from "lucide-react";
import { formatAssetTypeLabel } from "./asset-format";
import type { AssetViewMode } from "./asset-grid";

export type AssetTypeFilter = "all" | string;

/** `__no_source__` = assets with no `source_url`; otherwise stored hostname (lowercase). */
export type SourceDomainFilter = "all" | "__no_source__" | string;

type SourceDomainOption = { value: string; label: string };

const selectShell =
  "h-10 min-w-0 appearance-none rounded-xl border border-zinc-200 bg-white py-0 pl-3 pr-9 text-sm font-medium text-zinc-800 shadow-sm focus:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200/80 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-600 dark:focus:ring-zinc-800";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  typeFilter: AssetTypeFilter;
  onTypeFilterChange: (v: AssetTypeFilter) => void;
  typeOptions: string[];
  sourceDomainFilter: SourceDomainFilter;
  onSourceDomainFilterChange: (v: SourceDomainFilter) => void;
  sourceDomainOptions: SourceDomainOption[];
  noSourceCount: number;
  totalCount: number;
  filteredCount: number;
  viewMode: AssetViewMode;
  onViewModeChange: (v: AssetViewMode) => void;
  loading: boolean;
  onRefresh: () => void;
};

function SelectChevron() {
  return (
    <ChevronDown
      className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
      aria-hidden
    />
  );
}

export function AssetToolbar({
  search,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  typeOptions,
  sourceDomainFilter,
  onSourceDomainFilterChange,
  sourceDomainOptions,
  noSourceCount,
  totalCount,
  filteredCount,
  viewMode,
  onViewModeChange,
  loading,
  onRefresh,
}: Props) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:gap-3">
        <div className="relative min-w-0 flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-zinc-400"
            aria-hidden
          />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search title or content..."
            className="h-10 w-full rounded-xl border border-zinc-200 bg-white py-2 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200/80 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
          />
        </div>

        <div className="flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-2 md:w-auto md:shrink-0">
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-2">
            <div className="relative min-w-0 sm:min-w-[7.5rem]">
              <select
                value={typeFilter}
                onChange={(e) =>
                  onTypeFilterChange(e.target.value as AssetTypeFilter)
                }
                className={`w-full ${selectShell}`}
                aria-label="Filter by type"
              >
                <option value="all">All ({totalCount})</option>
                {typeOptions.map((t) => (
                  <option key={t} value={t}>
                    {formatAssetTypeLabel(t)}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>

            <div className="relative min-w-0 sm:min-w-[7.5rem]">
              <select
                value={sourceDomainFilter}
                onChange={(e) =>
                  onSourceDomainFilterChange(
                    e.target.value as SourceDomainFilter
                  )
                }
                className={`w-full ${selectShell}`}
                aria-label="Filter by source page"
              >
                <option value="all">All pages</option>
                {noSourceCount > 0 ? (
                  <option value="__no_source__">
                    No page ({noSourceCount})
                  </option>
                ) : null}
                {sourceDomainOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>

          <div className="flex w-full min-w-0 items-center justify-end gap-2 sm:w-auto">
            <div
              className="inline-flex h-10 shrink-0 rounded-xl border border-zinc-200 bg-zinc-100/90 p-0.5 dark:border-zinc-700 dark:bg-zinc-900"
              role="group"
              aria-label="View mode"
            >
              <button
                type="button"
                onClick={() => onViewModeChange("grid")}
                className={`inline-flex size-9 items-center justify-center rounded-[10px] transition ${
                  viewMode === "grid"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
                aria-pressed={viewMode === "grid"}
                title="Grid view"
              >
                <LayoutGrid className="size-[18px]" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange("list")}
                className={`inline-flex size-9 items-center justify-center rounded-[10px] transition ${
                  viewMode === "list"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
                aria-pressed={viewMode === "list"}
                title="List view"
              >
                <List className="size-[18px]" aria-hidden />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onRefresh()}
              disabled={loading}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              title="Refresh"
              aria-label="Refresh"
            >
              <RefreshCw
                className={`size-[18px] ${loading ? "animate-spin" : ""}`}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 sm:text-sm">
        Showing{" "}
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          {filteredCount}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          {totalCount}
        </span>{" "}
        assets
      </p>
    </div>
  );
}
