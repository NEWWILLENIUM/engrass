
import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onInquire: () => void;
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onInquire, onNavigate }) => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-20 border-t border-copper-800/20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="md:col-span-1">
          <div 
            onClick={() => onNavigate('home')}
            className="font-serif font-bold text-2xl tracking-widest uppercase text-white mb-6 cursor-pointer"
          >
            Enggrass<span className="text-copper-400">.</span>
          </div>
          <p className="text-sm font-light leading-relaxed opacity-80 text-copper-50 max-w-xs">
            A luxury historical restoration project in the heart of downtown Pontiac. Join the resurgence at 29 N. Saginaw St.
          </p>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-copper-400 font-serif uppercase tracking-widest text-xs mb-8 font-bold">Discover</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white">
            <li><button onClick={() => onNavigate('history')} className="hover:text-copper-400 transition-colors">The History</button></li>
            <li><button onClick={() => onNavigate('residences')} className="hover:text-copper-400 transition-colors">The Lofts</button></li>
            <li><button onClick={() => onNavigate('neighborhood')} className="hover:text-copper-400 transition-colors">The Neighborhood</button></li>
            <li><button onClick={() => onNavigate('apply')} className="hover:text-copper-400 transition-colors">Apply Now</button></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-copper-400 font-serif uppercase tracking-widest text-xs mb-8 font-bold">Contact</h4>
          <div className="space-y-4">
            <p className="text-sm opacity-80">29 N. Saginaw St.<br />Pontiac, MI 48342</p>
            <div className="flex space-x-6 text-white pt-4">
              <a href="#" className="hover:text-copper-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-copper-400 transition-colors"><Facebook size={20} /></a>
              <a href="mailto:info@enggrasslofts.com" className="hover:text-copper-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
           <h4 className="text-copper-400 font-serif uppercase tracking-widest text-xs mb-8 font-bold">Newsletter</h4>
           <p className="text-xs opacity-60 mb-6 text-emerald-100">Subscribe for restoration updates and exclusive events.</p>
           <form className="flex border-b border-copper-800/40 pb-2">
             <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:outline-none w-full text-sm text-white placeholder-emerald-800"/>
             <button type="button" className="text-xs uppercase font-bold text-copper-400 hover:text-white transition-colors">Join</button>
           </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-10 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-40 text-emerald-100 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Enggrass Lofts. Historical Restoration Partners LLC.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <span className="flex items-center gap-1"><div className="w-2 h-2 border border-current rounded-full"></div> Equal Housing Opportunity</span>
        </div>
      </div>
    </footer>
  );
};
