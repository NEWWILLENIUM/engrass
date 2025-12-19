
import React, { useState } from 'react';
import { MapPin, Coffee, Music, Car, Building2, Navigation, Info, X } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  category: 'residence' | 'dining' | 'entertainment' | 'business' | 'commute';
  x: number; // Percentage from left
  y: number; // Percentage from top
  distance: string;
  description: string;
}

const locations: Location[] = [
  { id: 'enggrass', name: 'Enggrass Lofts', category: 'residence', x: 50, y: 50, distance: 'You are here', description: '29 N. Saginaw St. The epicenter of the Pontiac resurgence.' },
  { id: 'strand', name: 'Strand Theatre', category: 'entertainment', x: 55, y: 42, distance: '2 min walk', description: 'Historic 1921 performing arts venue.' },
  { id: 'lafayette', name: 'Lafayette Market', category: 'dining', x: 42, y: 48, distance: '4 min walk', description: 'Artisan grocer and community cafe.' },
  { id: 'm1', name: 'M-1 Concourse', category: 'entertainment', x: 25, y: 30, distance: '5 min drive', description: 'Automotive performance track and event space.' },
  { id: 'mclaren', name: 'McLaren Oakland', category: 'business', x: 65, y: 60, distance: '3 min drive', description: 'Major healthcare employment hub.' },
  { id: 'birmingham', name: 'Birmingham', category: 'commute', x: 85, y: 75, distance: '15 min drive', description: 'Luxury shopping and dining district.' },
  { id: 'detroit', name: 'Detroit', category: 'commute', x: 90, y: 90, distance: '30 min drive', description: 'The cultural capital of the Midwest.' },
];

export const InteractiveMap: React.FC<{ activeId?: string | null; onLocationSelect: (id: string | null) => void }> = ({ activeId, onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleMarkerClick = (loc: Location) => {
    setSelectedLocation(loc);
    onLocationSelect(loc.id);
  };

  const getIcon = (category: string, isActive: boolean) => {
    const size = isActive ? 24 : 18;
    switch (category) {
      case 'residence': return <MapPin size={size} className="text-copper-400" />;
      case 'dining': return <Coffee size={size} />;
      case 'entertainment': return <Music size={size} />;
      case 'business': return <Building2 size={size} />;
      default: return <Navigation size={size} />;
    }
  };

  return (
    <div className="relative w-full h-full bg-emerald-950 overflow-hidden rounded-sm border border-emerald-800 shadow-2xl group">
      {/* Schematic Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-brick-pattern"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-700/50"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-emerald-700/50"></div>
        {/* Abstract "Roads" */}
        <div className="absolute top-[40%] left-0 w-full h-12 bg-emerald-900/40 rotate-12"></div>
        <div className="absolute top-0 left-[45%] w-16 h-full bg-emerald-900/40 -rotate-6"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Map Content */}
      <div className="absolute inset-0">
        {locations.map((loc) => {
          const isActive = activeId === loc.id || selectedLocation?.id === loc.id;
          return (
            <div 
              key={loc.id}
              className={`absolute transition-all duration-500 cursor-pointer ${isActive ? 'z-30' : 'z-20 hover:z-25'}`}
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
              onClick={() => handleMarkerClick(loc)}
            >
              {/* Pulse effect for residence */}
              {loc.category === 'residence' && (
                <div className="absolute inset-0 w-12 h-12 -ml-6 -mt-6 rounded-full bg-copper-400/20 animate-ping"></div>
              )}
              
              <div className={`p-2 rounded-full border-2 transition-all duration-300 shadow-lg ${
                isActive 
                  ? 'bg-copper-400 border-white text-emerald-950 scale-125' 
                  : 'bg-emerald-900 border-emerald-700 text-copper-100 hover:border-copper-400'
              }`}>
                {getIcon(loc.category, isActive)}
              </div>
              
              {/* Label */}
              <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-emerald-950/90 border border-emerald-800 rounded text-[10px] uppercase tracking-widest font-bold text-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
                {loc.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Popup Overlay */}
      {selectedLocation && (
        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-white shadow-2xl p-6 border-l-4 border-copper-400 animate-fade-in-up z-40">
          <button 
            onClick={() => { setSelectedLocation(null); onLocationSelect(null); }}
            className="absolute top-4 right-4 text-gray-400 hover:text-emerald-950"
          >
            <X size={16} />
          </button>
          <div className="flex items-start gap-4 mb-4">
             <div className="p-2 bg-emerald-50 text-emerald-950 rounded">
                {getIcon(selectedLocation.category, false)}
             </div>
             <div>
                <h3 className="font-serif text-xl text-emerald-950">{selectedLocation.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper-600">{selectedLocation.distance}</p>
             </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {selectedLocation.description}
          </p>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-950 hover:text-copper-600 transition-colors">
            Get Directions <Navigation size={12} />
          </button>
        </div>
      )}

      {/* Scale Legend */}
      <div className="absolute top-6 right-6 text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold pointer-events-none">
        Architectural Precinct Schematic v1.0
      </div>
    </div>
  );
};
