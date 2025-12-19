
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HistoryPage } from './components/HistoryPage';
import { ResidencesPage } from './components/ResidencesPage';
import { NeighborhoodPage } from './components/NeighborhoodPage';
import { ApplyPage } from './components/ApplyPage';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';

export type Page = 'home' | 'history' | 'residences' | 'neighborhood' | 'apply';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-emerald-950/5">
      <Header 
        isScrolled={isScrolled} 
        currentPage={currentPage}
        onNavigate={navigate} 
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onInquire={() => navigate('apply')} onNavigate={navigate} />
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-4xl text-emerald-950 mb-8">The Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   <div onClick={() => navigate('history')} className="cursor-pointer group">
                      <div className="overflow-hidden mb-4"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670" className="aspect-square object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                      <h3 className="font-serif text-2xl text-emerald-900 group-hover:text-copper-600">Heritage</h3>
                      <p className="text-sm uppercase tracking-widest text-copper-400 mt-2">Explore the History &rarr;</p>
                   </div>
                   <div onClick={() => navigate('residences')} className="cursor-pointer group">
                      <div className="overflow-hidden mb-4"><img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580" className="aspect-square object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                      <h3 className="font-serif text-2xl text-emerald-900 group-hover:text-copper-600">Living</h3>
                      <p className="text-sm uppercase tracking-widest text-copper-400 mt-2">View Residences &rarr;</p>
                   </div>
                   <div onClick={() => navigate('neighborhood')} className="cursor-pointer group">
                      <div className="overflow-hidden mb-4"><img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670" className="aspect-square object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                      <h3 className="font-serif text-2xl text-emerald-900 group-hover:text-copper-600">Culture</h3>
                      <p className="text-sm uppercase tracking-widest text-copper-400 mt-2">Discover Pontiac &rarr;</p>
                   </div>
                </div>
              </div>
            </section>
          </>
        )}
        
        {currentPage === 'history' && <HistoryPage />}
        {currentPage === 'residences' && <ResidencesPage onImageClick={setLightboxImage} />}
        {currentPage === 'neighborhood' && <NeighborhoodPage />}
        {currentPage === 'apply' && <ApplyPage />}
        
        {/* Sticky CTA for Mobile */}
        {currentPage !== 'apply' && (
          <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-emerald-950 p-4 border-t border-emerald-800">
               <button 
                  onClick={() => navigate('apply')}
                  className="w-full bg-copper-600 text-white font-serif tracking-wider py-3 px-6 uppercase text-sm hover:bg-copper-700 transition-colors shadow-lg"
                >
                  Start Pre-Lease Application
                </button>
          </div>
        )}
      </main>

      <Footer onInquire={() => navigate('apply')} onNavigate={navigate} />

      {lightboxImage && (
        <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </div>
  );
};

export default App;
