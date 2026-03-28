import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annual Dinner 2026 | Event Website",
  description: "Official event website for the Annual Dinner. Find event schedules, lucky draw prizes, photos, translations, and seating arrangements.",
  keywords: "annual dinner, event, dining, celebration, schedule, seating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2026 Annual Dinner. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              For assistance, please contact us at events@example.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
