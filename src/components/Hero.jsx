'use client';
import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personal } from '@/data/resume';

function MagneticButton({ children, className, onClick, href, download, style = {} }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    };
    const onLeave = () => { btn.style.transform = 'translate(0,0)'; btn.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'; };
    const onEnter = () => { btn.style.transition = 'transform 0.15s ease'; };
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
    btn.addEventListener('mouseenter', onEnter);
    return () => { btn.removeEventListener('mousemove', onMove); btn.removeEventListener('mouseleave', onLeave); btn.removeEventListener('mouseenter', onEnter); };
  }, []);

  const props = { ref: btnRef, className, onClick, style };
  if (href) return <a {...props} href={href} download={download}>{children}</a>;
  return <button {...props}>{children}</button>;
}

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const init = async () => {
      ({ gsap } = await import('gsap'));
      ({ ScrollTrigger } = await import('gsap/ScrollTrigger'));
      gsap.registerPlugin(ScrollTrigger);

      // Entrance animation
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo('.hero-name-line', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.15 }, '-=0.4')
        .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.4')
        .fromTo('.hero-cta', { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.1 }, '-=0.3');

      // Parallax on scroll
      gsap.to(contentRef.current, {
        yPercent: 30, opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    };
    init();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={heroRef} id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      {/* Ambient gradient */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', width: 800, height: 800, transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div ref={contentRef}>
          {/* Badge */}
          <div className="hero-badge" style={{ opacity: 0, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', borderRadius: 50, border: '1px solid rgba(0,245,255,0.25)', background: 'rgba(0,245,255,0.04)', marginBottom: 36, backdropFilter: 'blur(10px)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88', display: 'inline-block', animation: 'pulse-neon 1.5s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 13, color: '#00f5ff', letterSpacing: 1 }}>Available for Opportunities</span>
          </div>

          {/* Name */}
          <div ref={nameRef} style={{ marginBottom: 24 }}>
            <div className="hero-name-line" style={{ opacity: 0, overflow: 'hidden' }}>
              <h1 style={{ fontSize: 'clamp(4rem,10vw,9rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: -4, background: 'linear-gradient(135deg,#00f5ff 0%,#bf00ff 50%,#f0f6fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Mannena
              </h1>
            </div>
            <div className="hero-name-line" style={{ opacity: 0, overflow: 'hidden' }}>
              <h1 style={{ fontSize: 'clamp(4rem,10vw,9rem)', fontWeight: 900, lineHeight: 1, letterSpacing: -4, color: '#f0f6fc', WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                Ganesh
              </h1>
            </div>
          </div>

          {/* Role typewriter */}
          <div className="hero-sub" style={{ opacity: 0, fontSize: 'clamp(1.1rem,2.5vw,1.6rem)', fontWeight: 500, color: '#8b949e', marginBottom: 16, minHeight: '2rem' }}>
            <TypeAnimation
              sequence={['Full-Stack Developer', 2200, 'AI/ML Engineer', 2200, 'Cloud Architect', 2200, 'Problem Solver', 2200]}
              wrapper="span" speed={55} repeat={Infinity}
              style={{ color: '#00f5ff', fontWeight: 600 }}
            />
          </div>

          {/* Tagline */}
          <p className="hero-sub" style={{ opacity: 0, maxWidth: 560, color: '#8b949e', fontSize: 17, lineHeight: 1.8, marginBottom: 52 }}>
            {personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <MagneticButton className="hero-cta btn-solid" onClick={() => scrollTo('#projects')} style={{ opacity: 0 }}>
              🚀 View Projects
            </MagneticButton>
            <MagneticButton className="hero-cta btn-neon" href="/resume.pdf" download style={{ opacity: 0 }}>
              ⬇ Download Resume
            </MagneticButton>
            <MagneticButton className="hero-cta btn-neon" onClick={() => scrollTo('#contact')} style={{ opacity: 0, borderColor: '#bf00ff', color: '#bf00ff' }}>
              ✉ Contact Me
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Floating code */}
      <div style={{ position: 'absolute', right: '6%', top: '35%', fontFamily: 'JetBrains Mono,monospace', fontSize: 13, color: 'rgba(0,245,255,0.2)', lineHeight: 2, animation: 'float 8s ease-in-out infinite', userSelect: 'none', pointerEvents: 'none' }}>
        <div>const ganesh = {'{'}</div>
        <div>&nbsp;&nbsp;skills: [<span style={{ color: 'rgba(191,0,255,0.35)' }}>'AI'</span>, <span style={{ color: 'rgba(0,255,136,0.35)' }}>'React'</span>],</div>
        <div>&nbsp;&nbsp;passion: <span style={{ color: 'rgba(255,0,128,0.35)' }}>'∞'</span>,</div>
        <div>&nbsp;&nbsp;status: <span style={{ color: 'rgba(0,255,136,0.45)' }}>'building'</span></div>
        <div>{'}'}</div>
      </div>

      {/* Scroll indicator */}
      <div onClick={() => scrollTo('#about')} style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#484f58', fontSize: 11, letterSpacing: 3, fontFamily: 'JetBrains Mono,monospace' }}>
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom,#00f5ff,transparent)', animation: 'float 2s ease-in-out infinite' }} />
        SCROLL
      </div>
    </section>
  );
}
