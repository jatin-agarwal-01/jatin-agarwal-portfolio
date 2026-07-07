import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: 40, suffix: '%', label: 'Faster Load Times' },
  { value: 2, suffix: 'x', label: 'User Engagement' },
  { value: 60, suffix: '%', label: 'Cost Reduction' },
  { value: 3, suffix: 'x', label: 'Process Efficiency' },
];

function Counter({ value, suffix, reduce, inView }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setN(value); return; }
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);
  return <span className="tabular-nums">{n}{suffix}</span>;
}

export default function Outcomes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  return (
    <section id="outcomes" className="relative px-6 md:px-10 py-20 md:py-28 border-y border-white/5 bg-[#111114]/40">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[#c9a96e]">
                <Counter value={s.value} suffix={s.suffix} reduce={reduce} inView={inView} />
              </div>
              <div className="mt-3 text-sm md:text-base text-[#f5f3ef]/60 uppercase tracking-[0.12em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}