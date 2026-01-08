import { motion } from 'framer-motion';
import { Download, Settings, Keyboard, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Download,
    title: 'Download the Software',
    description: 'Get the MacroPad Configurator from our official website. Available for Windows, macOS, and Linux.',
  },
  {
    icon: Settings,
    title: 'Connect Your Device',
    description: 'Plug in your MacroPad via USB-C. The software will automatically detect your device.',
  },
  {
    icon: Keyboard,
    title: 'Configure Your Keys',
    description: 'Assign macros, shortcuts, and custom functions to each key. Customize the display to show what you need.',
  },
  {
    icon: CheckCircle,
    title: 'Start Using',
    description: 'Save your configuration and start boosting your productivity. Your settings sync across devices.',
  },
];

const Setup = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 mb-8 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Setup Guide
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get your MacroPad up and running in just a few simple steps
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 mb-12 last:mb-0"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-border" />
                )}
                
                {/* Step number with icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
                  <step.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-muted-foreground text-sm">Step {index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Configurator
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Setup;