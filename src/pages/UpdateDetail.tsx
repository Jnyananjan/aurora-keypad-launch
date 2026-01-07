import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const updatesData: Record<string, {
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
}> = {
  '1': {
    title: 'Firmware v2.0 Released',
    description: 'Major update with improved latency and new display features.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    date: 'January 5, 2025',
    content: `We're excited to announce Firmware v2.0 for your MacroPad! This major update brings significant improvements to your device.

**Key Features:**

• **Reduced Latency** - Key presses are now registered up to 40% faster, giving you an even more responsive experience.

• **New Display Modes** - Choose from 5 new display themes including a minimal mode, data dashboard, and animated visualizers.

• **Improved Macro Execution** - Complex macros now execute more reliably with better timing accuracy.

• **Power Optimization** - Extended standby time and reduced power consumption during active use.

**How to Update:**

1. Open the MacroPad Configurator
2. Connect your device via USB-C
3. Click "Check for Updates" in the settings menu
4. Follow the on-screen instructions

The update process takes approximately 2-3 minutes. Do not disconnect your device during the update.

**Coming Soon:**

We're already working on v2.1 which will include wireless connectivity improvements and new customization options. Stay tuned!`,
  },
  '2': {
    title: 'New Software Configurator',
    description: 'Redesigned interface with drag-and-drop macro creation.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    date: 'December 28, 2024',
    content: `Introducing the all-new MacroPad Configurator v3.0 with a completely redesigned interface!

**What's New:**

• **Drag-and-Drop Macros** - Create complex macros by simply dragging actions into a timeline. No coding required.

• **Visual Key Mapper** - See your MacroPad layout in real-time and click to assign functions.

• **Cloud Sync** - Your configurations are automatically backed up and synced across all your devices.

• **Profile Library** - Browse and import pre-made profiles for popular applications.

**System Requirements:**

- Windows 10/11, macOS 11+, or Ubuntu 20.04+
- 100MB free disk space
- USB 2.0 or higher

**Download Now:**

Visit our downloads page to get the latest version. The configurator will automatically detect your existing profiles and migrate them.`,
  },
  '3': {
    title: 'Community Macros Library',
    description: 'Share and download macros created by the community.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
    date: 'December 15, 2024',
    content: `We're launching the Community Macros Library - a place to share and discover macros created by fellow MacroPad users!

**Features:**

• **Browse by Category** - Find macros for gaming, productivity, creative work, streaming, and more.

• **One-Click Install** - Import any macro directly into your configurator with a single click.

• **Rate & Review** - Help others find the best macros by rating and reviewing.

• **Share Your Creations** - Upload your own macros and build your reputation in the community.

**Popular Categories:**

- **Gaming** - Quick-buy sequences, ability combos, chat macros
- **Video Editing** - Timeline navigation, effects shortcuts, export presets
- **Streaming** - Scene switches, sound effects, chat interactions
- **Development** - Code snippets, terminal commands, git workflows

**Getting Started:**

Access the Community Library directly from the MacroPad Configurator. Look for the "Community" tab in the sidebar.

Join thousands of users already sharing and discovering new ways to use their MacroPad!`,
  },
};

const UpdateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const update = id ? updatesData[id] : null;

  if (!update) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Update not found</h1>
            <Link to="/updates" className="text-muted-foreground hover:text-foreground">
              ← Back to Updates
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/updates"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Updates
            </Link>

            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={update.image}
                alt={update.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>

            <span className="text-sm text-muted-foreground">{update.date}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-4">
              {update.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {update.description}
            </p>

            <div className="prose prose-invert max-w-none">
              {update.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UpdateDetail;
