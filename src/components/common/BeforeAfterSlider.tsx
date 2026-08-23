import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Initial Space / 3D Draft',
  afterLabel = 'Finished Architectural Fit-Out',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-[1px] border border-[#C6A15B]/20 cursor-ew-resize ${className}`}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt="After Renovation"
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-[#20221A]/85 text-[#F7F4EC] text-[9px] uppercase tracking-[0.2em] font-bold rounded-[1px] border border-[#C6A15B]/30 backdrop-blur-xs">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Renovation"
          className="absolute top-0 left-0 max-w-none h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-[#20221A]/85 text-[#F7F4EC] text-[9px] uppercase tracking-[0.2em] font-bold rounded-[1px] border border-[#C6A15B]/30 backdrop-blur-xs">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-[#C6A15B] shadow-md" />
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#3F4728] border border-[#C6A15B] shadow-lg flex items-center justify-center text-[#F7F4EC]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};
