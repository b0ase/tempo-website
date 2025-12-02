"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white border-b-2 border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-black">
                Tempo
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-black hover:text-gray-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-black hover:text-gray-600 transition-colors">
              How It Works
            </Link>
            <Link href="#for-artists" className="text-black hover:text-gray-600 transition-colors">
              For Artists
            </Link>
            <Link href="#architecture" className="text-black hover:text-gray-600 transition-colors">
              Architecture
            </Link>
            <Link
              href="https://github.com/p2ppsr/tempo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              GitHub
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#features"
              className="block px-3 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block px-3 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#for-artists"
              className="block px-3 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              For Artists
            </Link>
            <Link
              href="#architecture"
              className="block px-3 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Architecture
            </Link>
            <Link
              href="https://github.com/p2ppsr/tempo"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-black hover:bg-gray-100"
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}