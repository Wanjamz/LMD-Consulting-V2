
import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const FAQS = [
  {
    q: 'What problems does "AI for NGOs" solve?',
    a: 'We solve repetitive reporting delays, scattered documentation (WhatsApp/emails), weak handover systems, and over-reliance on a few overworked key staff.'
  },
  {
    q: 'How does LMD ensure data protection?',
    a: 'All our solutions are NGO-specific and aligned with strict donor compliance and regional data protection standards, including PSEA principles.'
  },
  {
    q: 'What value do you provide to donors?',
    a: 'We offer clear evidence of results, faster high-quality reporting, and increased confidence in local partners through strengthened internal systems.'
  },
  {
    q: 'Is your AI initiative just technical training?',
    a: 'No. It is an operational upgrade programme for NGO teams focused on workflows, shared documentation, and reporting templates.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-30 px-6 bg-white">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Intro */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-8 leading-[1.05] tracking-tight">
              Value to Donors & Partners.
            </h2>
            <p className="text-brand-black/60 text-lg leading-relaxed mb-10 max-w-md font-medium">
              We move NGOs from struggling to keep up to delivering clear processes and dependable outputs.
            </p>
            <div className="p-8 rounded-[32px] bg-brand-cyan/10 border border-brand-cyan/20">
               <h4 className="font-bold text-brand-black mb-4">Compliance & Risk</h4>
               <p className="text-sm text-brand-black/60 font-medium leading-relaxed">
                 LMD Consulting Group Ltd is registered and tax compliant in Kenya, committed to safeguarding and safeguarding principles.
               </p>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className={`
                  rounded-card border transition-all duration-300
                  ${openIndex === idx 
                    ? 'bg-surface-light border-black/10 shadow-lg shadow-black/5' 
                    : 'bg-transparent border-black/5 hover:border-black/10'
                  }
                `}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-extrabold text-brand-black leading-tight">{faq.q}</span>
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all
                    ${openIndex === idx ? 'bg-brand-black text-white rotate-180' : 'bg-black/5 text-brand-black'}
                  `}>
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </div>
                </button>
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === idx ? 'max-h-[300px] pb-8 px-8 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <p className="text-brand-black/60 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
