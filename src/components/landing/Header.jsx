import BookDemoModal from '@/components/BookDemoModal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md"
        initial={{ filter: 'blur(8px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.4, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 py-3.5 flex items-center justify-between gap-8">
          <a
            href="#"
            className="logo-text text-xl md:text-2xl font-normal text-gray-800 tracking-tight hover:text-gray-600 transition-colors"
          >
            Nerd Logistics
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            onClick={() => setModalOpen(true)}
            data-action="book-demo"
            className="!bg-black hover:!bg-gray-900 !text-white px-5 py-2 text-sm rounded-md shadow-sm transition-colors shrink-0"
          >
            Book a call
          </Button>
        </div>
      </motion.header>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
