import BookDemoModal from '@/components/BookDemoModal';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Code,
  Layers,
  Mail,
  Phone
} from 'lucide-react';
import { useState } from 'react';

export default function BeyondSavingsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          {/* Left Side - Headline */}
          <div className="flex-1">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="text-gray-900">Beyond savings</span>
              <br />
              <span className="text-gray-400">
                — a new world of possibility
              </span>
            </motion.h2>
          </div>

          {/* Right Side - Description and CTA */}
          <motion.div
            className="flex-1 max-w-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-gray-600 text-lg mb-6">
              Custom software built specifically for your business. Automate workflows, integrate systems, and unlock capabilities that off-the-shelf solutions can't provide.
            </p>
            <motion.button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 shadow-sm transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a call
            </motion.button>
          </motion.div>
        </div>

        {/* Three Interface Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mockup 1 - Teal Background with Notification Cards */}
          <motion.div
            className="bg-[#5a9da8] overflow-hidden relative aspect-[3/4] p-6"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {/* Code/Layers background */}
            <div className="absolute inset-0 opacity-20">
              <Code className="w-32 h-32 text-white absolute top-10 right-10 rotate-12" />
              <Layers className="w-24 h-24 text-white absolute bottom-20 left-10 -rotate-6" />
            </div>

            {/* Notification Cards */}
            <div className="relative space-y-4">
              {/* Card 1 - Real-time Tracking */}
              <motion.div
                className="bg-white p-4 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-[#5a9da8] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      GPS tracking integrated
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      Real-time fleet visibility
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Logistics Operations */}
              <motion.div
                className="bg-white p-4 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#5a9da8] to-[#4a8d98] flex items-center justify-center">
                    <span className="text-white text-xs font-normal">N</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Logistics Control Center
                    </p>
                    <p className="text-gray-600 text-xs">
                      Operations Management
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Route Automation */}
              <motion.div
                className="bg-white p-4 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#5a9da8]" />
                    <p className="font-medium text-gray-900 text-sm">
                      Routing
                    </p>
                  </div>
                  <span className="text-green-600 text-xs font-medium">
                    Active
                  </span>
                </div>
                <p className="text-gray-600 text-xs">
                  Optimizing 150+ routes daily
                </p>
              </motion.div>

              {/* Card 4 - Carrier Integration */}
              <motion.div
                className="bg-white p-4 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5a9da8]" />
                    <p className="font-medium text-gray-900 text-sm">
                      Carrier integrations
                    </p>
                  </div>
                  <span className="text-green-600 text-xs font-medium">
                    Active
                  </span>
                </div>
                <p className="text-gray-600 text-xs">
                  12 carriers connected
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mockup 2 - Black Laptop Frame with Data Table */}
          <motion.div
            className="bg-gray-100 overflow-hidden relative aspect-[3/4] p-6"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Laptop Frame */}
            <div className="w-full h-full bg-gray-900 p-3 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-white overflow-hidden">
                {/* Table Header */}
                <motion.div
                  className="bg-gray-50 px-4 py-3 border-b border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-sm font-normal text-gray-900">
                    Development Pipeline Status
                  </h3>
                </motion.div>

                {/* Table Content */}
                <div className="p-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-600 font-medium">
                          Feature
                        </th>
                        <th className="text-left py-2 pr-8 text-gray-600 font-medium">
                          Status
                        </th>
                        <th className="text-left py-2 text-gray-600 font-medium">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="space-y-1">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">Route Optimization</td>
                        <td className="py-2 pr-8">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-green-600 font-medium">
                              Deployed
                            </span>
                          </span>
                        </td>
                        <td className="py-2 text-gray-600">Jan 28, 2026</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">Shipment Tracking</td>
                        <td className="py-2 pr-8">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-green-600 font-medium">
                              Deployed
                            </span>
                          </span>
                        </td>
                        <td className="py-2 text-gray-600">Jan 27, 2026</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">Fleet Management</td>
                        <td className="py-2 pr-8">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-green-600 font-medium">
                              Deployed
                            </span>
                          </span>
                        </td>
                        <td className="py-2 text-gray-600">Jan 27, 2026</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">Warehouse Dashboard</td>
                        <td className="py-2 pr-8">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-green-600 font-medium">
                              Deployed
                            </span>
                          </span>
                        </td>
                        <td className="py-2 text-gray-600">Jan 26, 2026</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-900">Load Planning</td>
                        <td className="py-2 pr-8">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-green-600 font-medium">
                              Deployed
                            </span>
                          </span>
                        </td>
                        <td className="py-2 text-gray-600">Jan 26, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mockup 3 - Dark Background with Chat Interface */}
          <motion.div
            className="bg-gray-800 overflow-hidden relative aspect-[3/4]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Chat Interface */}
            <div className="absolute bottom-6 left-6 right-6">
              <motion.div
                className="bg-white p-5 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                {/* Chat Message */}
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-normal">N</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-50 p-3">
                      <p className="text-sm text-gray-900">
                        I handle customer inquiries instantly, provide accurate information, and escalate complex issues to your team when needed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action Button */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started with Nerd Logistics
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
