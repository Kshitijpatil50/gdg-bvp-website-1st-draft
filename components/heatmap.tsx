'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { siteData } from '@/lib/data';

export function ActivityHeatmap() {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate full year heatmap
  const heatmapDays = useMemo(() => {
    const dataMap = new Map(
      siteData.heatmapData.map((d) => [d.date, d])
    );

    const days = [];
    const startDate = new Date(2024, 0, 1);
    const endDate = new Date(2024, 11, 31);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      days.push({
        date: dateStr,
        events: dataMap.get(dateStr)?.events || 0,
        eventName: dataMap.get(dateStr)?.eventName,
      });
    }
    return days;
  }, []);

  // Group by weeks
  const weeks = useMemo(() => {
    const grouped: typeof heatmapDays[][] = [];
    let currentWeek: typeof heatmapDays = [];

    heatmapDays.forEach((day) => {
      const dayOfWeek = new Date(day.date).getDay();
      currentWeek.push(day);

      if (dayOfWeek === 6) {
        grouped.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      grouped.push(currentWeek);
    }

    return grouped;
  }, [heatmapDays]);

  const getColor = (events: number) => {
    if (events === 0) return 'bg-card border-border';
    if (events === 1)
      return 'bg-blue-500/20 border-blue-500/50 shadow-md shadow-blue-500/20';
    return 'bg-blue-600/30 border-blue-400/60 shadow-lg shadow-blue-500/30';
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
            Activity Timeline
          </h2>
          <p className="text-muted-foreground text-lg">
            Our events throughout 2024. Hover to see what happened.
          </p>
        </motion.div>

        {/* Heatmap Grid */}
        <motion.div
          className="bg-card border border-border rounded-xl p-6 md:p-8 backdrop-blur-sm overflow-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="inline-flex gap-1 min-w-full">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {week.map((day, dayIdx) => {
                  const isHovered = hoveredDate === day.date;

                  return (
                    <motion.div
                      key={day.date}
                      className={`w-3 h-3 md:w-4 md:h-4 border rounded cursor-pointer transition-all duration-200 ${getColor(
                        day.events
                      )}`}
                      whileHover={{ scale: 1.5 }}
                      onMouseEnter={() => {
                        setHoveredDate(day.date);
                      }}
                      onMouseLeave={() => setHoveredDate(null)}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePosition({
                          x: rect.left,
                          y: rect.top,
                        });
                      }}
                      layout
                    >
                      {/* Tooltip */}
                      {isHovered && day.eventName && (
                        <motion.div
                          className="fixed bg-card border border-border rounded px-3 py-2 text-xs font-mono text-foreground pointer-events-none z-50 whitespace-nowrap"
                          style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y - 40}px`,
                          }}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="font-semibold text-accent">
                            {day.eventName}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {new Date(day.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 border rounded ${
                    i === 0
                      ? 'bg-card border-border'
                      : i === 1
                        ? 'bg-blue-500/20 border-blue-500/50'
                        : 'bg-blue-600/30 border-blue-400/60'
                  }`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
