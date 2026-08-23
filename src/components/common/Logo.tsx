import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold' | 'compact' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimensions
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { width: 34, height: 38, textScale: 'text-base', subScale: 'text-[9px]' };
      case 'lg':
        return { width: 54, height: 60, textScale: 'text-2xl', subScale: 'text-xs' };
      case 'xl':
        return { width: 72, height: 80, textScale: 'text-3xl', subScale: 'text-sm' };
      case 'md':
      default:
        return { width: 42, height: 46, textScale: 'text-lg md:text-xl', subScale: 'text-[10px] md:text-[11px]' };
    }
  };

  const dim = getDimensions();

  // Colors based on variant
  const isLight = variant === 'light';
  const isGoldOnly = variant === 'gold';
  
  const textColor = isLight ? 'text-[#F7F4EC]' : 'text-[#20221A]';
  const subtitleColor = isLight ? 'text-[#C6A15B]' : 'text-[#626B3A]';

  // SVG emblem definition
  const Emblem = () => (
    <svg
      width={dim.width}
      height={dim.height}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      <defs>
        {/* Champagne Gold Gradient */}
        <linearGradient id="scaleGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2C785" />
          <stop offset="50%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#9E7A33" />
        </linearGradient>
        {/* Highlight Gold Gradient */}
        <linearGradient id="scaleGoldLight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#F5E8C8" />
        </linearGradient>
        {/* Charcoal Dark Gradient */}
        <linearGradient id="scaleCharcoal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3F4728" />
          <stop offset="100%" stopColor="#1E2018" />
        </linearGradient>
        {/* Light Variant Secondary Facet */}
        <linearGradient id="scaleLightFacet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDE8DC" />
          <stop offset="100%" stopColor="#D5CBB5" />
        </linearGradient>
      </defs>

      {/* Hexagonal Isometric 3D "S" Emblem */}
      {/* Top Left Gold Wing */}
      <polygon
        points="50,4 12,25 12,50 30,40 30,30 50,18"
        fill="url(#scaleGold)"
      />
      {/* Top Right Charcoal / Accent Wing */}
      <polygon
        points="50,4 50,18 70,30 70,40 88,50 88,25"
        fill={isGoldOnly ? 'url(#scaleGoldLight)' : isLight ? 'url(#scaleLightFacet)' : 'url(#scaleCharcoal)'}
      />
      {/* Middle Isometric Crossbar Left (Gold) */}
      <polygon
        points="12,50 50,72 50,58 30,46 12,50"
        fill="url(#scaleGoldLight)"
      />
      {/* Middle Isometric Crossbar Right (Charcoal / Inverse) */}
      <polygon
        points="50,58 50,72 88,50 70,40 50,58"
        fill={isGoldOnly ? 'url(#scaleGold)' : isLight ? 'url(#scaleLightFacet)' : 'url(#scaleCharcoal)'}
      />
      {/* Bottom Left Charcoal / Accent Wing */}
      <polygon
        points="12,60 12,85 50,106 50,92 30,80 30,70"
        fill={isGoldOnly ? 'url(#scaleGoldLight)' : isLight ? 'url(#scaleLightFacet)' : 'url(#scaleCharcoal)'}
      />
      {/* Bottom Right Gold Wing */}
      <polygon
        points="50,92 50,106 88,85 88,60 70,70 70,80"
        fill="url(#scaleGold)"
      />
      {/* Inner Central S Connector Channel */}
      <polygon
        points="30,40 70,40 50,52"
        fill="url(#scaleGold)"
        opacity="0.9"
      />
      <polygon
        points="30,70 70,70 50,58"
        fill={isLight ? '#2A2E20' : '#1A1C15'}
        opacity="0.7"
      />
    </svg>
  );

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <Emblem />
        <div className="flex flex-col">
          <span className={`font-brand font-semibold tracking-[0.25em] ${textColor} text-base leading-tight`}>
            SCALE
          </span>
          {showSubtitle && (
            <span className={`text-[8px] font-sans font-medium uppercase tracking-[0.2em] ${subtitleColor}`}>
              Interiors
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        <Emblem />
        <div className="flex flex-col text-left">
          <span className={`font-brand font-semibold tracking-[0.3em] ${textColor} ${dim.textScale} leading-none`}>
            SCALE
          </span>
          {showSubtitle && (
            <span className={`font-sans font-medium uppercase tracking-[0.24em] ${subtitleColor} ${dim.subScale} mt-1`}>
              Interior Design & Decoration
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default Stacked / Brand display
  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      <Emblem />
      <div className="flex flex-col">
        <span
          className={`font-brand font-semibold tracking-[0.32em] ${textColor} ${dim.textScale} leading-tight transition-colors duration-200`}
        >
          SCALE
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-medium uppercase tracking-[0.22em] ${subtitleColor} ${dim.subScale} leading-none mt-1 transition-colors duration-200`}
          >
            Interior Design & Decoration
          </span>
        )}
      </div>
    </div>
  );
};
