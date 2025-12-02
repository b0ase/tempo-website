"use client";

export default function Features() {
  const features = [
    {
      title: "Direct Artist Monetization",
      description: "Artists receive 100% of their earnings with no intermediaries. Smart contracts ensure automatic royalty distribution.",
      icon: "💰",
    },
    {
      title: "Blockchain Verification",
      description: "Every song is cryptographically verified on the Bitcoin SV blockchain, preventing piracy and ensuring authenticity.",
      icon: "🔐",
    },
    {
      title: "Decentralized Storage",
      description: "Music files are stored using UHRP (Universal Hash Resource Protocol) for permanent, distributed access.",
      icon: "🌐",
    },
    {
      title: "Micropayments",
      description: "Pay per stream or purchase songs with BSV micropayments, enabling fair compensation for artists.",
      icon: "⚡",
    },
    {
      title: "Artist Control",
      description: "Complete ownership and control over content, pricing, and distribution without platform restrictions.",
      icon: "🎛️",
    },
    {
      title: "Modern Experience",
      description: "Intuitive interface with playlists, social sharing, and high-quality audio streaming.",
      icon: "🎵",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tempo combines cutting-edge blockchain technology with a seamless music streaming experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}