import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Discord', url: '#' },
    { name: 'YouTube', url: '#' },
  ];

  const policyLinks = [
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Return Policy', url: '/returns' },
    { name: 'Terms & Conditions', url: '/conditions' },
  ];

  return (
    <footer className="py-12 sm:py-16 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-bold text-xl tracking-tight mb-4 block">
              Macro Pad
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              The premium macro pad designed for creators, developers, and power users.
            </p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Legal</h3>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Follow Us</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Macro Pad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Specs
            </a>
            <Link to="/cart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
