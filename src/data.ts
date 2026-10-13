export type CategoryId = 'trottinettes' | 'velos' | 'skates' | 'roues' | 'accessoires';

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: CategoryId;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  badge: string | null;
  image: string;
  gallery: string[];
  description: string;
  specs: { label: string; value: string }[];
};

export const IMG = {
  heroBg: '/mobilite/trotinettes-veloElec.webp',
  heroPoster: '/video/hero-poster.webp',
  heroVideo: '/video/hero.mp4',
  heroSide: '/mobilite/trottinette1.webp',
  scooter: '/mobilite/trottinette2.webp',
  bike: '/mobilite/velo1.webp',
  bikeAlt: '/mobilite/velo2.webp',
  skate: '/mobilite/skate1.webp',
  wheel: '/mobilite/monoroue1.webp',
  accessories: '/mobilite/accessoires-banner.webp',
  community: '/mobilite/monoroue-skate.webp',
};

export type Category = {
  id: CategoryId;
  label: string; // titre sur 2 lignes (\n)
  plural: string;
  tag: string;
  image: string;
  intro: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 'trottinettes',
    label: 'TROTTINETTES\nÉLECTRIQUES',
    plural: 'Trottinettes électriques',
    tag: 'Bestseller',
    image: IMG.scooter,
    intro: 'Pliables, légères ou tout-terrain : la solution idéale pour le dernier kilomètre comme pour le trajet quotidien.',
  },
  {
    id: 'velos',
    label: 'VÉLOS\nÉLECTRIQUES',
    plural: 'Vélos électriques',
    tag: 'Nouveau',
    image: IMG.bike,
    intro: 'Pliant, urbain, fat bike ou trekking : de l’assistance électrique fiable pour parcourir la ville sans effort.',
  },
  {
    id: 'skates',
    label: 'SKATES\nÉLECTRIQUES',
    plural: 'Skates électriques',
    tag: 'Tendance',
    image: IMG.skate,
    intro: 'Glisse, accélération et télécommande sans fil : la mobilité urbaine version street.',
  },
  {
    id: 'roues',
    label: 'ROUES\nÉLECTRIQUES',
    plural: 'Roues électriques',
    tag: 'Premium',
    image: IMG.wheel,
    intro: 'Monoroues compactes ou tout-terrain pour une conduite intuitive et sensationnelle.',
  },
  {
    id: 'accessoires',
    label: 'ACCESSOIRES\n& SÉCURITÉ',
    plural: 'Accessoires & sécurité',
    tag: 'Essentiel',
    image: IMG.accessories,
    intro: 'Casques, antivols, supports et sacoches : tout l’équipement pour rouler en sécurité et en confort.',
  },
];

const p = (
  id: string, name: string, brand: string, category: CategoryId, price: number,
  oldPrice: number | null, rating: number, reviews: number, badge: string | null,
  images: string[], description: string, specs: [string, string][],
): Product => ({
  id, name, brand, category, price, oldPrice, rating, reviews, badge,
  image: images[0],
  gallery: images,
  description,
  specs: specs.map(([label, value]) => ({ label, value })),
});

const m = (f: string) => `/mobilite/${f}.webp`;

export const PRODUCTS: Product[] = [
  /* Trottinettes */
  p('trottinette-pro-x12', 'Trottinette Pro X12', 'Xiaomi', 'trottinettes', 649, 799, 4.8, 124, 'Nouveau',
    [m('trottinette2'), m('trottinette1'), m('trottinette3')],
    'Trottinette robuste et confortable, pensée pour les trajets quotidiens longue distance.',
    [['Autonomie', '45 km'], ['Vitesse max', '25 km/h'], ['Poids', '14 kg'], ['Pneus', '10" tubeless']]),
  p('flexride-mini', 'FlexRide Mini', 'URBX', 'trottinettes', 349, null, 4.7, 94, 'Légère',
    [m('flexride-mini-1'), m('flexride-mini-2'), m('flexride-mini-3'), m('trottinette4')],
    'Compacte et légère, elle se plie en une seconde et se glisse dans le métro, au bureau ou dans le coffre.',
    [['Autonomie', '25 km'], ['Vitesse max', '20 km/h'], ['Poids', '9 kg'], ['Pneus', '8"']]),
  p('urbanglide-pro', 'UrbanGlide Pro', 'URBX', 'trottinettes', 799, 999, 4.9, 312, 'Bestseller',
    [m('trottinette1'), m('trottinette3'), m('urbanglide-pro-ecran')],
    'Moteur 350 W, frein à disque et écran LED : puissance et autonomie dans un châssis ultra-pliable.',
    [['Autonomie', '45 km'], ['Vitesse max', '25 km/h'], ['Poids', '14,2 kg'], ['Étanchéité', 'IPX5']]),
  p('trail-x-offroad', 'Trail X Off-Road', 'Dualtron', 'trottinettes', 1190, null, 4.6, 61, 'Tout-terrain',
    [m('trottinette3'), m('trottinette2'), m('trottinette4')],
    'Gros pneus crantés et suspensions : la trottinette qui ne craint ni les chemins ni les pavés.',
    [['Autonomie', '60 km'], ['Vitesse max', '25 km/h'], ['Poids', '24 kg'], ['Suspension', 'Double hydraulique']]),

  /* Vélos */
  p('velo-urbain-s7', 'Vélo Urbain S7', 'Canyon', 'velos', 1299, null, 4.9, 87, 'Bestseller',
    [m('velo2'), m('velo1'), m('velo3')],
    'Un vélo urbain élégant au moteur silencieux, pour traverser la ville sans transpirer.',
    [['Autonomie', '80 km'], ['Vitesse max', '25 km/h'], ['Poids', '21 kg'], ['Cadre', 'Aluminium']]),
  p('cityvolt-s7', 'CityVolt S7', 'URBX', 'velos', 1490, 1890, 4.8, 187, '-21%',
    [m('velo1'), m('velo2'), m('velo3'), m('velo4')],
    'Batterie 36V 13Ah, 7 vitesses Shimano et GPS intégré pour les trajets quotidiens.',
    [['Autonomie', '80 km'], ['Vitesse max', '25 km/h'], ['Roues', '28"'], ['Freins', 'Hydrauliques']]),
  p('fatbike-trail', 'FatBike Trail', 'URBX', 'velos', 1790, null, 4.7, 52, 'Nouveau',
    [m('velo3'), m('velo4'), m('velo1')],
    'Pneus larges, cadre robuste : le fat bike électrique qui se joue des chemins et de la ville.',
    [['Autonomie', '70 km'], ['Vitesse max', '25 km/h'], ['Pneus', '4,0"'], ['Poids', '27 kg']]),
  p('velo-trekking-t5', 'Trekking T5', 'URBX', 'velos', 1590, null, 4.6, 39, null,
    [m('velo4'), m('velo2'), m('velo3')],
    'Un vélo confortable et polyvalent avec porte-bagages, éclairage intégré et position relevée.',
    [['Autonomie', '90 km'], ['Vitesse max', '25 km/h'], ['Roues', '28"'], ['Porte-bagages', 'Inclus']]),

  /* Skates */
  p('skate-electrique-v3', 'Skateboard Électrique V3', 'Evolve', 'skates', 899, 1050, 4.7, 56, 'Promo',
    [m('skate1'), m('skate2'), m('skate3')],
    'Double moteur, télécommande Bluetooth et freinage régénératif pour une glisse maîtrisée.',
    [['Autonomie', '30 km'], ['Vitesse max', '38 km/h'], ['Poids', '7,8 kg'], ['Moteurs', '2 × 600 W']]),
  p('metroboard-x', 'MetroBoard X', 'URBX', 'skates', 599, 749, 4.6, 143, 'Populaire',
    [m('skate2'), m('metroboard-x-telecommande'), m('skate1')],
    'Deck bambou flex 7 plis et télécommande sans fil : accélération et confort au rendez-vous.',
    [['Autonomie', '30 km'], ['Vitesse max', '38 km/h'], ['Deck', 'Bambou'], ['Roues', '90 mm']]),
  p('street-cruiser', 'Street Cruiser', 'URBX', 'skates', 749, null, 4.5, 33, null,
    [m('skate3'), m('skate4'), m('skate2')],
    'Un cruiser stable aux roues larges, idéal pour les longues lignes droites urbaines.',
    [['Autonomie', '28 km'], ['Vitesse max', '35 km/h'], ['Poids', '8,5 kg'], ['Modes', '4 niveaux']]),
  p('carve-pro', 'Carve Pro', 'URBX', 'skates', 949, null, 4.8, 21, 'Nouveau',
    [m('skate4'), m('skate1'), m('skate3')],
    'Trucks souples et motorisation puissante pour des virages serrés et une vraie sensation de surf urbain.',
    [['Autonomie', '35 km'], ['Vitesse max', '40 km/h'], ['Poids', '8 kg'], ['Moteurs', '2 × 750 W']]),

  /* Roues */
  p('roue-onewheel', 'Roue Électrique OneWheel', 'Future Motion', 'roues', 1190, null, 4.6, 43, null,
    [m('monoroue1'), m('monoroue2'), m('monoroue3')],
    'Monoroue élégante à feux latéraux, pour une conduite fluide et intuitive en ville.',
    [['Autonomie', '60 km'], ['Vitesse max', '30 km/h'], ['Poids', '12 kg'], ['Roue', '16"']]),
  p('monoroue-m1', 'Monoroue M1', 'URBX', 'roues', 899, null, 4.5, 58, 'Nouveau',
    [m('monoroue1'), m('monoroue4'), m('monoroue2')],
    'Compacte et réactive, elle se glisse dans un sac et transforme chaque trajet en glisse urbaine.',
    [['Autonomie', '50 km'], ['Vitesse max', '30 km/h'], ['Poids', '12 kg'], ['Étanchéité', 'IPX4']]),
  p('monoroue-nightfall', 'Nightfall', 'KingSong', 'roues', 1490, null, 4.7, 27, 'Premium',
    [m('monoroue2'), m('monoroue1'), m('monoroue4')],
    'Finition carbone et bandeau lumineux pour être vu et rouler avec style de nuit.',
    [['Autonomie', '80 km'], ['Vitesse max', '35 km/h'], ['Poids', '14 kg'], ['Éclairage', 'LED périphérique']]),
  p('monoroue-ranger', 'Ranger Off-Road', 'InMotion', 'roues', 1790, null, 4.8, 19, 'Tout-terrain',
    [m('monoroue3'), m('monoroue2'), m('monoroue4')],
    'Pneu cranté, suspension et phare puissant : la monoroue qui sort des sentiers battus.',
    [['Autonomie', '100 km'], ['Vitesse max', '40 km/h'], ['Poids', '22 kg'], ['Pneu', '18" cranté']]),

  /* Accessoires */
  p('casque-urbain-led', 'Casque Urbain LED', 'URBX', 'accessoires', 79, null, 4.7, 126, 'Sécurité',
    [m('accessoire-casque'), m('accessoires-banner')],
    'Casque urbain léger avec feu arrière intégré pour rester visible de jour comme de nuit.',
    [['Poids', '290 g'], ['Tailles', 'M / L'], ['Norme', 'EN 1078'], ['Éclairage', 'Feu arrière LED']]),
  p('antivol-u-renforce', 'Antivol en U renforcé', 'URBX', 'accessoires', 49, null, 4.6, 203, 'Bestseller',
    [m('accessoire-antivol'), m('accessoires-banner')],
    'Un antivol en U en acier trempé pour sécuriser votre vélo ou votre trottinette en ville.',
    [['Poids', '1,1 kg'], ['Diamètre', '13 mm'], ['Clés', '2'], ['Garantie', '2 ans']]),
  p('support-telephone', 'Support téléphone guidon', 'URBX', 'accessoires', 25, null, 4.4, 89, 'Pratique',
    [m('accessoire-support-telephone'), m('accessoires-banner')],
    'Gardez votre GPS sous les yeux grâce à ce support robuste compatible avec la plupart des smartphones.',
    [['Compatibilité', '4,7" à 6,8"'], ['Matière', 'Alu + silicone'], ['Rotation', '360°'], ['Fixation', 'Rapide']]),
  p('sacoche-etanche', 'Sacoche étanche', 'URBX', 'accessoires', 65, null, 4.6, 74, 'Nouveau',
    [m('accessoire-sacoche'), m('accessoires-banner')],
    'Sacoche étanche pour porte-bagages, idéale pour le quotidien : bureau, courses, week-end.',
    [['Volume', '18 L'], ['Matière', 'Bâche PVC'], ['Fixation', 'Crochets universels'], ['Réfléchissant', 'Oui']]),
];

export const FEATURED_IDS = ['trottinette-pro-x12', 'velo-urbain-s7', 'skate-electrique-v3', 'roue-onewheel'];

export const getCategory = (id: string) => CATEGORIES.find((c) => c.id === id);
export const getProduct = (id: string) => PRODUCTS.find((x) => x.id === id);
