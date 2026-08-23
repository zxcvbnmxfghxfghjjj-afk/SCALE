import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ProjectImage } from '../../types';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#20221A]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between text-[#F7F4EC] z-10 px-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B]">
          {currentIndex + 1} <span className="text-[#626B3A]">/</span> {images.length}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2.5 rounded-[1px] bg-[#20221A] hover:bg-[#3F4728] text-[#F7F4EC] transition-colors border border-[#C6A15B]/30"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-2 max-h-[82vh]">
        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-[1px] bg-[#20221A]/90 hover:bg-[#3F4728] text-[#F7F4EC] border border-[#C6A15B]/30 transition-all hover:scale-105"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Center Image */}
        <div className="max-w-5xl max-h-full flex flex-col items-center justify-center">
          <img
            src={currentImage.url}
            alt={currentImage.alt || 'Gallery photo'}
            className="max-h-[72vh] max-w-full object-contain rounded-[1px] shadow-2xl border border-[#C6A15B]/20 transition-all duration-300 select-none"
          />
          {currentImage.caption && (
            <p className="mt-3 text-center text-xs text-[#F7F4EC]/90 font-light tracking-wider max-w-2xl px-4">
              {currentImage.caption}
            </p>
          )}
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-[1px] bg-[#20221A]/90 hover:bg-[#3F4728] text-[#F7F4EC] border border-[#C6A15B]/30 transition-all hover:scale-105"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="flex items-center justify-center space-x-2 overflow-x-auto py-2 px-4 max-w-2xl mx-auto z-10">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-[1px] overflow-hidden border transition-all ${
                idx === currentIndex
                  ? 'border-[#C6A15B] scale-105'
                  : 'border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
