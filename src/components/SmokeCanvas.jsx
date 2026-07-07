import { useEffect, useRef } from 'react';

export default function SmokeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];
    let w = 0, h = 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const tones = [
      { r: 201, g: 169, b: 110 },   // gold
      { r: 212, g: 175, b: 122 },   // amber
      { r: 140, g: 138, b: 135 },   // cool grey
      { r: 120, g: 118, b: 116 },
    ];

    const make = () => {
      const tone = tones[Math.floor(Math.random() * tones.length)];
      const radius = 120 + Math.random() * 220;
      return {
        x: Math.random() * w,
        y: h + radius + Math.random() * 200,
        r: radius,
        vy: 0.12 + Math.random() * 0.28,
        vx: (Math.random() - 0.5) * 0.18,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.002 + Math.random() * 0.004,
        swayAmp: 0.4 + Math.random() * 0.9,
        opacity: 0.018 + Math.random() * 0.035,
        tone,
      };
    };

    const count = Math.min(26, Math.max(14, Math.floor(window.innerWidth / 70)));
    for (let i = 0; i < count; i++) {
      const p = make();
      p.y = Math.random() * h;
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y -= p.vy;
        p.sway += p.swaySpeed;
        const x = p.x + Math.sin(p.sway) * p.swayAmp * 18;
        const grad = ctx.createRadialGradient(x, p.y, 0, x, p.y, p.r);
        const { r, g, b } = p.tone;
        grad.addColorStop(0, `rgba(${r},${g},${b},${p.opacity})`);
        grad.addColorStop(0.5, `rgba(${r},${g},${b},${p.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.y + p.r < -40) {
          Object.assign(p, make());
        }
      }
      raf = requestAnimationFrame(draw);
    };

    if (!reduce) {
      draw();
    } else {
      // single static frame
      draw();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}