import BookDemoModal from '@/components/BookDemoModal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

export default function SpeedFlexibilitySection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              <span className="text-gray-900">Reliability &</span>
              <br />
              <span className="text-gray-400">observability at scale</span>
            </h2>
            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Build a platform that allows you to manage your logistics operations with ease.
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                data-action="book-demo"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base rounded-md shadow-sm transition-colors"
              >
                Book a call
              </Button>
            </div>
          </div>

          {/* 2x2 Grid of panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Panel 1: Built for you - Photo of woman */}
            <motion.div
              className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200  overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/logistics-worker.png"
                alt="Professional woman"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-2xl font-serif text-white">
                  Built for you
                </h3>
              </div>
            </motion.div>

            {/* Panel 2: ERP Dashboard */}
            <motion.div
              className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200  overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/erp.jpeg"
                alt="ERP Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-2xl font-serif text-white">
                  Built to optimize
                </h3>
              </div>
            </motion.div>

            {/* Panel 3: Completions chart image */}
            <motion.div
              className="aspect-[4/3] overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/completions-chart.png"
                alt="Completions chart"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-2xl font-serif text-white">
                  Built for scale
                </h3>
              </div>
            </motion.div>

            {/* Panel 4: Dashboard */}
            <motion.div
              className="aspect-[4/3] overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/dashboard.png"
                alt="Logistics Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-2xl font-serif text-white">
                  Built to manage
                </h3>
              </div>
            </motion.div>
          </div>
        </div>

        <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
      </section>
    </>
  );
}
