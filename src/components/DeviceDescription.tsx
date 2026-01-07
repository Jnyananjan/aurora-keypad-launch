import { motion } from 'framer-motion';
import macropadHero from '@/assets/macropad-hero.png';
import macropadSide from '@/assets/macropad-side.png';

const DeviceDescription = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every component designed with precision and purpose
          </p>
        </motion.div>

        {/* Body Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-20"
        >
          <div className="relative">
            <div className="border border-foreground/20 rounded-2xl overflow-hidden p-4">
              <img
                src={macropadHero}
                alt="MacroPad Body"
                className="w-full object-contain mix-blend-lighten"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Premium Body</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafted with a sleek plastic chassis that balances durability with lightweight portability. 
              The minimalist design features clean lines and a compact footprint that complements any workspace setup.
            </p>
          </div>
        </motion.div>

        {/* Display Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-20"
        >
          <div className="space-y-4 md:order-1">
            <h3 className="font-display text-2xl font-semibold">Integrated Display</h3>
            <p className="text-muted-foreground leading-relaxed">
              A vibrant built-in LCD display shows real-time information, custom graphics, and dynamic feedback. 
              Personalize your view with widgets, system stats, or custom artwork that reflects your workflow.
            </p>
          </div>
          <div className="relative md:order-2">
            <div className="border border-foreground/20 rounded-2xl overflow-hidden p-4">
              <img
                src={macropadSide}
                alt="MacroPad Display"
                className="w-full object-contain mix-blend-lighten"
              />
            </div>
          </div>
        </motion.div>

        {/* Switches Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-20"
        >
          <div className="relative">
            <div className="border border-foreground/20 rounded-2xl overflow-hidden p-4">
              <img
                src={macropadHero}
                alt="MacroPad Switches"
                className="w-full object-contain mix-blend-lighten"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Mechanical Switches</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hot-swappable mechanical switches deliver satisfying tactile feedback with every press. 
              Choose your preferred switch type for the perfect balance of actuation force and travel distance.
            </p>
          </div>
        </motion.div>

        {/* Final Device Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-foreground/5 rounded-full blur-[80px] scale-75" />
          <div className="relative bg-background">
            <img
              src={macropadSide}
              alt="MacroPad Complete View"
              className="w-full object-contain mix-blend-lighten"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceDescription;
