export interface ChapterItem {
  id: number;
  number: number;
  title: string;
  pages: string;
  summary: string;
  keyTakeaways: string[];
  scientificReferences?: string[];
  sampleQuote?: string;
}

export interface OrgasmTypeItem {
  id: string;
  name: string;
  category: 'Físico / Genital' | 'Profundo / Interno' | 'Energético / Tántrico' | 'Mental / No Convencional';
  intensity: 'Alta' | 'Profunda' | 'Trascendental' | 'Transformadora';
  description: string;
  anatomicalBasis: string;
  recommendedTechnique: string;
  scientificInsight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceOriginal: number;
  priceDiscounted: number;
  currency: string;
  description: string;
  features: string[];
  bonuses: string[];
  hotmartOfferCode?: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  stars: number;
  comment: string;
  verifiedPurchase: boolean;
}
