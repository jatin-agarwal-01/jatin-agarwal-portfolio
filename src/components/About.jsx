import { Linkedin, Github, Code2, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import profileImage from '../../profile.jpg';

const principles = [
  { n: '01', title: 'Clear structure over unnecessary complexity', desc: 'Software that is maintainable from the start rather than repaired later.' },
  { n: '02', title: 'Interfaces that feel intentional, not improvised', desc: 'Every spacing, motion, and type choice made deliberately as a system.' },
  { n: '03', title: 'Consistency, reliability, and steady momentum', desc: 'Disciplined iteration through shipping and reflection over time.' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jatin-agarwal-builds/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/jatin-agarwal-01', icon: Github },
  { label: 'LeetCode', href: 'https://leetcode.com/u/jatin_agarwal01/', icon: Code2 },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative rounded-2xl p-2 border border-[#c9a96e]/30 bg-gradient-to-br from-[#c9a96e]/20 to-transparent">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-[#111114] relative">
                <img
                  src={profileImage}
                  alt="Jatin Agarwal portrait"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="font-['Playfair_Display'] text-2xl">Jatin Agarwal</div>
                  <div className="text-sm text-[#f5f3ef]/60 mt-1">Software Developer</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
              About
            </span>
            <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-balance">
              Thoughtful execution, strong fundamentals, and steady momentum.
            </h2>
            <div className="mt-6 space-y-4 text-[#f5f3ef]/70 leading-relaxed font-light max-w-[560px]">
              <p>
                I am a Computer Science student with a practical interest in mobile and web development, especially where performance, usability, and clean architecture meet.
              </p>
              <p>
                My work is shaped by problem solving, object-oriented thinking, and a preference for software that is maintainable from the start rather than repaired later.
              </p>
              <p>
                I am actively growing through real projects, certifications, and disciplined iteration, aiming to bring polish and reliability to every build.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-[#f5f3ef]/60">
              <MapPin className="w-4 h-4 text-[#c9a96e]" />
              Based in India
              <span className="mx-2 text-[#f5f3ef]/30">|</span>
              Remote friendly
            </div>

            <div className="mt-8 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-[#f5f3ef]/70 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111114]/50 p-7 hover:border-[#c9a96e]/40 transition-colors duration-500">
                <span className="font-['Playfair_Display'] text-2xl text-[#c9a96e]">{p.n}</span>
                <h3 className="mt-4 font-['Playfair_Display'] text-xl tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[#f5f3ef]/60 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}