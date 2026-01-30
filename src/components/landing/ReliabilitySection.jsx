import { motion } from 'framer-motion';

export default function ReliabilitySection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F1E8]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            ENTERPRISE-GRADE PLATFORM
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-4xl mx-auto">
            Built for <span className="text-gray-900">reliability</span> and{' '}
            <span className="text-gray-400">performance</span>
          </h2>
        </motion.div>

        {/* Laptop Mockup */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative bg-gray-900  p-3 shadow-2xl">
            {/* Screen bezel */}
            <div className="bg-gray-800  p-8">
              {/* Chat/Workflow Interface Mockup */}
              <div className="bg-white  overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3  bg-red-500"></div>
                    <div className="w-3 h-3  bg-yellow-500"></div>
                    <div className="w-3 h-3  bg-green-500"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    Workflow Dashboard
                  </p>
                  <div className="w-24"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Message 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8  bg-gradient-to-br from-[#2d5f5d] to-[#3d7f7d] flex-shrink-0"></div>
                    <div className="bg-gray-100  rounded px-4 py-3 max-w-md">
                      <p className="text-sm text-gray-800">
                        Processing workflow step 1 of 4...
                      </p>
                    </div>
                  </div>

                  {/* Message 2 */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-gray-900  rounded px-4 py-3 max-w-md">
                      <p className="text-sm text-white">
                        Execute data validation
                      </p>
                    </div>
                    <div className="w-8 h-8  bg-gradient-to-br from-gray-300 to-gray-400 flex-shrink-0"></div>
                  </div>

                  {/* Message 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8  bg-gradient-to-br from-[#2d5f5d] to-[#3d7f7d] flex-shrink-0"></div>
                    <div className="bg-gray-100  rounded px-4 py-3 max-w-md">
                      <p className="text-sm text-gray-800 mb-2">
                        Validation complete. All systems operational.
                      </p>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs ">
                          100% Success
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs ">
                          0.3s Response
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 "></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
