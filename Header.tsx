
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'History', page: 'history' },
    { name: 'Residences', page: 'residences' },
    { name: 'Neighborhood', page: 'neighborhood' },
  ];

  // On Home page we want transparency at the top, but on internal pages or when scrolled, 
  // we need a solid dark background for text legibility.
  const isSolid = isScrolled || currentPage !== 'home';
  
  const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isSolid 
      ? 'bg-emerald-950 py-4 shadow-2xl border-b border-copper-400/20' 
      : 'bg-gradient-to-b from-black/90 to-transparent py-6'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => onNavigate('home')}
          className="font-serif font-bold text-2xl tracking-widest uppercase text-white cursor-pointer group"
        >
          Enggrass<span className="text-copper-400 group-hover:text-white transition-colors">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => onNavigate(link.page)}
              className={`text-xs uppercase tracking-[0.2em] font-black transition-all duration-300 relative py-1 ${
                currentPage === link.page 
                  ? 'text-copper-400' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              {currentPage === link.page && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-copper-400"></span>
              )}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('apply')}
            className="bg-copper-400 text-emerald-950 px-8 py-2.5 text-xs uppercase tracking-[0.2em] font-black hover:bg-white hover:text-emerald-950 transition-all duration-300 shadow-xl border border-copper-400"
          >
            Pre-Lease
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-copper-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-emerald-950 z-40 md:hidden flex flex-col p-8 space-y-6 animate-fade-in border-t border-emerald-900">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                onNavigate(link.page);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-serif tracking-wide text-left border-b border-emerald-900 pb-4 ${
                currentPage === link.page ? 'text-copper-400 font-bold' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigate('apply');
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-copper-400 text-emerald-950 font-black py-5 uppercase tracking-widest mt-8 shadow-2xl"
          >
            Start Application
          </button>
        </div>
      )}
    </header>
  );
};
