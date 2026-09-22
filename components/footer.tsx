'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { Code2, Share2, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  const linkHover = {
    y: -2,
    transition: { duration: 0.2 },
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="google-g-mark google-g-mark-sm" aria-hidden="true">G</span>
              <h3 className="font-display font-bold text-lg">
                GDG on Campus
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteData.chapter.college}, Pune. Building the next generation of
              developers through community, collaboration, and code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Events', 'Teams', 'Join', 'About'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    whileHover={linkHover}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Code2, href: '#' },
                { icon: Share2, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="text-muted-foreground hover:text-accent" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>
            © {currentYear} {siteData.chapter.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
