import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    quote:
      'Coordinating automotive parts from Mexican manufacturers to US assembly plants requires constant coordination. This platform gives us real-time visibility across borders and has cut our delivery delays by 60%. Our customers always know exactly where their shipments are.',
    role: 'Operations Director',
    company: 'at a Cross-Border Automotive Logistics Company',
  },
  {
    quote:
      'Managing container shipments from Asian factories to distribution centers across North America was a constant juggling act. Now we handle 3x the volume with the same team. The automated tracking and customs coordination alone has been transformative.',
    role: 'VP of Operations',
    company: 'at a Trans-Pacific Import Logistics Company',
  },
  {
    quote:
      'Transporting heavy mining equipment from the US to remote South American sites involves complex coordination across multiple carriers and regulations. This system handles it all seamlessly, allowing us to reduce our logistics overhead by 40% while improving on-time delivery.',
    role: 'Supply Chain Executive',
    company: 'at an Industrial Equipment Transportation Company',
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth =
      scrollRef.current.querySelector('article')?.offsetWidth ?? 380;
    const gap = 24;
    const amount = (cardWidth + gap) * direction;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-28 md:pt-28 md:pb-36 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 overflow-x-hidden">
        {/* Header: title left, arrows right */}
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
            Success stories
          </h2>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-md bg-black hover:bg-gray-900 flex items-center justify-center transition-colors text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-md bg-black hover:bg-gray-900 flex items-center justify-center transition-colors text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel - scrollbar oculto, navegación solo con flechas */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden -mx-6 px-6 md:-mx-6 md:px-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-[min(100%,340px)] md:w-[460px] snap-start snap-always bg-[#f5f1eb] p-10 md:p-12 rounded-xl text-left"
            >
              <p className="text-gray-800 text-xl md:text-2xl font-serif leading-relaxed mb-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div>
                <div className="text-sm md:text-base text-gray-700 leading-snug">
                  <span className="font-semibold">{testimonial.role}</span>{' '}
                  <span className="font-normal">{testimonial.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
