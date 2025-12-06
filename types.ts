export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  priceRange: string;
  features: string[];
  iconName: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface LocationData {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
}

export interface NavItem {
  label: string;
  path: string;
}