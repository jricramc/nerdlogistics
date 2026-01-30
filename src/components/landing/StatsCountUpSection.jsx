import BookDemoModal from '@/components/BookDemoModal';
import { Button } from '@/components/ui/button';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUp({ value, suffix, duration = 1500, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) return;
    const start = performance.now();
    let rafId;

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = value * eased;
      setDisplay(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      } else {
        setDisplay(value);
        setDone(true);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, duration, done]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 4,
    suffix: ' weeks',
    label: 'Time to production',
    description:
      'From first call to live platform. Deploy while others are still planning.',
  },
  {
    value: 75,
    suffix: '%',
    label: 'Reduction in manual work',
    description:
      'Automate repetitive tasks. Your team focuses on growth, not busy work.',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Platform uptime',
    description:
      'Enterprise-grade reliability with automatic failover and monitoring.',
  },
  {
    value: 5,
    suffix: 'x',
    label: 'Faster operations',
    description:
      'Process more orders with the same team. Scale without adding headcount.',
  },
];

export default function StatsCountUpSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container w-full mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 justify-between items-center w-full">
            {/* Left: Headline + CTA */}
            <div className="space-y-10 w-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                <span className="text-gray-900">Redefining</span>
                <br />
                <span className="text-gray-900">your velocity</span>{' '}
                <span className="text-gray-400">& scale</span>
              </h2>
              <Button
                onClick={() => setModalOpen(true)}
                className="!bg-black hover:!bg-gray-900 !text-white px-8 py-3 text-base rounded-md shadow-sm transition-colors"
              >
                Book a call
              </Button>
            </div>

            {/* Right: 2x2 grid with horizontal dividers */}
            <div className="border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200 py-10 md:py-12 md:px-8 ${
                    index % 2 === 0 ? 'md:border-r border-gray-200' : ''
                  } ${index >= 2 ? 'md:border-b-0' : ''}`}
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-2">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2400}
                      decimals={stat.value === 99.9 ? 1 : 0}
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-normal text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />
      </section>
    </>
  );
}
