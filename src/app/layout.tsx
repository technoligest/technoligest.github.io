import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const _metadata = {
  title: "Yaser Alkayale",
  description: "I heard it's good to have a personal website. So, I built one.",
};

export const metadata: Metadata = {
  title: _metadata.title,
  description: _metadata.description,
  openGraph: {
    title: _metadata.title,
    description: _metadata.description,
    siteName: _metadata.title,
    images: [
      {
        url: "https://www.yaser.ca/technoligest.github.io/portrait.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-primary")}>{children}</body>
    </html>
  );
}
