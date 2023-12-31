import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeroPattern } from "@/components/HeroPattern";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900`}>
        <Sidebar />

        <div className="lg:ml-80 relative h-screen">
          <Header />
          <HeroPattern />

          <div className="py-24 max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
