import { TrophyProduct } from '../types/trophy';

export const TROPHY_PRODUCTS: TrophyProduct[] = [
  {
    id: 'tm-cryst-01',
    name: 'Calvin Star',
    category: 'crystal',
    categoryLabel: 'Optical Crystal',
    price: 3450,
    originalPrice: 4200,
    material: 'Optically Pure K9 Beveled Crystal & Cobalt Glass',
    height: '11.5 inches (29 cm)',
    weight: '2.4 kg',
    rating: 4.9,
    reviewsCount: 38,
    sku: 'TM-CRY-882',
    image: '/trophis/Calvin-Star-1035-G-1-3-scaled-removebg-preview.png',
    turnaroundDays: 2,
    badge: 'Flagship Award',
    silhouetteType: 'obelisk',
    primaryColor: '#0E233E',
    description: 'Precision diamond-faceted prism crafted from grade K9 optical crystal with hand-cut beveled prisms that disperse ambient illumination with brilliant prismatic clarity.',
    features: [
      'Zero-bubble high refractive index optical crystal',
      'Laser sub-surface 3D engraving or high-contrast surface frost',
      'Solid crystal base with optional embedded sapphire accent',
      'Supplied in satin-lined presentation gift casket'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3450, discount: 'Standard' },
      { minQty: 10, price: 3050, discount: '12% Off' },
      { minQty: 50, price: 2650, discount: '23% Off' },
      { minQty: 100, price: 2350, discount: '32% Off' }
    ]
  },
  {
    id: 'tm-gold-02',
    name: 'Haven Star',
    category: 'sculpted-gold',
    categoryLabel: 'Sculpted Metal & Cups',
    price: 6800,
    originalPrice: 7900,
    material: 'Spun Brass with 24k Gold Electroplate & Nero Marquina Base',
    height: '16.0 inches (40.5 cm)',
    weight: '3.8 kg',
    rating: 5.0,
    reviewsCount: 42,
    sku: 'TM-CUP-901',
    image: '/trophis/Haven-Star-1031-G-1-3-scaled-removebg-preview.png',
    turnaroundDays: 3,
    badge: 'Tournament Choice',
    silhouetteType: 'cup',
    primaryColor: '#C59B27',
    description: 'A monument to victory. Italianate sculpted scroll handles, hand-spun mirror-polished golden bell, and heavy weighted black mineral plinth suited for historic tournaments.',
    features: [
      '24-Karat gold mirror electroplate guaranteed against tarnish',
      'Hand-chased acanthus leaf filigree on stem and handles',
      'Heavyweight square stepped pedestal for wrap-around engraved plinth',
      'Suitable for annual champion perpetual nameplates'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 6800, discount: 'Standard' },
      { minQty: 5, price: 6100, discount: '10% Off' },
      { minQty: 25, price: 5400, discount: '20% Off' },
      { minQty: 50, price: 4750, discount: '30% Off' }
    ]
  },
  {
    id: 'tm-plaq-03',
    name: 'Fresco Star',
    category: 'plaques',
    categoryLabel: 'Plaques & Mementos',
    price: 2650,
    originalPrice: 3200,
    material: 'Natural Piano-Lacquered Walnut & Tempered Beveled Glass',
    height: '12 x 9 inches',
    weight: '1.6 kg',
    rating: 4.8,
    reviewsCount: 29,
    sku: 'TM-PLQ-404',
    image: '/trophis/Fresco-Star-1007-L-1-1-scaled-removebg-preview.png',
    turnaroundDays: 2,
    badge: 'Executive Top Pick',
    silhouetteType: 'plaque',
    primaryColor: '#2B1810',
    description: 'Designed for boardroom prestige. A thick sheet of crystal-clear tempered float glass suspended on four brushed brass stand-off studs over mirror-buffed dark walnut timber.',
    features: [
      'Architectural brass offset standoffs with concealed wall or desk anchors',
      'Full-color UV cured direct printing or metallic foil hot-stamping',
      'High-gloss multi-coat hand-buffed lacquer edge finish',
      'Dual orientation: portrait or landscape display'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 2650, discount: 'Standard' },
      { minQty: 15, price: 2280, discount: '14% Off' },
      { minQty: 50, price: 1950, discount: '26% Off' },
      { minQty: 100, price: 1690, discount: '36% Off' }
    ]
  },
  {
    id: 'tm-cryst-04',
    name: 'Zenith Star',
    category: 'crystal',
    categoryLabel: 'Optical Crystal',
    price: 3950,
    originalPrice: 4800,
    material: 'Solid K9 Crystal with Ruby Red Dichroic Reflection',
    height: '10.5 inches (26.7 cm)',
    weight: '2.1 kg',
    rating: 4.9,
    reviewsCount: 51,
    sku: 'TM-CRY-710',
    image: '/trophis/Zenith-Star-1022-AG-1-3-scaled-removebg-preview.png',
    turnaroundDays: 2,
    badge: 'Leadership Award',
    silhouetteType: 'star',
    primaryColor: '#C5222A',
    description: 'A dynamic five-point star soaring from a chiseled ascending pedestal. Infused with a proprietary ruby dichroic bevel layer that casts warm crimson tones into incident rays.',
    features: [
      'Deep sandcarved relief etching for exceptional tactile depth',
      'Trophy Mart signature crest ruby undertone',
      'Weighted solid crystal pedestal with felt underlay',
      'Pre-engraved or custom personalized within 48 hours'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3950, discount: 'Standard' },
      { minQty: 10, price: 3480, discount: '12% Off' },
      { minQty: 40, price: 3050, discount: '23% Off' },
      { minQty: 100, price: 2680, discount: '32% Off' }
    ]
  },
  {
    id: 'tm-med-05',
    name: 'Kite Star',
    category: 'medals',
    categoryLabel: 'Medals & Insignias',
    price: 490,
    originalPrice: 650,
    material: 'High-Density Zinc Alloy in Antique Bronze / Silver / 24k Gold Finish',
    height: '70 mm diameter x 4.5 mm thickness',
    weight: '95 grams',
    rating: 4.9,
    reviewsCount: 84,
    sku: 'TM-MED-305',
    image: '/trophis/Kite-Star-1011-L-4-scaled-removebg-preview.png',
    turnaroundDays: 2,
    badge: 'Popular Choice',
    silhouetteType: 'medal',
    primaryColor: '#C59B27',
    description: 'Substantial, heavy die-cast metal medallions with ultra-fine 3D micro-relief detailing, polished stepped rim, and custom woven jacquard silk neck ribbon.',
    features: [
      'Substantial 4.5 mm heavyweight metal gauge with crisp dual-finish contrasts',
      'Choice of Antique Gold, Sterling Antique Silver, or Rich Olympic Bronze',
      'Includes premium 38mm woven Grosgrain striped neck lanyard',
      'Custom backplate engraving or embossed front corporate crest'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 490, discount: 'Standard' },
      { minQty: 25, price: 380, discount: '22% Off' },
      { minQty: 100, price: 290, discount: '40% Off' },
      { minQty: 500, price: 195, discount: '60% Off' }
    ]
  }
  
];

export const RELATED_PRODUCTS: TrophyProduct[] = [
  {
    id: 'tm-cryst-08',
    name: 'Rolex Diamond',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 3450,
    originalPrice: 4200,
    material: 'Optically Pure K9 Beveled Crystal & Cobalt Glass',
    height: '11.5 inches (29 cm)',
    weight: '2.4 kg',
    rating: 4.9,
    reviewsCount: 38,
    sku: 'TM-CRY-882',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Rolex-Diamond-1002-L-1-2-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Flagship Award',
    silhouetteType: 'obelisk',
    primaryColor: '#0E233E',
    description: 'Precision diamond-faceted prism crafted from grade K9 optical crystal with hand-cut beveled prisms that disperse ambient illumination with brilliant prismatic clarity.',
    features: [
      'Zero-bubble high refractive index optical crystal',
      'Laser sub-surface 3D engraving or high-contrast surface frost',
      'Solid crystal base with optional embedded sapphire accent',
      'Supplied in satin-lined presentation gift casket'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3450, discount: 'Standard' },
      { minQty: 10, price: 3050, discount: '12% Off' },
      { minQty: 50, price: 2650, discount: '23% Off' },
      { minQty: 100, price: 2350, discount: '32% Off' }
    ]
  },
  {
    id: 'tm-gold-02',
    name: 'Indigo',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 6800,
    originalPrice: 7900,
    material: 'Spun Brass with 24k Gold Electroplate & Nero Marquina Base',
    height: '16.0 inches (40.5 cm)',
    weight: '3.8 kg',
    rating: 5.0,
    reviewsCount: 42,
    sku: 'TM-CUP-901',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Indigo-1003-L-4-scaled.jpg',
    turnaroundDays: 3,
    badge: 'Tournament Choice',
    silhouetteType: 'cup',
    primaryColor: '#C59B27',
    description: 'A monument to victory. Italianate sculpted scroll handles, hand-spun mirror-polished golden bell, and heavy weighted black mineral plinth suited for historic tournaments.',
    features: [
      '24-Karat gold mirror electroplate guaranteed against tarnish',
      'Hand-chased acanthus leaf filigree on stem and handles',
      'Heavyweight square stepped pedestal for wrap-around engraved plinth',
      'Suitable for annual champion perpetual nameplates'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 6800, discount: 'Standard' },
      { minQty: 5, price: 6100, discount: '10% Off' },
      { minQty: 25, price: 5400, discount: '20% Off' },
      { minQty: 50, price: 4750, discount: '30% Off' }
    ]
  },
  {
    id: 'tm-plaq-03',
    name: 'Omega Star',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 2650,
    originalPrice: 3200,
    material: 'Natural Piano-Lacquered Walnut & Tempered Beveled Glass',
    height: '12 x 9 inches',
    weight: '1.6 kg',
    rating: 4.8,
    reviewsCount: 29,
    sku: 'TM-PLQ-404',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Omega-Star-1004-L-4-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Executive Top Pick',
    silhouetteType: 'plaque',
    primaryColor: '#2B1810',
    description: 'Designed for boardroom prestige. A thick sheet of crystal-clear tempered float glass suspended on four brushed brass stand-off studs over mirror-buffed dark walnut timber.',
    features: [
      'Architectural brass offset standoffs with concealed wall or desk anchors',
      'Full-color UV cured direct printing or metallic foil hot-stamping',
      'High-gloss multi-coat hand-buffed lacquer edge finish',
      'Dual orientation: portrait or landscape display'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 2650, discount: 'Standard' },
      { minQty: 15, price: 2280, discount: '14% Off' },
      { minQty: 50, price: 1950, discount: '26% Off' },
      { minQty: 100, price: 1690, discount: '36% Off' }
    ]
  },
  {
    id: 'tm-cryst-04',
    name: 'Electron',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 3950,
    originalPrice: 4800,
    material: 'Solid K9 Crystal with Ruby Red Dichroic Reflection',
    height: '10.5 inches (26.7 cm)',
    weight: '2.1 kg',
    rating: 4.9,
    reviewsCount: 51,
    sku: 'TM-CRY-710',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Electron-1005-L-3-1-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Leadership Award',
    silhouetteType: 'star',
    primaryColor: '#C5222A',
    description: 'A dynamic five-point star soaring from a chiseled ascending pedestal. Infused with a proprietary ruby dichroic bevel layer that casts warm crimson tones into incident rays.',
    features: [
      'Deep sandcarved relief etching for exceptional tactile depth',
      'Trophy Mart signature crest ruby undertone',
      'Weighted solid crystal pedestal with felt underlay',
      'Pre-engraved or custom personalized within 48 hours'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3950, discount: 'Standard' },
      { minQty: 10, price: 3480, discount: '12% Off' },
      { minQty: 40, price: 3050, discount: '23% Off' },
      { minQty: 100, price: 2680, discount: '32% Off' }
    ]
  },
 
];

export const All_TROPHY_PRODUCTS: TrophyProduct[] = [
  {
    id: 'tm-cryst-08',
    name: 'Rolex Diamond',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 3450,
    originalPrice: 4200,
    material: 'Optically Pure K9 Beveled Crystal & Cobalt Glass',
    height: '11.5 inches (29 cm)',
    weight: '2.4 kg',
    rating: 4.9,
    reviewsCount: 38,
    sku: 'TM-CRY-882',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Rolex-Diamond-1002-L-1-2-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Flagship Award',
    silhouetteType: 'obelisk',
    primaryColor: '#0E233E',
    description: 'Precision diamond-faceted prism crafted from grade K9 optical crystal with hand-cut beveled prisms that disperse ambient illumination with brilliant prismatic clarity.',
    features: [
      'Zero-bubble high refractive index optical crystal',
      'Laser sub-surface 3D engraving or high-contrast surface frost',
      'Solid crystal base with optional embedded sapphire accent',
      'Supplied in satin-lined presentation gift casket'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3450, discount: 'Standard' },
      { minQty: 10, price: 3050, discount: '12% Off' },
      { minQty: 50, price: 2650, discount: '23% Off' },
      { minQty: 100, price: 2350, discount: '32% Off' }
    ]
  },
  {
    id: 'tm-gold-02',
    name: 'Indigo',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 6800,
    originalPrice: 7900,
    material: 'Spun Brass with 24k Gold Electroplate & Nero Marquina Base',
    height: '16.0 inches (40.5 cm)',
    weight: '3.8 kg',
    rating: 5.0,
    reviewsCount: 42,
    sku: 'TM-CUP-901',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Indigo-1003-L-4-scaled.jpg',
    turnaroundDays: 3,
    badge: 'Tournament Choice',
    silhouetteType: 'cup',
    primaryColor: '#C59B27',
    description: 'A monument to victory. Italianate sculpted scroll handles, hand-spun mirror-polished golden bell, and heavy weighted black mineral plinth suited for historic tournaments.',
    features: [
      '24-Karat gold mirror electroplate guaranteed against tarnish',
      'Hand-chased acanthus leaf filigree on stem and handles',
      'Heavyweight square stepped pedestal for wrap-around engraved plinth',
      'Suitable for annual champion perpetual nameplates'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 6800, discount: 'Standard' },
      { minQty: 5, price: 6100, discount: '10% Off' },
      { minQty: 25, price: 5400, discount: '20% Off' },
      { minQty: 50, price: 4750, discount: '30% Off' }
    ]
  },
  {
    id: 'tm-plaq-03',
    name: 'Omega Star',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 2650,
    originalPrice: 3200,
    material: 'Natural Piano-Lacquered Walnut & Tempered Beveled Glass',
    height: '12 x 9 inches',
    weight: '1.6 kg',
    rating: 4.8,
    reviewsCount: 29,
    sku: 'TM-PLQ-404',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Omega-Star-1004-L-4-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Executive Top Pick',
    silhouetteType: 'plaque',
    primaryColor: '#2B1810',
    description: 'Designed for boardroom prestige. A thick sheet of crystal-clear tempered float glass suspended on four brushed brass stand-off studs over mirror-buffed dark walnut timber.',
    features: [
      'Architectural brass offset standoffs with concealed wall or desk anchors',
      'Full-color UV cured direct printing or metallic foil hot-stamping',
      'High-gloss multi-coat hand-buffed lacquer edge finish',
      'Dual orientation: portrait or landscape display'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 2650, discount: 'Standard' },
      { minQty: 15, price: 2280, discount: '14% Off' },
      { minQty: 50, price: 1950, discount: '26% Off' },
      { minQty: 100, price: 1690, discount: '36% Off' }
    ]
  },
  {
    id: 'tm-cryst-04',
    name: 'Electron',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 3950,
    originalPrice: 4800,
    material: 'Solid K9 Crystal with Ruby Red Dichroic Reflection',
    height: '10.5 inches (26.7 cm)',
    weight: '2.1 kg',
    rating: 4.9,
    reviewsCount: 51,
    sku: 'TM-CRY-710',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Electron-1005-L-3-1-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Leadership Award',
    silhouetteType: 'star',
    primaryColor: '#C5222A',
    description: 'A dynamic five-point star soaring from a chiseled ascending pedestal. Infused with a proprietary ruby dichroic bevel layer that casts warm crimson tones into incident rays.',
    features: [
      'Deep sandcarved relief etching for exceptional tactile depth',
      'Trophy Mart signature crest ruby undertone',
      'Weighted solid crystal pedestal with felt underlay',
      'Pre-engraved or custom personalized within 48 hours'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3950, discount: 'Standard' },
      { minQty: 10, price: 3480, discount: '12% Off' },
      { minQty: 40, price: 3050, discount: '23% Off' },
      { minQty: 100, price: 2680, discount: '32% Off' }
    ]
  },



   {
    id: 'tm-cryst-10',
    name: 'Omaxe',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 3450,
    originalPrice: 4200,
    material: 'Optically Pure K9 Beveled Crystal & Cobalt Glass',
    height: '11.5 inches (29 cm)',
    weight: '2.4 kg',
    rating: 4.9,
    reviewsCount: 38,
    sku: 'TM-CRY-882',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Omaxe-1021-AC-1-2-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Flagship Award',
    silhouetteType: 'obelisk',
    primaryColor: '#0E233E',
    description: 'Precision diamond-faceted prism crafted from grade K9 optical crystal with hand-cut beveled prisms that disperse ambient illumination with brilliant prismatic clarity.',
    features: [
      'Zero-bubble high refractive index optical crystal',
      'Laser sub-surface 3D engraving or high-contrast surface frost',
      'Solid crystal base with optional embedded sapphire accent',
      'Supplied in satin-lined presentation gift casket'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3450, discount: 'Standard' },
      { minQty: 10, price: 3050, discount: '12% Off' },
      { minQty: 50, price: 2650, discount: '23% Off' },
      { minQty: 100, price: 2350, discount: '32% Off' }
    ]
  },
  {
    id: 'tm-gold-11',
    name: 'Athena Globe',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 6800,
    originalPrice: 7900,
    material: 'Spun Brass with 24k Gold Electroplate & Nero Marquina Base',
    height: '16.0 inches (40.5 cm)',
    weight: '3.8 kg',
    rating: 5.0,
    reviewsCount: 42,
    sku: 'TM-CUP-901',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Athena-Globe-1045-1-1-scaled.jpg',
    turnaroundDays: 3,
    badge: 'Tournament Choice',
    silhouetteType: 'cup',
    primaryColor: '#C59B27',
    description: 'A monument to victory. Italianate sculpted scroll handles, hand-spun mirror-polished golden bell, and heavy weighted black mineral plinth suited for historic tournaments.',
    features: [
      '24-Karat gold mirror electroplate guaranteed against tarnish',
      'Hand-chased acanthus leaf filigree on stem and handles',
      'Heavyweight square stepped pedestal for wrap-around engraved plinth',
      'Suitable for annual champion perpetual nameplates'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 6800, discount: 'Standard' },
      { minQty: 5, price: 6100, discount: '10% Off' },
      { minQty: 25, price: 5400, discount: '20% Off' },
      { minQty: 50, price: 4750, discount: '30% Off' }
    ]
  },
  {
    id: 'tm-plaq-12',
    name: 'Hercules Globe',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 2650,
    originalPrice: 3200,
    material: 'Natural Piano-Lacquered Walnut & Tempered Beveled Glass',
    height: '12 x 9 inches',
    weight: '1.6 kg',
    rating: 4.8,
    reviewsCount: 29,
    sku: 'TM-PLQ-404',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Hercules-Globe-1006-4-scaled.jpg',
    turnaroundDays: 2,
    badge: 'Executive Top Pick',
    silhouetteType: 'plaque',
    primaryColor: '#2B1810',
    description: 'Designed for boardroom prestige. A thick sheet of crystal-clear tempered float glass suspended on four brushed brass stand-off studs over mirror-buffed dark walnut timber.',
    features: [
      'Architectural brass offset standoffs with concealed wall or desk anchors',
      'Full-color UV cured direct printing or metallic foil hot-stamping',
      'High-gloss multi-coat hand-buffed lacquer edge finish',
      'Dual orientation: portrait or landscape display'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 2650, discount: 'Standard' },
      { minQty: 15, price: 2280, discount: '14% Off' },
      { minQty: 50, price: 1950, discount: '26% Off' },
      { minQty: 100, price: 1690, discount: '36% Off' }
    ]
  },
  {
    id: 'tm-cryst-14',
    name: 'Excellence Star',
    category: 'Trophies',
    categoryLabel: 'Trophies',
    price: 3950,
    originalPrice: 4800,
    material: 'Solid K9 Crystal with Ruby Red Dichroic Reflection',
    height: '10.5 inches (26.7 cm)',
    weight: '2.1 kg',
    rating: 4.9,
    reviewsCount: 51,
    sku: 'TM-CRY-710',
    image: '/trophis/t9.png',
    turnaroundDays: 2,
    badge: 'Leadership Award',
    silhouetteType: 'star',
    primaryColor: '#C5222A',
    description: 'A dynamic five-point star soaring from a chiseled ascending pedestal. Infused with a proprietary ruby dichroic bevel layer that casts warm crimson tones into incident rays.',
    features: [
      'Deep sandcarved relief etching for exceptional tactile depth',
      'Trophy Mart signature crest ruby undertone',
      'Weighted solid crystal pedestal with felt underlay',
      'Pre-engraved or custom personalized within 48 hours'
    ],
    inStock: true,
    bulkTiers: [
      { minQty: 1, price: 3950, discount: 'Standard' },
      { minQty: 10, price: 3480, discount: '12% Off' },
      { minQty: 40, price: 3050, discount: '23% Off' },
      { minQty: 100, price: 2680, discount: '32% Off' }
    ]
  },
  
 
];

export const CLIENT_LOGOS = [
  {
    name: 'Wipro',
    sector: 'Technology & Enterprise',
    logo: 'https://trophymart.co.in/wp-content/uploads/2024/07/wipro-1.png'
  },
  {
    name: 'Bennett, Coleman & Co.',
    sector: 'Media & Publishing',
    logo: 'https://trophymart.co.in/wp-content/uploads/2024/07/bennett-1.jpeg'
  },
  {
    name: 'Bank of India',
    sector: 'National Banking',
    logo: 'https://trophymart.co.in/wp-content/uploads/2024/07/BOI-1.png'
  },
  {
    name: 'Calcutta University',
    sector: 'Higher Education',
    logo: 'https://trophymart.co.in/wp-content/uploads/2024/07/cu-1.png'
  },
  {
    name: 'HDFC',
    sector: 'Banking & Financial Services',
    logo: 'https://trophymart.co.in/wp-content/uploads/2024/07/hdfc-1.png'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Prajakta Samant',
    designation: 'Head of People Operations',
    organization: 'FinTech Leaders Forum',
    quote: 'Trophy Mart produced 240 custom crystal obelisks for our Mumbai Leadership Conclave in just 48 hours. The weight, the diamond facet clarity, and the flawless laser engraving drew unanimous praise from our board.',
    city: 'Mumbai',
    rating: 5,
    event: 'Annual Leadership Gala'
  },
  {
    id: 't-2',
    name: 'Sofia Recalde',
    designation: 'Director of Global Events',
    organization: 'Nexus International Education',
    quote: 'We have commissioned graduation mementos across three countries. Trophy Mart stands unmatched in material precision, exact brand color reproduction on the backplates, and robust protective packaging.',
    city: 'Bengaluru',
    rating: 5,
    event: 'International Convocation'
  },
  {
    id: 't-3',
    name: 'Swati Gidwani',
    designation: 'Vice President, Corporate Relations',
    organization: 'Apex Life Sciences',
    quote: 'The 3D CAD proofing process made it effortless. We could see the exact proportions and metallic reflection before casting began. Direct manufacturer pricing saved us nearly 30% versus agency brokers.',
    city: 'New Delhi',
    rating: 5,
    event: 'Excellence in Research Awards'
  }
];

export const FAQS = [
  {
    question: 'Can I customize trophies with our company logo and individual recipient names?',
    answer: 'Absolutely. Every trophy, plaque, and medal we produce can be customized with high-resolution vector logos, personalized recipient names, designation titles, and event dates. We support laser surface etching, 3D sub-surface laser crystal engraving, direct full-color UV cure printing, and diamond-drag metal marking.'
  },
  {
    question: 'How fast can you deliver urgent bulk orders across India?',
    answer: 'We manufacture and assemble in-house, eliminating middleman delays. In-stock catalog awards with custom engraving are dispatched in 24 to 48 hours. Custom sculpted or cast awards typically require 3 to 5 working days. We ship via express air cargo with real-time tracking to 66+ cities nationwide.'
  },
  {
    question: 'What materials do you specialize in?',
    answer: 'Our state-of-the-art facility crafts in premium optical K9 crystal, imported cast acrylic, 24k electroplated brass and bronze, sculptural fiber-resin composites, and natural hand-buffed hardwoods (such as African Mahogany and American Walnut).'
  },
  {
    question: 'Can we receive a digital 3D proof or sample before placing a volume order?',
    answer: 'Yes. Before manufacturing commences on custom awards, our senior design team renders a detailed 2D/3D digital visual proof showing precise dimensions, typography placement, and logo alignment for your team’s formal sign-off.'
  },
  {
    question: 'Are there wholesale volume discounts for corporate and tournament bulk orders?',
    answer: 'Yes. As a direct factory manufacturer, we offer tiered volume pricing starting from 10 units up to 10,000+ units. Discounts range from 12% to over 40% off standard catalog rates. You can request a tailored GST quotation through our Bulk Quotation tool.'
  }
];
