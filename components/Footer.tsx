
import React from 'react';
import { Linkedin, Twitter, Github, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 px-6 border-t border-black/5">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-brand-black font-extrabold text-3xl tracking-tighter">LMD<span className="text-brand-cyan">.</span></span>
            <p className="text-brand-black/50 mt-6 text-sm font-medium leading-relaxed">
              Kenya-based consultancy supporting NGOs with evidence, communication, and practical systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-black font-extrabold mb-6">Initiatives</h4>
            <ul className="space-y-4 text-sm text-brand-black/60 font-medium">
              <li><a href="#ai-for-ngos" className="hover:text-brand-black transition-colors">AI for NGOs</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Strategic M&E</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Learning Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-black font-extrabold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-black/60 font-medium">
              <li className="flex gap-2 items-center"><MapPin size={14} className="text-brand-cyan" /> Kenya office</li>
              <li className="flex gap-2 items-center"><Mail size={14} className="text-brand-cyan" /> contact@lmdconsulting.com</li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Request TOR Review</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-black font-extrabold mb-6">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest">
            © 2025 LMD Consulting Group Ltd. Registered in Kenya.
          </p>
          <div className="flex gap-8 text-xs font-bold text-brand-black/40 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-black">Privacy Policy</a>
            <a href="#" className="hover:text-brand-black">Data Protection</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
