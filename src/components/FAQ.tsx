import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is MacroPad Pro?',
    answer: 'MacroPad Pro is a premium programmable macro pad featuring a built-in LCD display, hot-swappable mechanical switches, and endless customization options. It\'s designed for creators, developers, and power users who want to boost their productivity.'
  },
  {
    question: 'When will my pre-order ship?',
    answer: 'Pre-orders are expected to ship within 4-6 weeks of your order date. You will receive a tracking number via email once your order ships.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI, net banking, and wallet payments through our secure Razorpay payment gateway.'
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes! MacroPad Pro comes with a 1-year limited warranty covering manufacturing defects. This does not cover damage from misuse or accidental drops.'
  },
  {
    question: 'Can I customize the display?',
    answer: 'Absolutely! The built-in LCD display is fully customizable through our configurator software. You can display custom images, system stats, shortcuts, and more.'
  },
  {
    question: 'What operating systems are supported?',
    answer: 'MacroPad Pro works with Windows 10/11, macOS 10.15+, and most Linux distributions. Our configurator software is available for all three platforms.'
  },
  {
    question: 'Are the switches hot-swappable?',
    answer: 'Yes! MacroPad Pro features hot-swappable switch sockets, allowing you to change switches without soldering. It supports any MX-style mechanical switch.'
  },
  {
    question: 'What\'s your return policy?',
    answer: 'We offer a 30-day return policy for unused, unopened products. If your device is defective, we\'ll replace it free of charge. Please refer to our Return Policy page for details.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within India. International shipping will be available soon. Sign up for our newsletter to be notified when we expand shipping.'
  },
  {
    question: 'How do I cancel my order?',
    answer: 'You can cancel your order from the Orders page in your account before it ships. Once shipped, you\'ll need to initiate a return after receiving the product.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;