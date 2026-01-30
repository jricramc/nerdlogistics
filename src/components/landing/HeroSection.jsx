import BookDemoModal from '@/components/BookDemoModal';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 w-full max-w-full overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto text-center min-w-0"
          initial={{ filter: 'blur(8px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.4, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-6 leading-tight tracking-tight break-words [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
            Build logistics software in weeks, not months
          </h1>

          <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 [text-shadow:0_1px_1px_rgba(0,0,0,0.2)]">
            Nerd Logistics builds custom AI-native operating platforms for
            logistics businesses to improve productivity, reduce costs, and
            increase uptime.
          </p>

          {/* Call to action */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <button
              onClick={() => setModalOpen(true)}
              data-action="book-demo"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-8 py-3.5 rounded-md font-medium text-base bg-white text-gray-900 shadow-md hover:bg-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 transition-all duration-200 touch-manipulation cursor-pointer"
            >
              Get started
            </button>
          </motion.div>

          {/* MIT Logo Section - Below button */}
          <motion.div
            className="flex flex-col items-center mt-16 md:mt-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <p className="text-sm md:text-base text-white/90 mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
              Work with engineers from
            </p>
            <img
              src="/mit_lockup_std-three-line_rgb_white.svg"
              alt="MIT"
              className="h-12 md:h-14 w-auto opacity-95"
            />
          </motion.div>
        </motion.div>
      </div>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
