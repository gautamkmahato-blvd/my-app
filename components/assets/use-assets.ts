"use client";

import { useCallback, useEffect, useState } from "react";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import type { ApiResponse } from "@/types/ApiResponse";

type ListResult = ApiResponse<AssetRow[]>;

export function useAssets() {
  const [assets, setAssets] = useState<AssetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/assets/list", { credentials: "same-origin" });
      const json = (await res.json()) as ListResult;
      if (!res.ok || !json.success) {
        const msg =
          typeof json.message === "string"
            ? json.message
            : typeof json.error === "string"
              ? json.error
              : "Failed to load assets";
        throw new Error(msg);
      }
      const list = json.result;
      setAssets(Array.isArray(list) ? list : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load assets");
      setAssets([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return { assets, loading, error, refetch };
}
