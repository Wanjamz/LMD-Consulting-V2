
import React from 'react';
import { ArrowUpRight, Search, MessageSquare, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-30 px-6 bg-surface-light">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center mb-20">
          <h2 className="text-brand-black text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Core Service Areas
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* M&E */}
          <div className="group p-10 rounded-card bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all">
            <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 transition-transform">
              <Search size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-black mb-6">Monitoring, Evaluation & Research</h3>
            <ul className="space-y-4 mb-8">
              <ServiceItem text="Baseline & Endline Surveys" />
              <ServiceItem text="Outcome & Learning Reviews" />
              <ServiceItem text="Digital Data Collection" />
              <ServiceItem text="Indicator Tracking" />
            </ul>
            <p className="text-sm text-brand-black/50 font-medium">Best suited for donor-funded programmes with strong learning expectations.</p>
          </div>

          {/* Strategic Comms */}
          <div className="group p-10 rounded-card bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all">
            <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-8 group-hover:scale-110 transition-transform">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-black mb-6">Strategic Communications</h3>
            <ul className="space-y-4 mb-8">
              <ServiceItem text="Infographics & Data Viz" />
              <ServiceItem text="Policy Briefs & Success Stories" />
              <ServiceItem text="Donor Reporting Products" />
              <ServiceItem text="Knowledge Products" />
            </ul>
            <p className="text-sm text-brand-black/50 font-medium">Ensuring evidence is clear, credible, and useful for decision-makers.</p>
          </div>

          {/* AI for NGOs */}
          <div id="ai-for-ngos" className="group p-10 rounded-card bg-brand-black text-white shadow-xl hover:scale-[1.02] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 blur-[60px] rounded-full"></div>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-8">
              <Cpu size={28} />
            </div>
            <h3 className="text-2xl font-extrabold mb-2">AI-Enabled Systems</h3>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">Special Initiative</span>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              Helping teams use practical AI-enabled workflows to work faster, reduce friction, and improve documentation quality.
            </p>
            <ul className="space-y-4 mb-8">
              <ServiceItem text="Organised Shared Folders & SOPs" textClass="text-white/80" />
              <ServiceItem text="Faster Report Drafting" textClass="text-white/80" />
              <ServiceItem text="NGO-Specific AI Integration" textClass="text-white/80" />
            </ul>
            <button className="w-full py-3 rounded-pill bg-brand-cyan text-brand-black font-bold text-sm flex items-center justify-center gap-2">
              Upgrade Your NGO <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem: React.FC<{ text: string; textClass?: string }> = ({ text, textClass = "text-brand-black/70" }) => (
  <li className="flex items-center gap-3">
    <div className="w-1 h-1 rounded-full bg-brand-teal"></div>
    <span className={`text-sm font-semibold ${textClass}`}>{text}</span>
  </li>
);

export default Services;
