import { motion } from 'framer-motion';
import macropadSide from '@/assets/macropad-side.png';

// App icons as PNG placeholders with rounded corners - replace src with actual icon URLs
const row1Icons = [
  { name: 'Windows', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/512px-Windows_logo_-_2012.svg.png' },
  { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png' },
  { name: 'Linux', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/506px-Tux.svg.png' },
  { name: 'Photoshop', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png' },
  { name: 'Premiere', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png' },
  { name: 'VS Code', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png' },
  { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png' },
  { name: 'OBS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Open_Broadcaster_Software_Logo.png/600px-Open_Broadcaster_Software_Logo.png' },
];

const row2Icons = [
  { name: 'Discord', src: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png' },
  { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png' },
  { name: 'Blender', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png' },
  { name: 'Unity', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/512px-Unity_Technologies_logo.svg.png' },
  { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png' },
  { name: 'Notion', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/480px-Notion-logo.svg.png' },
  { name: 'Zoom', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/512px-Zoom_Communications_Logo.svg.png' },
  { name: 'Steam', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png' },
];

const Compatibility = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Product Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl lg:max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-foreground/5 rounded-full blur-[60px] scale-75" />
          
          <div className="relative bg-background">
            <img
              src={macropadSide}
              alt="MacroPad Pro Side View"
              className="w-full h-full object-contain mix-blend-lighten"
            />
          </div>
        </motion.div>
      </div>

      {/* Made for Everything */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Made for Everything
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-lg mx-auto px-4"
        >
          Compatible with your favorite apps and operating systems
        </motion.p>
      </div>

      {/* Infinite Marquee - Row 1 (Left to Right) */}
      <div className="relative overflow-hidden mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...row1Icons, ...row1Icons, ...row1Icons, ...row1Icons].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-card flex items-center justify-center p-2">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee - Row 2 (Right to Left) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee-reverse">
          {[...row2Icons, ...row2Icons, ...row2Icons, ...row2Icons].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-card flex items-center justify-center p-2">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compatibility;