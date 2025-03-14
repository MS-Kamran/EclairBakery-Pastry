import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundPattern from "@/components/BackgroundPattern";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Éclair Bakery & Pastry",
  description: "Discover the finest pastries and cakes at Éclair Bakery",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BackgroundPattern />
        <main className="min-h-screen bg-neutral-50/50">
          {children}
        </main>
      </body>
    </html>
  );
}
