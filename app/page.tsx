"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Architecture from "@/components/Architecture";
import ForArtists from "@/components/ForArtists";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <ForArtists />
      <Architecture />
      <CallToAction />
    </main>
  );
}
