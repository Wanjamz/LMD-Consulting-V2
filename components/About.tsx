
import React from 'react';
import { ArrowUpRight, Target, Lightbulb, Shield, Recycle } from 'lucide-react';

const About: React.FC = () => {
  const approaches = [
    { title: "Participation", desc: "Collaborating with teams from start to finish.", icon: <Target size={20} /> },
    { title: "Learning", desc: "Focus on improvement, not just compliance.", icon: <Lightbulb size={20} /> },
    { title: "Context-Fit", desc: "Working in complex, low-resource environments.", icon: <Shield size={20} /> },
    { title: "Sustainability", desc: "Strengthening systems for independent continuity.", icon: <Recycle size={20} /> }
  ];

  return (
    <section id="about" className="py-24 md:py-30 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
              <span className="text-[12px] font-bold text-brand-black/40 uppercase tracking-[0.2em]">About LMD Consulting Group Ltd</span>
            </div>
            <h2 className="text-brand-black text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
              Measuring progress, showing results clearly.
            </h2>
            <p className="text-brand-black/70 text-lg md:text-xl font-medium leading-relaxed mb-6">
              LMD Consulting Group Ltd is a Kenya-based consultancy supporting NGOs and donor-funded programmes across Kenya and the Horn of Africa with Monitoring & Evaluation (M&E), Strategic Communications, and practical systems strengthening.
            </p>
            <p className="text-brand-black/60 text-lg leading-relaxed font-medium">
              We help organisations move from "struggling to keep up" to clear processes and dependable outputs using a mix of proven M&E methods and responsible AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {approaches.map((item, idx) => (
              <div key={idx} className="p-8 rounded-card bg-surface-muted/50 border border-black/5 hover:bg-white hover:shadow-2xl transition-all">
                <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center text-brand-cyan mb-4">
                  {item.icon}
                </div>
                <h4 className="text-brand-black font-bold mb-2">{item.title}</h4>
                <p className="text-brand-black/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Help Summary Grid */}
        <div className="p-12 md:p-16 rounded-[48px] sharya-section border border-black/5">
           <h3 className="text-3xl font-extrabold text-brand-black mb-12 text-center">What We Help Organisations Do</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <HelpCard title="Track Results" desc="Measure what was done, what changed, and what it means." />
              <HelpCard title="Improve Learning" desc="So programmes get better, not just reported." />
              <HelpCard title="Clear Reporting" desc="Turn data into messages for donors and leadership." />
              <HelpCard title="Systematise" desc="Organise workflows so information is never lost." />
           </div>
        </div>
      </div>
    </section>
  );
};

const HelpCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex flex-col gap-3">
    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
    <h5 className="font-bold text-brand-black">{title}</h5>
    <p className="text-sm text-brand-black/60 leading-relaxed">{desc}</p>
  </div>
);

export default About;
