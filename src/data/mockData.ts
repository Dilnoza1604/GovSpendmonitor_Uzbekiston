import { ChartDataPoint, TenderData, RedFlagData, TeamMember } from '../utils/types';

// Regions data for bar chart
export const regionData: ChartDataPoint[] = [
  { label: 'Tashkent City', value: 325, color: '#4E73DF' },
  { label: 'Tashkent Region', value: 280, color: '#1CC88A' },
  { label: 'Samarkand', value: 210, color: '#36B9CC' },
  { label: 'Bukhara', value: 190, color: '#F6C23E' },
  { label: 'Andijan', value: 160, color: '#E74A3B' },
  { label: 'Fergana', value: 150, color: '#858796' },
  { label: 'Namangan', value: 120, color: '#75C7FB' },
  { label: 'Kashkadarya', value: 140, color: '#FF9800' },
  { label: 'Surkhandarya', value: 130, color: '#673AB7' },
  { label: 'Jizzakh', value: 110, color: '#009688' },
  { label: 'Syrdarya', value: 100, color: '#E91E63' },
  { label: 'Navoi', value: 95, color: '#3F51B5' }
];

// Single bid tenders data for pie chart
export const singleBidData: ChartDataPoint[] = [
  { label: 'Single Bid Tenders', value: 432, color: '#dc3545' },
  { label: 'Multiple Bid Tenders', value: 1045, color: '#28a745' },
];

// Top winning companies data
export const topWinningCompanies: ChartDataPoint[] = [
  { label: 'UzStroy LLC', value: 42 },
  { label: 'TashMedical MCHJ', value: 38 },
  { label: 'Digital Solutions', value: 32 },
  { label: 'AgroTech Systems', value: 29 },
  { label: 'BuildMaster Group', value: 25 },
  { label: 'EduTech Services', value: 23 },
  { label: 'TransUz Services', value: 21 },
  { label: 'Energy Systems LLC', value: 20 },
  { label: 'UzbekInvest', value: 18 },
  { label: 'TechnoServe', value: 16 },
];

// Tender data for table
export const tenderData: TenderData[] = [
  {
    id: 'T-2023-0451',
    organization: 'Ministry of Health',
    category: 'medical',
    amount: 1250000,
    date: '2023-05-15',
    region: 'tashkent_city',
    bidders: 3,
    winner: 'TashMedical MCHJ'
  },
  {
    id: 'T-2023-0532',
    organization: 'Ministry of Education',
    category: 'education',
    amount: 850000,
    date: '2023-06-02',
    region: 'samarkand',
    bidders: 4,
    winner: 'EduTech Services'
  },
  {
    id: 'T-2023-0613',
    organization: 'Ministry of Transport',
    category: 'transportation',
    amount: 2350000,
    date: '2023-06-28',
    region: 'bukhara',
    bidders: 1,
    winner: 'TransUz Services'
  },
  {
    id: 'T-2023-0742',
    organization: 'Ministry of Agriculture',
    category: 'agriculture',
    amount: 930000,
    date: '2023-07-14',
    region: 'fergana',
    bidders: 2,
    winner: 'AgroTech Systems'
  },
  {
    id: 'T-2023-0845',
    organization: 'Ministry of Digital Development',
    category: 'it',
    amount: 1850000,
    date: '2023-08-05',
    region: 'tashkent_city',
    bidders: 5,
    winner: 'Digital Solutions'
  },
  {
    id: 'T-2023-0921',
    organization: 'Ministry of Construction',
    category: 'construction',
    amount: 4500000,
    date: '2023-09-12',
    region: 'tashkent_region',
    bidders: 1,
    winner: 'UzStroy LLC'
  },
  {
    id: 'T-2023-1042',
    organization: 'Ministry of Energy',
    category: 'energy',
    amount: 3200000,
    date: '2023-10-25',
    region: 'navoi',
    bidders: 2,
    winner: 'Energy Systems LLC'
  },
  {
    id: 'T-2023-1137',
    organization: 'Ministry of Finance',
    category: 'other',
    amount: 750000,
    date: '2023-11-08',
    region: 'andijan',
    bidders: 3,
    winner: 'UzbekInvest'
  },
];

// Red flag data
export const redFlagData: RedFlagData[] = [
  {
    id: 'RF-2023-0123',
    organization: 'Ministry of Transport',
    company: 'TransUz Services',
    tenderId: 'T-2023-0613',
    riskType: 'single_bidder',
    severity: 'high',
    date: '2023-06-28',
    details: 'Only one bidder participated in a high-value tender.'
  },
  {
    id: 'RF-2023-0124',
    organization: 'Ministry of Construction',
    company: 'UzStroy LLC',
    tenderId: 'T-2023-0921',
    riskType: 'single_bidder',
    severity: 'high',
    date: '2023-09-12',
    details: 'Single bidder for a major construction project valued at 4.5M UZS.'
  },
  {
    id: 'RF-2023-0125',
    organization: 'Ministry of Health',
    company: 'TashMedical MCHJ',
    tenderId: 'T-2023-0451',
    riskType: 'price_anomaly',
    severity: 'medium',
    date: '2023-05-15',
    details: 'Final contract price 30% higher than initial estimate.'
  },
  {
    id: 'RF-2023-0126',
    organization: 'Ministry of Digital Development',
    company: 'Digital Solutions',
    tenderId: 'T-2023-0845',
    riskType: 'monopoly_risk',
    severity: 'medium',
    date: '2023-08-05',
    details: 'This company has won 75% of IT tenders in the past 6 months.'
  },
  {
    id: 'RF-2023-0127',
    organization: 'Ministry of Energy',
    company: 'Energy Systems LLC',
    tenderId: 'T-2023-1042',
    riskType: 'price_anomaly',
    severity: 'low',
    date: '2023-10-25',
    details: 'Contract price 15% below average market rate.'
  },
  {
    id: 'RF-2023-0128',
    organization: 'Ministry of Agriculture',
    company: 'AgroTech Systems',
    tenderId: 'T-2023-0742',
    riskType: 'monopoly_risk',
    severity: 'high',
    date: '2023-07-14',
    details: 'Same company won all agriculture tenders in this region for the past year.'
  }
];

// Summary data
export const summaryData = {
  totalTenders: 1477,
  singleBidTenders: 432,
  priceAnomalies: 215,
  monopolyRisks: 189
};