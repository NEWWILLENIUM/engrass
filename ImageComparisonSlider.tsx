import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  }, [handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={handleMouseDown}
      onTouchStart={() => isDragging.current = true}
      onTouchEnd={() => isDragging.current = false}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Foreground - Clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute top-0 left-0 h-full max-w-none object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-10 shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 md:w-12 md:h-12 bg-copper-600 rounded-full flex items-center justify-center shadow-xl border-2 border-white -ml-[15px] md:-ml-[23px]">
          <ChevronsLeftRight className="text-white w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-xs uppercase tracking-widest rounded backdrop-blur-sm pointer-events-none">
        1920s
      </div>
      <div className="absolute bottom-4 right-4 bg-emerald-900/80 text-white px-3 py-1 text-xs uppercase tracking-widest rounded backdrop-blur-sm pointer-events-none">
        2025
      </div>
    </div>
  );
};