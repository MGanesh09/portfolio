'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import EasterEgg from '@/components/EasterEgg';
import { personal } from '@/data/resume';

const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false });
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let lenis;
    const initLenis = async () => {
      const LenisModule = await import('lenis');
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Connect Lenis to GSAP ScrollTrigger
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });
      ScrollTrigger.addEventListener('refresh', () => lenis.resize());
      ScrollTrigger.refresh();
    };

    if (loaded) {
      initLenis();
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [loaded]);

  return (
    <>
      <Cursor />
      <Loader onDone={() => setLoaded(true)} />

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}>
        <ThreeBackground />
        <Navbar />

        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        <footer>
          <div className="container">
            <p style={{ marginBottom: 8 }}>
              Designed & built with ❤️ by <span>{personal.name}</span>
            </p>
            <p style={{ fontSize: 12 }}>
              © {new Date().getFullYear()} · Built with <span>Next.js</span> · Crafted for impact
            </p>
          </div>
        </footer>

        <EasterEgg />
      </div>
    </>
  );
}
