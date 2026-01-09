import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const PaymentSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for your pre-order. We'll send you an email confirmation shortly.
            </p>

            <div className="glass-card p-6 mb-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-primary" />
                <h2 className="font-semibold">What's Next?</h2>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">1.</span>
                  You'll receive an order confirmation email
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">2.</span>
                  We'll notify you when your order ships
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">3.</span>
                  Track your order from the Orders page
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orders">
                <Button size="lg" className="gap-2">
                  View Orders
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;