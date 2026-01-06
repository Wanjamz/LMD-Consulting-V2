
import React from 'react';
import { Layers, Users, Globe } from 'lucide-react';

const Team: React.FC = () => {
  const sectors = ["Humanitarian Response", "Livelihoods", "WASH", "Education", "Protection", "Governance", "Capacity Strengthening"];
  const partners = ["UNICEF", "IOM", "READO", "NIRAS Africa", "BRAC", "National NGO Partners"];

  return (
    <section id="experience" className="py-24 md:py-30 px-6 sharya-section">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-brand-black text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
              Experience & Sector Exposure
            </h2>
            <p className="text-brand-black/60 text-lg font-medium leading-relaxed">
              LMD's leadership and associates bring combined experience working with major international agencies and regional partners across the Horn of Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="p-8 bg-white rounded-card shadow-lg border border-black/5">
                <div className="text-brand-cyan mb-4"><Users size={32} /></div>
                <h4 className="font-extrabold text-brand-black text-lg mb-2">Structure</h4>
                <p className="text-xs text-brand-black/50 leading-relaxed font-medium">Managing Consultants lead M&E and Strategic Comms, supported by an experienced associate pool.</p>
             </div>
             <div className="p-8 bg-white rounded-card shadow-lg border border-black/5">
                <div className="text-brand-teal mb-4"><Globe size={32} /></div>
                <h4 className="font-extrabold text-brand-black text-lg mb-2">Regional</h4>
                <p className="text-xs text-brand-black/50 leading-relaxed font-medium">Registered and tax compliant in Kenya, operating throughout the Horn of Africa.</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-6">
              <h4 className="text-xs font-bold text-brand-black/40 uppercase tracking-[0.2em]">Partner Exposure</h4>
              <div className="flex flex-wrap gap-3">
                 {partners.map(p => (
                   <span key={p} className="px-5 py-2 rounded-pill bg-white text-brand-black font-bold text-sm shadow-sm border border-black/5">{p}</span>
                 ))}
              </div>
           </div>
           <div className="space-y-6">
              <h4 className="text-xs font-bold text-brand-black/40 uppercase tracking-[0.2em]">Sectors</h4>
              <div className="flex flex-wrap gap-3">
                 {sectors.map(s => (
                   <span key={s} className="px-5 py-2 rounded-pill bg-brand-black text-white font-bold text-sm shadow-sm">{s}</span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
