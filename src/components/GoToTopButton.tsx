import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has scrolled down enough to show the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary-600 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default GoToTopButton;
