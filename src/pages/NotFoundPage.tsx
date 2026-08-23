import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[85vh] bg-[#F7F4EC] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="relative aspect-[16/9] mx-auto rounded-[2px] overflow-hidden border border-[#E7E0D0] bg-[#FCFAF5] shadow-md">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Architectural space"
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-70"
          />
          <div className="absolute inset-0 bg-[#20221A]/40 flex items-center justify-center">
            <span className="font-display text-7xl sm:text-8xl font-normal text-[#F7F4EC] tracking-widest">
              404
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-2xl sm:text-3xl text-[#20221A]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#77786D] max-w-sm mx-auto">
            Sorry, the architectural page or project case study you are looking for doesn't exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex justify-center space-x-3">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center px-6 py-3 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-xs uppercase tracking-[0.16em] font-semibold rounded-[2px] transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-2 text-[#C6A15B]" />
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center px-6 py-3 border border-[#3F4728] text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] text-xs uppercase tracking-[0.16em] font-semibold rounded-[2px] transition-all"
          >
            <span>Explore Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};
