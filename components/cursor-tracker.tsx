'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="pointer-events-none fixed w-40 h-40 rounded-full border border-accent/30 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 0.5 : 0,
          background: `radial-gradient(circle, rgba(91, 141, 239, 0.1) 0%, transparent 70%)`,
        }}
      />

      {/* Secondary glow (larger, slower) */}
      <motion.div
        className="pointer-events-none fixed w-60 h-60 rounded-full mix-blend-multiply hidden lg:block"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 100,
          mass: 2,
        }}
        style={{
          opacity: isVisible ? 0.08 : 0,
          background: `radial-gradient(circle, rgba(91, 141, 239, 0.15) 0%, transparent 70%)`,
        }}
      />

      {/* Trailing dots (mobile-friendly alternative) */}
      <motion.div
        className="pointer-events-none fixed w-3 h-3 rounded-full bg-accent/50 md:hidden"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
