import { Award, Calendar } from 'lucide-react';
import Reveal from './Reveal';

const certs = [
  { title: 'AWS Certified', issuer: 'Amazon Web Services', date: '2026' },
  { title: 'Flutter Development', issuer: 'Online Program', date: '2026' },
  { title: 'React Advanced', issuer: 'Online Program', date: '2026' },
  { title: 'Cloud Fundamentals', issuer: 'AWS / Red Hat', date: '2026' },
  { title: 'Problem Solving', issuer: 'DSA & Algorithms', date: '2026' },
  { title: 'AI/ML Foundations', issuer: 'Cognio Labs', date: '2026' },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-[680px]">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Certificates
          </span>
          <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            Credentials that back up the trajectory.
          </h2>
          <p className="mt-5 text-[#f5f3ef]/60 max-w-[560px] leading-relaxed font-light">
            Cloud, systems, JavaScript, data foundations, and hands-on program participation.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group relative h-full rounded-2xl border border-[#c9a96e]/25 bg-gradient-to-br from-[#111114] to-[#0a0a0b] p-7 overflow-hidden hover:border-[#c9a96e]/60 transition-all duration-500">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#c9a96e]/5 group-hover:bg-[#c9a96e]/10 transition-colors duration-700" />
                <div className="relative flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full border-2 border-[#c9a96e]/40 flex items-center justify-center text-[#c9a96e]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-['Playfair_Display'] text-sm text-[#c9a96e]/70 italic">
                    Certified
                  </span>
                </div>
                <h3 className="relative mt-6 font-['Playfair_Display'] text-xl tracking-tight">
                  {c.title}
                </h3>
                <p className="relative mt-2 text-sm text-[#f5f3ef]/60 font-light">{c.issuer}</p>
                <div className="relative mt-5 flex items-center gap-2 text-xs text-[#f5f3ef]/50 border-t border-white/5 pt-4">
                  <Calendar className="w-3.5 h-3.5 text-[#c9a96e]" />
                  Issued {c.date}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}