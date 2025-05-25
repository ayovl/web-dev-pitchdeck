import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%', // Start animation sooner
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    timeline.fromTo(
      contentRef.current,
      {
        y: 30, // Reduced from 50
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5, // Reduced from 0.8
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="ambient-light ambient-light-primary" style={{ opacity: 0.1, top: '30%', left: '20%' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? Reach out directly.
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className="max-w-2xl mx-auto bg-gradient-to-br from-base-300 to-base-200 rounded-2xl shadow-xl overflow-hidden border border-gray-800 p-1"
        >
          <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 p-10 rounded-2xl text-center">
            <div className="w-16 h-16 bg-primary-900 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-400" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Email Me</h3>
            <p className="text-gray-300 mb-6">
              For inquiries, questions, or to get started with your project, email me directly.
            </p>              <a 
              href="mailto:arsalmaab@gmail.com?subject=Website%20Inquiry" 
              onClick={(e) => {
                // Only handle click on desktop
                if (window.innerWidth >= 768) {
                  e.preventDefault();
                  window.location.href = 'mailto:arsalmaab@gmail.com?subject=Website%20Inquiry';
                }
                // Mobile clicks will use the default href behavior
              }}
              className="text-xl font-medium text-primary-400 hover:text-primary-300 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              arsalmaab@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
