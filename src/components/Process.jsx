import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

const steps = [
  { n: '01', title: 'Discover', desc: 'Understand the real problem before writing a line of code. Listen to users, map constraints, and define what success actually looks like.' },
  { n: '02', title: 'Define', desc: 'Narrow scope to the work that matters. Set clear structure over unnecessary complexity and agree on the smallest valuable shape.' },
  { n: '03', title: 'Design', desc: 'Shape interfaces that feel intentional, not improvised. Establish type, spacing, and motion as a system rather than a collection of one-offs.' },
  { n: '04', title: 'Develop', desc: 'Build with maintainability from the start. Typed components, clean architecture, and tested edges instead of repairs later.' },
  { n: '05', title: 'Deliver', desc: 'Ship, measure, and iterate. Reflect on what worked, fold lessons back in, and keep momentum steady and consistent.' },
];

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section id="process" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-[680px]">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Process Snapshots
          </span>
          <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            How an idea becomes finished software.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-[42px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative flex flex-col items-start">
                  <motion.div
                    initial={reduce ? false : { scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-[84px] h-[84px] rounded-full border border-[#c9a96e]/40 bg-[#111114] flex items-center justify-center mb-6"
                  >
                    <span className="font-['Playfair_Display'] text-2xl text-[#c9a96e]">{s.n}</span>
                  </motion.div>
                  <h3 className="font-['Playfair_Display'] text-xl md:text-2xl tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#f5f3ef]/60 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}