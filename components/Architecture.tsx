"use client";

export default function Architecture() {
  const components = [
    {
      name: "Frontend",
      tech: "React + TypeScript + Vite",
      description: "Modern web application with Material-UI components and Framer Motion animations",
      features: [
        "Music streaming player",
        "Artist dashboards",
        "Playlist management",
        "Social sharing",
      ],
    },
    {
      name: "Backend",
      tech: "Express + MongoDB",
      description: "API server handling TSP (Tempo Song Protocol) transactions and metadata",
      features: [
        "TSP Topic Manager",
        "Lookup Service",
        "Storage Service",
        "Overlay Network integration",
      ],
    },
    {
      name: "Key Server",
      tech: "Express + BSV SDK",
      description: "Manages song encryption keys and payment processing",
      features: [
        "Key distribution",
        "Payment verification",
        "Identity management",
        "Access control",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Architecture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with modern technologies and BSV blockchain integration
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {component.name}
                </h3>
                <p className="text-purple-100 text-sm">{component.tech}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {component.description}
                </p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Deployment Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-3">🖥️</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                LARS
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Local development with hot reload and debugging
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                CARS
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Cloud deployment on BSV infrastructure
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-3">🐳</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Docker
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Containerized setup with MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}