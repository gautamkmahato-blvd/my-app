"use client";

import { useMemo, useState } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useAssets } from "./use-assets";
import {
  AssetToolbar,
  type AssetTypeFilter,
  type SourceDomainFilter,
} from "./asset-toolbar";
import {
  formatDomainFilterLabel,
  getHostnameFromSourceUrl,
} from "./asset-format";
import { AssetGrid, type AssetViewMode } from "./asset-grid";
import { ChevronLeft, Loader2 } from "lucide-react";

function useFilteredAssets() {
  const { assets, loading, error, refetch } = useAssets();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<AssetTypeFilter>("all");
  const [sourceDomainFilter, setSourceDomainFilter] =
    useState<SourceDomainFilter>("all");

  const typeOptions = useMemo(() => {
    const set = new Set<string>();
    for (const a of assets) {
      if (a.type) set.add(a.type.toLowerCase());
    }
    return Array.from(set).sort();
  }, [assets]);

  const { sourceDomainOptions, noSourceCount } = useMemo(() => {
    const byHost = new Map<string, string>();
    let noSource = 0;
    for (const a of assets) {
      const host = getHostnameFromSourceUrl(a.source_url);
      if (!host) {
        noSource++;
        continue;
      }
      if (!byHost.has(host)) {
        byHost.set(host, formatDomainFilterLabel(host));
      }
    }
    const options = Array.from(byHost.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([value, label]) => ({ value, label }));
    return { sourceDomainOptions: options, noSourceCount: noSource };
  }, [assets]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return assets.filter((a) => {
      if (typeFilter !== "all" && a.type?.toLowerCase() !== typeFilter) {
        return false;
      }
      if (sourceDomainFilter !== "all") {
        const host = getHostnameFromSourceUrl(a.source_url);
        if (sourceDomainFilter === "__no_source__") {
          if (host) return false;
        } else if (host !== sourceDomainFilter) {
          return false;
        }
      }
      if (!q) return true;
      const title = (a.title ?? "").toLowerCase();
      const content = (a.content ?? "").toLowerCase();
      const url = (a.url ?? "").toLowerCase();
      return title.includes(q) || content.includes(q) || url.includes(q);
    });
  }, [assets, search, typeFilter, sourceDomainFilter]);

  return {
    assets,
    loading,
    error,
    refetch,
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    typeOptions,
    sourceDomainFilter,
    setSourceDomainFilter,
    sourceDomainOptions,
    noSourceCount,
    filtered,
  };
}

/** Fetches and filters assets — mount only when the user is signed in (avoids 401 from /api/assets/list). */
function AssetsSignedInView() {
  const [viewMode, setViewMode] = useState<AssetViewMode>("grid");
  const {
    assets,
    loading,
    error,
    refetch,
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    typeOptions,
    sourceDomainFilter,
    setSourceDomainFilter,
    sourceDomainOptions,
    noSourceCount,
    filtered,
  } = useFilteredAssets();

  return (
    <>
      <div className="mb-6 sm:mb-8">
        <AssetToolbar
          search={search}
          onSearchChange={setSearch}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          typeOptions={typeOptions}
          sourceDomainFilter={sourceDomainFilter}
          onSourceDomainFilterChange={setSourceDomainFilter}
          sourceDomainOptions={sourceDomainOptions}
          noSourceCount={noSourceCount}
          totalCount={assets.length}
          filteredCount={filtered.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          loading={loading}
          onRefresh={() => void refetch()}
        />
      </div>

      {error ? (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/50 dark:text-red-200"
        >
          {error}
        </div>
      ) : null}

      {loading && assets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-zinc-500">
          <Loader2 className="size-10 animate-spin" aria-hidden />
          <p className="mt-3 text-sm">Loading assets…</p>
        </div>
      ) : (
        <AssetGrid assets={filtered} viewMode={viewMode} />
      )}
    </>
  );
}

export function AssetsPage() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-zinc-950">
      <header className="border-b border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-3 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-6 sm:py-5">
          <div className="flex min-w-0 flex-1 items-start gap-2 sm:gap-3">
            <Link
              href="/"
              className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
              aria-label="Back"
            >
              <ChevronLeft className="size-6" strokeWidth={2} aria-hidden />
            </Link>
            <div className="min-w-0 pr-1">
              <h1 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
                Assets
              </h1>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                Your saved colors, media, code, and reports from the extension.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-end gap-3 sm:pt-1">
            {!isLoaded ? (
              <span className="h-9 w-20 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            ) : isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                >
                  Sign in
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8">
        {!isLoaded ? (
          <div className="flex flex-col items-center justify-center py-24 text-zinc-500">
            <Loader2 className="size-10 animate-spin" aria-hidden />
            <p className="mt-3 text-sm">Loading…</p>
          </div>
        ) : !isSignedIn ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center sm:p-10 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-600 dark:text-zinc-300">
              Sign in to view assets saved to your account.
            </p>
            <SignInButton mode="modal">
              <button
                type="button"
                className="mt-4 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Sign in
              </button>
            </SignInButton>
          </div>
        ) : (
          <AssetsSignedInView />
        )}
      </main>
    </div>
  );
}
