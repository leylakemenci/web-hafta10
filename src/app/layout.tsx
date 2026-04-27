import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kişisel Portfolyo | Yazılım Geliştirici",
  description: "Senior seviye hazır kişisel portfolyo. Projeler, deneyimler ve yetenekler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-gray-950 text-gray-100`}
    >
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black -z-10" />
        {children}
      </body>
    </html>
  );
}
