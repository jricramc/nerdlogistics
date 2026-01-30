import { motion } from 'framer-motion';
import { Eye, RefreshCw, Rocket } from 'lucide-react';

export default function BeyondDevelopmentSection() {
  const features = [
    {
      icon: Rocket,
      title: 'Build infinitely faster',
      description:
        'AI-powered development accelerates your timeline from months to weeks',
    },
    {
      icon: Eye,
      title: 'Complete transparency',
      description:
        'Track progress in real-time with full visibility into development',
    },
    {
      icon: RefreshCw,
      title: 'Real-time evolution',
      description: 'Your software adapts automatically as requirements change',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Beyond development—a new world of possibility
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <motion.div
                className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <feature.icon className="w-16 h-16 text-gray-400" />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
