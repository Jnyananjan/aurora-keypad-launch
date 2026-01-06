import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import macropadSide from '@/assets/macropad-side.png';

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          <img
            src={macropadSide}
            alt="Macro Pad Side View"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
