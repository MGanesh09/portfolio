'use client';
import { useEffect, useRef, useState } from 'react';
import { achievements } from '@/data/resume';

function CountUpNum({ end, suffix, decimals = 0 }) {
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
            duration: 1.8,
            ease: 'power2.out',
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

export default function Achievements() {
  const gridRef = useRef(null);
  const listRef = useRef(null);
  const titleRef = useRef(null);

  const list = [
    { icon: '⚡', title: 'DSA Warrior', desc: 'Solved 250+ Data Structures and Algorithms problems across LeetCode, CodeChef, and HackerRank — consistently sharpening algorithmic thinking.' },
    { icon: '🔥', title: '100 Days of Code', desc: 'Successfully completed the prestigious 100 Days Coding Challenge in Java — demonstrating discipline, consistency, and growth mindset.' },
    { icon: '🏆', title: 'Multi-Platform Certified', desc: 'Earned multiple industry certifications from Oracle, AWS Academy, IBM, and HackerRank — validating cloud, AI, and development expertise.' },
  ];

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

      gsap.fromTo(gridRef.current.children,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power4.out', stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(listRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          }
        }
      );
    };
    init();
  }, []);

  return (
    <section className="section" id="achievements" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="glow-orb" style={{ width: 450, height: 450, background: 'rgba(0,255,136,0.03)', bottom: '0%', left: '20%' }} />
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 60 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, color: '#8b949e', marginBottom: 8 }}>MILESTONES</p>
          <h2 className="section-title">Key <span className="gradient-text-green">Achievements</span></h2>
          <p className="section-subtitle">Numbers that reflect dedication and consistent effort</p>
        </div>

        {/* Count-up stats */}
        <div ref={gridRef} className="achievement-grid" style={{ marginBottom: 64 }}>
          {achievements.map((a, i) => (
            <div key={i} className="glass-card achievement-card" style={{ padding: '36px 28px' }}>
              <div className="achievement-icon" style={{ fontSize: '2.5rem', marginBottom: 16 }}>{a.icon}</div>
              <div className="achievement-num gradient-text" style={{ fontSize: '3.6rem', fontWeight: 900, marginBottom: 8 }}>
                <CountUpNum end={a.num} suffix={a.suffix} decimals={a.decimals || 0} />
              </div>
              <div className="achievement-label" style={{ fontSize: 14.5 }}>
                <strong>{a.label}</strong>
                <br />
                <span style={{ color: '#8b949e', fontSize: 12.5, marginTop: 6, display: 'block' }}>{a.sublabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement highlights */}
        <div ref={listRef} style={{ display: 'grid', gap: 18, maxWidth: 850, margin: '0 auto' }}>
          {list.map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <span style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h4 style={{ fontWeight: 800, fontSize: 17, color: '#00f5ff' }}>{item.title}</h4>
                <p style={{ color: '#8b949e', fontSize: 14.5, lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
