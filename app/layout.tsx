import type { Metadata } from "next";
import { DM_Serif_Display, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Almagest Academy",
  description:
    "Learn the foundations of Bitcoin, crypto and frontier technology.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerifDisplay.variable} ${geistMono.variable} h-full antialiased overscroll-none`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
