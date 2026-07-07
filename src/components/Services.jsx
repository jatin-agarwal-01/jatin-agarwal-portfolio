import { Smartphone, Globe, Cloud, Bot, Palette, Cpu } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Flutter and Dart cross-platform apps with clean architecture and smooth, consistent UX.' },
  { icon: Globe, title: 'Web Development', desc: 'React and TypeScript modern web with component-driven, responsive design systems.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS deployment and infrastructure, event-driven pipelines, and scalable delivery.' },
  { icon: Bot, title: 'AI Agent Development', desc: 'LLM-powered automation with typed tool calls, guardrails, and human-in-the-loop checkpoints.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Clean, intentional interfaces built as systems of type, spacing, and motion.' },
  { icon: Cpu, title: 'Problem Solving', desc: 'Algorithmic thinking, data structures, and optimization for resilient implementations.' },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-[680px]">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Services
          </span>
          <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            Depth across the tools that turn ideas into finished products.
          </h2>
          <p className="mt-5 text-[#f5f3ef]/60 max-w-[560px] leading-relaxed font-light">
            Application logic, interface development, mobile workflows, and cloud-aware tooling with an emphasis on clarity and reliable execution.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-white/10 bg-[#111114]/50 p-7 hover:border-[#c9a96e]/40 hover:bg-[#111114]/80 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#0a0a0b] transition-all duration-500">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-['Playfair_Display'] text-xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[#f5f3ef]/60 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}