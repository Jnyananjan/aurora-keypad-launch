import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import macropadHero from '@/assets/macropad-hero.png';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { addToCart, isInCart } = useCart();

  const handlePreOrder = () => {
    if (!isInCart('macropad-pro')) {
      addToCart({
        id: 'macropad-pro',
        name: 'MacroPad Pro',
        price: 149,
        image: macropadHero
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary text-sm font-medium mb-4"
          >
            Limited Pre-Order
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            Be Among the First
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
          >
            Pre-order now and get exclusive early-bird pricing. 
            Limited quantities available for the first production run.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {isInCart('macropad-pro') ? (
              <Link to="/cart">
                <Button size="lg" className="gap-2 text-base px-10 animate-glow-pulse">
                  View Cart
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <Button 
                size="lg" 
                className="gap-2 text-base px-10 animate-glow-pulse"
                onClick={handlePreOrder}
              >
                Pre-Order — $149
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-sm mt-6"
          >
            Estimated shipping: Q2 2025
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
