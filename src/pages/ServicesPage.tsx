import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, Clock, ArrowRight, Compass, Box, Hammer, Armchair, FileText, Sparkles, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Design' | 'Visualisation' | 'Delivery'>('All');

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Box': return <Box className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'Armchair': return <Armchair className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] pt-24 pb-20">
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-3">
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
            <span>Disciplines</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#20221A] leading-[1.1] font-light mb-6">
            Comprehensive Design,<br />
            <span className="italic text-[#3F4728]">Visualization & Fit-Out</span>
          </h1>

          <p className="text-base sm:text-lg text-[#626B3A] leading-relaxed font-light">
            We provide an end-to-end architectural journey—from concept sketching and photorealistic CGI to joinery fabrication and turnkey construction management.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {(['All', 'Design', 'Visualisation', 'Delivery'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-[10px] uppercase tracking-[0.16em] rounded-[1px] transition-all ${
                selectedCategory === cat
                  ? 'bg-[#3F4728] text-[#F7F4EC] font-semibold shadow-xs'
                  : 'bg-[#FCFAF5] text-[#20221A] border border-[#C6A15B]/20 hover:border-[#3F4728]'
              }`}
            >
              {cat === 'All' ? 'All Disciplines' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. SERVICES DETAILED CARDS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8 space-y-12">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 sm:p-12 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all hover:border-[#3F4728]/40 shadow-xs"
          >
            {/* Left Col: Info & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-[1px] bg-[#3F4728] text-[#C6A15B] flex items-center justify-center">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#C6A15B] tracking-widest block font-bold">
                    DISCIPLINE {service.number} // {service.category.toUpperCase()}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#20221A] font-light">
                    {service.title}
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#626B3A] leading-relaxed font-light">
                {service.fullDescription}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3F4728]">
                  Key Deliverables & Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#20221A]">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Actions */}
              <div className="pt-4 border-t border-[#3F4728]/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center text-xs text-[#626B3A] space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span className="text-[11px]">Typical Timeline: <strong className="font-medium text-[#20221A]">{service.typicalDuration}</strong></span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      onNavigate('projects');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#626B3A] hover:text-[#3F4728]"
                  >
                    View Samples →
                  </button>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="border border-[#3F4728] px-6 py-2 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-colors"
                  >
                    Inquire Service
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Image Representation (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[1px] overflow-hidden border border-[#C6A15B]/20 aspect-[4/3] bg-[#3F4728]/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. STUDIO GUARANTEES */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
        <div className="bg-[#20221A] text-[#F7F4EC] p-8 sm:p-12 rounded-[1px] border border-[#C6A15B]/20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#C6A15B]" />
            <h3 className="font-display text-xl text-[#F7F4EC] font-light">Fixed Milestone Pricing</h3>
            <p className="text-xs text-[#F7F4EC]/75 leading-relaxed font-light">
              Transparent, itemized cost breakdowns with zero hidden variations during design or fit-out execution.
            </p>
          </div>

          <div className="space-y-2">
            <Sparkles className="w-6 h-6 text-[#C6A15B]" />
            <h3 className="font-display text-xl text-[#F7F4EC] font-light">Bespoke Craftsmanship</h3>
            <p className="text-xs text-[#F7F4EC]/75 leading-relaxed font-light">
              Tailor-made millwork, Austrian Blum hardware, handpicked marble slabs, and custom acoustic layering.
            </p>
          </div>

          <div className="space-y-2">
            <Clock className="w-6 h-6 text-[#C6A15B]" />
            <h3 className="font-display text-xl text-[#F7F4EC] font-light">On-Time Handover</h3>
            <p className="text-xs text-[#F7F4EC]/75 leading-relaxed font-light">
              Rigorous critical path scheduling and dedicated site supervisors guaranteeing agreed delivery dates.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 pt-8">
        <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] font-light">
          Need a Custom Multi-Disciplinary Scope?
        </h2>
        <p className="text-sm text-[#626B3A] max-w-xl mx-auto font-light">
          We combine architecture, 3D visualization, and fit-out into unified turnkey packages for full homes and villas.
        </p>
        <button
          onClick={() => onOpenQuote()}
          className="border border-[#3F4728] px-8 py-3.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] shadow-sm transition-all"
        >
          Request Custom Proposal
        </button>
      </section>
    </div>
  );
};
