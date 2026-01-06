import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const specs = [
  { label: 'Display', value: '2.4" IPS LCD' },
  { label: 'Keys', value: '12 Hot-Swap' },
  { label: 'Processor', value: 'ESP32-S3' },
  { label: 'Connectivity', value: 'USB-C' },
  { label: 'Dimensions', value: '120 × 90 × 25mm' },
  { label: 'Compatibility', value: 'Win / Mac / Linux' },
];

const Specs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="specs" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Specifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-background p-8 text-center"
              >
                <div className="text-muted-foreground text-sm mb-2">{spec.label}</div>
                <div className="text-lg font-medium">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specs;
