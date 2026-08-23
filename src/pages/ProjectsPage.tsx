import React, { useState, useMemo } from 'react';
import { ProjectCategory } from '../types';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/common/ProjectCard';
import { Search, LayoutGrid, ListFilter, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: () => void;
  initialCategory?: ProjectCategory;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuote,
  initialCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'living-rooms', label: 'Living Rooms' },
    { id: 'bedrooms', label: 'Bedrooms' },
    { id: 'dressing-rooms', label: 'Dressing Rooms' },
    { id: 'tv-units', label: 'TV Units' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'villas', label: 'Villas' },
    { id: 'furniture', label: 'Custom Furniture' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F7F4EC] pt-24 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-3">
              <span className="w-8 h-[1px] bg-[#C6A15B]" />
              <span>Portfolio</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#20221A] leading-[1.1] font-light">
              Selected Works & Case Studies
            </h1>

            <p className="text-sm sm:text-base text-[#626B3A] mt-4 font-light leading-relaxed">
              Explore our curated portfolio of bespoke residences, architectural living rooms, haute-couture dressing suites, and custom joinery.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="self-start md:self-auto border border-[#3F4728] px-8 py-3.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] shadow-sm transition-all shrink-0"
          >
            Start a Similar Project
          </button>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="mt-10 pt-6 border-t border-[#C6A15B]/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] rounded-[1px] transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#3F4728] text-[#F7F4EC] font-semibold shadow-xs'
                    : 'bg-[#FCFAF5] text-[#20221A] border border-[#C6A15B]/20 hover:border-[#3F4728]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar & View toggle */}
          <div className="flex items-center space-x-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#626B3A]" />
              <input
                type="text"
                placeholder="Search by material, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] placeholder-[#626B3A]/60 focus:outline-none focus:border-[#3F4728]"
              />
            </div>

            <div className="flex items-center border border-[#C6A15B]/20 rounded-[1px] bg-[#FCFAF5] p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-[1px] ${viewMode === 'grid' ? 'bg-[#3F4728] text-[#F7F4EC]' : 'text-[#626B3A] hover:text-[#20221A]'}`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('editorial')}
                className={`p-1.5 rounded-[1px] ${viewMode === 'editorial' ? 'bg-[#3F4728] text-[#F7F4EC]' : 'text-[#626B3A] hover:text-[#20221A]'}`}
                title="Editorial List View"
                aria-label="Editorial View"
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-4 text-[10px] uppercase tracking-wider text-[#626B3A]">
          Showing <strong className="text-[#20221A]">{filteredProjects.length}</strong> of <strong className="text-[#20221A]">{projectsData.length}</strong> studio works
        </div>
      </section>

      {/* 2. PROJECTS GALLERY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6">
        {filteredProjects.length === 0 ? (
          <div className="p-16 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 text-center space-y-4">
            <h3 className="font-display text-2xl text-[#20221A] font-light">No matching projects found</h3>
            <p className="text-xs text-[#626B3A] font-light">
              Try resetting your search query or choosing another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="border border-[#3F4728] px-6 py-2 bg-[#3F4728] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] rounded-[1px]"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(slug) => onNavigate('project-detail', slug)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="featured"
                onSelect={(slug) => onNavigate('project-detail', slug)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16">
        <div className="p-8 sm:p-12 bg-[#20221A] text-[#F7F4EC] rounded-[1px] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C6A15B]/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-[#F7F4EC] font-light">
              Looking for a tailored interior concept?
            </h3>
            <p className="text-xs text-[#F7F4EC]/80 max-w-lg font-light">
              We design custom furniture pieces, 3D visualization sets, and complete residential architectural projects.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="border border-[#C6A15B] px-8 py-3.5 bg-[#C6A15B] hover:bg-[#b5924c] text-[#20221A] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-colors shrink-0"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};
