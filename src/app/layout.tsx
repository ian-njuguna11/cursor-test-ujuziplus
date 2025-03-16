import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UjuziPlus Dashboard",
  description: "Admin dashboard for UjuziPlus learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen bg-[#f8fafc] p-4">
          <div className="flex flex-1 gap-6">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-white/50 backdrop-blur-xl rounded-3xl border border-white/20">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
