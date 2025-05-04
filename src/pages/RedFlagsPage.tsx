import React, { useState } from 'react';
import RedFlagItem from '../components/RedFlagItem';
import { redFlagData } from '../data/mockData';
import { AlertTriangle, Filter } from 'lucide-react';

const RedFlagsPage = () => {
  const [riskTypeFilter, setRiskTypeFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');

  // Apply filters
  const filteredFlags = redFlagData.filter(flag => {
    if (riskTypeFilter !== 'all' && flag.riskType !== riskTypeFilter) {
      return false;
    }
    if (severityFilter !== 'all' && flag.severity !== severityFilter) {
      return false;
    }
    return true;
  });

  return (
    <section id="red-flags" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Red Flag Alerts</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our system automatically detects suspicious patterns in procurement data,
            highlighting potential issues that require further investigation.
          </p>
        </div>
        
        {/* Risk Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-alert-500 bg-opacity-10 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-alert-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Single Bidder Risk</h3>
            <p className="text-neutral-700">
              Tenders with only one participant, potentially indicating restrictive specifications
              or lack of competitive process.
            </p>
          </div>
          
          <div className="bg-warning-500 bg-opacity-10 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-warning-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Price Anomaly Risk</h3>
            <p className="text-neutral-700">
              Contracts with prices significantly above or below normal market rates,
              suggesting potential inefficiencies or corruption.
            </p>
          </div>
          
          <div className="bg-neutral-200 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Monopoly Risk</h3>
            <p className="text-neutral-700">
              Same company winning multiple contracts in a short timeframe,
              potentially indicating unfair advantage or lack of market diversity.
            </p>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-neutral-50 rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-primary-500" />
            <h3 className="text-lg font-semibold">Filter Red Flags</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="riskType" className="block text-sm font-medium text-neutral-700 mb-1">
                Risk Type
              </label>
              <select
                id="riskType"
                value={riskTypeFilter}
                onChange={(e) => setRiskTypeFilter(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:outline-none"
              >
                <option value="all">All Risk Types</option>
                <option value="single_bidder">Single Bidder</option>
                <option value="price_anomaly">Price Anomaly</option>
                <option value="monopoly_risk">Monopoly Risk</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-neutral-700 mb-1">
                Severity
              </label>
              <select
                id="severity"
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:outline-none"
              >
                <option value="all">All Severity Levels</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Red Flag Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFlags.length > 0 ? (
            filteredFlags.map((flag) => (
              <RedFlagItem key={flag.id} data={flag} />
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-neutral-50 rounded-xl">
              <AlertTriangle size={48} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-xl font-semibold mb-2">No Red Flags Found</h3>
              <p className="text-neutral-600">
                No red flags match your current filter criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RedFlagsPage;