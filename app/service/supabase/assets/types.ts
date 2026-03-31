export type AssetRow = {
  id: string;
  user_id: string;
  type: string;
  category: string | null;
  url: string | null;
  content: string | null;
  title: string | null;
  description: string | null;
  meta: Record<string, unknown> | null;
  source_url: string | null;
  created_at: string;
};

export type InsertAssetInput = {
  user_id: string;
  type: string;
  category?: string | null;
  url?: string | null;
  content?: string | null;
  title?: string | null;
  description?: string | null;
  meta?: Record<string, unknown> | null;
  source_url?: string | null;
};
