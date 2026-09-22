'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { siteData } from '@/lib/data';

export function Hero() {
  const [typedCommand, setTypedCommand] = useState('');
  const [showStats, setShowStats] = useState(false);

  const command = siteData.hero.command;

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= command.length) {
          setTypedCommand(command.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setShowStats(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timer);
  }, [command]);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleWords = siteData.hero.title.split(' ');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full google-halo" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(52,168,83,.1),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="google-g-mark" aria-hidden="true">G</span>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Google Developer Groups
          </span>
        </motion.div>

        {/* Main Title with word reveals */}
        <motion.h1
          className="text-center mb-6 leading-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-3 text-5xl md:text-7xl font-display font-bold ${i === 0 ? 'google-spectrum' : 'text-foreground'}`}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {siteData.hero.subtitle}
        </motion.p>

        {/* Terminal Command */}
        <motion.div
          className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12 font-mono text-sm md:text-base backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-accent-green">$</span>
            <div className="flex-1">
              <div className="text-foreground">
                {typedCommand}
                {typedCommand.length < command.length && (
                  <span className="animate-pulse text-accent-blue">_</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        {showStats && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {siteData.hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-lg p-4 md:p-6 text-center backdrop-blur-sm hover:border-accent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-display font-bold text-accent mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 + 0.1 * i, duration: 0.8 }}
                >
                  {stat.value}+
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          className="mt-12 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-[linear-gradient(100deg,#4285f4,#34a853)] text-white rounded-lg font-display font-semibold hover:shadow-[0_0_28px_rgba(66,133,244,.3)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-accent text-accent rounded-lg font-display font-semibold hover:bg-accent/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
