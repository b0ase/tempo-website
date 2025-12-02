"use client";

export default function ForArtists() {
  const benefits = [
    {
      title: "100% Revenue",
      description: "Keep all your earnings with no platform fees or middlemen",
      value: "$0",
      subtitle: "Platform fees",
    },
    {
      title: "Instant Payments",
      description: "Receive payments immediately when fans stream or purchase",
      value: "< 1s",
      subtitle: "Settlement time",
    },
    {
      title: "Global Reach",
      description: "Access listeners worldwide without geographical restrictions",
      value: "195+",
      subtitle: "Countries",
    },
    {
      title: "Full Control",
      description: "Set your own prices and manage your catalog independently",
      value: "100%",
      subtitle: "Ownership",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Built for Artists
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Take control of your music career with true ownership and direct fan relationships
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {benefit.value}
              </div>
              <div className="text-sm text-purple-200 mb-4">
                {benefit.subtitle}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-purple-100 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Artist Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">Publishing Tools</h4>
                <p className="text-purple-100 text-sm">Upload songs with artwork, metadata, and custom pricing</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">Analytics Dashboard</h4>
                <p className="text-purple-100 text-sm">Track plays, earnings, and fan engagement in real-time</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">Rights Management</h4>
                <p className="text-purple-100 text-sm">Blockchain-based copyright protection and licensing</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">Fan Engagement</h4>
                <p className="text-purple-100 text-sm">Direct connection with listeners through the platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}