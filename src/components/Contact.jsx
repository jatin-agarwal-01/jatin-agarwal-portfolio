import { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Send } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 2500);
  };

  const field = 'w-full bg-transparent border-b border-white/15 focus:border-[#c9a96e] outline-none py-3 text-[#f5f3ef] placeholder:text-[#f5f3ef]/35 transition-colors duration-300 focus-visible:outline-none';

  const socials = [
    { label: 'Email', href: 'mailto:jatinagarwal825@gmail.com', icon: Mail },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jatin-agarwal-builds/', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/jatin-agarwal-01', icon: Github },
    { label: 'LeetCode', href: 'https://leetcode.com/u/jatin_agarwal01/', icon: Code2 },
  ];

  return (
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-[760px] mx-auto">
            <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
              Contact
            </span>
            <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-balance">
              Let&apos;s build something deliberate.
            </h2>
            <p className="mt-6 text-[#f5f3ef]/65 leading-relaxed font-light max-w-[520px] mx-auto">
              If you have a project, internship, collaboration, or just want to connect, send a note. I am especially interested in work that values thoughtful execution and growth.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="space-y-4">
              <div className="text-sm text-[#f5f3ef]/50 uppercase tracking-[0.2em]">
                Reach me directly
              </div>
              <a
                href="mailto:jatinagarwal825@gmail.com"
                className="block font-['Playfair_Display'] text-2xl md:text-3xl text-[#f5f3ef] hover:text-[#c9a96e] transition-colors duration-300"
              >
                jatinagarwal825@gmail.com
              </a>
              <p className="text-sm text-[#f5f3ef]/55 font-light">
                Typical reply: within a reasonable time, with clear follow-up.
              </p>

              <div className="pt-6 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 text-sm text-[#f5f3ef]/75 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-[#f5f3ef]/50 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-[#f5f3ef]/50 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-[#f5f3ef]/50 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the work"
                  className={`${field} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a96e] text-[#0a0a0b] font-medium text-sm tracking-wide hover:bg-[#d4af7a] transition-all duration-300 active:scale-[0.98] disabled:opacity-70"
              >
                {sent ? 'Message sent' : 'Send message'}
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>

        <footer className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-['Playfair_Display'] text-lg">
            Jatin<span className="text-[#c9a96e]">.</span> Agarwal
          </div>
          <div className="text-sm text-[#f5f3ef]/40">
            © {new Date().getFullYear()} Jatin Agarwal. Built with deliberate care.
          </div>
          <div className="text-xs text-[#f5f3ef]/30">Photos from Pexels</div>
        </footer>
      </div>
    </section>
  );
}