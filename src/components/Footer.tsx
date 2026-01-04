import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">M</span>
            </div>
            <span className="font-display font-semibold text-lg">MacroPad</span>
          </Link>

          {/* Links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#specs" className="hover:text-foreground transition-colors">Specs</a>
            <Link to="/cart" className="hover:text-foreground transition-colors">Cart</Link>
            <Link to="/auth" className="hover:text-foreground transition-colors">Sign In</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 MacroPad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
