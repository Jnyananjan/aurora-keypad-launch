import { motion } from 'framer-motion';

const softwareLogos = [
  { name: 'Photoshop', icon: 'Ps' },
  { name: 'Premiere Pro', icon: 'Pr' },
  { name: 'VS Code', icon: '</>' },
  { name: 'OBS Studio', icon: 'OBS' },
  { name: 'Figma', icon: 'F' },
  { name: 'Blender', icon: 'B' },
  { name: 'After Effects', icon: 'Ae' },
  { name: 'DaVinci Resolve', icon: 'DR' },
  { name: 'Logic Pro', icon: 'LP' },
  { name: 'Ableton', icon: 'Ab' },
];

const SoftwareMarquee = () => {
  // Duplicate for seamless loop
  const allLogos = [...softwareLogos, ...softwareLogos];

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Made for Everything
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-md mx-auto"
        >
          Works seamlessly with all your favorite creative and productivity tools.
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {allLogos.map((software, index) => (
            <div
              key={`${software.name}-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-10"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-border bg-card flex items-center justify-center">
                  <span className="font-display font-bold text-sm sm:text-base text-foreground">
                    {software.icon}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {software.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareMarquee;
