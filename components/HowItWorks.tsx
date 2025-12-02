"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Install MetaNet Client",
      description: "Download and install the MetaNet desktop client for Windows, macOS, or Linux to access the full Tempo experience.",
    },
    {
      number: "02",
      title: "Create Your Account",
      description: "Set up your BSV wallet and identity through the MetaNet client. Your keys, your control.",
    },
    {
      number: "03",
      title: "Discover Music",
      description: "Browse new releases, explore artist profiles, and discover blockchain-verified music from around the world.",
    },
    {
      number: "04",
      title: "Stream or Purchase",
      description: "Stream songs with micropayments or purchase them permanently. Artists receive instant compensation.",
    },
    {
      number: "05",
      title: "Publish Your Music",
      description: "Artists can upload their music, set pricing, and start earning immediately with no gatekeepers.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started with Tempo in just a few simple steps
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-800"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md ${
                      index % 2 === 0 ? "mr-8 text-right" : "ml-8"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}