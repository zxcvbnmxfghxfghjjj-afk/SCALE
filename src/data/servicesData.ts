import { Service, ProcessStep, StatItem } from '../types';

export const servicesData: Service[] = [
  {
    id: 'serv-01',
    number: '01',
    title: 'Interior Design & Space Planning',
    category: 'Design',
    shortDescription: 'A considered blueprint for how your space feels, functions, and flows. From floor plans to full material palettes.',
    fullDescription: 'We develop comprehensive interior architectural concepts tailored to your lifestyle or brand requirements. Our designers balance human ergonomics, circulation pathways, natural daylight analysis, and spatial proportion to deliver harmonious environments.',
    deliverables: [
      'Concept moodboards & spatial layout diagrams',
      'Full material, finishes & color specification boards',
      'Reflected ceiling & lighting layout plans',
      'Bathroom, kitchen, and millwork conceptual designs',
      'Curated FF&E (Furniture, Fixtures & Equipment) schedules'
    ],
    keyFeatures: ['Ergonomic optimization', 'Harmonious spatial flow', 'Bespoke material curation', 'Lighting scene orchestration'],
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    typicalDuration: '4 – 8 Weeks',
    relatedCategory: 'living-rooms'
  },
  {
    id: 'serv-02',
    number: '02',
    title: '3D Visualization & VR Walkthroughs',
    category: 'Visualisation',
    shortDescription: 'Photorealistic architectural CGI renderings and immersive virtual walkthroughs to experience your space before breaking ground.',
    fullDescription: 'Eliminating guesswork, our in-house visualization team generates hyper-realistic 3D renderings showcasing exact lighting conditions, true-to-life textures, and bespoke furniture finishes. Clients can review every angle and fine-tune details with full confidence.',
    deliverables: [
      'High-resolution 4K photorealistic still renders',
      '360-degree interactive panoramic virtual tours',
      'Daylight vs. night mood lighting simulations',
      'Cinematic video walkthrough animations',
      'Material swatch swap previews'
    ],
    keyFeatures: ['True material physics (PBR)', 'Day & night lighting studies', 'Interactive 360° panoramas', 'VR headset compatibility'],
    iconName: 'Box',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    typicalDuration: '2 – 4 Weeks',
    relatedCategory: 'villas'
  },
  {
    id: 'serv-03',
    number: '03',
    title: 'Fit-Out Works & Turnkey Execution',
    category: 'Delivery',
    shortDescription: 'Flawless site supervision and construction execution ensuring designs are translated with millimetric precision.',
    fullDescription: 'From demolition and structural partition framing to MEP coordination and delicate marble installation, our project management team oversees every trade. We maintain rigorous quality control, adherence to timelines, and transparent budget management.',
    deliverables: [
      'Dedicated on-site project management & daily logs',
      'Civil, electrical, plumbing & HVAC coordination',
      'Authority approvals & municipality permitting management',
      'Snagging audit and flawless handover protocol',
      'Post-occupancy warranty & maintenance support'
    ],
    keyFeatures: ['Dedicated project manager', 'Strict milestone timeline', 'Authority permitting handled', 'Turnkey handover warranty'],
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    typicalDuration: '8 – 16 Weeks',
    relatedCategory: 'villas'
  },
  {
    id: 'serv-04',
    number: '04',
    title: 'Custom Furniture & Joinery Fabrication',
    category: 'Delivery',
    shortDescription: 'Bespoke millwork, TV feature units, dressing rooms, and signature furniture tailored for your exact proportions.',
    fullDescription: 'Standard furniture often fails to fit unique architectural niches or match specific timber grains. SCALE designs and manufactures custom dressing rooms, TV wall units, dining tables, and upholstered seating through our vetted artisanal workshops.',
    deliverables: [
      'Custom joinery fabrication drawings & 3D mockups',
      'Material and hardware samples for physical approval',
      'Precision CNC timber cutting and hand-finished veneers',
      'Integrated soft-close Blum/Hettich luxury hardware',
      'Professional white-glove on-site installation'
    ],
    keyFeatures: ['Bespoke dimensional fit', 'Premium European hardware', 'Integrated LED channels', 'Custom leather & metal inlays'],
    iconName: 'Armchair',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    typicalDuration: '4 – 6 Weeks',
    relatedCategory: 'dressing-rooms'
  },
  {
    id: 'serv-05',
    number: '05',
    title: 'Technical & Detailed Shop Drawings',
    category: 'Design',
    shortDescription: 'Comprehensive architectural drawing packages, MEP schematics, and millwork details ready for contractor execution.',
    fullDescription: 'We produce buildable, code-compliant technical documentation that leaves no room for ambiguity on site. Every elevation, section, ceiling detail, electrical drop, and tile layout is mapped with millimetric accuracy.',
    deliverables: [
      'Demolition & construction partition layout plans',
      'Reflected ceiling plans (RCP) with lighting circuiting',
      'Detailed interior wall elevations & sections (1:20 & 1:5)',
      'Plumbing, HVAC & electrical coordination drawings',
      'Detailed joinery shop drawings with hardware schedules'
    ],
    keyFeatures: ['Millimetric accuracy', 'MEP coordination', 'Tender-ready documentation', 'Local code compliance'],
    iconName: 'FileText',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    typicalDuration: '3 – 5 Weeks',
    relatedCategory: 'living-rooms'
  },
  {
    id: 'serv-06',
    number: '06',
    title: 'Design Consultation & Styling',
    category: 'Design',
    shortDescription: 'Expert guidance on spatial flow, art curation, window drapery, accent lighting, and decorative accessories.',
    fullDescription: 'For clients seeking to refresh existing interiors without extensive construction, our styling consultation elevates your space through curated furniture pieces, tactile rugs, bespoke curtains, sculpture, and collector artworks.',
    deliverables: [
      '1-on-1 on-site or virtual design consultation sessions',
      'Curated shopping list with direct vendor discounts',
      'Color palette & wallpaper recommendations',
      'Curtain, drapery & rug custom sizing specifications',
      'Final on-site styling & art placement day'
    ],
    keyFeatures: ['Rapid turnaround', 'Exclusive trade discounts', 'Curated art & accessories', 'Turnkey styling setup'],
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    typicalDuration: '1 – 2 Weeks',
    relatedCategory: 'furniture'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    description: 'We meet to understand your lifestyle, spatial aspirations, functional requirements, and investment parameters.',
    duration: 'Week 1',
    deliverable: 'Design Brief & Scope Roadmap'
  },
  {
    step: '02',
    title: 'Concept & Spatial Planning',
    description: 'Developing preliminary layout alternatives, moodboards, material palettes, and architectural volume studies.',
    duration: 'Weeks 2 – 3',
    deliverable: 'Approved Layouts & Mood Direction'
  },
  {
    step: '03',
    title: '3D Visualization & Refinement',
    description: 'Translating concepts into photorealistic 3D renders, allowing you to experience the exact lighting and materiality.',
    duration: 'Weeks 4 – 6',
    deliverable: '4K Photorealistic Renders & VR Tour'
  },
  {
    step: '04',
    title: 'Technical Detailing & Fit-Out',
    description: 'Producing detailed shop drawings, obtaining permits, and executing construction with strict quality benchmarks.',
    duration: 'Weeks 7 – 14',
    deliverable: 'Technical Package & On-site Build'
  },
  {
    step: '05',
    title: 'Handover & Final Styling',
    description: 'White-glove placement of custom furniture, artwork, drapery, and final snagging audit for a pristine handover.',
    duration: 'Handover Week',
    deliverable: 'Turnkey Move-in Ready Space'
  }
];

export const statsData: StatItem[] = [
  { value: '10+', label: 'Years of Experience', sublabel: 'Crafting luxury architectural spaces' },
  { value: '250+', label: 'Projects Completed', sublabel: 'Across UAE and international residences' },
  { value: '98%', label: 'Client Satisfaction', sublabel: 'High client referral & repeat rate' },
  { value: '20+', label: 'Design & Build Experts', sublabel: 'Architects, engineers & artisans' }
];
