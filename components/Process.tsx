
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Start-up & Design',
      description: 'Confirm TOR, outcomes, methodology, and align stakeholders.'
    },
    {
      number: '02',
      title: 'Implementation',
      description: 'Supervised data collection and system setup with quality checks.'
    },
    {
      number: '03',
      title: 'Analysis & Reporting',
      description: 'Deep data analysis followed by draft reports and review cycles.'
    },
    {
      number: '04',
      title: 'Knowledge & Handover',
      description: 'Donor-ready summaries, infographics, and tool handovers.'
    }
  ];

  return (
    <section id="process" className="py-24 md:py-30 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-brand-black text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
              A structured delivery process.
            </h2>
            <p className="text-brand-black/50 text-lg font-medium">How we move from requirements to high-impact outputs.</p>
          </div>
          <div className="text-xs font-bold text-brand-black/40 uppercase tracking-[0.2em] mb-4">
             4 Phases of Quality Assurance
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-10 rounded-[40px] bg-surface-muted/50 border border-black/5 transition-all hover:bg-white hover:shadow-xl">
              <div className="text-brand-cyan font-black text-6xl opacity-10 mb-8 group-hover:opacity-30 transition-opacity">
                {step.number}
              </div>
              <h3 className="text-xl font-extrabold text-brand-black mb-4">{step.title}</h3>
              <p className="text-brand-black/50 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
