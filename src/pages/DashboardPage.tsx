import React, { useState, useEffect } from 'react';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import { 
  regionData, 
  singleBidData, 
  topWinningCompanies,
  tenderData,
  summaryData
} from '../data/mockData';
import { CategoryType, RegionType, TenderData } from '../utils/types';
import { BarChart2, AlertTriangle, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionType>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedOrganization, setSelectedOrganization] = useState('all');
  const [filteredTenders, setFilteredTenders] = useState<TenderData[]>(tenderData);
  
  // Extract unique organizations for filter
  const organizations = Array.from(new Set(tenderData.map(item => item.organization)));

  // Apply filters
  useEffect(() => {
    let result = [...tenderData];
    
    if (selectedRegion !== 'all') {
      result = result.filter(item => item.region === selectedRegion);
    }
    
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    if (selectedOrganization !== 'all') {
      result = result.filter(item => item.organization === selectedOrganization);
    }
    
    setFilteredTenders(result);
  }, [selectedRegion, selectedCategory, selectedOrganization]);

  const tableColumns = [
    { key: 'id', label: 'Tender ID' },
    { key: 'organization', label: 'Organization' },
    { key: 'category', label: 'Category' },
    { key: 'amount', label: 'Amount (UZS)' },
    { key: 'date', label: 'Date' },
    { key: 'bidders', label: 'Bidders' },
    { key: 'winner', label: 'Winner' },
  ];

  return (
    <section id="dashboard" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Data Dashboard</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Explore and analyze public procurement data with our interactive dashboard.
            Filter by region, organization, or category to gain deeper insights.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8">
          <FilterBar
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            organizations={organizations}
          />
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-card p-5 flex items-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <BarChart2 size={24} className="text-primary-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Total Tenders</p>
              <p className="text-2xl font-bold">{summaryData.totalTenders}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card p-5 flex items-center">
            <div className="bg-alert-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle size={24} className="text-alert-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Single-Bid Tenders</p>
              <p className="text-2xl font-bold">{summaryData.singleBidTenders}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card p-5 flex items-center">
            <div className="bg-warning-500 bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <TrendingUp size={24} className="text-warning-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Price Anomalies</p>
              <p className="text-2xl font-bold">{summaryData.priceAnomalies}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card p-5 flex items-center">
            <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle size={24} className="text-neutral-700" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Monopoly Risks</p>
              <p className="text-2xl font-bold">{summaryData.monopolyRisks}</p>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BarChart 
            data={regionData} 
            title="Number of Tenders by Region" 
          />
          
          <PieChart 
            data={singleBidData} 
            title="Single vs Multiple Bid Tenders" 
          />
        </div>
        
        {/* Table */}
        <div className="mb-8">
          <DataTable
            columns={tableColumns}
            data={filteredTenders}
            title="Tender Data"
          />
        </div>
        
        {/* Top Winners */}
        <div>
          <h3 className="text-xl font-bold mb-4">Top 10 Winning Companies</h3>
          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topWinningCompanies.map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between border-b border-neutral-200 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-medium">{company.label}</span>
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-sm">
                    {company.value} wins
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;