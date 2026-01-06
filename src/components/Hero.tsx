import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import macropadHero from '@/assets/macropad-hero.png';

const Hero = () => {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4">
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-foreground/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Pre-orders Open</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight glow-text"
        >
          The Future of
          <br />
          Macro Control
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md mx-auto"
        >
          Premium macro pad with built-in display. Designed for creators.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {isInCart('macropad-pro') ? (
            <Link to="/cart">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 py-6 text-base glow-strong"
              >
                View Cart
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          ) : (
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 py-6 text-base glow-strong"
              onClick={handlePreOrder}
            >
              Pre-Order — $149
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </motion.div>
      </div>

      {/* Large Product Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mt-12 sm:mt-16 w-full max-w-2xl lg:max-w-3xl mx-auto"
      >
        <div className="absolute inset-0 bg-foreground/5 rounded-full blur-[80px] scale-75" />
        <img
          src={macropadHero}
          alt="Macro Pad"
          className="relative w-full h-auto object-contain"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-1 rounded-full bg-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
