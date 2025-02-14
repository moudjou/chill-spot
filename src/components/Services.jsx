import React from 'react';
import { Monitor, Wifi, Coffee, Printer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Gaming Stations",
      description: "High-end PCs featuring RTX 4080, 32GB RAM, 240Hz monitors",
      specs: ["Intel i9 13900K", "32GB DDR5", "2TB NVMe SSD", "RTX 4080 16GB"]
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Internet",
      description: "1Gbps fiber connection with low latency for competitive gaming",
      specs: ["1Gbps Up/Down", "<5ms Ping", "No Data Caps", "Dedicated Lines"]
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Refreshments",
      description: "Premium coffee, energy drinks, and snacks to fuel your gaming",
      specs: ["Artisan Coffee", "Energy Drinks", "Fresh Snacks", "Hot Meals"]
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Services",
      description: "Print, scan, and other business services available",
      specs: ["Color Printing", "3D Printing", "Document Scan", "Tech Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold  text-center text-neon-yellow mb-12 titles">
          Premium Gaming Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-cyber-dark rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 border border-neon-cyan/20 hover:border-neon-yellow">
              <div className="text-neon-yellow par mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white par mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.specs.map((spec, i) => (
                  <li key={i} className="text-gray-400 text-sm par flex items-center">
                    <span className="w-2 h-2 bg-neon-pink rounded-full mr-2"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;