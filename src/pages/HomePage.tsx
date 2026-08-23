import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projectsData';
import { servicesData, processStepsData, statsData } from '../data/servicesData';
import { clientReviews } from '../data/teamData';
import { ProjectCard } from '../components/common/ProjectCard';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Compass,
  Box,
  Hammer,
  Armchair,
  FileText,
  CheckCircle2,
  Phone,
  MessageSquare
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData.slice(0, 6)
    : projectsData.filter(p => p.category === activeCategory).slice(0, 6);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'living-rooms', label: 'Living Rooms' },
    { id: 'bedrooms', label: 'Bedrooms' },
    { id: 'dressing-rooms', label: 'Dressing Rooms' },
    { id: 'tv-units', label: 'TV Units' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'villas', label: 'Villas' }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'Armchair': return <Armchair className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 sm:px-10 lg:px-12 overflow-hidden bg-[#3F4728]">
        {/* Background Image with warm architectural tone */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=88"
            alt="SCALE Luxury Interior Architecture"
            className="w-full h-full object-cover object-center mix-blend-overlay opacity-80"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#20221A]/90 via-[#20221A]/60 to-[#20221A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20221A]/95 via-transparent to-black/30" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 text-left space-y-6 text-[#F7F4EC]">
            {/* Brand Eyebrow */}
            <p className="text-[#C6A15B] uppercase text-xs tracking-[0.3em] font-semibold">
              Atelier Collection &bull; Dubai & London
            </p>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F7F4EC] leading-[1.1] font-light tracking-tight max-w-3xl">
              Architectural <br />
              <span className="italic text-[#C6A15B]">Substance.</span>
            </h1>

            {/* Supporting Paragraph with fine gold accent divider */}
            <div className="flex items-center gap-6 pt-2">
              <div className="w-16 h-[1px] bg-[#C6A15B] shrink-0" />
              <p className="text-sm sm:text-base text-[#F7F4EC]/85 max-w-xl font-light tracking-wide leading-relaxed">
                Curating spaces that balance structural precision with the warmth of human experience. From concept and 3D visualization to turnkey fit-out.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center border border-[#C6A15B] bg-[#C6A15B] hover:bg-[#b8934b] text-[#20221A] px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-all duration-200 group shadow-sm"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center border border-[#F7F4EC]/40 px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EC] hover:bg-[#F7F4EC]/10 rounded-[1px] backdrop-blur-xs transition-all duration-200"
              >
                <span>Core Services</span>
              </button>
            </div>
          </div>

          {/* Floating Key Metrics card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col space-y-4 bg-[#FCFAF5]/95 backdrop-blur-md p-8 rounded-[1px] border border-[#C6A15B]/25 shadow-2xl text-[#20221A]">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] border-b border-[#3F4728]/10 pb-3">
              Studio Blueprint
            </div>
            <ul className="space-y-4 pt-1">
              <li className="flex justify-between items-end border-b border-[#3F4728]/10 pb-2">
                <span className="text-sm font-light text-[#3F4728]">Interior Architecture</span>
                <span className="text-[10px] text-[#626B3A] italic">01</span>
              </li>
              <li className="flex justify-between items-end border-b border-[#3F4728]/10 pb-2">
                <span className="text-sm font-light text-[#3F4728]">Bespoke Joinery & Dressing</span>
                <span className="text-[10px] text-[#626B3A] italic">02</span>
              </li>
              <li className="flex justify-between items-end border-b border-[#3F4728]/10 pb-2">
                <span className="text-sm font-light text-[#3F4728]">3D CGI & Visualization</span>
                <span className="text-[10px] text-[#626B3A] italic">03</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full border border-[#3F4728] px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] rounded-[1px] transition-colors"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom subtle scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#F7F4EC]/60 text-[9px] uppercase tracking-[0.25em]">
          <span>Scroll</span>
          <div className="w-[1px] h-6 bg-[#C6A15B]/60 mt-1 animate-bounce" />
        </div>
      </section>

      {/* 2. CORE CAPABILITY BAR */}
      <section className="bg-[#20221A] text-[#F7F4EC] py-8 border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-[1px] border border-[#C6A15B]/30 bg-[#3F4728]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EC]">Technical Drawings</h4>
                <p className="text-[10px] text-[#F7F4EC]/60 tracking-wider">Millimetric shop drawings</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-[1px] border border-[#C6A15B]/30 bg-[#3F4728]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EC]">Interior Architecture</h4>
                <p className="text-[10px] text-[#F7F4EC]/60 tracking-wider">Spatial planning & layouts</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-[1px] border border-[#C6A15B]/30 bg-[#3F4728]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
                <Hammer className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EC]">Fit-Out Works</h4>
                <p className="text-[10px] text-[#F7F4EC]/60 tracking-wider">Turnkey site supervision</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-[1px] border border-[#C6A15B]/30 bg-[#3F4728]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EC]">3D Visualization</h4>
                <p className="text-[10px] text-[#F7F4EC]/60 tracking-wider">Photorealistic 4K renders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT & PHILOSOPHY PREVIEW */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-[1px] overflow-hidden border border-[#C6A15B]/20 shadow-xl bg-[#3F4728]/10">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="SCALE Architectural Dining and Living"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            {/* Inset detail photo */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-48 lg:w-56 rounded-[1px] overflow-hidden border-2 border-[#FCFAF5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=85"
                alt="Refined material details"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            {/* Background decorative frame */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#C6A15B]/20 -z-0 rounded-[1px]" />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] flex items-center">
              <span className="w-10 h-[1px] bg-[#C6A15B] mr-3" />
              The Studio
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-[#20221A] leading-[1.15] font-light">
              Designing Spaces,<br />
              <span className="italic text-[#3F4728]">Building Trust.</span>
            </h2>

            <p className="text-sm text-[#626B3A] leading-relaxed font-light">
              Based in the intersection of tradition and modernity, SCALE defines premium living through a lens of olive-toned tranquility and gold accents. With an unwavering dedication to proportion and detail, we deliver projects that endure.
            </p>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-y border-[#3F4728]/10 py-6">
              {statsData.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl text-[#3F4728] font-normal">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#626B3A] font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center border border-[#3F4728] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] rounded-[1px] transition-colors"
              >
                <span>The Atelier</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#C6A15B]" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center border border-[#C6A15B] text-[#20221A] hover:bg-[#C6A15B] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-all"
              >
                <span>Get a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SHOWCASE */}
      <section className="py-20 bg-[#FCFAF5] border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
                Disciplines
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] font-light">
                Core Architectural Services
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 text-[10px] uppercase tracking-[0.2em] font-bold text-[#3F4728] hover:text-[#C6A15B] inline-flex items-center group transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group p-6 sm:p-8 bg-[#F7F4EC] rounded-[1px] border border-[#C6A15B]/20 hover:border-[#3F4728]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-[1px] bg-[#3F4728] text-[#C6A15B] flex items-center justify-center transition-colors group-hover:bg-[#626B3A]">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-[#626B3A] italic tracking-widest">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-[#20221A] group-hover:text-[#3F4728] transition-colors mb-2.5 leading-snug font-light">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#626B3A] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3F4728]/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#626B3A] font-medium">
                    Duration: {service.typicalDuration}
                  </span>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#3F4728] flex items-center group-hover:text-[#C6A15B] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Banner */}
          <div className="mt-12 p-8 bg-[#3F4728] text-[#F7F4EC] rounded-[1px] border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-[#F7F4EC] font-light">
                Let's bring your architectural vision to life.
              </h3>
              <p className="text-xs text-[#F7F4EC]/80 mt-1 font-light tracking-wide">
                Schedule a 30-minute concept consultation with our lead interior architects.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="border border-[#C6A15B] bg-[#C6A15B] hover:bg-[#b8934b] text-[#20221A] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] shrink-0 transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SHOWCASE */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
            Selected Works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#20221A] font-light">
            Architectural Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-[#626B3A] mt-2 font-light">
            Explore our curated living environments, bespoke dressing rooms, architectural TV units, and turnkey residences.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.16em] rounded-[1px] transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#3F4728] text-[#F7F4EC] font-semibold shadow-xs'
                  : 'bg-[#FCFAF5] text-[#20221A] border border-[#C6A15B]/20 hover:border-[#3F4728]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lead Featured Project (Hero layout) */}
        {filteredProjects.length > 0 && (
          <div className="mb-8">
            <ProjectCard
              project={filteredProjects[0]}
              onSelect={(slug) => onNavigate('project-detail', slug)}
              layout="featured"
            />
          </div>
        )}

        {/* Subsequent Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(1).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(slug) => onNavigate('project-detail', slug)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center border border-[#3F4728] px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] rounded-[1px] transition-all"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#C6A15B]" />
          </button>
        </div>
      </section>

      {/* 6. INTERACTIVE BEFORE & AFTER / REALITY SHOWCASE */}
      <section className="py-20 bg-[#FCFAF5] border-t border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B]">
                Precision Execution
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] leading-tight font-light">
                From 3D Blueprint to Built Reality
              </h2>
              <p className="text-sm text-[#626B3A] leading-relaxed font-light">
                Drag the interactive slider to see how SCALE translates spatial concepts and 3D architectural models into tangible, flawlessly finished residential environments.
              </p>
              <ul className="space-y-2.5 text-xs text-[#20221A] pt-2">
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] mr-2.5 shrink-0" />
                  <span>Exact color & texture fidelity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] mr-2.5 shrink-0" />
                  <span>Millimetric joinery alignment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] mr-2.5 shrink-0" />
                  <span>Lutron & architectural lighting orchestration</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full shadow-2xl rounded-[1px] overflow-hidden border border-[#C6A15B]/20">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                  afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  beforeLabel="Initial Space Layout"
                  afterLabel="Completed Turnkey Salon"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DESIGN PROCESS ("How We Work") */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
            Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#20221A] font-light">
            How We Work
          </h2>
          <p className="text-xs sm:text-sm text-[#626B3A] mt-2 font-light">
            A structured, transparent roadmap from initial consultation to final key handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processStepsData.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 flex flex-col justify-between hover:border-[#3F4728]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-light text-[#C6A15B]">
                    {step.step}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#626B3A] border border-[#3F4728]/10 px-2 py-0.5 rounded-[1px]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display text-base text-[#20221A] group-hover:text-[#3F4728] transition-colors mb-2 leading-snug font-normal">
                  {step.title}
                </h3>

                <p className="text-xs text-[#626B3A] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#3F4728]/10 text-[10px] uppercase tracking-wider text-[#3F4728] font-bold">
                🎯 {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CLIENT REVIEWS / TESTIMONIALS */}
      <section className="py-20 bg-[#20221A] text-[#F7F4EC] border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
              Client Endorsements
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F7F4EC] font-light">
              Trusted by Discerning Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-8 bg-[#3F4728]/20 rounded-[1px] border border-[#C6A15B]/20 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex text-[#C6A15B] text-xs tracking-widest">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-[#F7F4EC]/90 font-light italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-medium text-xs text-[#F7F4EC] uppercase tracking-wider">
                    {rev.name}
                  </div>
                  <div className="text-[10px] text-[#C6A15B] uppercase tracking-wider mt-0.5">
                    {rev.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MAIN CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#FCFAF5] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-block px-3.5 py-1 border border-[#C6A15B]/30 text-[#3F4728] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-[1px]">
            Ready to Begin?
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-[#20221A] leading-tight font-light">
            Let's Shape Your Next Space Together.
          </h2>

          <p className="text-sm sm:text-base text-[#626B3A] max-w-xl mx-auto leading-relaxed font-light">
            Whether you are planning a complete villa renovation, an exquisite dressing suite, or custom architectural joinery, our team is ready to assist.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto border border-[#3F4728] px-8 py-3.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] shadow-sm transition-all"
            >
              Start Your Project / Get a Quote
            </button>

            <a
              href="https://wa.me/971563131834"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-[#25D366] px-8 py-3.5 bg-[#25D366] hover:bg-[#1eb956] text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] inline-flex items-center justify-center transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
