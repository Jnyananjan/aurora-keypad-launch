import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Compatibility from '@/components/Compatibility';
import Specs from '@/components/Specs';
import DeviceDescription from '@/components/DeviceDescription';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Compatibility />
      <Specs />
      <DeviceDescription />
      <FAQ />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
