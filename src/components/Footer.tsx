import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">GovSpend Monitor</h3>
            <p className="text-neutral-300 mb-4">
              Enhancing public transparency, civic oversight, and media investigation capabilities by making
              Uzbekistan's public procurement data more understandable, visual, and actionable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#dashboard" className="text-neutral-300 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#red-flags" className="text-neutral-300 hover:text-white transition-colors">Red Flags</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} GovSpend Monitor Uzbekistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;