import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/common/ProjectCard';
import { Lightbox } from '../components/common/Lightbox';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: (projectName?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenQuote
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  const relatedProjects = projectsData.filter((p) =>
    project.relatedProjectSlugs.includes(p.slug) || (p.category === project.category && p.id !== project.id)
  ).slice(0, 3);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] pt-24 pb-20">
      {/* 1. BREADCRUMB & BACK BUTTON */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-4 pb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3F4728] hover:text-[#C6A15B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Back to All Works</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#626B3A]">
            <span className="cursor-pointer hover:text-[#3F4728]" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-[#3F4728]" onClick={() => onNavigate('projects')}>Projects</span>
            <span>/</span>
            <span className="text-[#3F4728] font-bold truncate max-w-xs">{project.title}</span>
          </div>
        </div>
      </section>

      {/* 2. PROJECT HERO */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-12">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full rounded-[1px] overflow-hidden border border-[#C6A15B]/20 shadow-xl group">
          <img
            src={project.heroImage || project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20221A]/85 via-transparent to-black/20" />

          {/* Hero Overlay Details */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between text-[#F7F4EC] gap-4">
            <div className="space-y-2 max-w-3xl">
              <span className="px-3 py-1 bg-[#C6A15B] text-[#20221A] text-[9px] uppercase tracking-[0.22em] font-bold rounded-[1px]">
                {project.categoryLabel}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F7F4EC] leading-tight font-light">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#F7F4EC]/85 font-light max-w-xl">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={() => handleOpenLightbox(0)}
              className="inline-flex items-center px-4 py-2 bg-[#FCFAF5]/95 hover:bg-[#FCFAF5] text-[#20221A] text-[10px] uppercase tracking-[0.16em] font-semibold rounded-[1px] backdrop-blur-xs transition-colors self-start sm:self-auto shrink-0 border border-[#C6A15B]/30"
            >
              <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-[#3F4728]" />
              <span>View Gallery ({project.gallery.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. FACTS METADATA & CONCEPT SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Project Facts Grid (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 space-y-5">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#3F4728] border-b border-[#3F4728]/10 pb-3">
                Project Information
              </h3>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-[#626B3A] text-[10px] uppercase tracking-wider block mb-0.5">Location</span>
                  <span className="font-normal text-[#20221A] flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C6A15B]" />
                    {project.location}
                  </span>
                </div>

                <div>
                  <span className="text-[#626B3A] text-[10px] uppercase tracking-wider block mb-0.5">Year Completed</span>
                  <span className="font-normal text-[#20221A] flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-[#C6A15B]" />
                    {project.year}
                  </span>
                </div>

                <div>
                  <span className="text-[#626B3A] text-[10px] uppercase tracking-wider block mb-0.5">Floor Area / Scale</span>
                  <span className="font-normal text-[#20221A]">{project.area}</span>
                </div>

                <div>
                  <span className="text-[#626B3A] text-[10px] uppercase tracking-wider block mb-1">Delivered Scope</span>
                  <div className="flex flex-wrap gap-1">
                    {project.scope.map((sc, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#3F4728]/10 text-[#3F4728] text-[10px] rounded-[1px]">
                        {sc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[#626B3A] text-[10px] uppercase tracking-wider block mb-1">Primary Materiality</span>
                  <div className="flex flex-wrap gap-1">
                    {project.materials.map((mat, i) => (
                      <span key={i} className="px-2 py-0.5 border border-[#C6A15B]/30 text-[#3F4728] text-[10px] rounded-[1px]">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#3F4728]/10">
                <button
                  onClick={() => onOpenQuote(project.title)}
                  className="w-full border border-[#3F4728] py-3 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-colors"
                >
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>

          {/* Right: Design Story & Concept (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B]">
                Design Concept & Narrative
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] leading-tight font-light">
                {project.subtitle}
              </h2>
              <p className="text-sm text-[#626B3A] leading-relaxed font-light">
                {project.fullDescription}
              </p>
            </div>

            {/* Concept Highlight Box */}
            <div className="p-6 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/30 border-l-4 border-l-[#3F4728] space-y-2">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728]">
                Architectural Rationale
              </h4>
              <p className="text-xs sm:text-sm text-[#20221A] italic leading-relaxed font-light">
                "{project.concept}"
              </p>
            </div>

            {/* Highlights list */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3F4728]">
                  Key Technical & Joinery Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#20221A]">
                  {project.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2.5 p-3 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span className="leading-snug font-light">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial Quote if present */}
            {project.testimonial && (
              <div className="p-6 bg-[#20221A] text-[#F7F4EC] rounded-[1px] space-y-3 border border-[#C6A15B]/30">
                <div className="text-[#C6A15B] text-lg">“</div>
                <p className="text-xs sm:text-sm text-[#F7F4EC]/90 italic leading-relaxed -mt-2 font-light">
                  {project.testimonial.quote}
                </p>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A15B] pt-2 border-t border-white/10">
                  — {project.testimonial.client} {project.testimonial.role && `(${project.testimonial.role})`}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER SLIDER (If present) */}
      {project.beforeImage && project.afterImage && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 border-t border-[#C6A15B]/20">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-1">
              Transformation
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#20221A] font-light">
              Before & After Renovation
            </h3>
            <p className="text-xs text-[#626B3A] mt-1 font-light">
              Drag the center slider to inspect structural joinery and lighting metamorphosis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto aspect-[16/10] shadow-2xl rounded-[1px] overflow-hidden border border-[#C6A15B]/20">
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Original Space"
              afterLabel="Turnkey Result"
              className="w-full h-full"
            />
          </div>
        </section>
      )}

      {/* 5. IMAGE GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 border-t border-[#C6A15B]/20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-1">
              Documentation
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#20221A] font-light">
              Project Gallery
            </h3>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#626B3A]">
            Click any image to enlarge ({project.gallery.length} photos)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-[1px] border border-[#C6A15B]/20 bg-[#FCFAF5] aspect-[4/3] transition-all hover:border-[#3F4728]"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#20221A]/0 group-hover:bg-[#20221A]/40 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-[1px] bg-[#3F4728] text-[#F7F4EC] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg border border-[#C6A15B]/40">
                  <Maximize2 className="w-4 h-4 text-[#C6A15B]" />
                </div>
              </div>
              {img.caption && (
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#20221A]/85 to-transparent text-[#F7F4EC] text-[10px] font-light truncate opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 border-t border-[#C6A15B]/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-1">
                More Works
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#20221A] font-light">
                Related Case Studies
              </h3>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3F4728] hover:text-[#C6A15B]"
            >
              View All Projects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <ProjectCard
                key={rel.id}
                project={rel}
                onSelect={(slug) => {
                  onNavigate('project-detail', slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
