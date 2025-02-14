import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

     
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FFF700] mb-6 titles transition-all duration-500 ease-in-out hover:text-shadow-glow">
          A Dive Into The World Of Gaming
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto ">
          Premium gaming stations, lightning-fast internet, and a vibrant community await you at Chill Spot
        </p>
        <button onClick={() => scrollToSection('pricing')} className="bg-[#FFF700] text-slate-900 px-8 py-3 rounded-full text-lg hover:bg-[#070172] hover:text-[#FFF700] transition-colors ">
          Start Gaming
        </button>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-[#FFF700]" />
      </div>
    </section>
  );
};

export default Hero;