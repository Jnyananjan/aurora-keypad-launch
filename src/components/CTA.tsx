import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import macropadSide from '@/assets/macropad-side.png';
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
    <section className="py-20 sm:py-28">
      {/* Side profile image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-foreground/5 rounded-full blur-[80px] scale-75" />
          <img
            src={macropadSide}
            alt="Macro Pad Side Profile"
            className="relative w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* CTA Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">
            Limited Pre-Order
          </span>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 glow-text">
            Be Among the First
          </h2>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Pre-order now and get exclusive early-bird pricing. 
            Limited quantities available.
          </p>

          {isInCart('macropad-pro') ? (
            <Link to="/cart">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-10 py-6 text-base glow-strong"
              >
                View Cart
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          ) : (
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-10 py-6 text-base glow-strong"
              onClick={handlePreOrder}
            >
              Pre-Order — $149
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}

          <p className="text-muted-foreground text-sm mt-6">
            Estimated shipping: Q2 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
