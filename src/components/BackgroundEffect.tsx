import React from 'react';

const BackgroundEffect: React.FC = () => {
  // Background effect component without stars
  // This component is still kept to maintain the structure
  // but no longer renders the stars animation
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {/* Gradient overlay for a smoother background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40" />
    </div>
  );
};

export default BackgroundEffect;