"use client";

import type { ReactNode } from "react";
import {
  Code,
  FileCode,
  FileText,
  Image as ImageIcon,
  Palette,
  Type,
  Video,
} from "lucide-react";

export type TypePillConfig = {
  label: string;
  icon: ReactNode;
  className: string;
};

export function getTypePillConfig(type: string | null | undefined): TypePillConfig {
  const t = String(type || "").toLowerCase();
  if (t === "code") {
    return {
      label: "CODE",
      icon: <Code className="size-3.5" aria-hidden />,
      className:
        "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-400",
    };
  }
  if (t === "typography") {
    return {
      label: "TYPOGRAPHY",
      icon: <Type className="size-3.5" aria-hidden />,
      className:
        "border-purple-500/20 bg-purple-500/10 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/15 dark:text-purple-400",
    };
  }
  if (t === "color") {
    return {
      label: "COLOR",
      icon: <Palette className="size-3.5" aria-hidden />,
      className:
        "border-pink-500/20 bg-pink-500/10 text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/15 dark:text-pink-400",
    };
  }
  if (t === "video") {
    return {
      label: "VIDEO",
      icon: <Video className="size-3.5" aria-hidden />,
      className:
        "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:border-cyan-500/30 dark:bg-cyan-500/15 dark:text-cyan-400",
    };
  }
  if (t === "svg") {
    return {
      label: "SVG",
      icon: <FileCode className="size-3.5" aria-hidden />,
      className:
        "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/15 dark:text-orange-400",
    };
  }
  if (t === "report") {
    return {
      label: "REPORT",
      icon: <FileText className="size-3.5" aria-hidden />,
      className:
        "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-400",
    };
  }
  if (t === "image" || t === "icon" || t === "background") {
    return {
      label: "IMAGE",
      icon: <ImageIcon className="size-3.5" aria-hidden />,
      className:
        "border-green-500/20 bg-green-500/10 text-green-600 dark:border-green-500/30 dark:bg-green-500/15 dark:text-green-400",
    };
  }
  return {
    label: String(type || "ASSET").toUpperCase().slice(0, 12),
    icon: <FileText className="size-3.5" aria-hidden />,
    className:
      "border-gray-500/20 bg-gray-500/10 text-gray-600 dark:border-gray-500/30 dark:bg-gray-500/15 dark:text-gray-400",
  };
}

export function AssetTypePill({ type }: { type: string | null | undefined }) {
  const cfg = getTypePillConfig(type);
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-medium text-[10px] uppercase tracking-wide ${cfg.className}`}
    >
      <span className="mr-0.5 shrink-0">{cfg.icon}</span>
      {cfg.label}
    </span>
  );
}
