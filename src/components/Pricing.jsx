import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Hourly",
      price: "500 DA",
      duration: "per hour",
      features: [
        "Access to gaming PC",
        "High-speed internet",
        "Basic peripherals",
        "Complimentary water"
      ],
      isPopular: false
    },
    {
      name: "Day Pass",
      price: "3500 DA",
      duration: "per day",
      features: [
        "Unlimited gaming access",
        "Premium peripherals",
        "2 energy drinks included",
        "Food discount (15%)",
        "Priority support"
      ],
      isPopular: true
    },
    {
      name: "Monthly",
      price: "20000 DA",
      duration: "per month",
      features: [
        "Unlimited gaming access",
        "Reserved premium station",
        "All peripherals included",
        "Free drinks & snacks",
        "Tournament entry priority",
        "24/7 access"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFF700] mb-12 titles">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
             
              className={`relative bg-cyber-darker rounded-2xl p-8 border ${
                plan.isPopular ? 'border-neon-cyan shadow-lg shadow-neon-cyan' : 'border-neon-cyan'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-cyan text-cyber-black hover:border-neon-yellow transition-all duration-300 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2 ">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-neon-yellow  ">{plan.price}</span>
                  <span className="text-gray-400 ml-2  ">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li className="flex items-center text-gray-300  ">
                    <Check className="h-5 w-5 text-neon-yellow mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

             
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-neon-yellow">
          <p>Student discount: 20% off with valid student ID</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;