import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import macropadHero from '@/assets/macropad-hero.png';

const stages = [
  {
    id: 1,
    title: 'ESP32-S3 Powered',
    description: 'Dual-core processor with WiFi & Bluetooth built-in.',
    opacity: [0, 1, 1, 0],
    scale: [0.9, 1, 1, 0.9],
  },
  {
    id: 2,
    title: 'Hot-Swap Sockets',
    description: 'Change switches without soldering. Fully modular.',
    opacity: [0, 0, 1, 1, 0],
    scale: [0.9, 0.9, 1, 1, 0.9],
  },
  {
    id: 3,
    title: 'Mechanical Switches',
    description: 'Premium tactile switches with 50M actuation lifespan.',
    opacity: [0, 0, 0, 1, 1, 0],
    scale: [0.9, 0.9, 0.9, 1, 1, 0.9],
  },
  {
    id: 4,
    title: 'OLED Display',
    description: '2.4" IPS display for real-time feedback and graphics.',
    opacity: [0, 0, 0, 0, 1, 1],
    scale: [0.9, 0.9, 0.9, 0.9, 1, 1],
  },
];

const BuilderSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform scroll progress to stage index (0-3)
  const stageProgress = useTransform(scrollYProgress, [0, 1], [0, stages.length - 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh]" id="features">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-foreground/3 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Product Image - Center */}
          <motion.div 
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg order-1 lg:order-2"
          >
            <motion.div
              style={{
                scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]),
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-foreground/5 rounded-full blur-[60px] scale-90" />
                <img
                  src={macropadHero}
                  alt="Macro Pad Assembly"
                  className="relative w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content - Side */}
          <div className="relative w-full max-w-sm text-center lg:text-left order-2 lg:order-1">
            {stages.map((stage, index) => {
              const startProgress = index / stages.length;
              const endProgress = (index + 1) / stages.length;
              
              return (
                <motion.div
                  key={stage.id}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        Math.max(0, startProgress - 0.1),
                        startProgress,
                        endProgress - 0.1,
                        endProgress,
                      ],
                      [0, 1, 1, index === stages.length - 1 ? 1 : 0]
                    ),
                  }}
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                    Stage {stage.id}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 glow-text">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="w-1 h-8 rounded-full bg-border overflow-hidden"
            >
              <motion.div
                className="w-full bg-foreground rounded-full"
                style={{
                  height: useTransform(
                    scrollYProgress,
                    [
                      index / stages.length,
                      (index + 0.5) / stages.length,
                      (index + 1) / stages.length,
                    ],
                    ['0%', '100%', '100%']
                  ),
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuilderSection;
