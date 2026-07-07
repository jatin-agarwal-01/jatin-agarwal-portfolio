import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';

const projects = [
  {
    no: '01',
    title: 'Flutter Mobile App',
    short: 'A polished cross-platform mobile application built with Flutter, focusing on clean architecture and smooth UX.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    outcome: '40% faster load times',
    image: 'https://images.pexels.com/photos/20694602/pexels-photo-20694602.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    problem: 'A legacy mobile experience with slow cold starts, inconsistent navigation, and a fragile state layer that broke under real-world usage patterns.',
    approach: 'Rebuilt on a layered clean architecture with a single source of truth for state, offline-first caching, and a design system that kept every screen visually coherent.',
    steps: [
      'Audited navigation flows and isolated the three slowest cold-start paths.',
      'Introduced a repository pattern with Firebase-backed offline cache.',
      'Built a shared widget library so every screen inherited the same motion and spacing rhythm.',
      'Profiled on mid-range Android hardware until frame budget held under 16ms.',
    ],
    metrics: [{ value: '40%', label: 'Faster load times' }, { value: '16ms', label: 'Frame budget held' }],
  },
  {
    no: '02',
    title: 'React Web Platform',
    short: 'A modern web application with component-driven architecture and responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    outcome: '2x engagement increase',
    image: 'https://images.pexels.com/photos/4578665/pexels-photo-4578665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    problem: 'A fragmented frontend where every page felt like a different product, with rising bounce rates on mobile and inconsistent interaction patterns.',
    approach: 'Adopted a component-driven architecture with a typed design system, shared hooks for data fetching, and a responsive grid that respected content hierarchy on every breakpoint.',
    steps: [
      'Defined a typed component library with documented variants.',
      'Built reusable data hooks with optimistic updates and error boundaries.',
      'Introduced a responsive layout system that collapsed gracefully to single column.',
      'Instrumented engagement events to validate the redesign against real sessions.',
    ],
    metrics: [{ value: '2x', label: 'Engagement increase' }, { value: '−35%', label: 'Mobile bounce' }],
  },
  {
    no: '03',
    title: 'AWS Cloud Project',
    short: 'Cloud-native deployment pipeline with AWS services for scalable infrastructure.',
    tags: ['AWS', 'EC2', 'S3', 'Lambda'],
    outcome: '60% cost reduction',
    image: 'https://images.pexels.com/photos/17489150/pexels-photo-17489150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    problem: 'A manual, fragile deployment process running on oversized always-on instances, with unpredictable monthly costs and no path to scale under load.',
    approach: 'Replaced fixed capacity with an event-driven pipeline using Lambda for short-lived workloads, S3 for static assets, and EC2 auto-scaling for sustained traffic.',
    steps: [
      'Mapped workloads by duration and frequency to decide Lambda vs EC2.',
      'Moved static assets to S3 behind a CDN to cut origin load.',
      'Wired an automated deployment pipeline with health checks and rollback.',
      'Right-sized instances and introduced auto-scaling policies tied to real metrics.',
    ],
    metrics: [{ value: '60%', label: 'Cost reduction' }, { value: '0', label: 'Manual deploys' }],
  },
  {
    no: '04',
    title: 'AI Agent System',
    short: 'Intelligent agent workflow built during the AI Agent Internship at Cognio Labs.',
    tags: ['Python', 'LLM', 'Automation'],
    outcome: '3x process efficiency',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    problem: 'A repetitive knowledge-workflow consuming hours of manual triage, with no structured way to hand tasks to an LLM reliably.',
    approach: 'Designed an agent workflow with typed tool calls, guardrails on LLM output, and a human-in-the-loop checkpoint for anything ambiguous.',
    steps: [
      'Decomposed the workflow into discrete, observable agent steps.',
      'Built typed tool interfaces so the LLM could call internal services safely.',
      'Added validation guardrails and a fallback path for low-confidence outputs.',
      'Measured cycle time before and after to quantify the efficiency gain.',
    ],
    metrics: [{ value: '3x', label: 'Process efficiency' }, { value: '92%', label: 'Auto-handled' }],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-[680px]">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Selected Work
          </span>
          <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            Work that shows range, discipline, and a bias toward finish quality.
          </h2>
          <p className="mt-5 text-[#f5f3ef]/60 max-w-[560px] leading-relaxed font-light">
            Practical frontend thinking, structured application design, and a consistent focus on making software usable and visually coherent.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full rounded-2xl border border-white/10 bg-[#111114]/60 backdrop-blur-sm p-7 md:p-8 hover:border-[#c9a96e]/50 hover:shadow-[0_0_40px_-12px_rgba(201,169,110,0.35)] transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <span className="font-['Playfair_Display'] text-2xl text-[#c9a96e] tabular-nums">
                    {p.no}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#f5f3ef]/30 group-hover:text-[#c9a96e] transition-colors duration-300" />
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/5">
                  <img
                    src={p.image}
                    alt={`${p.title} project visual`}
                    loading="lazy"
                    className="w-full h-44 object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>

                <h3 className="mt-6 font-['Playfair_Display'] text-2xl md:text-3xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#f5f3ef]/60 leading-relaxed font-light flex-1">
                  {p.short}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-[#f5f3ef]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-sm text-[#c9a96e] font-medium">{p.outcome}</span>
                  <button
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-1.5 text-sm text-[#f5f3ef]/80 hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                    View details
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}