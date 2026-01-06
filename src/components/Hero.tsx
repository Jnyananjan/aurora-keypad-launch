import { motion } from 'framer-motion';
import { ArrowRight, Zap, Monitor, Layers } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary">Pre-orders Now Open</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              The Future of
              <span className="gradient-text block">Macro Control</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A premium macro pad featuring a built-in LCD display, programmable keys, 
              and endless customization. Designed for creators, developers, and power users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {isInCart('macropad-pro') ? (
                <Link to="/cart">
                  <Button size="lg" className="gap-2 text-base px-8 glow-border">
                    View Cart
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="lg" 
                  className="gap-2 text-base px-8 glow-border"
                  onClick={handlePreOrder}
                >
                  Pre-Order Now — $149
                  <ArrowRight className="w-5 h-5" />
                </Button>
              )}
              <a href="#features">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Learn More
                </Button>
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 sm:gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { icon: Monitor, label: 'LCD Display', value: '2.4"' },
                { icon: Layers, label: 'Keys', value: '12' },
                { icon: Zap, label: 'Response', value: '1ms' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-display font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl animate-pulse-glow" />
              
              {/* Product Container */}
              <div className="relative glass-card p-8 animate-float">
                <img
                  src={macropadHero}
                  alt="MacroPad Pro"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
