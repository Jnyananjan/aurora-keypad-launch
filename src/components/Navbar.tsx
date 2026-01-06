import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import macropadHero from '@/assets/macropad-hero.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount, addToCart, isInCart } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const handlePreOrder = () => {
    if (!isInCart('macropad-pro')) {
      addToCart({
        id: 'macropad-pro',
        name: 'MacroPad Pro',
        price: 149,
        image: macropadHero
      });
    }
    navigate('/cart');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Sign In / User */}
          <div className="hidden md:flex items-center gap-4 w-40">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground truncate max-w-[80px]">
                  {user.email?.split('@')[0]}
                </span>
                <button onClick={handleSignOut} className="text-muted-foreground hover:text-foreground transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button - Left */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center - Logo Text */}
          <a 
            href="/" 
            onClick={handleHomeClick}
            className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Macro Pad
          </a>

          {/* Right side - Cart & Pre-Order */}
          <div className="hidden md:flex items-center gap-4 w-40 justify-end">
            <Link to="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-foreground text-background text-[10px] rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            <Button 
              onClick={handlePreOrder}
              className="bg-foreground text-background hover:bg-foreground/90 rounded px-4 py-1.5 text-sm font-medium"
            >
              Pre-Order
            </Button>
          </div>

          {/* Mobile - Cart only */}
          <Link to="/cart" className="md:hidden relative">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-foreground text-background text-[10px] rounded-full flex items-center justify-center font-medium">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="/"
                onClick={handleHomeClick}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Home
              </a>
              <a
                href="/#builder"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="/#specs"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Specs
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
                  <button 
                    onClick={handleSignOut} 
                    className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                ) : (
                  <Link 
                    to="/auth" 
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Sign In
                  </Link>
                )}
                <Button 
                  onClick={handlePreOrder}
                  className="bg-foreground text-background hover:bg-foreground/90 rounded w-full"
                >
                  Pre-Order
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
