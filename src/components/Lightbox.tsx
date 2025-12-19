import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button 
        className="absolute top-4 right-4 text-white hover:text-copper-400 transition-colors"
        onClick={onClose}
      >
        <X size={40} />
      </button>
      <img 
        src={src} 
        alt="Full view" 
        className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};