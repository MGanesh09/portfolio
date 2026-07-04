'use client';
import { useEffect, useRef } from 'react';

const TIMELINE_EVENTS = [
  {
    year: '2023',
    title: 'B.Tech in Computer Science & Engineering',
    sub: 'VIT-AP University · Amaravati',
    desc: 'Commenced undergraduate studies focusing on core computer science subjects. Maintained an excellent academic track record with an 8.1 CGPA.',
    tag: 'Academic Start',
    icon: '🎓',
    color: '#00f5ff',
  },
  {
    year: '2024',
    title: 'Cloud Foundations & AI Ideation',
    sub: 'AWS Academy Certification',
    desc: 'Earned AWS Academy Cloud Foundations certification. Designed and built Smart Crop Advisor, an AI crop recommendation system integrating predictive analytics.',
    tag: 'Cloud & Projects',
    icon: '🚀',
    color: '#bf00ff',
  },
  {
    year: '2025',
    title: 'Advanced AI & Data Science Credentials',
    sub: 'Oracle Certified GenAI & Data Science Professional',
    desc: 'Acquired double professional certifications in GenAI and Data Science from Oracle. Developed Business Success Predictor and Smart Rent Analyzer.',
    tag: 'Certifications',
    icon: '☁️',
    color: '#00ff88',
  },
  {
    year: '2026 – 2027',
    title: 'Full-Stack Engineering & Future Focus',
    sub: 'VIT-AP Graduation (Expected 2027)',
    desc: 'Specializing in robust system architectures, scalable microservices, and AI integrations to turn industry-ready engineering solutions into reality.',
    tag: 'Engineering Focus',
    icon: '⚡',
    color: '#ff0080',
  },
];

export default function Education() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const init = async () => {
      ({ gsap } = await import('gsap'));
      ({ ScrollTrigger } = await import('gsap/ScrollTrigger'));
      gsap.registerPlugin(ScrollTrigger);

      // Section title entrance
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

      // Timeline vertical line filling on scroll
      gsap.fromTo(lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          }
        }
      );

      // Timeline items entrance
      const items = containerRef.current.querySelectorAll('.timeline-card-wrap');
      items.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.95 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            }
          }
        );
      });
    };
    init();
  }, []);

  return (
    <section className="section" id="education" style={{ background: 'rgba(255,255,255,0.01)', overflow: 'hidden' }}>
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 80 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, color: '#8b949e', marginBottom: 8 }}>MY PATH</p>
          <h2 className="section-title">Interactive <span className="gradient-text">Timeline</span></h2>
          <p className="section-subtitle">Chronological progression of education, projects & credentials</p>
        </div>

        <div ref={containerRef} style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '40px 0' }}>
          {/* Central Line Background */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,0.05)' }} />
          
          {/* central filling line */}
          <div ref={lineRef} style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, width: 2,
            background: 'linear-gradient(to bottom, #00f5ff, #bf00ff, #00ff88, #ff0080)',
            boxShadow: '0 0 10px rgba(0,245,255,0.5)',
          }} />

          {TIMELINE_EVENTS.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="timeline-card-wrap" style={{
                display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end',
                position: 'relative', width: '100%', marginBottom: 60,
              }}>
                {/* Connector Dot */}
                <div style={{
                  position: 'absolute', left: '50%', transform: 'translateX(-50%) translateY(-50%)', top: '50%',
                  width: 16, height: 16, borderRadius: '50%', background: event.color,
                  border: '3px solid #030712', boxShadow: `0 0 12px ${event.color}`, zIndex: 3,
                }} />

                {/* Card Container */}
                <div className="glass-card" style={{
                  width: '45%', padding: '24px 32px', position: 'relative',
                  borderLeft: isLeft ? `3px solid ${event.color}` : '1px solid rgba(255,255,255,0.1)',
                  borderRight: !isLeft ? `3px solid ${event.color}` : '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', flexDirection: 'column', gap: 12,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 700,
                      background: `${event.color}15`, color: event.color, padding: '3px 10px', borderRadius: 4,
                    }}>{event.year}</span>
                    <span style={{ fontSize: 20 }}>{event.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f0f6fc' }}>{event.title}</h3>
                  <div style={{ color: '#8b949e', fontSize: 13.5, fontWeight: 500 }}>{event.sub}</div>
                  <p style={{ color: '#8b949e', fontSize: 13.5, lineHeight: 1.6 }}>{event.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
