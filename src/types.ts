export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  metrics: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  badge?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stat: string;
  statLabel: string;
  highlight: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  growth: string;
  detail: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  tagline: string;
  challenge: string;
  solution: string;
  resultsSummary: string;
  metrics: {
    trafficGrowth: string;
    leadsGenerated: string;
    conversionRate: string;
    roas: string;
  };
  chartData: {
    month: string;
    before: number;
    after: number;
  }[];
  keyTactics: string[];
  badgeColor: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  verifiedMetric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  bestFor: string;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  website: string;
  serviceNeeded: string;
  budget: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  website?: string;
  serviceNeeded?: string;
  budget?: string;
  message?: string;
}
