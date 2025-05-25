import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAnimation() {
  const animateFrom = (elem: Element, direction?: number) => {
    direction = direction || 1;
    
    const x = 0;
    const y = direction * 60; // Reduced from 100
    const delay = 0;
    
    if (elem) {
      gsap.fromTo(
        elem,
        {
          x: x,
          y: y,
          autoAlpha: 0,
        },
        {
          duration: 0.8, // Reduced from 1.25
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'power3.out', // Changed from expo for faster acceleration
          overwrite: 'auto',
          delay: delay,
        }
      );
    }
  };
  
  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateFrom(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '50px', // Added margin to trigger earlier (elements will start animating when they're 50px before entering viewport)
      threshold: 0.05, // Reduced from 0.1 - needs less of the element to be visible before animating
    });
    
    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach((elem) => {
      observer.observe(elem);
    });
    
    return () => {
      fadeElems.forEach((elem) => {
        observer.unobserve(elem);
      });
    };
  }, []);
  
  return null;
}

export function useScrollAnimations() {
  useEffect(() => {
    const sections = gsap.utils.toArray<Element>('.animate-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 80, // Reduced from 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7, // Reduced from 1
          ease: 'power3.out', // Changed for faster acceleration
          scrollTrigger: {
            trigger: section,
            start: 'top 90%', // Start animation sooner (when top of element reaches 90% from top of viewport)
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      );
      
      const elements = section.querySelectorAll('.animate-element');
      elements.forEach((elem, index) => {
        gsap.fromTo(
          elem,
          {
            opacity: 0,
            y: 30, // Reduced from 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5, // Reduced from 0.7
            delay: index * 0.05 + 0.1, // Reduced delay between elements
            ease: 'power3.out', // Changed for faster acceleration
            scrollTrigger: {
              trigger: elem, // Changed from section to individual element
              start: 'top 120%', // Start when element comes into view
              end: 'top 40%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });
  }, []);
}

export function useParallax(intensity = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * intensity * 100;
      const yPos = (clientY / innerHeight - 0.5) * intensity * 100;
      
      gsap.to(element, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);
  
  return ref;
}