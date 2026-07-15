'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import * as Icons from 'lucide-react';

export function Teams() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<any>> = {
      Calendar: Icons.Calendar,
      Rocket: Icons.Rocket,
      Code: Icons.Code,
      Briefcase: Icons.Briefcase,
    };
    return iconMap[iconName] || Icons.Zap;
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
            Our Teams
          </h2>
          <p className="text-muted-foreground text-lg">
            Organized into four merit-based sub-teams. Merit matters here.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteData.teams.map((team, index) => {
            const IconComponent = getIcon(team.icon);

            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className="relative bg-card border border-border rounded-xl p-8 backdrop-blur-sm h-full overflow-hidden">
                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-3xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-block p-3 bg-accent/10 rounded-lg border border-accent/20 group-hover:border-accent transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent
                        size={32}
                        className="text-accent group-hover:text-accent transition-colors"
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                      {team.name}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {team.description}
                    </p>

                    {/* Members badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-green" />
                        <span className="text-sm font-mono text-muted-foreground">
                          {team.members} members
                        </span>
                      </div>

                      {/* Interactive elements */}
                      <motion.div
                        className="flex gap-1"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-accent"
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 0.6,
                              delay: i * 0.1,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>

                    {/* Hover border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-accent/0 pointer-events-none group-hover:border-accent/50 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
