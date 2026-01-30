import BookDemoModal from '@/components/BookDemoModal';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HowItWorksSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const steps = [
    {
      number: '01',
      title: 'Free consultation with an expert',
      description:
        'Discuss your unique challenges and explore tailored solutions designed exclusively for your business.',
    },
    {
      number: '02',
      title: 'Tailored architecture & planning',
      description:
        'We design a custom platform architecture with detailed specifications and implementation strategy.',
    },
    {
      number: '03',
      title: 'End-to-end development & launch',
      description:
        'Complete build, testing, and deployment with ongoing support through your first weeks live.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-4xl mx-auto">
            From concept to <span className="text-gray-900">production</span> in{' '}
            <span className="text-gray-400">weeks</span>
          </h2>
        </motion.div>

        {/* Stepper */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
              >
                {/* Left side: Number circle and line */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white flex-shrink-0">
                    <span className="text-2xl font-serif">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-300 my-4 min-h-[80px]" />
                  )}
                </div>

                {/* Right side: Content */}
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="absolute top-8 left-0 right-0 flex items-center px-16">
              <div className="flex-1 h-0.5 bg-gray-300" />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white mb-6">
                  <span className="text-2xl font-serif">{step.number}</span>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 md:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          >
            <p className="text-gray-600 text-lg mb-6">Ready to get started?</p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-medium text-base bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-all duration-200 cursor-pointer"
            >
              Book your free consultation
            </button>
          </motion.div>
        </div>
      </div>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
