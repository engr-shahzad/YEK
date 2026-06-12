import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayan e Yaran",
};

export default function BayanELayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
