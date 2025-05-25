import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { packageFeatures } from '../data/data';
import { Check, Monitor, FileEdit, Palette, Rocket, Wrench, Paintbrush } from 'lucide-react';

const Package: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate the main card
    gsap.fromTo(
      cardRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate each feature individually
    const features = sectionRef.current.querySelectorAll('.feature-item');
    features.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.05 * index, // Small staggered delay
          ease: 'power3.out',
          scrollTrigger: {
            trigger: feature, // Using the feature as its own trigger
            start: 'top 90%', // Start animation when top of feature is at 90% of viewport
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-6 h-6" />;
      case 'FileEdit': return <FileEdit className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Paintbrush': return <Paintbrush className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <section id="package" className="py-24 relative" ref={sectionRef}>
      <div className="ambient-light ambient-light-primary" style={{ opacity: 0.15, top: '30%', right: '10%' }}></div>
      <div className="ambient-light ambient-light-secondary" style={{ opacity: 0.15, bottom: '10%', left: '10%' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Package</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get a Fully Branded, Conversion-Optimized Website That Drives Results
          </p>
        </div>
        
        {/* Unified Package Card containing both price and features */}
        <div 
          ref={cardRef}
          className="max-w-5xl mx-auto bg-gradient-to-br from-base-300 to-base-200 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 p-1 mb-16"
        >
          <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 p-8 rounded-2xl">
           
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {packageFeatures.map((feature) => (
                <div 
                  key={feature.id}
                  className="feature-item animate-element bg-base-200 bg-opacity-60 backdrop-blur-sm p-5 rounded-xl shadow border border-gray-800 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-900 bg-opacity-50 flex items-center justify-center mr-3" style={{ aspectRatio: '1/1', minWidth: '2.5rem' }}>
                      {renderIcon(feature.icon)}
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                  
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-success-400 mr-2 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
             {/* Package Header with Title and Price */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Website Package</h3>
                <p className="text-accent-400 text-lg font-medium">Complete Solution</p>
              </div>
              
              <div className="flex flex-col items-center mt-4 md:mt-0">
                <div className="text-center">
                  <span className="text-5xl font-bold">$3,950</span>
                  <span className="text-gray-400 ml-2">USD</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">(Real value: $5,100 – You're saving over $1,000!)</p>
              </div>
            </div>
            
            {/* Security notice banner */}
            <div className="bg-base-300 bg-opacity-50 p-4 rounded-xl mb-8">
              <p className="text-center font-medium">
                <span className="text-success-400 mr-2">🔒</span>
                Fully Managed. No Hosting Fees. No Tech Headaches.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry" 
                onClick={(e) => {
                  // Only handle click on desktop
                  if (window.innerWidth >= 768) {
                    e.preventDefault();
                    window.location.href = 'mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry';
                  }
                  // Mobile clicks will use the default href behavior
                }}
                className="btn btn-primary btn-lg w-full md:w-auto md:px-12 text-lg font-medium"
              >
                Email Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;