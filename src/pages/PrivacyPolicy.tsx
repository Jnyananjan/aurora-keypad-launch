import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">Last updated: January 2025</p>
              
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Order history</li>
                <li>Communications with our team</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about orders and updates</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors for transaction handling</li>
                <li>Shipping carriers for order delivery</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us at privacy@macropad.com to exercise these rights.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@macropad.com.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;