import React from 'react';
import { Project } from '../../types';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
  layout?: 'standard' | 'featured' | 'compact';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  layout = 'standard'
}) => {
  if (layout === 'featured') {
    return (
      <div
        onClick={() => onSelect(project.slug)}
        className="group relative cursor-pointer overflow-hidden rounded-[1px] bg-[#FCFAF5] border border-[#C6A15B]/20 transition-all duration-300 hover:border-[#3F4728]/40 grid grid-cols-1 lg:grid-cols-12 gap-0"
      >
        <div className="lg:col-span-8 overflow-hidden relative aspect-[16/10] sm:aspect-[16/9] bg-[#3F4728]/20">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#3F4728]/90 text-[#F7F4EC] text-[10px] uppercase tracking-[0.25em] font-medium rounded-[1px] backdrop-blur-xs">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#FCFAF5] border-t lg:border-t-0 lg:border-l border-[#C6A15B]/15">
          <div>
            <div className="flex items-center text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-semibold space-x-2 mb-2">
              <MapPin className="w-3 h-3 text-[#C6A15B]" />
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#20221A] group-hover:text-[#3F4728] transition-colors leading-tight mb-3 font-light">
              {project.title}
            </h3>

            <p className="text-xs text-[#626B3A] leading-relaxed line-clamp-3 mb-4">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.materials.slice(0, 3).map((mat, i) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#3F4728]/10 text-[#3F4728] rounded-[1px]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#3F4728]/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#3F4728] group-hover:text-[#626B3A]">
            <span>Explore Case Study</span>
            <div className="w-7 h-7 rounded-[1px] border border-[#3F4728]/20 flex items-center justify-center group-hover:bg-[#3F4728] group-hover:text-[#F7F4EC] transition-all">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect(project.slug)}
      className="group relative cursor-pointer flex flex-col bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 overflow-hidden transition-all duration-300 hover:border-[#3F4728]/40"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#626B3A]/15">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 bg-[#20221A]/85 text-[#F7F4EC] text-[9px] uppercase tracking-[0.2em] font-medium rounded-[1px] backdrop-blur-xs">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] space-x-2 mb-1.5 font-medium">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-display text-xl text-[#20221A] group-hover:text-[#3F4728] transition-colors line-clamp-1 mb-2 font-light">
            {project.title}
          </h3>

          <p className="text-xs text-[#626B3A] line-clamp-2 leading-relaxed mb-3 font-normal">
            {project.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-[#3F4728]/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#3F4728]">
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:text-[#3F4728] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
