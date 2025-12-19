import React from 'react';
import { Gem, Hammer, Landmark, BrickWall } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const features = [
    {
      icon: <Landmark className="w-8 h-8 text-copper-600" />,
      title: "Preserved Facade",
      desc: "Retaining the original 1920s grandeur."
    },
    {
      icon: <BrickWall className="w-8 h-8 text-copper-600" />,
      title: "Exposed Masonry",
      desc: "Authentic brickwork in every unit."
    },
    {
      icon: <Gem className="w-8 h-8 text-copper-600" />,
      title: "Jewelry Legacy",
      desc: "Formerly the Enggass Jewelry Company."
    },
    {
      icon: <Hammer className="w-8 h-8 text-copper-600" />,
      title: "Modern Restoration",
      desc: "State-of-the-art updates respecting the past."
    }
  ];

  return (
    <section id="history" className="py-20 bg-copper-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h3 className="text-copper-800 uppercase tracking-widest font-bold mb-2 text-sm">Our Legacy</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
              From Jewel Box to <br />
              <span className="italic text-emerald-800">Living Sanctuary</span>
            </h2>
            <div className="w-20 h-1 bg-copper-400 mb-8"></div>
            
            <p className="text-gray-800 leading-loose mb-6 font-normal text-lg">
              Enggrass Lofts isn't just a place to stay; it's a piece of Pontiac's soul. 
              Located at the heart of the downtown resurgence at 29 N. Saginaw, we are 
              transforming a historic landmark into a sanctuary for modern living.
            </p>
            <p className="text-gray-800 leading-loose mb-8 font-normal text-lg">
              Originally the home of the renowned Enggass Jewelry Company, this structure has 
              stood as a beacon of commerce and style for a century. Today, we invite you to 
              write the next chapter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-white p-3 shadow-lg border border-copper-100 rounded-full shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-emerald-950 font-bold text-lg">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mt-1 font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/seed/old-jewelry-store/600/800?grayscale" 
                  alt="Historic Enggass" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl border-4 border-white mt-12"
                />
                <img 
                  src="https://picsum.photos/seed/loft-brick/600/800" 
                  alt="Restored Brick" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl border-4 border-white"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-copper-400 rounded-full opacity-20 blur-3xl"></div>
             <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-emerald-800 rounded-full opacity-10 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};