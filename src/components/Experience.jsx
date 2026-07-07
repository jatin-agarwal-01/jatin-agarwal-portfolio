import { motion, useReducedMotion } from 'framer-motion';

const entries = [
  {
    role: 'AI Agent Intern',
    company: 'Cognio Labs',
    period: 'June 22, 2026 to Present',
    desc: 'Building intelligent AI agent systems, working with LLMs, automation workflows, and production-grade AI solutions.',
  },
  {
    role: 'Android App Development Intern',
    company: 'SyntecXHub',
    period: 'June 4, 2026 to July 3, 2026',
    desc: 'Hands-on Android development experience building mobile features, learning clean architecture, and collaborating on real app components.',
  },
];

export default function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[680px]">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Experience
          </span>
          <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            A short, deliberate track record.
          </h2>
        </div>

        <div className="mt-14 relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#c9a96e]/60 via-[#c9a96e]/30 to-transparent" />
          <div className="space-y-12">
            {entries.map((e, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-2 w-3 h-3 rounded-full bg-[#c9a96e] ring-4 ring-[#c9a96e]/20" />
                <div className="text-xs uppercase tracking-[0.2em] text-[#c9a96e]/80 font-medium">
                  {e.period}
                </div>
                <h3 className="mt-2 font-['Playfair_Display'] text-2xl md:text-3xl tracking-tight">
                  {e.role}
                </h3>
                <div className="mt-1 text-[#c9a96e] font-medium">{e.company}</div>
                <p className="mt-3 text-[#f5f3ef]/65 leading-relaxed font-light max-w-[560px]">
                  {e.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}