import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ResidencesProps {
  onImageClick: (src: string) => void;
}

export const Residences: React.FC<ResidencesProps> = ({ onImageClick }) => {
  const images = [
    {
      src: "https://picsum.photos/seed/loft-kitchen/800/600",
      caption: "Chef-Inspired Kitchens",
      desc: "Quartz countertops & custom cabinetry"
    },
    {
      src: "https://picsum.photos/seed/loft-window/800/600",
      caption: "Floor-to-Ceiling Windows",
      desc: "Breathtaking downtown views"
    },
    {
      src: "https://picsum.photos/seed/loft-bathroom/800/600",
      caption: "Spa-Like Baths",
      desc: "Premium fixtures & finishes"
    }
  ];

  return (
    <section id="residences" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-copper-600 uppercase tracking-widest font-bold text-sm mb-3">The Residences</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950">Designed for <span className="italic text-copper-800">Distinction</span></h2>
        </div>

        {/* Teaser Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer relative overflow-hidden shadow-xl border border-gray-100"
              onClick={() => onImageClick(img.src)}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-emerald-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h4 className="text-white font-serif text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.caption}</h4>
                <p className="text-copper-100 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 font-medium">{img.desc}</p>
                <div className="mt-6 text-white border border-white rounded-full p-2 hover:bg-white hover:text-emerald-950 transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                   <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floor Plan Snippet */}
        <div className="bg-emerald-950 text-white rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
           {/* Decorative sheen */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>

           <div className="mb-8 md:mb-0 md:pr-8 text-center md:text-left relative z-10">
              <h3 className="font-serif text-3xl mb-4 text-copper-400">Floor Plans & Availability</h3>
              <p className="text-emerald-100 font-normal max-w-xl leading-relaxed">
                Ranging from cozy studios to expansive live/work lofts. 
                Experience open-concept living with soaring 12-foot ceilings.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="text-center px-8 py-6 bg-emerald-900/50 rounded border border-emerald-800 backdrop-blur-sm">
                <span className="block text-2xl font-serif text-white">Studio</span>
                <span className="text-xs uppercase tracking-widest text-copper-400 font-bold">From 600 SF</span>
              </div>
              <div className="text-center px-8 py-6 bg-emerald-900/50 rounded border border-emerald-800 backdrop-blur-sm">
                <span className="block text-2xl font-serif text-white">1 Bed</span>
                <span className="text-xs uppercase tracking-widest text-copper-400 font-bold">From 850 SF</span>
              </div>
              <div className="text-center px-8 py-6 bg-emerald-900/50 rounded border border-emerald-800 backdrop-blur-sm">
                <span className="block text-2xl font-serif text-white">2 Bed</span>
                <span className="text-xs uppercase tracking-widest text-copper-400 font-bold">From 1200 SF</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};