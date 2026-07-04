'use client';
import { useEffect, useRef } from 'react';
import { certifications } from '@/data/resume';

export default function Certifications() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const init = async () => {
      ({ gsap } = await import('gsap'));
      ({ ScrollTrigger } = await import('gsap/ScrollTrigger'));
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(titleRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo(containerRef.current.children,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power4.out', stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    };
    init();
  }, []);

  return (
    <section className="section" id="certifications">
      <div className="glow-orb" style={{ width: 450, height: 450, background: 'rgba(0,245,255,0.03)', top: '20%', right: '10%' }} />
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 60 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, color: '#8b949e', marginBottom: 8 }}>CREDENTIALS</p>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">Industry-recognized credentials validating my expertise</p>
        </div>

        <div ref={containerRef} className="cert-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="glass-card cert-card" style={{
              background: cert.color,
              borderColor: cert.border,
              display: 'flex', gap: 20, alignItems: 'flex-start', padding: 32,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 30px ${cert.border}`; e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div className="cert-icon" style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>{cert.icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h3 className="cert-name" style={{ fontSize: '1.15rem', fontWeight: 800 }}>{cert.name}</h3>
                <div className="cert-issuer" style={{ color: '#00f5ff', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600 }}>📌 {cert.issuer}</div>
                <div className="cert-year" style={{ color: '#8b949e', fontSize: 12.5 }}>Issued {cert.year}</div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  marginTop: 10, padding: '4px 12px', borderRadius: 20,
                  background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)',
                  fontSize: 12, color: '#00ff88', fontFamily: 'JetBrains Mono, monospace', width: 'fit-content',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff88', display: 'inline-block', boxShadow: '0 0 6px #00ff88' }} />
                  VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
