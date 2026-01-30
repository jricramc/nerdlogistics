import BookDemoModal from '@/components/BookDemoModal';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FinalCTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 bg-green-50 border-t border-green-100/80">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-10 max-w-4xl mx-auto leading-tight">
            Power your operations with a custom AI-native software
          </h2>
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base rounded-md shadow-sm transition-colors"
          >
            Book a call
          </Button>
        </div>
      </section>

      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
