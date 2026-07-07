import { useEffect } from 'react';
import SmokeCanvas from './components/SmokeCanvas';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Outcomes from './components/Outcomes';
import Logos from './components/Logos';
import About from './components/About';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    try { localStorage.setItem('theme', 'dark'); } catch (e) {}
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0b] text-[#f5f3ef] font-['Sora'] antialiased overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Sora:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <SmokeCanvas />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <CaseStudies />
          <Process />
          <Outcomes />
          <Logos />
          <Services />
          <Certificates />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </div>
  );
}