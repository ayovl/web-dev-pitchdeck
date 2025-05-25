import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    timeline.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    
    timeline.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.5'
    );
    
    timeline.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.5'
    );
    
    const floatAnimation = gsap.to('.float-element', {
      y: '-20px',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
    
    return () => {
      timeline.kill();
      floatAnimation.kill();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-10 py-20 md:py-0">
      <div className="ambient-light ambient-light-primary extended"></div>
      <div className="ambient-light ambient-light-secondary extended"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
      
      <div className="section-content text-center max-w-4xl mx-auto">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Your Current Website <span className="text-gradient">Isn't Converting</span><br />
          Well
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
      A new and improved cashforpropertiesnyc.com is ready for you.
        </p>
        
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
          <a 
            href="mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry" 
            onClick={(e) => {
              // Only handle click on desktop
              if (window.innerWidth >= 768) {
                e.preventDefault();
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=arsalmaab@gmail.com&su=Website%20%26%20Branding%20Package%20Inquiry', '_blank');
              }
              // Mobile clicks will use the default href behavior
            }}
            className="btn btn-primary btn-lg font-medium text-lg px-8 rounded-full shadow-lg sm:mr-4 w-full sm:w-auto"
          >
        Email Now
          </a>
          <a 
            href="#problem" 
            className="btn btn-outline text-white btn-lg font-medium text-lg px-8 rounded-full w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
        
        <div className="mt-16 hidden md:block float-element">
          <ArrowDown className="animate-bounce w-8 h-8 text-white opacity-70 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;