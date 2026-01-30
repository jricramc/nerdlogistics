import BookDemoModal from '@/components/BookDemoModal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function StatisticsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const stats = [
    {
      number: '3x',
      title: 'Faster delivery',
      description: 'From concept to production in weeks',
    },
    {
      number: '24/7',
      title: 'Continuous evolution',
      description: 'Your software adapts as your business changes',
    },
    {
      number: '100%',
      title: 'Custom built',
      description: 'Tailored exactly to your needs',
    },
    {
      number: '∞',
      title: 'Unlimited changes',
      description: 'AI-powered platform enables constant iteration',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Redefining your development velocity
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-200 pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-3">
                {stat.number}
              </div>

              <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-2">
                {stat.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base rounded-md shadow-sm transition-colors"
          >
            Book a call
          </Button>
        </motion.div>
      </div>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
