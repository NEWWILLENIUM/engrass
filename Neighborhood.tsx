import React, { useState } from 'react';
import { MapPin, Coffee, Theater, Car, Building2, Navigation } from 'lucide-react';
import { NeighborhoodPoint } from '../types';

export const Neighborhood: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points: NeighborhoodPoint[] = [
    { name: 'The Strand Theatre', category: 'Entertainment', distance: '2 min walk', description: 'Historic performing arts center located just down the street.' },
    { name: 'Lafayette Market', category: 'Dining', distance: '4 min walk', description: 'Artisan coffee, fresh eats, and local community hub.' },
    { name: 'M-1 Concourse', category: 'Entertainment', distance: '5 min drive', description: 'Premier automotive events facility and performance track.' },
    { name: 'McLaren Oakland', category: 'Business', distance: '3 min drive', description: 'Major medical center and employment hub.' },
    { name: 'Downtown Detroit', category: 'Transport', distance: '30 min drive', description: 'Easy access via Woodward Ave or I-75.' },
  ];

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Dining': return <Coffee className="w-5 h-5" />;
      case 'Entertainment': return <Theater className="w-5 h-5" />;
      case 'Transport': return <Car className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="neighborhood" className="py-20 bg-copper-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
            <h3 className="text-copper-600 uppercase tracking-widest font-bold text-sm mb-3">The Neighborhood</h3>
            <h2 className="font-serif text-4xl text-emerald-950">Pontiac <span className="italic font-light text-emerald-800">Revitalized</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Points List & Commute */}
          <div className="lg:w-1/3 flex flex-col gap-6">
             <p className="text-gray-800 font-normal leading-relaxed">
               Located at the epicenter of Oakland County, 29 N. Saginaw puts you steps away from culture, dining, and the roar of the engines at M-1.
             </p>

             <div className="bg-emerald-950 text-white p-6 rounded-lg shadow-xl relative overflow-hidden border border-emerald-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-copper-400/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <h4 className="font-serif text-xl mb-4 flex items-center gap-2 text-copper-400"><Navigation className="text-copper-400" size={20}/> Commute Times</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-emerald-900 pb-2">
                    <span className="font-medium text-emerald-100">Birmingham</span>
                    <span className="font-bold text-copper-400">15 Min</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-emerald-900 pb-2">
                    <span className="font-medium text-emerald-100">Royal Oak</span>
                    <span className="font-bold text-copper-400">20 Min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-emerald-100">Detroit</span>
                    <span className="font-bold text-copper-400">30 Min</span>
                  </div>
                </div>
             </div>
             
             <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {points.map((pt, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all cursor-pointer border ${activePoint === idx ? 'bg-white border-copper-400 shadow-md transform scale-[1.02]' : 'bg-white border-transparent hover:border-copper-100 hover:shadow-sm'}`}
                    onMouseEnter={() => setActivePoint(idx)}
                    onMouseLeave={() => setActivePoint(null)}
                  >
                     <div className={`mt-1 p-2 rounded-full ${activePoint === idx ? 'bg-copper-400 text-emerald-950' : 'bg-copper-100 text-copper-800'}`}>
                        {getIcon(pt.category)}
                     </div>
                     <div>
                        <h4 className="font-bold text-emerald-950 text-sm">{pt.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-copper-600 font-bold uppercase tracking-wider mt-1 mb-1">
                          <MapPin size={12} /> {pt.distance}
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">{pt.description}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Interactive Google Map */}
          <div className="lg:w-2/3 min-h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-2xl border-4 border-white relative group">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.4250275525!2d-83.2925506845344!3d42.63842697916904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824bf6e06915555%3A0x8080808080808080!2s29%20N%20Saginaw%20St%2C%20Pontiac%2C%20MI%2048342!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               className="grayscale group-hover:grayscale-0 transition-all duration-700"
               title="Map of Enggrass Lofts Location"
             ></iframe>
             
             {/* Overlay Badge */}
             <div className="absolute top-4 left-4 bg-emerald-950/95 backdrop-blur shadow-lg p-4 rounded border-l-4 border-copper-400 pointer-events-none">
                <div className="text-xs font-bold uppercase tracking-widest text-copper-400 mb-1">Prime Location</div>
                <div className="text-lg font-serif text-white">29 N. Saginaw St.</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};