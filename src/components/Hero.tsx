import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import macropadHero from '@/assets/macropad-hero.png';
import { useHasOrdered } from '@/hooks/useHasOrdered';

const Hero = () => {
  const { addToCart, isInCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { hasOrdered } = useHasOrdered();

  const handlePreOrder = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (!isInCart('macropad-pro')) {
      addToCart({
        id: 'macropad-pro',
        name: 'MacroPad Pro',
        price: 12999,
        image: macropadHero
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-foreground/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Content - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:flex-1 order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              The Future of
              <span className="block text-foreground">Macro Control</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A premium macro pad featuring a built-in LCD display, programmable keys, 
              and endless customization. Designed for creators, developers, and power users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {hasOrdered ? (
                <Button size="lg" className="text-base px-10 bg-muted text-muted-foreground cursor-not-allowed" disabled>
                  Already Ordered
                </Button>
              ) : isInCart('macropad-pro') ? (
                <Link to="/cart">
                  <Button size="lg" className="text-base px-10 bg-foreground text-background hover:bg-foreground/90 font-semibold">
                    View Cart
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="lg" 
                  className="text-base px-10 bg-foreground text-background hover:bg-foreground/90 font-semibold"
                  onClick={handlePreOrder}
                >
                  Pre-Order Now — ₹12,999
                </Button>
              )}
              <a href="#features">
                <Button variant="outline" size="lg" className="text-base px-8 border-border hover:bg-secondary">
                  Learn More
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image - Right on desktop, top on mobile (vertical) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mb-12 lg:mb-0 lg:flex-1 order-1 lg:order-2"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-lg">
              <div className="absolute inset-0 bg-foreground/10 rounded-full blur-[80px] scale-75" />
              <div className="relative bg-background">
                <img
                  src={macropadHero}
                  alt="MacroPad Pro"
                  className="w-full h-full object-contain mix-blend-lighten rotate-90 lg:rotate-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;