export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface Stat {
  label: string;
  value: string;
}