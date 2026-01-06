
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen artaka-hero pt-40 pb-24 px-6 overflow-hidden flex items-center">
      <div className="container mx-auto max-w-[1200px] relative z-20">
        
        {/* Main Content Area */}
        <div className="max-w-5xl">
          <h1 className="text-brand-black text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight mb-12">
            Turning your work into evidence people can understand — and act on.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
            <div>
              <p className="text-brand-black text-xl md:text-2xl font-semibold leading-tight opacity-90 max-w-lg">
                We help NGOs turn programme work into decision-ready evidence and communication—through solid M&E, clear digital presence, and high-impact briefs and infographics.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="bg-brand-black text-white px-8 py-3.5 rounded-pill font-bold text-sm flex items-center gap-3 hover:scale-105 transition-transform">
                  Partner With Us
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
              <p className="text-brand-black/60 text-base md:text-lg max-w-sm leading-relaxed font-medium">
                Ensuring donors fund with confidence and stakeholders understand your value fast.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Artaka Shapes */}
        <div className="absolute top-[20%] right-0 -z-10 opacity-10">
           <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
              <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" transform="rotate(15 50 50)" />
              <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.3" transform="rotate(30 50 50)" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
