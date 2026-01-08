import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Terms and Conditions
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">Last updated: January 2025</p>
              
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Introduction</h2>
              <p>
                These Terms and Conditions govern your purchase and use of MacroPad products. By placing an order, you agree to these terms in their entirety.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. Orders and Payment</h2>
              <p>
                All orders are subject to acceptance and availability. We reserve the right to refuse any order. Payment must be received in full before products are shipped.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. Pricing</h2>
              <p>
                All prices are listed in USD and are subject to change without notice. Prices do not include shipping, handling, or applicable taxes, which will be added at checkout.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Shipping</h2>
              <p>
                We ship to most countries worldwide. Shipping times and costs vary by location. We are not responsible for customs duties or import taxes that may apply to international orders.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Warranty</h2>
              <p>
                MacroPad products come with a 1-year limited warranty against manufacturing defects. This warranty does not cover damage caused by misuse, accidents, or unauthorized modifications.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Intellectual Property</h2>
              <p>
                All content, designs, and software associated with MacroPad products are protected by intellectual property rights. Users may not reproduce, distribute, or modify these materials without explicit permission.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Limitation of Liability</h2>
              <p>
                MacroPad shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;