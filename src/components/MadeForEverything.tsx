import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const apps = [
  { name: 'Photoshop', icon: 'Ps' },
  { name: 'Premiere Pro', icon: 'Pr' },
  { name: 'VS Code', icon: '</>' },
  { name: 'OBS Studio', icon: 'OBS' },
  { name: 'After Effects', icon: 'Ae' },
  { name: 'Figma', icon: 'Fig' },
  { name: 'Blender', icon: 'Bl' },
  { name: 'Discord', icon: 'Dc' },
];

const MadeForEverything = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Duplicate for seamless loop
  const duplicatedApps = [...apps, ...apps];

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Made for Everything
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Works seamlessly with your favorite creative and productivity tools.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="marquee"
      >
        <div className="marquee-content">
          {duplicatedApps.map((app, index) => (
            <div
              key={`${app.name}-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-border/50 bg-card/50 flex items-center justify-center hover:border-foreground/30 transition-colors">
                <span className="text-xl sm:text-2xl font-bold text-muted-foreground">
                  {app.icon}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{app.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MadeForEverything;
