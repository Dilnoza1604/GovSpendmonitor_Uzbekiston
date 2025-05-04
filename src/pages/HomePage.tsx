import React from 'react';
import Button from '../components/Button';
import { BarChart2, AlertTriangle, FileText, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6">
              Davlat xaridlari monitoring tizimi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Making Government Spending
              <span className="text-primary-500"> Transparent</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
              We empower citizens, journalists, and policymakers to easily track, analyze, and
              investigate public procurement activities in Uzbekistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#dashboard">
                <Button variant="primary" size="lg" className="shadow-lg">
                  Start Exploring Data
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Data Analysis" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container-custom mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card text-center hover:translate-y-[-5px]">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart2 size={24} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
            <p className="text-neutral-600">
              Interactive charts and graphs making complex procurement data easy to understand
            </p>
          </div>
          
          <div className="card text-center hover:translate-y-[-5px]">
            <div className="bg-alert-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={24} className="text-alert-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Red Flag Alerts</h3>
            <p className="text-neutral-600">
              Automated detection of suspicious patterns in procurement activities
            </p>
          </div>
          
          <div className="card text-center hover:translate-y-[-5px]">
            <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-neutral-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Detailed Reports</h3>
            <p className="text-neutral-600">
              Comprehensive analysis of tender results and government spending
            </p>
          </div>
          
          <div className="card text-center hover:translate-y-[-5px]">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-neutral-600">
              Built by citizens for citizens to enhance government transparency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;