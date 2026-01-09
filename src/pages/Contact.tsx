import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 mb-8 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;