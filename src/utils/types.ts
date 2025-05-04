// Chart data types
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

// Table data types
export interface TenderData {
  id: string;
  organization: string;
  category: string;
  amount: number;
  date: string;
  region: string;
  bidders: number;
  winner: string;
}

export interface RedFlagData {
  id: string;
  organization: string;
  company: string;
  tenderId: string;
  riskType: 'single_bidder' | 'price_anomaly' | 'monopoly_risk';
  severity: 'low' | 'medium' | 'high';
  date: string;
  details: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  description: string;
}

// Filter types
export type RegionType = 
  | 'all'
  | 'tashkent_city'
  | 'tashkent_region'
  | 'samarkand'
  | 'bukhara'
  | 'andijan'
  | 'fergana'
  | 'namangan'
  | 'karakalpakstan'
  | 'khorezm'
  | 'kashkadarya'
  | 'surkhandarya'
  | 'jizzakh'
  | 'syrdarya'
  | 'navoi';

export type CategoryType = 
  | 'all'
  | 'construction'
  | 'medical'
  | 'it'
  | 'education'
  | 'agriculture'
  | 'transportation'
  | 'energy'
  | 'other';