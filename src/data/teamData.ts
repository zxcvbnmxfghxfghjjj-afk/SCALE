import { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ahmed Khaled',
    role: 'Founder & Principal Architect',
    bio: 'With over 14 years of experience leading high-end residential and commercial architecture across the Middle East and Europe, Ahmed guides the studio’s design vision and proportion principles.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    specialty: 'Architectural Proportion & Spatial Mastery',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'team-2',
    name: 'Sara Mohamed',
    role: 'Head of Interior Design',
    bio: 'Sara specializes in luxury residential materiality, curated FF&E, and custom millwork detailing. Her work seamlessly unites tactile textures with functional serenity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    specialty: 'Material Sourcing & Tactile Layering',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'team-3',
    name: 'Omar Hassan',
    role: 'Project Director & Fit-Out Lead',
    bio: 'Overseeing site execution, MEP coordination, and precision craftsmanship, Omar ensures that every line drawn on paper is executed with zero compromise on site.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    specialty: 'Engineering Precision & Quality Control',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'omar@scale.com'
    }
  },
  {
    id: 'team-4',
    name: 'Nour Al-Ali',
    role: 'Lead 3D Visualizer & CG Artist',
    bio: 'Nour brings architectural concepts to vivid life through photorealistic lighting simulations, Unreal Engine walkthroughs, and cinematic animations.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85',
    specialty: 'Photorealistic CGI & Lighting Simulation',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  }
];

export const clientReviews = [
  {
    id: 'rev-1',
    name: 'Rashid & Fatima Al-Nuaimi',
    project: 'Private Villa Interior, Abu Dhabi',
    comment: 'Working with SCALE was a masterclass in calm professionalism. They listened to how our family lives, delivered exquisite 3D renders that were 100% true to the finished home, and delivered on time.',
    rating: 5,
    date: 'January 2025'
  },
  {
    id: 'rev-2',
    name: 'David & Claire Vance',
    project: 'Penthouse Renovation, Dubai Marina',
    comment: 'The custom joinery, dressing room, and lighting scenes created by SCALE transformed a cold glass apartment into a warm, deeply sophisticated architectural haven.',
    rating: 5,
    date: 'November 2024'
  },
  {
    id: 'rev-3',
    name: 'Kareem Mansoor',
    project: 'Executive Private Office, DIFC',
    comment: 'SCALE understands the intersection of prestige and understated elegance. Their acoustic solutions and bespoke boardroom table are admired by all our international visitors.',
    rating: 5,
    date: 'February 2025'
  }
];

export const faqsData = [
  {
    question: 'How do we begin a project with SCALE?',
    answer: 'The process begins with an initial design consultation where we explore your spatial needs, style preferences, project timeline, and budget. You can request a consultation via our contact form or directly via WhatsApp.'
  },
  {
    question: 'Do you handle both design and complete fit-out execution?',
    answer: 'Yes. SCALE offers comprehensive turnkey services. We manage the entire lifecycle—from spatial planning and 3D visualization to municipality permits, custom furniture fabrication, on-site construction, and final styling.'
  },
  {
    question: 'Can I engage SCALE for custom furniture and joinery only?',
    answer: 'Absolutely. We regularly design and manufacture standalone custom dressing rooms, TV media wall units, walk-in closets, and bespoke dining suites for clients looking to elevate specific areas of their home.'
  },
  {
    question: 'What is the typical timeline for a residential project?',
    answer: 'Design and 3D visualization typically take 4 to 8 weeks depending on project scale. Construction and fit-out range from 8 to 16 weeks for standard residences to 24+ weeks for extensive luxury villas.'
  },
  {
    question: 'Do you work with international clients outside the UAE?',
    answer: 'Yes, our design and 3D architectural visualization services are available globally. We collaborate remotely with international clients, providing complete buildable technical packages and procurement schedules.'
  }
];

export const softwarePartners = [
  { name: 'Autodesk AutoCAD & Revit', icon: '📐' },
  { name: 'SketchUp Pro', icon: '🏛️' },
  { name: 'Chaos V-Ray', icon: '✨' },
  { name: 'Adobe Creative Suite', icon: '🎨' },
  { name: 'Autodesk 3ds Max', icon: '🏢' },
  { name: 'Corona Renderer', icon: '💡' }
];

export const contactInfo = {
  phone: '+971 4 382 9100',
  whatsapp: '+971 56 313 1834',
  whatsappUrl: 'https://wa.me/971563131834?text=Hello%20SCALE%20Team,%20I%20would%20like%20to%20inquire%20about%20an%20interior%20design%20project.',
  email: 'info@scale-interiors.com',
  address: 'Level 14, Design Tower, Al Abraj Street, Business Bay, Dubai, UAE',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  pinterest: 'https://pinterest.com'
};
