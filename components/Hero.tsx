"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Tempo
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4">
          Decentralized Music Streaming on Bitcoin SV
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Empower artists with direct monetization, protect content with blockchain verification, 
          and experience music streaming reimagined for the decentralized era.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://github.com/p2ppsr/tempo"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200"
          >
            View on GitHub
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-gray-300">Artist Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">BSV</div>
            <div className="text-sm text-gray-300">Blockchain Powered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">P2P</div>
            <div className="text-sm text-gray-300">Decentralized</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}