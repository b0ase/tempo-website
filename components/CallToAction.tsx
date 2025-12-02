"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Experience the Future of Music?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Join the decentralized music revolution. Support artists directly, enjoy true ownership, 
          and be part of the blockchain-powered music ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="https://github.com/p2ppsr/tempo"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-900 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source Code
          </Link>
          <a
            href="https://metanet.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200"
          >
            Download MetaNet Client
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            Get Started as a Developer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-3">
                Clone the Repository
              </h4>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  git clone https://github.com/p2ppsr/tempo.git
                </code>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-3">
                Install Dependencies
              </h4>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  npm install && npm run lars:config
                </code>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-3">
                Start Development
              </h4>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  npm run start
                </code>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-3">
                Deploy to Production
              </h4>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  npm run deploy
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-purple-200">
          <p className="mb-2">Built with BSV blockchain technology</p>
          <p className="text-sm">Licensed under Open BSV License version 4</p>
        </div>
      </div>
    </section>
  );
}