'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { Users, Code } from 'lucide-react';

function formatEventDate(date: string) {
  const [year, month, day] = date.slice(0, 10).split('-').map(Number);
  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1];
  return `${monthName} ${day}, ${year}`;
}

export function Events() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hackathon':
        return 'border-accent-red bg-red-500/10';
      case 'workshop':
        return 'border-accent-blue bg-blue-500/10';
      case 'talk':
        return 'border-accent-yellow bg-yellow-500/10';
      case 'meetup':
        return 'border-accent-green bg-green-500/10';
      default:
        return 'border-accent bg-blue-500/10';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Events Changelog
          </h2>
          <p className="text-muted-foreground text-lg">
            Workshops, hackathons, and community build nights—tracked like commits.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteData.events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`border rounded-lg p-6 bg-card backdrop-blur-sm hover:border-accent transition-all duration-300 cursor-pointer ${getCategoryColor(event.category)}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-accent">
                        {event.id}
                      </span>
                      <span
                        className={`text-xs font-mono px-2 py-1 rounded border ${getCategoryColor(event.category)}`}
                      >
                        {getCategoryLabel(event.category)}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{event.attendees} attended</span>
                      </div>
                      <span className="font-mono">
                        {formatEventDate(event.date)}
                      </span>
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <motion.div
                    className="hidden md:block w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 5 }}
                  >
                    <Code size={24} className="text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
