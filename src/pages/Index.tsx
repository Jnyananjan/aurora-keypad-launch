import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BuilderSection from '@/components/BuilderSection';
import SoftwareMarquee from '@/components/SoftwareMarquee';
import Specs from '@/components/Specs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <BuilderSection />
      <SoftwareMarquee />
      <Specs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
