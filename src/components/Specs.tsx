import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import macropadSide from '@/assets/macropad-side.png';

const specs = [
  { label: 'Display', value: '2.4" IPS LCD, 320x240px' },
  { label: 'Keys', value: '12 hot-swappable mechanical switches' },
  { label: 'Processor', value: 'ARM Cortex-M4 @ 168MHz' },
  { label: 'Connectivity', value: 'USB-C, Bluetooth 5.0' },
  { label: 'Material', value: 'High-quality matte plastic' },
  { label: 'Dimensions', value: '120 x 90 x 25mm' },
  { label: 'Weight', value: '180g' },
  { label: 'Compatibility', value: 'Windows, macOS, Linux' },
];

const Specs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="specs" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
              <div className="relative glass-card p-8 h-full flex items-center justify-center">
                <img
                  src={macropadSide}
                  alt="MacroPad Pro Side View"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Specs List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium mb-4 block">Specifications</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Built to Perform
            </h2>

            <div className="space-y-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="flex justify-between items-center py-3 border-b border-border/50"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
