export interface ImageData {
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export enum UnitType {
  STUDIO = 'Studio',
  ONE_BED = '1 Bedroom',
  TWO_BED = '2 Bedroom',
  LIVE_WORK = 'Live/Work Loft'
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  moveInDate: string;
  unitTypes: UnitType[];
  priceRange: string;
}

export interface NeighborhoodPoint {
  name: string;
  category: 'Dining' | 'Entertainment' | 'Business' | 'Transport';
  distance: string; // e.g., "5 min walk"
  description: string;
}
