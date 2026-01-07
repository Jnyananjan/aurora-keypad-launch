import { motion } from 'framer-motion';
import macropadSide from '@/assets/macropad-side.png';

const logos = [
  { name: 'Windows', icon: '⊞' },
  { name: 'macOS', icon: '' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Photoshop', icon: 'Ps' },
  { name: 'Premiere', icon: 'Pr' },
  { name: 'VS Code', icon: '⌨' },
  { name: 'Figma', icon: '◈' },
  { name: 'OBS', icon: '◉' },
  { name: 'Discord', icon: '💬' },
  { name: 'Spotify', icon: '♫' },
  { name: 'Blender', icon: '🎨' },
  { name: 'Unity', icon: '⬡' },
];

const Compatibility = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Product Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl lg:max-w-2xl mx-auto"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-foreground/5 rounded-full blur-[60px] scale-75" />
          
          <div className="relative bg-background">
            <img
              src={macropadSide}
              alt="MacroPad Pro Side View"
              className="w-full h-full object-contain mix-blend-lighten"
            />
          </div>
        </motion.div>
      </div>

      {/* Made for Everything */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Made for Everything
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-lg mx-auto px-4"
        >
          Compatible with your favorite apps and operating systems
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-2xl">
                {logo.icon}
              </div>
              <span className="text-xs text-muted-foreground">{logo.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-2xl">
                {logo.icon}
              </div>
              <span className="text-xs text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
