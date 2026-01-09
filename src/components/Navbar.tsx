import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, LogOut, Home, User, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [displayName, setDisplayName] = useState<string | null>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setDisplayName(null);
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('user_id', user.id)
      .maybeSingle();
    
    setDisplayName(data?.full_name || user.user_metadata?.full_name || null);
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Setup', href: '/setup' },
    { name: 'Updates', href: '/updates' },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const getUserDisplayName = () => {
    if (displayName) return displayName;
    if (user?.email) return user.email.split('@')[0];
    return 'User';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={link.name === 'Home' ? handleHomeClick : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <>
                  <Link to="/orders" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Orders
                  </Link>
                  <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2 text-muted-foreground hover:text-foreground">
                    <LogOut className="w-4 h-4" />
                    {getUserDisplayName()}
                  </Button>
                </>
              ) : (
                <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sign In
                </Link>
              )}
            </div>
          </div>

          <Link to="/" onClick={handleHomeClick} className="absolute left-1/2 -translate-x-1/2 font-display font-bold text-xl tracking-tight">
            Macro Pad
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-foreground text-background text-xs rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => { if (link.name === 'Home') handleHomeClick(e); setIsOpen(false); }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
                  <>
                    <Link to="/orders" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="gap-2 justify-start w-full">Orders</Button>
                    </Link>
                    <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2 justify-start">
                      <LogOut className="w-4 h-4" />
                      Sign Out ({getUserDisplayName()})
                    </Button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="gap-2 justify-start w-full">
                      <User className="w-4 h-4" />Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;