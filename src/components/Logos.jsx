import Reveal from './Reveal';

const names = ['SyntecXHub', 'Cognio Labs', 'AWS', 'Google', 'Flutter', 'React'];

export default function Logos() {
  return (
    <section className="relative px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.28em] text-[#f5f3ef]/40 mb-10">
            Tools and teams I have worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {names.map((n) => (
              <span
                key={n}
                className="font-['Playfair_Display'] text-xl md:text-3xl text-[#f5f3ef]/35 hover:text-[#c9a96e] transition-colors duration-500 cursor-default tracking-tight"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}