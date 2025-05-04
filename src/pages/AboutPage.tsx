import React from 'react';
import { AlertCircle, Database, BarChart2, GitBranch } from 'lucide-react';

const AboutPage = () => {
  return (
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About The Project</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Learn more about our mission to enhance transparency in Uzbekistan's
            public procurement system through data analysis and visualization.
          </p>
        </div>
        
        {/* Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <p className="text-lg mb-6 text-neutral-700">
              Although public procurement data is technically available, there is no
              user-friendly tool to analyze it. Citizens, journalists, and even government
              officials face challenges when trying to:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-alert-100 rounded-full p-1 text-alert-500">
                  <AlertCircle size={16} />
                </div>
                <span>Trace spending patterns across government agencies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-alert-100 rounded-full p-1 text-alert-500">
                  <AlertCircle size={16} />
                </div>
                <span>Identify suspicious patterns that might indicate corruption</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-alert-100 rounded-full p-1 text-alert-500">
                  <AlertCircle size={16} />
                </div>
                <span>Understand which companies are winning government contracts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-alert-100 rounded-full p-1 text-alert-500">
                  <AlertCircle size={16} />
                </div>
                <span>Compare spending between regions and sectors</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-card p-6">
              <div className="mockup-graph">
                <div className="bg-neutral-100 h-6 w-1/3 rounded-full mb-4"></div>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="col-span-2 bg-neutral-200 h-6 rounded-md"></div>
                  <div className="col-span-4 bg-neutral-100 h-6 rounded-md"></div>
                </div>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="col-span-3 bg-neutral-200 h-6 rounded-md"></div>
                  <div className="col-span-3 bg-neutral-100 h-6 rounded-md"></div>
                </div>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="col-span-1 bg-neutral-200 h-6 rounded-md"></div>
                  <div className="col-span-5 bg-neutral-100 h-6 rounded-md"></div>
                </div>
                
                <div className="bg-neutral-100 h-40 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-neutral-400">
                    <BarChart2 size={40} className="mx-auto mb-2" />
                    <p>Inaccessible Data</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-neutral-100 rounded-lg p-3 text-center">
                    <div className="h-4 bg-neutral-200 rounded-full w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-neutral-200 rounded-full w-1/2 mx-auto"></div>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-3 text-center">
                    <div className="h-4 bg-neutral-200 rounded-full w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-neutral-200 rounded-full w-1/2 mx-auto"></div>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-3 text-center">
                    <div className="h-4 bg-neutral-200 rounded-full w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-neutral-200 rounded-full w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-card p-6">
              <div className="mockup-solution">
                <div className="bg-primary-100 h-6 w-1/3 rounded-full mb-4"></div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary-100 rounded-lg p-4 text-center">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Database size={20} className="text-primary-500" />
                    </div>
                    <div className="h-4 bg-white rounded-full w-3/4 mx-auto"></div>
                  </div>
                  <div className="bg-primary-100 rounded-lg p-4 text-center">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart2 size={20} className="text-primary-500" />
                    </div>
                    <div className="h-4 bg-white rounded-full w-3/4 mx-auto"></div>
                  </div>
                  <div className="bg-primary-100 rounded-lg p-4 text-center">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertCircle size={20} className="text-primary-500" />
                    </div>
                    <div className="h-4 bg-white rounded-full w-3/4 mx-auto"></div>
                  </div>
                </div>
                
                <div className="bg-white border border-neutral-200 h-40 rounded-lg flex items-center justify-center mb-6">
                  <div className="grid grid-cols-5 gap-2 w-3/4 mx-auto">
                    <div className="bg-primary-300 h-20 rounded"></div>
                    <div className="bg-primary-400 h-28 rounded"></div>
                    <div className="bg-primary-500 h-24 rounded"></div>
                    <div className="bg-primary-400 h-16 rounded"></div>
                    <div className="bg-primary-300 h-12 rounded"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-alert-100 rounded-lg p-3">
                    <div className="h-4 bg-white rounded-full w-3/4 mb-2"></div>
                    <div className="h-4 bg-white rounded-full w-1/2"></div>
                  </div>
                  <div className="bg-primary-100 rounded-lg p-3">
                    <div className="h-4 bg-white rounded-full w-3/4 mb-2"></div>
                    <div className="h-4 bg-white rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
            <p className="text-lg mb-6 text-neutral-700">
              Our solution enables civic oversight through data-driven visual tools and alert mechanisms.
              We transform raw procurement data into intuitive dashboards, allowing users to:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <BarChart2 size={16} />
                </div>
                <span>Explore spending patterns through interactive visualizations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <AlertCircle size={16} />
                </div>
                <span>Receive alerts about suspicious patterns through our red flag system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <Database size={16} />
                </div>
                <span>Access detailed procurement data in user-friendly formats</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <GitBranch size={16} />
                </div>
                <span>Compare data across regions, sectors, and time periods</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Data Sources & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Data Sources</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <Database size={16} />
                </div>
                <div>
                  <span className="font-medium">xarid.uzex.uz</span>
                  <p className="text-neutral-600 mt-1">
                    Official procurement portal with tender announcements and results.
                    We extract structured data from Excel downloads.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <Database size={16} />
                </div>
                <div>
                  <span className="font-medium">data.egov.uz</span>
                  <p className="text-neutral-600 mt-1">
                    Open data portal of Uzbekistan, providing additional context and reference data
                    like organization registries.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <Database size={16} />
                </div>
                <div>
                  <span className="font-medium">Data Cleaning & Processing</span>
                  <p className="text-neutral-600 mt-1">
                    Python with Pandas for ETL processes, data normalization and aggregation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <BarChart2 size={16} />
                </div>
                <div>
                  <span className="font-medium">Visualization & Frontend</span>
                  <p className="text-neutral-600 mt-1">
                    React with Tailwind CSS for the interface, with interactive data visualization components.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 rounded-full p-1 text-primary-500">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <span className="font-medium">Red Flag Detection</span>
                  <p className="text-neutral-600 mt-1">
                    Rule-based system with statistical thresholds to identify potential irregularities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;