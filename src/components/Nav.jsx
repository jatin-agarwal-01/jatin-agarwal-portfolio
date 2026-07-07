import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const desktopLinks = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Process', id: 'process' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

const mobileLinks = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Process', id: 'process' },
  { label: 'Outcomes', id: 'outcomes' },
  { label: 'Services', id: 'services' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Experience', id: 'experience' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 320);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? 'backdrop-blur-md bg-[#0a0a0b]/70 border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Playfair_Display'] text-xl md:text-2xl font-semibold tracking-tight text-[#f5f3ef] hover:text-[#c9a96e] transition-colors duration-300"
          >
            Jatin Agarwal<span className="text-[#c9a96e]">.</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {desktopLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-sm font-medium text-[#f5f3ef]/70 hover:text-[#c9a96e] transition-colors duration-300 tracking-wide"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="text-sm font-medium px-5 py-2 rounded-full border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0b] transition-all duration-300"
            >
              Start a conversation
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0b] transition-all duration-300 active:scale-[0.96]"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={reduce ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#0a0a0b] border-l border-[#c9a96e]/20 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/5">
                <span className="font-['Playfair_Display'] text-xl font-semibold tracking-tight">
                    Jatin Agarwal<span className="text-[#c9a96e]">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-[#f5f3ef]/70 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 active:scale-[0.96]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
                <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium mb-6">
                  Navigation
                </span>
                <div className="flex flex-col">
                  {mobileLinks.map((l, i) => (
                    <motion.button
                      key={l.id}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => go(l.id)}
                      className="group flex items-center justify-between py-4 border-b border-white/5 text-left"
                    >
                      <span className="font-['Playfair_Display'] text-2xl tracking-tight text-[#f5f3ef]/85 group-hover:text-[#c9a96e] transition-colors duration-300">
                        {l.label}
                      </span>
                      <span className="font-['Playfair_Display'] text-sm text-[#c9a96e]/50 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <button
                  onClick={() => go('contact')}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a96e] text-[#0a0a0b] font-medium text-sm tracking-wide hover:bg-[#d4af7a] transition-all duration-300 active:scale-[0.98]"
                >
                  Start a conversation
                </button>
              </div>

              <div className="px-6 py-6 border-t border-white/5">
                <a
                  href="mailto:jatinagarwal825@gmail.com"
                  className="block text-sm text-[#f5f3ef]/55 hover:text-[#c9a96e] transition-colors duration-300 font-light"
                >
                  jatinagarwal825@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}