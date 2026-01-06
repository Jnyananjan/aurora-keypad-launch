import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const specs = [
  { label: 'Display', value: '2.4" IPS LCD' },
  { label: 'Resolution', value: '320 × 240px' },
  { label: 'Keys', value: '12 Mechanical' },
  { label: 'Switches', value: 'Hot-Swappable' },
  { label: 'Processor', value: 'ESP32-S3' },
  { label: 'Connectivity', value: 'USB-C' },
  { label: 'Wireless', value: 'WiFi & BT 5.0' },
  { label: 'Dimensions', value: '120 × 90 × 25mm' },
  { label: 'Weight', value: '180g' },
  { label: 'Material', value: 'Matte ABS' },
  { label: 'Compatibility', value: 'Win / Mac / Linux' },
  { label: 'Software', value: 'Cross-Platform App' },
];

const Specs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="specs" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Specifications
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every detail engineered for performance.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-r border-border p-4 sm:p-6 last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {spec.label}
              </span>
              <span className="font-display font-semibold text-sm sm:text-base">
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
