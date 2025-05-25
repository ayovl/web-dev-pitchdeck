import React, { useEffect, useState, useRef } from 'react';
import { Menu } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pastHeroSection, setPastHeroSection] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  const desktopEmailBtnRef = useRef<HTMLAnchorElement>(null);
  const mobileEmailBtnRef = useRef<HTMLAnchorElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        
        // Auto-close mobile menu when scrolled to top for better UX
        if (isMenuOpen && window.scrollY < 50) {
          setIsMenuOpen(false);
        }
      }
      
      // Check if scrolled past hero section (assuming hero is 100vh)
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight - 100) { // -100 to trigger slightly before end of hero
        if (!pastHeroSection) {
          // Reset exiting state when entering the section
          setIsExiting(false);
          setPastHeroSection(true);
          
          // Animate email buttons when they appear
          if (desktopEmailBtnRef.current) {
            // Email button animation
            gsap.fromTo(
              desktopEmailBtnRef.current,
              { scale: 0, opacity: 0, rotation: -15 },
              { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
            );
            
            // Navbar container animation - expand to make space
            if (navbarRef.current) {
              gsap.fromTo(
                navbarRef.current,
                { width: '100%' }, 
                { 
                  width: '101%', // Slight expand effect
                  duration: 0.4,
                  ease: 'power2.out'
                }
              );
            }
            
            // Desktop menu animation
            if (desktopMenuRef.current) {
              gsap.fromTo(
                desktopMenuRef.current,
                { 
                  width: '100%', 
                  paddingLeft: '0px' 
                },
                { 
                  width: '102%', // Slightly wider to accommodate button
                  paddingLeft: '8px',
                  duration: 0.4,
                  ease: 'power2.out'
                }
              );
            }
            
            // Desktop menu links animation
            const desktopMenu = desktopEmailBtnRef.current.parentElement;
            if (desktopMenu) {
              gsap.fromTo(
                desktopMenu,
                { x: '0rem', paddingRight: '0rem' },
                { x: '-0.5rem', paddingRight: '1rem', duration: 0.4, ease: 'power2.out' }
              );
            }
          }
          
          if (mobileEmailBtnRef.current && isMenuOpen) {
            // Mobile button animation
            gsap.fromTo(
              mobileEmailBtnRef.current,
              { scale: 0, opacity: 0, y: -20 },
              { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
            );
            
            // Animate mobile menu container
            const mobileMenuContainer = mobileEmailBtnRef.current.closest('.animate-fade-down');
            if (mobileMenuContainer) {
              gsap.fromTo(
                mobileMenuContainer,
                { 
                  paddingBottom: '0.5rem',
                  height: 'auto',
                  maxHeight: '400px'
                },
                { 
                  paddingBottom: '1rem', 
                  height: 'auto',
                  maxHeight: '500px',
                  duration: 0.4, 
                  ease: 'power2.inOut' 
                }
              );
            }
            
            // Also animate the navbar itself for mobile
            if (navbarRef.current) {
              gsap.fromTo(
                navbarRef.current,
                { width: '100%' },
                { width: '101%', duration: 0.4, ease: 'power2.out' }
              );
            }
          }
        }
      } else {
        // We're entering the hero section, trigger exit animation
        if (pastHeroSection && !isExiting) {
          setIsExiting(true);
          
          // Apply exit animations
          if (desktopEmailBtnRef.current) {
            // Email button exit animation
            gsap.to(desktopEmailBtnRef.current, {
              scale: 0, 
              opacity: 0, 
              rotation: 15, 
              duration: 0.3,
              ease: 'power2.in'
            });
            
            // Navbar container animation - contract back to normal
            if (navbarRef.current) {
              gsap.to(navbarRef.current, {
                width: '100%',
                duration: 0.35, 
                ease: 'power2.inOut'
              });
            }
            
            // Desktop menu container animation
            if (desktopMenuRef.current) {
              gsap.to(desktopMenuRef.current, {
                width: '100%',
                paddingLeft: '0px',
                duration: 0.35,
                ease: 'power2.inOut'
              });
            }
          }
          
          if (mobileEmailBtnRef.current && isMenuOpen) {
            gsap.to(mobileEmailBtnRef.current, {
              y: -20,
              scale: 0.8,
              opacity: 0,
              duration: 0.3,
              ease: 'power2.in'
            });
            
            // Animate mobile menu container
            const mobileMenuContainer = mobileEmailBtnRef.current.closest('.animate-fade-down');
            if (mobileMenuContainer) {
              gsap.to(mobileMenuContainer, {
                paddingBottom: '0.5rem',
                maxHeight: '400px',
                duration: 0.3,
                ease: 'power2.inOut'
              });
            }
            
            // Also animate the navbar itself for mobile
            if (navbarRef.current) {
              gsap.to(navbarRef.current, {
                width: '100%',
                duration: 0.35,
                ease: 'power2.inOut'
              });
            }
          }
          
          // Delay the actual state change to allow animation to complete
          setTimeout(() => {
            setPastHeroSection(false);
            setIsExiting(false);
          }, 350); // Slightly longer than animation duration to ensure smooth completion
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pastHeroSection, isMenuOpen]);
  
  // Add animation effect for mobile email button when menu opens
  useEffect(() => {
    if (isMenuOpen && pastHeroSection && mobileEmailBtnRef.current) {
      // If menu is opened and we're past hero section, animate the email button
      gsap.fromTo(
        mobileEmailBtnRef.current,
        { scale: 0, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)', delay: 0.1 }
      );
      
      // Also animate the container to expand nicely
      const mobileMenuContainer = mobileEmailBtnRef.current.closest('.animate-fade-down');
      if (mobileMenuContainer) {
        gsap.fromTo(
          mobileMenuContainer,
          { paddingBottom: '0.5rem' },
          { paddingBottom: '1rem', duration: 0.3, delay: 0.05, ease: 'power2.out' }
        );
      }
    }
  }, [isMenuOpen, pastHeroSection]);
  
  // Effect to handle mobile menu height animation when opening/closing
  useEffect(() => {
    if (isMenuOpen) {
      // When menu opens, ensure it animates smoothly
      const mobileMenu = document.querySelector('.animate-fade-down');
      if (mobileMenu) {
        gsap.fromTo(
          mobileMenu,
          { maxHeight: 0, opacity: 0.8 },
          { 
            maxHeight: pastHeroSection ? 500 : 400, 
            opacity: 1, 
            duration: 0.4, 
            ease: 'power2.out' 
          }
        );
        
        // Animate navbar container when menu opens
        if (navbarRef.current) {
          gsap.to(navbarRef.current, {
            width: '101%',
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      }
    }
  }, [isMenuOpen, pastHeroSection]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      ref={navbarRef}
    >
      <div 
        className="container mx-auto px-4 flex justify-center items-center relative"
        ref={desktopMenuRef}
      >
        {/* <a href="#" className="text-2xl font-bold text-gradient">WebBrand Pro</a> */}
        
        {/* Desktop Menu */}
        <div 
          className="hidden md:flex space-x-8"
          style={{ 
            paddingRight: pastHeroSection ? '1rem' : '0', 
            transform: `translateX(${pastHeroSection ? '-0.5rem' : '0'})`
          }}
        >
          <a href="#problem" className="text-white hover:text-primary-300 transition-colors">Problem</a>
          <a href="#solution" className="text-white hover:text-primary-300 transition-colors">Solution</a>
          <a href="#package" className="text-white hover:text-primary-300 transition-colors">Pricing</a>
          <a href="#about" className="text-white hover:text-primary-300 transition-colors">Contact</a>
          {(pastHeroSection || isExiting) && (
            <a 
              ref={desktopEmailBtnRef}
              href="mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=arsalmaab@gmail.com&su=Website%20%26%20Branding%20Package%20Inquiry', '_blank');
              }}
              className={`btn btn-primary btn-sm origin-center ${isExiting ? 'animate-pop-out' : 'animate-pop-in'}`}
            >
              Email Now
            </a>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 py-1">
          <button 
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              // Especially with the Email button, we need to ensure smooth animation
              if (!isMenuOpen) {
                // Opening menu - expand navbar slightly for visual effect
                if (navbarRef.current) {
                  gsap.fromTo(
                    navbarRef.current,
                    { width: '100%' },
                    { 
                      width: '101%', 
                      duration: 0.4, 
                      ease: 'power2.out' 
                    }
                  );
                }
                
                if (document.querySelector('.animate-fade-down')) {
                  const mobileMenu = document.querySelector('.animate-fade-down');
                  gsap.fromTo(
                    mobileMenu,
                    { maxHeight: 0, opacity: 0.8 },
                    { 
                      maxHeight: pastHeroSection ? 500 : 400, 
                      opacity: 1, 
                      duration: 0.4, 
                      ease: 'power2.out' 
                    }
                  );
                }
              } else {
                // Closing menu - contract navbar back to normal
                if (navbarRef.current) {
                  gsap.to(navbarRef.current, {
                    width: '100%',
                    duration: 0.35,
                    ease: 'power2.inOut'
                  });
                }
              }
            }} 
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden bg-base-300 absolute top-full left-0 w-full border-t border-gray-800 animate-fade-down overflow-hidden"
          style={{ 
            maxHeight: pastHeroSection ? '500px' : '400px', // Slightly more space when email button is present
            height: 'auto',
            paddingBottom: pastHeroSection ? '1rem' : '0.5rem',
            // Remove transition since we're using GSAP for smoother animations
          }}
        >
          <div 
            className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            style={{
              transition: 'padding 0.3s ease-out'
            }}
          >
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
            {(pastHeroSection || isExiting) && (
              <a 
                ref={mobileEmailBtnRef}
                href="mailto:arsalmaab@gmail.com?subject=Website%20%26%20Branding%20Package%20Inquiry" 
                className={`btn btn-primary w-full origin-top ${isExiting ? 'animate-slide-out' : 'animate-slide-in'}`}
                onClick={(e) => {
                  // Close mobile menu
                  setIsMenuOpen(false);
                  
                  // Use Gmail link on desktop, default mailto on mobile
                  if (window.innerWidth >= 768) {
                    e.preventDefault();
                    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=arsalmaab@gmail.com&su=Website%20%26%20Branding%20Package%20Inquiry', '_blank');
                  }
                }}
              >
                Email Now
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;