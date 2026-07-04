'use client';
import { useEffect, useRef, useState } from 'react';

const PHRASES = ['MANNENA GANESH', 'FULL STACK DEV', 'AI ENGINEER', 'PROBLEM SOLVER'];

export default function PremiumLoader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [phrase, setPhrase] = useState(0);
  const [done, setDone] = useState(false);
  const barRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 3 + 1;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
          setTimeout(async () => {
            const { gsap } = await import('gsap');
            if (loaderRef.current) {
              gsap.to(loaderRef.current, {
                yPercent: -100, duration: 1, ease: 'power4.inOut',
                onComplete: () => { setDone(true); onDone?.(); }
              });
            } else {
              setDone(true);
              onDone?.();
            }
          }, 400);
      }
      setProgress(Math.floor(p));
    }, 30);

    const phraseInt = setInterval(() => setPhrase(i => (i + 1) % PHRASES.length), 600);
    return () => { clearInterval(tick); clearInterval(phraseInt); };
  }, [onDone]);

  if (done) return null;

  return (
    <div ref={loaderRef} style={{
      position: 'fixed', inset: 0, background: '#030712', zIndex: 10000,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 40, overflow: 'hidden',
    }}>
      {/* Scan lines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,245,255,0.015) 2px,rgba(0,245,255,0.015) 4px)', pointerEvents: 'none' }} />

      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: -4, lineHeight: 1, background: 'linear-gradient(135deg,#00f5ff,#bf00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MG</div>
        <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, letterSpacing: 6, color: '#484f58', marginTop: 8 }}>PORTFOLIO v2.0</div>
      </div>

      {/* Cycling phrase */}
      <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 13, color: '#00f5ff', letterSpacing: 4, height: 20, overflow: 'hidden', textAlign: 'center' }}>
        {PHRASES[phrase]}
      </div>

      {/* Progress */}
      <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', position: 'relative' }}>
          <div ref={barRef} style={{
            position: 'absolute', top: 0, left: 0, height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg,#00f5ff,#bf00ff)',
            boxShadow: '0 0 12px #00f5ff, 0 0 24px rgba(0,245,255,0.4)',
            transition: 'width 0.05s linear',
          }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: '#484f58' }}>LOADING</span>
          <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: '#00f5ff' }}>{progress}%</span>
        </div>
      </div>

      {/* Corner decorations */}
      {[['0 0', '0 0'], ['0 0', 'auto 0'], ['auto 0', '0 0'], ['auto 0', 'auto 0']].map(([t, l], i) => (
        <div key={i} style={{
          position: 'absolute', width: 20, height: 20,
          top: t.split(' ')[0] === 'auto' ? 'auto' : 24,
          bottom: t.split(' ')[0] === 'auto' ? 24 : 'auto',
          left: l.split(' ')[0] === 'auto' ? 'auto' : 24,
          right: l.split(' ')[0] === 'auto' ? 24 : 'auto',
          borderTop: t.split(' ')[0] !== 'auto' ? '1px solid rgba(0,245,255,0.4)' : 'none',
          borderBottom: t.split(' ')[0] === 'auto' ? '1px solid rgba(0,245,255,0.4)' : 'none',
          borderLeft: l.split(' ')[0] !== 'auto' ? '1px solid rgba(0,245,255,0.4)' : 'none',
          borderRight: l.split(' ')[0] === 'auto' ? '1px solid rgba(0,245,255,0.4)' : 'none',
        }} />
      ))}
    </div>
  );
}
