const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Discord', url: '#' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Return Policy', url: '#' },
  ];

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-lg font-semibold">Macro Pad</div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Macro Pad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
