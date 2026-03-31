/**
 * Maps stored `category` slugs (from extension) to high-level UI groups.
 */
export type AssetCategoryGroup =
  | "Design"
  | "Media"
  | "Code"
  | "Reports"
  | "Animations";

export function getCategoryGroupLabel(
  category: string | null | undefined
): AssetCategoryGroup {
  const c = String(category || "").toLowerCase().trim();
  if (!c || c === "design-extract") return "Design";
  if (c.startsWith("design")) return "Design";
  if (c.startsWith("media-")) return "Media";
  if (c.startsWith("code-")) return "Code";
  if (c.startsWith("reports-")) return "Reports";
  if (c.startsWith("animations-")) return "Animations";
  return "Design";
}

export function categoryGroupPillClass(group: AssetCategoryGroup): string {
  switch (group) {
    case "Media":
      return "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200";
    case "Code":
      return "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200";
    case "Reports":
      return "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200";
    case "Animations":
      return "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200";
    case "Design":
    default:
      return "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200";
  }
}

/** Neutral slug-style badge matching the Assets reference (e.g. `design-extract`). */
export function getCategoryBadgeDisplay(
  category: string | null | undefined
): string {
  const c = String(category || "").trim();
  if (!c) return "design-extract";
  return c.toLowerCase().replace(/\s+/g, "-");
}

/** Secondary-style category pill (matches reference Badge variant="secondary"). */
export const categoryBadgeReferenceClass =
  "shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-normal lowercase text-gray-600 dark:bg-zinc-800 dark:text-zinc-400";
