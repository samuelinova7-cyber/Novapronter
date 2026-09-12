export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  features: string[];
  badge?: string;
  popular?: boolean;
}

export interface DifferentialItem {
  iconName: string;
  title: string;
  description: string;
  benefit: string;
}

export interface SegmentSolution {
  id: string;
  name: string;
  badge: string;
  description: string;
  recommendedServices: string[];
  benefits: string[];
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'Residencial' | 'Comercial' | 'Condomínio';
  selectedServices: string[];
  neighborhood: string;
  message: string;
}
