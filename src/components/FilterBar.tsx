import React from 'react';
import { Filter } from 'lucide-react';
import { CategoryType, RegionType } from '../utils/types';

interface FilterBarProps {
  selectedRegion: RegionType;
  setSelectedRegion: (region: RegionType) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
  selectedOrganization: string;
  setSelectedOrganization: (organization: string) => void;
  organizations: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedRegion,
  setSelectedRegion,
  selectedCategory,
  setSelectedCategory,
  selectedOrganization,
  setSelectedOrganization,
  organizations,
}) => {
  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'tashkent_city', label: 'Tashkent City' },
    { value: 'tashkent_region', label: 'Tashkent Region' },
    { value: 'samarkand', label: 'Samarkand' },
    { value: 'bukhara', label: 'Bukhara' },
    { value: 'andijan', label: 'Andijan' },
    { value: 'fergana', label: 'Fergana' },
    { value: 'namangan', label: 'Namangan' },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'construction', label: 'Construction' },
    { value: 'medical', label: 'Medical' },
    { value: 'it', label: 'IT' },
    { value: 'education', label: 'Education' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'energy', label: 'Energy' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-card p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-primary-500" />
        <h3 className="text-xl font-semibold">Filter Data</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Region Filter */}
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-neutral-700 mb-1">
            Region
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value as RegionType)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none"
          >
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Organization Filter */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-1">
            Organization
          </label>
          <select
            id="organization"
            value={selectedOrganization}
            onChange={(e) => setSelectedOrganization(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none"
          >
            <option value="all">All Organizations</option>
            {organizations.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;