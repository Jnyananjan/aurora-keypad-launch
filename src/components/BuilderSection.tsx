import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import macropadHero from '@/assets/macropad-hero.png';
import macropadSide from '@/assets/macropad-side.png';

const stages = [
  {
    id: 1,
    title: 'ESP32-S3 Powered',
    description: 'High-performance dual-core processor running at 240MHz with built-in WiFi and Bluetooth.',
  },
  {
    id: 2,
    title: 'Hot-Swap Sockets',
    description: 'Easily swap switches without soldering. Compatible with Cherry MX style switches.',
  },
  {
    id: 3,
    title: 'Mechanical Switches',
    description: '12 programmable keys with satisfying tactile feedback and RGB backlighting options.',
  },
  {
    id: 4,
    title: 'OLED Display',
    description: 'Built-in 2.4" IPS LCD screen for real-time feedback, custom graphics, and system info.',
  },
];

const BuilderSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to stage (0-3)
  const stageProgress = useTransform(scrollYProgress, [0, 1], [0, stages.length - 1]);

  return (
    <section id="builder" ref={containerRef} className="relative h-[300vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative flex items-center justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-full blur-[80px]"
                  style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 1]) }}
                />
                
                {/* Product images that transition */}
                <motion.div className="relative">
                  <motion.img
                    src={macropadHero}
                    alt="Macro Pad Build Stage"
                    className="w-full h-auto"
                    style={{
                      opacity: useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 1, 0]),
                    }}
                  />
                  <motion.img
                    src={macropadSide}
                    alt="Macro Pad Complete"
                    className="w-full h-auto absolute inset-0"
                    style={{
                      opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1]),
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Text Side */}
            <div className="relative order-2 lg:order-2">
              <div className="space-y-8">
                {stages.map((stage, index) => (
                  <StageText
                    key={stage.id}
                    stage={stage}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    totalStages={stages.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StageTextProps {
  stage: typeof stages[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  totalStages: number;
}

const StageText = ({ stage, index, scrollYProgress, totalStages }: StageTextProps) => {
  const start = index / totalStages;
  const end = (index + 1) / totalStages;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, mid, end - 0.05, end],
    [0, 1, 1, 1, index === totalStages - 1 ? 1 : 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [20, 0, 0, index === totalStages - 1 ? 0 : -20]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="text-center lg:text-left"
    >
      <span className="text-muted-foreground text-sm font-medium mb-2 block">
        0{stage.id}
      </span>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
        {stage.title}
      </h3>
      <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0">
        {stage.description}
      </p>
    </motion.div>
  );
};

export default BuilderSection;
