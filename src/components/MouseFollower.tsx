import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cursorRef.current) return;
    
    const cursor = cursorRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Hide cursor when mouse leaves the window
    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    };
    
    // Show cursor when mouse enters the window
    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    };
    
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    
    // Handle hover effects on interactive elements
    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        duration: 0.3,
      });
    };
    
    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        duration: 0.3,
      });
    };
    
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  return (
    <div
      ref={cursorRef}
      className="w-8 h-8 rounded-full bg-white bg-opacity-10 fixed pointer-events-none z-50 backdrop-blur-sm hidden md:block"
      style={{
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    />
  );
};

export default MouseFollower;