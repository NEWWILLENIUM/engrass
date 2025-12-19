
import React from 'react';
import { ArrowUpRight, Zap, Droplets, Utensils, Home } from 'lucide-react';
import { renderingFiles } from './imageManifest';

interface ResidencesPageProps {
  onImageClick: (src: string) => void;
}

export const ResidencesPage: React.FC<ResidencesPageProps> = ({ onImageClick }) => {
  const titleFromFile = (file: string) =>
    file
      .replace(/\.[^/.]+$/, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  // Renderings are auto-mirrored into /renderings during build (see scripts/mirror-images.mjs)
  const renderings = renderingFiles.map(({ file, label }) => ({
    src: new URL(`../renderings/${file}`, import.meta.url).href,
    title: label || titleFromFile(file),
    file,
  }));

  const specs = [
    { icon: <Utensils />, title: "The Kitchen", features: ["Quartz Countertops", "Matte Black Hardware", "Custom cabinetry", "Stainless Steel Appliances"] },
    { icon: <Droplets />, title: "The Bath", features: ["Walk-in Glass Showers", "Hand-fired tiling", "Designer vanity lighting", "Heated towel options"] },
    { icon: <Home />, title: "Structural", features: ["12' Ceilings", "Exposed wood beams", "Refinished concrete floors", "Sound-dampening windows"] },
    { icon: <Zap />, title: "Smart Living", features: ["Ecobee Thermostats", "Keyless Entry", "High-speed Fiber optic", "LED dimmers"] },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-copper-600 uppercase tracking-widest font-bold text-sm mb-4">Interior Design</h2>
            <h1 className="font-serif text-5xl md:text-7xl text-emerald-950 mb-6">Designed for <span className="italic">Distinction</span></h1>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
              Every loft at Enggrass is a unique masterpiece. No two floor plans are identical, echoing the bespoke nature of the jewelry company that once inhabited these halls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
             {renderings.slice(0, 4).map((img, idx) => (
               <div 
                 key={idx} 
                 onClick={() => onImageClick(img.src)}
                 className="group relative aspect-square overflow-hidden cursor-zoom-in shadow-lg"
               >
                 <img src={img.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.title} />
                 <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif text-xl border-b border-copper-400 pb-1">{img.title}</span>
                 </div>
               </div>
             ))}
          </div>

          {/* Full Renderings Gallery */}
          <div className="mb-20">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-serif text-3xl text-emerald-950">Renderings Gallery</h2>
              <p className="text-xs uppercase tracking-widest text-copper-400 font-bold">Click any image to expand</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderings.map((img, idx) => (
                <button
                  key={img.file + idx}
                  type="button"
                  onClick={() => onImageClick(img.src)}
                  className="group text-left bg-emerald-950/5 border border-emerald-950/10 hover:border-copper-400 transition-colors overflow-hidden shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-serif text-lg text-emerald-950 line-clamp-1">{img.title}</span>
                      <ArrowUpRight className="text-copper-600 opacity-70 group-hover:opacity-100" size={18} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
             {specs.map((spec, idx) => (
               <div key={idx} className="bg-emerald-950/5 p-10 rounded-sm border border-emerald-950/10 hover:border-copper-400 transition-colors">
                  <div className="text-copper-600 mb-6 flex items-center gap-4">
                     <span className="p-3 bg-white rounded-full shadow-sm">{spec.icon}</span>
                     <h3 className="font-serif text-3xl text-emerald-950">{spec.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                     {spec.features.map((f, i) => (
                       <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                          <div className="w-1 h-1 bg-copper-400 rounded-full"></div>
                          {f}
                       </li>
                     ))}
                  </ul>
               </div>
             ))}
          </div>

          <div className="bg-emerald-950 text-white p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[100px] opacity-20 -mr-48 -mt-48"></div>
            <div className="mb-8 md:mb-0 relative z-10">
              <h3 className="font-serif text-3xl text-copper-400 mb-4">Availability & Pricing</h3>
              <p className="text-emerald-100/70 max-w-lg">
                Pre-leasing has officially begun for Fall 2025 move-ins. Our units range from 650 sq ft studios to 1,800 sq ft live/work multi-level lofts.
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
               <div className="text-center px-6 py-4 bg-emerald-900 border border-emerald-800 rounded">
                  <span className="block text-2xl font-serif text-white">$1,450+</span>
                  <span className="text-[10px] uppercase tracking-widest text-copper-400 font-bold">Studio Loft</span>
               </div>
               <div className="text-center px-6 py-4 bg-emerald-900 border border-emerald-800 rounded">
                  <span className="block text-2xl font-serif text-white">$1,800+</span>
                  <span className="text-[10px] uppercase tracking-widest text-copper-400 font-bold">1 Bedroom</span>
               </div>
               <div className="text-center px-6 py-4 bg-emerald-900 border border-emerald-800 rounded">
                  <span className="block text-2xl font-serif text-white">$2,400+</span>
                  <span className="text-[10px] uppercase tracking-widest text-copper-400 font-bold">2 Bedroom</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
