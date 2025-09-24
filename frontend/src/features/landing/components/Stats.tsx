import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "500+",
      label: "Small Businesses",
      description: "trust ClearLedger",
    },
    { value: "99.9%", label: "Uptime", description: "guaranteed reliability" },
    { value: "40%", label: "Time Saved", description: "on inventory tasks" },
    { value: "24/7", label: "Support", description: "when you need it" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
