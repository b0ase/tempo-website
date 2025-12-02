import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
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
  title: "Tempo - Decentralized Music Streaming on Bitcoin SV",
  description: "Empower artists with direct monetization, protect content with blockchain verification, and experience music streaming reimagined for the decentralized era.",
  keywords: "Tempo, BSV, Bitcoin SV, blockchain, music streaming, decentralized, P2P, artists, music platform",
  openGraph: {
    title: "Tempo - Decentralized Music Streaming",
    description: "Revolutionary music platform built on Bitcoin SV blockchain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
