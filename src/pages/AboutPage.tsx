import React from 'react';
import { teamData, softwarePartners } from '../data/teamData';
import { statsData } from '../data/servicesData';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  const principles = [
    {
      title: 'Intentionality',
      desc: 'Every junction, partition, and material selection serves a purpose—enhancing human comfort, acoustics, or functional storage.'
    },
    {
      title: 'Material Intelligence',
      desc: 'We select authentic stones, FSC-certified hardwoods, breathable linens, and architectural brass that age gracefully over time.'
    },
    {
      title: 'Spatial Proportion',
      desc: 'Drawing on classical proportion and modern minimalism, we calibrate ceiling heights, shadow gaps, and furniture scale to human ergonomics.'
    },
    {
      title: 'Turnkey Integrity',
      desc: 'From initial 3D visualization to on-site contractor coordination, we ensure the finished room is an exact manifestation of the design.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EC] pt-24 pb-20">
      {/* 1. HERO / EDITORIAL STATEMENT */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-4">
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
            <span>The Atelier</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#20221A] leading-[1.1] font-light mb-6">
            Space, scaled <br />
            <span className="italic text-[#3F4728]">with intent.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#626B3A] leading-relaxed font-light">
            SCALE is a boutique architecture and interior design practice dedicated to creating refined residential and commercial environments. We balance atmosphere, function, and precision to deliver timeless spaces.
          </p>
        </div>
      </section>

      {/* 2. SPLIT STORY & IMAGE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 border-t border-[#C6A15B]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] leading-tight font-light">
              Designing from the structural volume to the smallest junction.
            </h2>

            <p className="text-sm text-[#626B3A] leading-relaxed font-light">
              Founded on the belief that good design transforms everyday life, SCALE operates at the intersection of architectural discipline and interior intimacy. We avoid fleeting trends in favor of enduring proportion, natural lighting, and tactile materiality.
            </p>

            <p className="text-sm text-[#626B3A] leading-relaxed font-light">
              Whether conceptualizing a 1,000 m² coastal villa, engineering an acoustic TV wall, or tailoring a bespoke dressing suite, our in-house team oversees every stage with meticulous scrutiny.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#3F4728]/10">
              <div className="p-4 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20">
                <div className="font-display text-2xl text-[#3F4728] font-normal">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-[#626B3A] font-medium mt-1">Bespoke Architectural Plans</div>
              </div>
              <div className="p-4 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20">
                <div className="font-display text-2xl text-[#3F4728] font-normal">95+ CRI</div>
                <div className="text-[10px] uppercase tracking-wider text-[#626B3A] font-medium mt-1">True-Color Lighting Standards</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[1px] overflow-hidden border border-[#C6A15B]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="SCALE Studio Craftsmanship"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#20221A]/90 backdrop-blur-md text-[#F7F4EC] rounded-[1px] text-xs border border-[#C6A15B]/30">
                <span className="text-[#C6A15B] font-semibold uppercase tracking-[0.2em] block mb-1 text-[10px]">Studio Oath</span>
                "Every space should feel intentional, resolved, and personal."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DESIGN PRINCIPLES */}
      <section className="bg-[#FCFAF5] py-20 border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
              Our Ethos
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] font-light">
              Design Principles We Uphold
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, i) => (
              <div
                key={i}
                className="p-6 bg-[#F7F4EC] rounded-[1px] border border-[#C6A15B]/20 hover:border-[#3F4728]/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#C6A15B] tracking-widest block mb-2 font-bold">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl text-[#20221A] font-normal">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-[#626B3A] leading-relaxed mt-2 font-light">
                    {pr.desc}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-[#C6A15B]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE LEADERSHIP TEAM */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
            Leadership & Craft
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#20221A] font-light">
            Meet the Team
          </h2>
          <p className="text-xs sm:text-sm text-[#626B3A] mt-2 font-light">
            Our multidisciplinary team of architects, interior designers, and 3D visualizers bring decades of collective mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 overflow-hidden flex flex-col transition-all hover:border-[#3F4728]/50"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#3F4728]/10 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#20221A]/85 text-[#F7F4EC] text-[8px] uppercase tracking-wider rounded-[1px]">
                  {member.specialty}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-[#20221A] group-hover:text-[#3F4728] transition-colors font-light">
                    {member.name}
                  </h3>
                  <div className="text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#626B3A] leading-relaxed line-clamp-3 font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECHNICAL STANDARDS & SOFTWARE */}
      <section className="bg-[#20221A] text-[#F7F4EC] py-16 border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-2">
              Industry Standard Toolchain
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#F7F4EC] font-light">
              Engineered with Precision Software
            </h3>
            <p className="text-xs text-[#F7F4EC]/75 max-w-xl mx-auto mt-2 font-light">
              We leverage advanced CAD, BIM, and photorealistic CGI engines to ensure flawless documentation and uncompromised build fidelity.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            {softwarePartners.map((sw, i) => (
              <div
                key={i}
                className="px-5 py-2.5 bg-[#3F4728]/30 border border-[#C6A15B]/30 rounded-[1px] text-[10px] uppercase tracking-[0.18em] font-semibold text-[#F7F4EC] flex items-center space-x-2"
              >
                <span>{sw.icon}</span>
                <span>{sw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl text-[#20221A] font-light">
          Ready to discuss your architectural project?
        </h2>
        <p className="text-sm text-[#626B3A] max-w-md mx-auto font-light">
          Contact our Dubai studio to schedule an in-person or virtual consultation with our principal design team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuote}
            className="border border-[#3F4728] px-8 py-3.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] shadow-sm transition-all"
          >
            Start Your Project
          </button>
          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border border-[#3F4728] px-8 py-3.5 text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-all"
          >
            View Portfolio
          </button>
        </div>
      </section>
    </div>
  );
};
