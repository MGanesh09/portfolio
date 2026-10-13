'use client';
import { useState, useEffect, useRef } from 'react';
import { personal, strengths } from '@/data/resume';

function CountUp({ end, decimals = 0, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const init = async () => {
      ({ gsap } = await import('gsap'));
      ({ ScrollTrigger } = await import('gsap/ScrollTrigger'));
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        onEnter: () => {
          if (started.current) return;
          started.current = true;
          const obj = { value: 0 };
          gsap.to(obj, {
            value: end,
            duration: 2,
            ease: 'power3.out',
            onUpdate: () => {
              setVal(+obj.value.toFixed(decimals));
            },
          });
        },
      });
    };
    init();
  }, [end, decimals]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const init = async () => {
      ({ gsap } = await import('gsap'));
      ({ ScrollTrigger } = await import('gsap/ScrollTrigger'));
      gsap.registerPlugin(ScrollTrigger);

      // Title animation
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

      // Left Column (Avatar + Stats)
      gsap.fromTo(leftRef.current.children,
        { scale: 0.9, opacity: 0, y: 40 },
        {
          scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.15,
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
          }
        }
      );

      // Right Column (Bio paragraphs + tags)
      gsap.fromTo(rightRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top 80%',
          }
        }
      );
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="about">
      <div className="glow-orb" style={{ width: 450, height: 450, background: 'rgba(191,0,255,0.03)', top: '10%', right: '5%' }} />
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 60 }}>
          <p className="section-subtitle" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, marginBottom: 8, textAlign: 'center' }}>
            WHO AM I
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left: Avatar & Stats */}
          <div ref={leftRef}>
            <div className="about-img-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="about-img-box float" style={{ cursor: 'none' }}>
                <span style={{ fontSize: 90, filter: 'drop-shadow(0 0 35px rgba(0,245,255,0.45))', userSelect: 'none' }}>👨‍💻</span>
                <div style={{ position: 'absolute', inset: -1, borderRadius: 24, background: 'transparent', border: '1px solid rgba(0,245,255,0.2)' }} />
              </div>
              <div className="about-stats" style={{ width: '100%' }}>
                {[
                  { num: 8.24, suf: '/10', label: 'CGPA', dec: 2 },
                  { num: 100, suf: '+', label: 'Problems Solved', dec: 0 },
                  { num: 5, suf: '+', label: 'Projects Built', dec: 0 },
                  { num: 3, suf: '+', label: 'Certifications', dec: 0 },
                ].map((s, i) => (
                  <div key={i} className="glass-card stat-card" style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <div className="stat-num gradient-text">
                      <CountUp end={s.num} suffix={s.suf} decimals={s.dec} />
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Biography & Strengths */}
          <div ref={rightRef} className="about-text">
            {personal.bio.map((p, i) => (
              <p key={i} style={{ marginBottom: 20 }}>{p}</p>
            ))}

            <div style={{ marginTop: 32 }}>
              <div style={{ marginBottom: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#00f5ff', letterSpacing: 2 }}>
                STRENGTHS & INTERESTS
              </div>
              <div className="strength-tags">
                {strengths.map((s, i) => (
                  <span key={i} className="strength-tag" style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div className="glass-card" style={{ padding: '20px 28px', flex: '1 1 200px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b949e', marginBottom: 4 }}>DEGREE</div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>B.Tech CSE · VIT-AP</div>
                <div style={{ fontSize: 13, color: '#00f5ff', marginTop: 4 }}>2023 – 2027</div>
              </div>
              <div className="glass-card" style={{ padding: '20px 28px', flex: '1 1 200px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b949e', marginBottom: 4 }}>LOCATION</div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Amaravati, AP</div>
                <div style={{ fontSize: 13, color: '#00f5ff', marginTop: 4 }}>India 🇮🇳</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
