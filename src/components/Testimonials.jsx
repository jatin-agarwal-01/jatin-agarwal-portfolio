import Reveal from './Reveal';

const quotes = [
  {
    text: 'Jatin approaches every build with rare discipline. The work is structured, the interfaces feel intentional, and the code is built to last rather than repaired later.',
    name: 'Engineering Mentor',
    role: 'Cognio Labs',
  },
  {
    text: 'He shipped features faster than we expected and kept the mobile app visually coherent across every screen. Clean architecture showed in the result.',
    name: 'Project Lead',
    role: 'SyntecXHub',
  },
  {
    text: 'A product-minded developer who treats polish as a feature, not an afterthought. Reliable execution and steady momentum throughout.',
    name: 'Collaborator',
    role: 'Independent',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-[680px]">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c9a96e] font-medium">
            Testimonials
          </span>
          <h2 className="mt-5 font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            In the words of collaborators.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-white/10 bg-[#111114]/50 p-8 flex flex-col">
                <span className="font-['Playfair_Display'] text-6xl leading-none text-[#c9a96e]/40">
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-['Playfair_Display'] italic text-lg text-[#f5f3ef]/85 leading-relaxed flex-1">
                  {q.text}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/5">
                  <div className="font-medium text-[#f5f3ef]">{q.name}</div>
                  <div className="text-sm text-[#c9a96e] mt-0.5">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}