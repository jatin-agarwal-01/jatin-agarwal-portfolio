import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[#c9a96e]/30 bg-[#111114] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={`${project.title} detail visual`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111114] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-[#f5f3ef] hover:bg-[#c9a96e] hover:text-[#0a0a0b] transition-all duration-300"
            aria-label="Close detail"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="absolute bottom-5 left-6 font-['Playfair_Display'] text-2xl text-[#c9a96e] tabular-nums">
            {project.no}
          </span>
        </div>

        <div className="p-6 md:p-10">
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl tracking-tight">
            {project.title}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-[#c9a96e]/30 text-[#c9a96e]">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-7">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a96e] font-medium mb-2">
                Problem
              </h4>
              <p className="text-[#f5f3ef]/70 leading-relaxed font-light">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a96e] font-medium mb-2">
                Approach
              </h4>
              <p className="text-[#f5f3ef]/70 leading-relaxed font-light">{project.approach}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a96e] font-medium mb-3">
                Process snapshots
              </h4>
              <ul className="space-y-2.5">
                {project.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[#f5f3ef]/70 font-light leading-relaxed">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-[#c9a96e]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a96e] font-medium mb-4">
                Measurable outcomes
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 p-5">
                    <div className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#c9a96e]">
                      {m.value}
                    </div>
                    <div className="mt-1 text-sm text-[#f5f3ef]/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}