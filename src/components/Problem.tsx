import React from 'react';
import { useScrollAnimations } from '../hooks/useAnimation';
import { problemPoints } from '../data/data';
import { Snail, Frown, MousePointerClick, Ban, DoorClosed } from 'lucide-react';

const Problem: React.FC = () => {
  useScrollAnimations();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Snail': return <Snail className="w-10 h-10 text-error-400" />;
      case 'Frown': return <Frown className="w-10 h-10 text-error-400" />;
      case 'MousePointerClick': return <MousePointerClick className="w-10 h-10 text-error-400" />;
      case 'Ban': return <Ban className="w-10 h-10 text-error-400" />;
      case 'DoorClosed': return <DoorClosed className="w-10 h-10 text-error-400" />;
      default: return null;
    }
  };

  return (
    <section id="problem" className="px-3 py-20 relative animate-section mt-[-1px]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent opacity-70"></div>
      <div className="ambient-light ambient-light-accent extended"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your current cashforpropertiesnyc.com design has these issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problemPoints.map((problem) => (
            <div 
              key={problem.id}
              className="flex items-start p-6 bg-base-200 bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg animate-element"
            >
              <div className="mr-4 mt-1">
                {renderIcon(problem.icon)}
              </div>
              <div>
                <p className="text-lg font-medium text-gray-100">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12 animate-element">
          <p className="text-xl text-primary-300 font-medium">
            If you nodded to any of these, your website is costing you money.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Problem;