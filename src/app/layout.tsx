import type { Metadata } from "next";
import { satoshi } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simplilearn",
  description: "Exclusive leadership round table on AI and digital transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.className} antialiased`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
