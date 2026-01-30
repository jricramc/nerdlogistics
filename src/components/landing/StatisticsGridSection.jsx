import BookDemoModal from '@/components/BookDemoModal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Zap } from 'lucide-react';
import { useState } from 'react';

export default function StatisticsGridSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const features = [
    {
      number: '01',
      title: 'Instant Response',
      description: '100% response rate with 0min first response time',
    },
    {
      number: '02',
      title: 'Massive ROI',
      description: '120x return on investment for SLA processing tasks',
    },
    {
      number: '03',
      title: 'Cost Efficient',
      description: '10x cost reduction on training and operational overhead',
    },
    {
      number: '04',
      title: 'Scale Effortlessly',
      description: 'Handle unlimited volume without adding headcount',
    },
  ];

  const workflowSteps = [
    { icon: Users, label: 'Customer Inquiry', color: 'text-blue-600' },
    { icon: Zap, label: 'AI Processing', color: 'text-purple-600' },
    {
      icon: CheckCircle2,
      label: 'Instant Resolution',
      color: 'text-green-600',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* Left Content - 40% */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Label */}
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">
              Performance Metrics
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              <span className="text-gray-900">Redefining your</span>{' '}
              <span className="text-gray-400">velocity & scale</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform customer operations with AI that delivers unprecedented
              speed, efficiency, and cost savings at enterprise scale.
            </p>

            {/* CTA Button */}
            <div>
              <Button
                onClick={() => setModalOpen(true)}
                data-action="book-demo"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base rounded-md shadow-sm transition-colors"
              >
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Numbered Feature List */}
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="text-xl font-serif text-gray-300 font-light">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-normal text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - 60% */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Teal Background Container */}
            <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600  p-8 md:p-12 lg:p-16 min-h-[600px] flex items-center justify-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10  blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10  blur-3xl"></div>

              {/* White Card with Workflow */}
              <motion.div
                className="bg-white  p-8 md:p-10 shadow-2xl w-full max-w-md relative z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-normal text-gray-900 mb-6 text-center">
                  Automated Workflow
                </h3>

                {/* Workflow Steps */}
                <div className="space-y-6">
                  {workflowSteps.map((step, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        className="flex items-center gap-4 p-4 bg-gray-50 "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div
                          className={`p-3  bg-white shadow-sm ${step.color}`}
                        >
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            {step.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            Step {index + 1}
                          </div>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </motion.div>

                      {/* Connecting Line */}
                      {index < workflowSteps.length - 1 && (
                        <div className="flex justify-center">
                          <motion.div
                            className="w-0.5 h-6 bg-gradient-to-b from-gray-300 to-gray-200"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + index * 0.1,
                            }}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-serif text-gray-900">0s</div>
                    <div className="text-xs text-gray-500 mt-1">Response</div>
                  </div>
                  <div>
                    <div className="text-xl font-serif text-gray-900">100%</div>
                    <div className="text-xs text-gray-500 mt-1">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-xl font-serif text-gray-900">24/7</div>
                    <div className="text-xs text-gray-500 mt-1">Uptime</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
