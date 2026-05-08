import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "14.99",
      features: [
        { text: "Free Setup", enabled: true },
        { text: "Bandwidth Limit 10 GB", enabled: true },
        { text: "20 User Connection", enabled: true },
        { text: "Analytics Report", enabled: false },
        { text: "Public API Access", enabled: false },
        { text: "Plugins Integration", enabled: false },
        { text: "Custom Content Management", enabled: false },
      ],
      isPopular: false,
    },
    {
      name: "Standard",
      price: "49.99",
      features: [
        { text: "Free Setup", enabled: true },
        { text: "Bandwidth Limit 10 GB", enabled: true },
        { text: "20 User Connection", enabled: true },
        { text: "Analytics Report", enabled: true },
        { text: "Public API Access", enabled: true },
        { text: "Plugins Integration", enabled: false },
        { text: "Custom Content Management", enabled: false },
      ],
      isPopular: false,
    },
    {
      name: "Premium",
      price: "89.99",
      features: [
        { text: "Free Setup", enabled: true },
        { text: "Bandwidth Limit 10 GB", enabled: true },
        { text: "20 User Connection", enabled: true },
        { text: "Analytics Report", enabled: true },
        { text: "Public API Access", enabled: true },
        { text: "Plugins Integration", enabled: true },
        { text: "Custom Content Management", enabled: true },
      ],
      isPopular: true, 
    },
  ];

  return (
    <div className="space-y-10 py-6">
      <h2 className="text-start text-3xl font-black text-[#202224]">Pricing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>
    </div>
  );
};

const PricingCard = ({ name, price, features, isPopular }) => {
  return (
    <div className="bg-white rounded-[40px] border border-gray-100 p-10 flex flex-col items-center text-center relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 Q 25 10 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 40 Q 25 30 50 40 T 100 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 60 Q 25 50 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h3 className="text-2xl font-black text-[#202224] mb-2">{name}</h3>
        <p className="text-gray-400 text-sm font-semibold mb-4">Monthly Charge</p>
        
        <div className="text-[#4880FF] text-5xl font-black mb-8">
          ${price}
        </div>

        <hr className="w-full border-gray-100 mb-8" />

        <div className="space-y-6 mb-10 w-full">
          {features.map((feature, i) => (
            <p 
              key={i} 
              className={`text-sm font-semibold ${feature.enabled ? 'text-[#202224]' : 'text-gray-300'}`}
            >
              {feature.text}
            </p>
          ))}
        </div>

        <hr className="w-full border-gray-100 mb-8" />

        <button 
          className={`w-full max-w-[200px] py-4 rounded-full font-bold text-sm transition-all border-2 
            ${isPopular 
              ? 'bg-[#4880FF] border-[#4880FF] text-white shadow-lg shadow-blue-100 hover:bg-[#3b6de0]' 
              : 'bg-white border-[#4880FF] text-[#4880FF] hover:bg-blue-50'}`}
        >
          Get Started
        </button>
        
        <button className="mt-4 text-[#202224] text-xs font-bold underline underline-offset-4 hover:text-[#4880FF] transition-colors">
          Start Your 30 Day Free Trial
        </button>
      </div>
    </div>
  );
};

export default Pricing;