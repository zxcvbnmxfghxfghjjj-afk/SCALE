import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-01',
    slug: 'al-barari-modern-living-pavilion',
    title: 'Modern Living Pavilion',
    category: 'living-rooms',
    categoryLabel: 'Living Room',
    subtitle: 'Warm minimalism with bespoke fluted acoustic timber & concealed ambient lighting',
    summary: 'A calm, expansive residential living room featuring travertine monoliths, low-profile custom Italian bouclé seating, and integrated architectural joinery.',
    fullDescription: 'Designed for a contemporary villa in Dubai, this living room exemplifies our studio’s philosophy of "Space, scaled with intent." The space balances open-plan connectivity with intimate conversation zones. We introduced floor-to-ceiling smoked oak wall paneling with brushed champagne brass reveals, anchoring the seating zone with an organic brushed travertine coffee table and understated wool rug.',
    concept: 'The design concept centers on tactile warmth and architectural serenity. By eliminating visual clutter through hidden storage solutions and continuous linear lighting coves, the room transitions seamlessly from a bright daytime salon to a warm, ambient evening lounge.',
    location: 'Al Barari, Dubai, UAE',
    year: '2025',
    area: '145 m²',
    scope: ['Full Interior Architecture', 'Custom Furniture Fabrication', 'Lighting Design', 'Material Sourcing', 'Turnkey Fit-Out'],
    materials: ['Roman Travertine', 'Smoked European Oak', 'Brushed Champagne Brass', 'Textured Bouclé', 'Linen Sheers'],
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Primary salon seating zone with custom travertine tables and low-profile modular sofa',
        type: 'landscape',
        alt: 'Warm toned modern luxury living room'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
        caption: 'Integrated architectural shelving with warm 2700K recessed lighting',
        type: 'portrait',
        alt: 'Bespoke joinery with books and sculptural ceramics'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Seamless connection to exterior terrace through double-glazed pivot glass doors',
        type: 'landscape',
        alt: 'Living space connecting to garden view'
      },
      {
        url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
        caption: 'Detailed junction of brushed brass shadow gap against smoked oak wall panel',
        type: 'detail',
        alt: 'Champagne gold architectural detail'
      }
    ],
    featured: true,
    highlights: [
      'Custom acoustic fluted wall paneling with sound dampening',
      'Dual-zone 2700K Lutron architectural dimming system',
      'Integrated floating bio-ethanol fireplace with honed quartzite plinth',
      'Curated contemporary artworks and artisanal ceramic lighting'
    ],
    testimonial: {
      quote: 'SCALE transformed our expansive living area into a space that feels deeply tranquil yet impeccably refined. Their attention to material junctions and lighting mood is extraordinary.',
      client: 'Tarek & Nour Al-Mansoor',
      role: 'Homeowners'
    },
    relatedProjectSlugs: ['palm-jumeirah-minimalist-media-unit', 'emirates-hills-serene-master-suite']
  },
  {
    id: 'proj-02',
    slug: 'emirates-hills-serene-master-suite',
    title: 'Serene Master Suite & Retreat',
    category: 'bedrooms',
    categoryLabel: 'Bedrooms',
    subtitle: 'Quiet luxury master sanctuary featuring upholstered acoustic headboard & mood illumination',
    summary: 'A restful master bedroom suite created with organic neutral textiles, concealed bedside charging niches, and custom dark olive walnut dressers.',
    fullDescription: 'Conceived as a sanctuary away from the vibrant city, this master suite utilizes a serene palette of warm ivory micro-cement, brushed bronze hardware, and tailored suede-paneled headboards. Every element is proportioned to promote rest, with soft perimeter wash lighting that eliminates harsh shadows.',
    concept: 'Harmonious spatial layering: creating distinct micro-spaces for restful sleep, morning reading, and evening contemplation without dividing the room visually.',
    location: 'Emirates Hills, Dubai, UAE',
    year: '2025',
    area: '82 m²',
    scope: ['Interior Design', 'Custom Bed & Joinery', 'Curtain Drapery System', 'Lighting & Automation'],
    materials: ['Walnut Timber', 'Cashmere Wool Headboard', 'Honed Calacatta Marble', 'Brushed Bronze'],
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Full view of master bed with bespoke padded headboard spanning wall-to-wall',
        type: 'landscape',
        alt: 'Master bedroom with neutral palette'
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
        caption: 'Bedside detail with suspended glass pendant and recessed marble ledge',
        type: 'portrait',
        alt: 'Bedside table with luxury brass details'
      },
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1400&q=85',
        caption: 'Reading armchair nook framed by floor-to-ceiling motorized blackout linen curtains',
        type: 'detail',
        alt: 'Reading nook with accent chair'
      }
    ],
    featured: true,
    highlights: [
      'Motorized dual sheer and blackout drapery integrated in ceiling pocket',
      'Floating walnut nightstands with hidden wireless induction charging',
      'Micro-cement feature wall with soft acoustic attenuation'
    ],
    testimonial: {
      quote: 'The level of comfort and acoustic serenity SCALE delivered in our bedroom suite exceeded all expectations. It feels like a private 5-star boutique retreat.',
      client: 'Mariam K.',
      role: 'Private Client'
    },
    relatedProjectSlugs: ['al-barari-modern-living-pavilion', 'downtown-luxury-walk-in-dressing-suite']
  },
  {
    id: 'proj-03',
    slug: 'downtown-luxury-walk-in-dressing-suite',
    title: 'Haute Couture Dressing Suite',
    category: 'dressing-rooms',
    categoryLabel: 'Dressing Rooms',
    subtitle: 'Bespoke glass-front wardrobe systems with leather drawer inserts & central vanity island',
    summary: 'An architectural walk-in wardrobe and dressing room engineered with integrated LED shelving, motorized jewelry drawers, and bronze-tinted glass doors.',
    fullDescription: 'Tailored for an avid fashion collector in Downtown Dubai, this dressing suite combines precision joinery with high-end retail boutique sophistication. The space features climate-controlled handbag vitrines, customized shoe display towers with angled shelves, and a monolithic marble-topped island with lined velvet organization trays.',
    concept: 'Showcasing personal collections like curated museum exhibits while offering effortless daily functionality and optimal daylight color rendering.',
    location: 'Downtown Dubai, UAE',
    year: '2024',
    area: '48 m²',
    scope: ['Wardrobe Architecture', 'Custom Millwork Fabrication', 'Vanity & Island Design', '95+ CRI Lighting'],
    materials: ['Bronze Smoked Glass', 'Saddle Leather Trims', 'Nero Marquina Marble', 'Anodized Champagne Aluminum'],
    coverImage: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=85',
        caption: 'Central dressing island surrounded by illuminated glass wardrobe modules',
        type: 'landscape',
        alt: 'Luxury walk-in closet with glass doors'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
        caption: 'Bespoke makeup vanity with backlit halo mirror and fluted vanity drawers',
        type: 'portrait',
        alt: 'Vanity desk with mirror and lighting'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1400&q=85',
        caption: 'Detail of leather lined watch & jewelry compartments with soft-close motion',
        type: 'detail',
        alt: 'Jewelry drawer details'
      }
    ],
    featured: true,
    highlights: [
      'Proximity sensor lighting activated upon wardrobe door opening',
      'Integrated steam-care closet compartment',
      'Dual-side full-height bronze vanity mirrors with variable color temperature'
    ],
    relatedProjectSlugs: ['emirates-hills-serene-master-suite', 'palm-jumeirah-minimalist-media-unit']
  },
  {
    id: 'proj-04',
    slug: 'palm-jumeirah-minimalist-media-unit',
    title: 'Architectural Media & TV Unit',
    category: 'tv-units',
    categoryLabel: 'TV Units',
    subtitle: 'Sculptural stone slab TV feature wall with concealed acoustic speaker mesh & floating console',
    summary: 'A seamless media center integrating an 85-inch display flush with bookmatched porcelain slabs, hidden AV cabinets, and low-glow linear cove lighting.',
    fullDescription: 'To eliminate messy cables and intrusive electronic boxes in a Palm Jumeirah residence, SCALE engineered a bespoke monolithic TV wall. The design integrates acoustic fabric panels matching the exact paint shade of the wall to conceal surround sound speakers, while the floating console below houses subwoofers with active ventilation.',
    concept: 'Turning home entertainment into an elegant architectural sculpture rather than a tech-dominated wall.',
    location: 'Palm Jumeirah, Dubai',
    year: '2024',
    area: '28 m² Feature Wall',
    scope: ['Custom TV Unit Engineering', 'Audio-Visual Concealment', 'Stone Bookmatching', 'Joinery Fabrication'],
    materials: ['Taj Mahal Quartzite', 'Fluted Dark Olive Timber', 'Charcoal Acoustic Fabric', 'Brushed Brass Handles'],
    coverImage: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1600&q=85',
        caption: 'Full frontal view of the floating TV console with bookmatched stone background',
        type: 'landscape',
        alt: 'Minimalist TV unit with stone wall'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
        caption: 'Perspective angle showing the concealed wiring channels and cantilevered bench',
        type: 'portrait',
        alt: 'Floating console with warm under-cabinet lighting'
      }
    ],
    featured: true,
    highlights: [
      'Concealed magnetic service access panel for AV equipment',
      'Continuous warm 2400K underside perimeter wash',
      'Hidden cable management channels cast inside wall sub-structure'
    ],
    relatedProjectSlugs: ['al-barari-modern-living-pavilion', 'saadiyat-villa-culinary-atelier']
  },
  {
    id: 'proj-05',
    slug: 'saadiyat-villa-culinary-atelier',
    title: 'Culinary Atelier & Dining Space',
    category: 'kitchens',
    categoryLabel: 'Kitchens',
    subtitle: 'Monolithic quartz kitchen island with pocket-door pantry & integrated Miele appliances',
    summary: 'A refined show kitchen and casual breakfast salon with handleless fluted oak cabinetry, waterfall island edges, and concealed prep zone.',
    fullDescription: 'This open-concept kitchen in Saadiyat Island serves as the heart of family gatherings. We specified handleless cabinetry with matte anti-fingerprint finishes, contrasted by an impressive 4-meter quartzite island with cantilevered seating for five.',
    concept: 'Culinary performance meets furniture aesthetics: transforming functional kitchen equipment into clean architectural volumes.',
    location: 'Saadiyat Island, Abu Dhabi',
    year: '2025',
    area: '65 m²',
    scope: ['Kitchen Architecture', 'Cabinetry Fabrication', 'Appliance Integration', 'Stone Fabrication'],
    materials: ['Ceppo di Gré Stone', 'Smoked European Walnut', 'Matte Lacquer', 'Champagne Faucets'],
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Panoramic view of kitchen island with integrated downdraft induction cooktop',
        type: 'landscape',
        alt: 'Modern open plan kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
        caption: 'Pantry pocket doors opened to reveal coffee bar and glassware display',
        type: 'portrait',
        alt: 'Kitchen coffee bar with brass fixtures'
      }
    ],
    featured: false,
    highlights: [
      'Concealed prep kitchen access via seamless disguised cabinet door',
      'Integrated induction hob with flush downdraft extraction',
      'Solid brass bespoke cabinet pull tabs and undermount sinks'
    ],
    relatedProjectSlugs: ['al-barari-modern-living-pavilion', 'nur-island-luxury-villa-interior']
  },
  {
    id: 'proj-06',
    slug: 'nur-island-luxury-villa-interior',
    title: 'Nur Island Coastal Villa',
    category: 'villas',
    categoryLabel: 'Villas',
    subtitle: 'Comprehensive 6-bedroom villa interior with double-height foyer & custom millwork',
    summary: 'A 950 m² private seaside residence showcasing bespoke joinery throughout living zones, private suites, and an architectural sculptural staircase.',
    fullDescription: 'A landmark turnkey project executed by SCALE. From spatial planning and MEP coordination to bespoke loose furniture and art curation, every square meter was crafted to capture natural Arabian Gulf light while framing interior architectural moments.',
    concept: 'Seamless dialogue between expansive outdoor light and introspective, tactile indoor sanctuaries.',
    location: 'Abu Dhabi, UAE',
    year: '2025',
    area: '950 m²',
    scope: ['Full Villa Architecture & Interior', 'Custom Furniture', '3D Walkthroughs', 'Turnkey Construction Supervision'],
    materials: ['Limestone Flooring', 'Slatted Walnut', 'Custom Cast Bronze', 'Brushed Linen', 'Onyx Feature Walls'],
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        caption: 'Double height entrance hall with custom cast bronze chandelier and limestone walls',
        type: 'landscape',
        alt: 'Villa entrance foyer'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Formal dining hall with 14-seat custom marble dining table',
        type: 'landscape',
        alt: 'Luxury villa dining room'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
        caption: 'Private family lounge overlooking infinity pool terrace',
        type: 'portrait',
        alt: 'Family lounge'
      }
    ],
    featured: true,
    highlights: [
      'Custom 14-seat monolithic marble dining table with bronze base',
      'Smart home automation for climate, blinds, and ambient circadian lighting',
      'Private spa suite with Finnish sauna and steam room'
    ],
    testimonial: {
      quote: 'SCALE delivered our villa with unmatched craftsmanship. The coordination between structural engineering, joinery, and styling created a cohesive masterpiece.',
      client: 'Dr. Sultan Al-Qasimi',
      role: 'Villa Owner'
    },
    relatedProjectSlugs: ['al-barari-modern-living-pavilion', 'saadiyat-villa-culinary-atelier']
  },
  {
    id: 'proj-07',
    slug: 'custom-sculptural-furniture-collection',
    title: 'Curated Custom Furniture Suite',
    category: 'furniture',
    categoryLabel: 'Custom Furniture',
    subtitle: 'Limited-edition bespoke consoles, dining tables & lounge chairs designed in-house',
    summary: 'A collection of custom handcrafted tables, modular sofas, and upholstered bench seating created exclusively for SCALE residential projects.',
    fullDescription: 'To ensure our projects maintain unmatched uniqueness, SCALE produces custom furniture pieces designed in our studio and fabricated by master artisans. Every piece undergoes rigorous ergonomics studies, timber grain alignment, and custom upholstery stitching.',
    concept: 'Form following proportion: crafting heirloom pieces with architectural integrity and timeless longevity.',
    location: 'Design Studio Workshop, UAE',
    year: '2025',
    area: '18 Custom Pieces',
    scope: ['Industrial Design', 'Joinery Prototyping', 'Upholstery Selection', 'Artisanal Metal Casting'],
    materials: ['Solid European Ash', 'Brushed Champagne Brass', 'Saddle Leather', 'Bouclé Fabric'],
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
        caption: 'Bespoke sculptural lounge chair with tactile upholstery and warm oak frame',
        type: 'landscape',
        alt: 'Custom designer chair'
      },
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=85',
        caption: 'Handcrafted solid timber credenza with brass push-latches',
        type: 'portrait',
        alt: 'Custom wood credenza'
      }
    ],
    featured: false,
    highlights: [
      'Hand-selected FSC-certified timber stock',
      'Dual-density high-resilience foam cushioning for supreme comfort',
      'Micro-etched brass branding emblem embedded into each piece'
    ],
    relatedProjectSlugs: ['al-barari-modern-living-pavilion', 'emirates-hills-serene-master-suite']
  },
  {
    id: 'proj-08',
    slug: 'difc-executive-private-office',
    title: 'Executive Private Atelier & Office',
    category: 'commercial',
    categoryLabel: 'Commercial & Offices',
    subtitle: 'Boutique financial office suite with acoustic oak wall paneling & boardroom styling',
    summary: 'A sophisticated workplace featuring private client salons, custom conference table with hidden connectivity, and refined hospitality bar.',
    fullDescription: 'Located in DIFC, this boutique executive office redefines corporate interior design with a warm residential feel. High acoustic insulation was integrated behind slatted timber paneling, while warm indirect lighting replaces standard commercial troffers.',
    concept: 'Residential comfort elevated for high-stakes business discussions and private client hospitality.',
    location: 'DIFC, Dubai, UAE',
    year: '2024',
    area: '220 m²',
    scope: ['Commercial Interior Architecture', 'Acoustic Engineering', 'Custom Boardroom Joinery', 'Fit-Out'],
    materials: ['Dark Smoked Oak', 'Bronze Glass Partitions', 'Calacatta Vagli Marble', 'Wool Carpet'],
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Executive boardroom featuring custom 12-person walnut conference table',
        type: 'landscape',
        alt: 'Luxury private office boardroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85',
        caption: 'Private partner suite with bespoke credenza and private salon seating',
        type: 'portrait',
        alt: 'Partner office room'
      }
    ],
    featured: false,
    highlights: [
      'STC 55 rated acoustic glass partitions with bronze framing',
      'Concealed motorized projection and videoconference gear',
      'Private executive espresso & beverage bar with chilled wine preservation'
    ],
    relatedProjectSlugs: ['al-barari-modern-living-pavilion', 'downtown-luxury-walk-in-dressing-suite']
  }
];
