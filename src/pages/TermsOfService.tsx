import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">Last updated: January 2025</p>
              
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing and using MacroPad products and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on MacroPad's website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. Product Usage</h2>
              <p>
                MacroPad products are intended for personal and professional productivity enhancement. Users are responsible for ensuring compliance with applicable laws in their jurisdiction.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Disclaimer</h2>
              <p>
                The materials on MacroPad's website are provided on an 'as is' basis. MacroPad makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Limitations</h2>
              <p>
                In no event shall MacroPad or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MacroPad's website.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at support@macropad.com.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;