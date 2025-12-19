
import React, { useState } from 'react';
import { MapPin, Navigation, Coffee, Music, ShoppingBag, Wind, ArrowRight } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';

export const NeighborhoodPage: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  const experiences = [
    {
      id: 'lafayette',
      title: "The Morning Routine",
      icon: <Coffee />,
      spots: ["Lafayette Market", "Goldfish Tea", "Fillmore 13 Brewery"],
      desc: "Start your day with artisan coffee and local Detroit-made pastries just blocks away."
    },
    {
      id: 'strand',
      title: "Evening Culture",
      icon: <Music />,
      spots: ["The Strand Theatre", "Elektricity Nightclub", "The Crofoot Ballroom"],
      desc: "Experience world-class performance and nightlife in historic venues with century-old acoustics."
    },
    {
      id: 'm1',
      title: "Performance & Craft",
      icon: <Wind />,
      spots: ["M-1 Concourse", "Oakland County Parks", "Pontiac Lake"],
      desc: "The heartbeat of automotive culture. M-1 Concourse is a playground for performance enthusiasts."
    }
  ];

  const commuteTimes = [
    { destination: "Birmingham", time: "15m", desc: "Luxury Retail" },
    { destination: "Royal Oak", time: "20m", desc: "Nightlife & Dining" },
    { destination: "Detroit", time: "30m", desc: "Business District" },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-copper-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-copper-600 uppercase tracking-widest font-black text-xs mb-4">Location</h2>
              <h1 className="font-serif text-5xl md:text-7xl text-emerald-950 leading-tight">Downtown <br /><span className="italic">Resurgence</span></h1>
            </div>
            <div className="max-w-md text-emerald-900/80 pb-2">
              <p className="font-medium">29 N. Saginaw St. is situated at the highest point in downtown Pontiac, offering unmatched vistas and immediate access to the city's expanding cultural core.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className={`p-8 rounded-sm transition-all duration-300 border-l-4 cursor-pointer ${
                    activeLocationId === exp.id 
                    ? 'bg-white shadow-xl border-copper-400 transform scale-[1.02]' 
                    : 'bg-emerald-950/5 border-transparent hover:bg-white hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveLocationId(exp.id)}
                  onMouseLeave={() => setActiveLocationId(null)}
                >
                  <div className="flex items-center gap-4 text-emerald-950 mb-4">
                    <span className="p-3 bg-white rounded shadow-sm text-copper-600">{exp.icon}</span>
                    <h3 className="font-serif text-2xl">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">{exp.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.spots.map((spot, i) => (
                      <li key={i} className="text-xs uppercase tracking-widest font-bold text-emerald-900 flex items-center gap-2">
                        <MapPin size={12} className="text-copper-400" />
                        {spot}
                      </li>
                    ))}
                  </ul>
                  <button className="text-[10px] uppercase tracking-[0.3em] font-black text-copper-600 hover:text-emerald-950 transition-colors flex items-center gap-2 group">
                    View On Map <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {/* Interactive Map Wrapper */}
            <div className="lg:col-span-8 sticky top-32 order-1 lg:order-2">
              <div className="h-[600px] w-full">
                <InteractiveMap activeId={activeLocationId} onLocationSelect={setActiveLocationId} />
              </div>
              
              {/* Commute Summary Bar */}
              <div className="mt-8 bg-emerald-950 p-8 flex flex-wrap gap-12 justify-center md:justify-start items-center relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-brick-pattern opacity-10 pointer-events-none"></div>
                <div className="flex items-center gap-3 relative z-10 border-r border-emerald-800 pr-12 hidden md:flex">
                   <Navigation className="text-copper-400" size={32} />
                   <div>
                      <h4 className="text-white font-serif text-lg">Travel Distance</h4>
                      <p className="text-[10px] text-copper-400 uppercase tracking-widest font-bold">Via Woodward & I-75</p>
                   </div>
                </div>
                {commuteTimes.map((item, idx) => (
                  <div key={idx} className="relative z-10 text-center md:text-left">
                    <span className="block text-3xl font-serif text-white">{item.time}</span>
                    <span className="text-[10px] uppercase tracking-widest text-copper-400 font-bold">{item.destination}</span>
                    <p className="text-[9px] text-emerald-200/50 uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
