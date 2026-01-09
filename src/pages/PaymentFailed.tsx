import { motion } from 'framer-motion';
import { XCircle, RefreshCcw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PaymentFailed = () => {
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
              className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <XCircle className="w-12 h-12 text-red-500" />
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Payment Failed
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Your payment could not be processed. Don't worry, no amount has been deducted from your account.
            </p>

            <div className="glass-card p-6 mb-8 text-left">
              <h2 className="font-semibold mb-4">Possible Reasons:</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Insufficient funds in your account</li>
                <li>• Payment was cancelled</li>
                <li>• Network connectivity issues</li>
                <li>• Bank declined the transaction</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checkout">
                <Button size="lg" className="gap-2">
                  <RefreshCcw className="w-4 h-4" />
                  Try Again
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
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

export default PaymentFailed;