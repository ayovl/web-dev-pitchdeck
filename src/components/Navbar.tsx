import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center relative">
        {/* <a href="#" className="text-2xl font-bold text-gradient">WebBrand Pro</a> */}
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#problem" className="text-white hover:text-primary-300 transition-colors">Problem</a>
          <a href="#solution" className="text-white hover:text-primary-300 transition-colors">Solution</a>
          <a href="#package" className="text-white hover:text-primary-300 transition-colors">Pricing</a>
          <a href="#about" className="text-white hover:text-primary-300 transition-colors">Contact</a>
          <a 
            href="mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry"
            onClick={(e) => {
              // This button is desktop-only already
              e.preventDefault();
              window.open('https://mail.google.com/mail/?view=cm&fs=1&to=arsalmaab@gmail.com&su=Website%20%26%20Branding%20Package%20Inquiry', '_blank');
            }}
            className="btn btn-primary btn-sm">Email Now</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-300 absolute top-full left-0 w-full border-t border-gray-800 animate-fade-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#problem" 
              className="text-white py-2 px-4 hover:bg-base-200 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              className="text-white py-2 px-4 hover:bg-base-200 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#package" 
              className="text-white py-2 px-4 hover:bg-base-200 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-white py-2 px-4 hover:bg-base-200 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry" 
              className="btn btn-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Email Now
            </a>``
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;