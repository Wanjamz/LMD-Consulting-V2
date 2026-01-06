
import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div 
        className={`
          flex items-center justify-between w-full max-w-[1200px] h-[64px] px-8 rounded-pill 
          transition-all duration-300
          ${scrolled 
            ? 'glass-nav shadow-lg shadow-black/5' 
            : 'bg-transparent'
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-brand-black font-extrabold text-2xl tracking-tighter">LMD<span className="text-brand-cyan">.</span></span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-brand-black/70 font-semibold text-sm">
          <a href="#home" className="text-brand-black hover:opacity-100 opacity-100 transition-opacity">Home</a>
          <a href="#about" className="hover:text-brand-black transition-colors">About</a>
          <a href="#services" className="hover:text-brand-black transition-colors">Services</a>
          <a href="#ai-for-ngos" className="hover:text-brand-black transition-colors">AI for NGOs</a>
          <a href="#experience" className="hover:text-brand-black transition-colors">Experience</a>
        </div>

        {/* CTA */}
        <button className="hidden sm:flex items-center px-6 py-2.5 rounded-pill border border-brand-black text-brand-black font-semibold text-sm hover:bg-brand-black hover:text-white transition-all">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
