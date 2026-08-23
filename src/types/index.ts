export type ProjectCategory = 
  | 'all'
  | 'living-rooms'
  | 'bedrooms'
  | 'dressing-rooms'
  | 'tv-units'
  | 'kitchens'
  | 'villas'
  | 'furniture'
  | 'commercial';

export interface ProjectImage {
  url: string;
  caption: string;
  type?: 'landscape' | 'portrait' | 'detail' | 'render' | 'floorplan';
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subtitle: string;
  summary: string;
  fullDescription: string;
  concept: string;
  location: string;
  year: string;
  area: string;
  scope: string[];
  materials: string[];
  coverImage: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: ProjectImage[];
  featured: boolean;
  highlights: string[];
  testimonial?: {
    quote: string;
    client: string;
    role?: string;
  };
  relatedProjectSlugs: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  category: 'Design' | 'Visualisation' | 'Delivery';
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  keyFeatures: string[];
  iconName: string;
  image: string;
  typicalDuration: string;
  relatedCategory: ProjectCategory;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}
