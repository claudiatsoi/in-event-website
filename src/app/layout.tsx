import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CASH Annual Dinner 2026",
  description:
    "Official in-event website for CASH Annual Dinner with schedule, prize candidates, lucky draw, photos, and seating plan.",
  keywords: "CASH, annual dinner, event website, prize candidates, lucky draw, seating plan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-body), sans-serif" }}>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
