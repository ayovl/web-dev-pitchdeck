import React from 'react';
import { useScrollAnimations } from '../hooks/useAnimation';
import { benefits } from '../data/data';
import { TrendingUp, Shield, Briefcase, Palette } from 'lucide-react';

const Solution: React.FC = () => {
  useScrollAnimations();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-12 h-12 text-primary-400" />;
      case 'Shield': return <Shield className="w-12 h-12 text-primary-400" />;
      case 'Briefcase': return <Briefcase className="w-12 h-12 text-primary-400" />;
      case 'Palette': return <Palette className="w-12 h-12 text-primary-400" />;
      default: return null;
    }
  };

  return (
    <section id="solution" className="px-4 py-20 relative animate-section mt-[-1px]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent opacity-70"></div>
      <div className="ambient-light ambient-light-primary" style={{ 
        opacity: 0.25, 
        top: isMobile ? '30%' : '40%', 
        left: isMobile ? '30%' : '60%', 
        filter: 'blur(160px)',
        zIndex: 0
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Build A Better Website?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           A professionally designed website brings real, measurable advantages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="group p-8 bg-gradient-to-br from-base-300 to-base-200 rounded-xl shadow-xl animate-element transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="mb-5 text-primary-400 transition-all duration-300 group-hover:scale-110">
                {renderIcon(benefit.icon)}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-element">
          <p className="text-xl text-primary-300 font-medium mb-8">
            Stop losing potential clients due to an outdated or ineffective website.
          </p>
          <a href="#package" className="btn btn-primary btn-lg">See The Solution</a>
        </div>
      </div>
    </section>
  );
};

export default Solution;