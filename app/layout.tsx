import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Applyswift - Automated Job Search for Nigerians",
  description: "Automatically search, match, and apply to jobs in Nigeria with AI-powered CVs and cover letters",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* <DarkModeToggle /> */}
        {children}
      </body>
    </html>
  );
}
