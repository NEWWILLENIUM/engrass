
import React from 'react';
import { Landmark, Compass, History, Building } from 'lucide-react';
import { historyFiles } from './imageManifest';

export const HistoryPage: React.FC = () => {
  // History photos are local files in /history (and can be auto-mirrored at build time)
  const historyImages = (historyFiles.length ? historyFiles : [{ file: 'Gemini_Generated_Image_1zgnpm1zgnpm1zgn.png' }]).map(
    ({ file, label }) => ({
      src: new URL(`../history/${file}`, import.meta.url).href,
      alt: label || 'Historic Enggrass Building photo',
      file,
    })
  );

  return (
    <div className="pt-24 pb-20 bg-copper-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-copper-600 uppercase tracking-widest font-bold text-sm mb-4">The Legacy</h2>
          <h1 className="font-serif text-5xl md:text-7xl text-emerald-950 mb-8 leading-tight">
            A Century of <br />
            <span className="italic">Craftsmanship</span>
          </h1>
          
          <div className="aspect-[21/9] w-full mb-12 overflow-hidden shadow-2xl rounded-sm">
            <img
              src={historyImages[0].src}
              alt={historyImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {historyImages.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {historyImages.map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden shadow-lg bg-white">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <p className="text-xl text-emerald-900 font-medium leading-relaxed">
                The Enggrass Building at 29 N. Saginaw has stood as a silent witness to Pontiac's evolution for over 150 years. Originally commissioned in 1865, its transformation in the 1920s solidified its status as a local landmark.
              </p>
              <p className="text-gray-700 leading-loose">
                As the former home of the prestigious Enggass Jewelry Company, the building was designed to reflect the quality of the diamonds sold within its walls. The façade features intricate masonry and expansive windows that were once the largest in Oakland County, designed to pull natural Michigan light deep into the sales floor.
              </p>
              <p className="text-gray-700 leading-loose">
                Today, our restoration preserves the "Jewel Box" spirit. We have painstakingly stripped away decades of updates to reveal the original red brickwork and timber supports. Every scar on the brick and every knot in the wood tells a story of an industrious past, now beautifully integrated into a luxurious future.
              </p>
            </div>
            
            <div className="bg-emerald-950 p-8 text-white rounded-sm shadow-xl self-start space-y-8">
              <h3 className="font-serif text-2xl text-copper-400">Architectural Notes</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Building className="text-copper-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Masonry</h4>
                    <p className="text-sm opacity-70">Hand-laid red clay bricks from the Detroit River Valley basin.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Compass className="text-copper-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Orientation</h4>
                    <p className="text-sm opacity-70">East-facing windows optimized for morning golden hour.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Landmark className="text-copper-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Status</h4>
                    <p className="text-sm opacity-70">Designated Historical Landmark in Pontiac, Michigan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 border-l-8 border-copper-400 shadow-xl">
            <History className="text-copper-600 mb-6" size={48} />
            <blockquote className="font-serif text-3xl text-emerald-950 italic leading-snug">
              "We aren't just building apartments; we are acting as curators for one of Michigan's most important industrial artifacts."
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-widest text-emerald-800 font-bold">— The Restoration Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};
