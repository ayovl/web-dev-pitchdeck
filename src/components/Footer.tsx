import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-base-300 bg-opacity-40 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            {/* <a href="#" className="text-xl font-bold text-gradient">WebBrand Pro</a> */}
            <p className="text-gray-400 mt-2">
              Transforming businesses with stunning websites.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {currentYear} WebBrand Pro. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-error-500 mx-1" /> for amazing clients
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;