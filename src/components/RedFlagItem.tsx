import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { RedFlagData } from '../utils/types';

interface RedFlagItemProps {
  data: RedFlagData;
}

const RedFlagItem: React.FC<RedFlagItemProps> = ({ data }) => {
  // Determine severity class and icon
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-alert-500 text-white';
      case 'medium':
        return 'bg-warning-500 text-neutral-800';
      case 'low':
        return 'bg-neutral-300 text-neutral-800';
      default:
        return 'bg-neutral-200 text-neutral-800';
    }
  };

  const getRiskTypeLabel = (riskType: string) => {
    switch (riskType) {
      case 'single_bidder':
        return 'Single Bidder';
      case 'price_anomaly':
        return 'Price Anomaly';
      case 'monopoly_risk':
        return 'Monopoly Risk';
      default:
        return riskType;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-5 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <AlertTriangle 
            size={20} 
            className={`text-alert-${data.severity === 'high' ? '500' : '400'}`} 
          />
          <span className="font-semibold">{data.tenderId}</span>
        </div>
        <span 
          className={`px-3 py-1 inline-flex items-center rounded-full text-xs font-medium ${getSeverityClass(data.severity)}`}
        >
          {data.severity.charAt(0).toUpperCase() + data.severity.slice(1)} Risk
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs text-neutral-500">Organization</p>
          <p className="font-medium">{data.organization}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500">Company</p>
          <p className="font-medium">{data.company}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-neutral-500">Risk Type</p>
          <p className="font-medium">{getRiskTypeLabel(data.riskType)}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500">Date</p>
          <p className="font-medium">{new Date(data.date).toLocaleDateString()}</p>
        </div>
      </div>
      
      <div>
        <p className="text-xs text-neutral-500">Details</p>
        <p className="text-sm text-neutral-700">{data.details}</p>
      </div>
    </div>
  );
};

export default RedFlagItem;