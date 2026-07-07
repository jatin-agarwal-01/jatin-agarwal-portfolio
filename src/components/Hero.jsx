import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

const stats = [
  { value: '06', label: 'Certifications' },
  { value: '03', label: 'Core tracks' },
  { value: '24/7', label: 'Curiosity' },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-10 pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-[#c9a96e]/60" />
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Software Developer Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Playfair_Display'] text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.98] tracking-[-0.03em] text-balance"
        >
          Jatin Agarwal
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-['Playfair_Display'] italic text-[clamp(1.25rem,2.6vw,2rem)] text-[#f5f3ef]/85 max-w-[680px] text-pretty"
        >
          Building software that feels deliberate, modern, and dependable.
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base md:text-lg text-[#f5f3ef]/60 max-w-[560px] leading-relaxed font-light"
        >
          Computer Science student, AWS certified learner, Flutter and React developer. Product-minded engineering with polish and reliability.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => go('work')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a96e] text-[#0a0a0b] font-medium text-sm tracking-wide hover:bg-[#d4af7a] transition-all duration-300 active:scale-[0.98]"
          >
            View selected work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => go('contact')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-[#f5f3ef] font-medium text-sm tracking-wide hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            Start a conversation
          </button>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-wrap gap-10 md:gap-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#c9a96e] tabular-nums">
                {s.value}
              </span>
              <span className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f5f3ef]/50">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}