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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Product Image - Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-2xl lg:max-w-3xl mb-8"
        >
          {/* Glow behind product */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-[100px] scale-75" />
          
          <img
            src={macropadHero}
            alt="Macro Pad"
            className="w-full h-auto relative z-10"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Macro Pad
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md mx-auto">
            Programmable control at your fingertips.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {isInCart('macropad-pro') ? (
              <Link to="/cart">
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded px-10 py-6 text-base font-medium gap-2 glow-box animate-pulse-glow"
                >
                  View Cart
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded px-10 py-6 text-base font-medium gap-2 glow-box animate-pulse-glow"
                onClick={handlePreOrder}
              >
                Pre-Order — $149
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
