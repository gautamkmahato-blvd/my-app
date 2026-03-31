import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assets",
  description: "View and manage your saved design assets.",
};

export default function AssetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
