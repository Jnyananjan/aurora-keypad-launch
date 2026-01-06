import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BuilderSection from '@/components/BuilderSection';
import ProductShowcase from '@/components/ProductShowcase';
import MadeForEverything from '@/components/MadeForEverything';
import Specs from '@/components/Specs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <BuilderSection />
      <ProductShowcase />
      <MadeForEverything />
      <Specs />
      <Footer />
    </div>
  );
};

export default Index;
