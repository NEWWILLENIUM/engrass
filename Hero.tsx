import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { ImageComparisonSlider } from './ImageComparisonSlider';

interface HeroProps {
  onInquire: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInquire }) => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image with Overlay - Using the rendering as the main background too */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/rendering.jpg" 
          alt="Enggrass Lofts Exterior Rendering" 
          className="w-full h-full object-cover brightness-50"
          onError={(e) => {
            // Fallback if user hasn't added the image yet
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1568940845347-190772740201?q=80&w=2670&auto=format&fit=crop";
          }}
        />
        {/* Strengthened gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-black/40"></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center mt-20 md:mt-0">
        <h2 className="text-copper-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold animate-fade-in-up text-shadow">
          Est. 1865 · Pontiac, MI
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
          Reimagining History.<br />
          <span className="italic font-normal text-copper-50">Redefining Luxury.</span>
        </h1>
        <p className="text-gray-100 max-w-2xl mb-10 text-lg md:text-xl font-normal leading-relaxed drop-shadow-md">
          Industrial heritage meets modern living at 29 N. Saginaw. <br className="hidden md:block"/>
          Be part of the downtown resurgence.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
           <button 
             onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-950 transition-all duration-300 uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 group shadow-lg"
           >
             View The Vision
             <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
           </button>
           <button 
             onClick={onInquire}
             className="px-8 py-4 bg-copper-400 text-emerald-950 hover:bg-copper-100 transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-xl shadow-black/20 flex items-center justify-center gap-2 border-2 border-copper-400"
           >
             Join Waitlist
             <ChevronRight size={16} />
           </button>
        </div>
      </div>

      {/* Comparison Slider Feature - Overlapping bottom */}
      <div className="relative z-20 w-full max-w-5xl px-4 mt-16 md:mt-24 mb-12">
        <div className="bg-emerald-950 p-2 shadow-2xl rounded-sm border border-emerald-800">
            <div className="mb-3 flex justify-between items-center text-xs text-copper-100 uppercase tracking-widest px-2 font-semibold">
                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div>Original Enggass Jewelry Co.</span>
                <span className="flex items-center gap-2">Restoration Rendering<div className="w-2 h-2 bg-copper-400 rounded-full"></div></span>
            </div>
            <div className="aspect-[16/9] w-full relative">
                 <ImageComparisonSlider 
                    // These paths look for files in your public/images folder
                    beforeImage="/images/historic.jpg" 
                    afterImage="/images/rendering.jpg"
                 />
            </div>
            <p className="text-emerald-200/60 text-[10px] text-center mt-2 uppercase tracking-wider">
              * Slide to compare 1920s architecture with 2025 restoration
            </p>
        </div>
      </div>
    </section>
  );
};