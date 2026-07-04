'use client';
import { useEffect, useRef } from 'react';
import { skills } from '@/data/resume';

function SkillBar({ name, level, index }) {
  const fillRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const init = async () => {
      ({ gsap } = await import('gsap'));
      ({ ScrollTrigger } = await import('gsap/ScrollTrigger'));
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(fillRef.current,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: fillRef.current,
            start: 'top 90%',
          },
        }
      );
    };
    init();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-name-row">
        <span>{name}</span>
        <span className="skill-pct" style={{ opacity: 0.85 }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div ref={fillRef} className="skill-bar-fill" style={{ width: '0%' }} />
      </div>
    </div>
  );
}

const CATEGORIES = [
  { key: 'languages', label: '💻 Languages', color: '#00f5ff' },
  { key: 'frameworks', label: '⚡ Frameworks & Libraries', color: '#bf00ff' },
  { key: 'databases', label: '🗄️ Databases', color: '#00ff88' },
];

export default function Skills() {
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
    <section className="section" id="skills" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="glow-orb" style={{ width: 450, height: 450, background: 'rgba(0,245,255,0.03)', top: '20%', left: '0%' }} />
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 60 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, color: '#8b949e', marginBottom: 8 }}>WHAT I KNOW</p>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">A curated stack of technologies I build with daily</p>
        </div>

        <div ref={containerRef} className="skills-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="glass-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="skill-cat-label" style={{ color: cat.color, fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 12 }}>{cat.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {skills[cat.key].map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                ))}
              </div>
            </div>
          ))}

          <div className="glass-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div className="skill-cat-label" style={{ color: '#00f5ff', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 12, marginBottom: 16 }}>☁️ Cloud & DevOps</div>
              <div className="skill-tags">
                {skills.cloud.map(t => <span key={t} className="skill-tag">{t}</span>)}
                {skills.tools.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
            <div>
              <div className="skill-cat-label" style={{ color: '#ff0080', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 12, marginBottom: 16 }}>🌐 Technologies</div>
              <div className="skill-tags">
                {skills.technologies.map(t => <span key={t} className="skill-tag" style={{ borderColor: 'rgba(255,0,128,0.25)', color: '#ff0080', background: 'rgba(255,0,128,0.02)' }}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
