import React, { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neon-blue/50 backdrop-blur-sm border-b border-[#FFF700]/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img 
              src="../../public/logo.png" 
              className=" w-40 " 
              alt="ChillSpot Logo"
            />
          </div>

         
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#FFF700] hover:underline transition-colors font-bold ">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-[#FFF700] hover:underline transition-colors font-bold ">Pricing</button>
            <button onClick={() => scrollToSection('events')} className="text-white hover:text-[#FFF700] hover:underline transition-colors font-bold ">Events</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#FFF700] hover:underline transition-colors font-bold">Contact</button>
            <button onClick={() => scrollToSection('newsletter')} className="bg-[#FFF700] text-slate-900 px-6 py-2 rounded-full hover:bg-[#070172] hover:text-[#FFF700] transition-colors font-bold "> Subscribe</button>
          </div>

          
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cyber-darker/95 backdrop-blur-sm border-b border-neon-yellow/20">
            <div className="flex flex-col space-y-4 p-4 titles">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-neon-yellow transition-colors ">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-neon-yellow transition-colors ">Pricing</button>
              <button onClick={() => scrollToSection('events')} className="text-white hover:text-neon-yellow transition-colors ">Events</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-neon-yellow transition-colors ">Contact</button>
              <button onClick={() => scrollToSection('newsletter')} className="bg-neon-yellow text-cyber-black px-6 py-2 rounded-full hover:bg-neon-cyan transition-colors font-bold ">Subscribe</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;