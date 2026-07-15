'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { siteData } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    interests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', year: '', interests: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            How to Join
          </h2>
          <p className="text-muted-foreground text-lg">
            A 3-step merit-based process. No shortcuts. Just dedication.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteData.joinProcess.map((process) => (
            <motion.div key={process.step} variants={itemVariants}>
              <div className="relative group">
                {/* Card */}
                <div className="bg-card border border-border rounded-lg p-6 md:p-8 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Step indicator */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors" />

                  {/* Number circle */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-accent text-primary-foreground font-display font-bold text-lg flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {process.step}
                  </motion.div>

                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                    {process.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>

                  {/* Connection line for desktop */}
                  {process.step < 3 && (
                    <motion.div
                      className="hidden md:block absolute -right-6 top-1/3 w-12 h-0.5 bg-gradient-to-r from-accent to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + process.step * 0.1 }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Info */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-6">
              Express Your Interest
            </h3>
            <div className="space-y-4">
              {[
                'Connect with 240+ developers',
                'Access exclusive workshops & events',
                'Mentor and be mentored',
                'Build projects that matter',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <CheckCircle2 size={24} className="text-accent-green flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <motion.div
            className="bg-card border border-border rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Cursor-reactive glow */}
            <motion.div
              className="absolute -inset-1 rounded-xl opacity-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(91, 141, 239, 0.1), transparent 80%)`,
              }}
              animate={{ opacity: 1 }}
            />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Year
                  </label>
                  <select
                    required
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select your year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Interests
                  </label>
                  <textarea
                    value={formData.interests}
                    onChange={(e) =>
                      setFormData({ ...formData, interests: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="What interests you?"
                    rows={3}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-accent text-primary-foreground font-display font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Interest
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="relative z-10 text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-accent-green/20 border border-accent-green mx-auto mb-4 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <CheckCircle2 size={32} className="text-accent-green" />
                </motion.div>
                <h4 className="text-xl font-display font-bold mb-2">
                  Thanks for your interest!
                </h4>
                <p className="text-muted-foreground">
                  We&apos;ll be in touch soon. Check your email.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
