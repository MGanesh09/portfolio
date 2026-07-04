'use client';
import { useState } from 'react';

export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const n = clicks + 1;
    setClicks(n);
    if (n >= 5) { setOpen(true); setClicks(0); }
  };

  const codes = [
    'const dream = () => buildTheFuture();',
    'while (true) { learnMoreEveryday(); }',
    'if (problems) solve(); else createProblems();',
  ];

  return (
    <>
      <button
        className="easter-egg-trigger"
        onClick={handleClick}
        title={`Click ${5 - clicks} more times...`}
        aria-label="Hidden surprise"
      >
        {clicks > 0 ? '🔮' : '✨'}
      </button>

      {open && (
        <div className="easter-egg-modal" onClick={() => setOpen(false)}>
          <div className="glass-card easter-egg-content" onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h2 className="gradient-text">You Found The Easter Egg!</h2>
            <p>
              Congrats on your curiosity — that's exactly the kind of mindset I bring to every project.
              Here's a little secret: this entire portfolio was crafted with passion, precision, and way too much ☕.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: 16, margin: '16px 0', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#00f5ff', textAlign: 'left' }}>
              {codes.map((c, i) => <div key={i} style={{ marginBottom: 6 }}>{c}</div>)}
            </div>
            <p style={{ fontSize: 14, color: '#484f58' }}>— Mannena Ganesh, who also writes code at 2am 🌙</p>
            <button className="btn-solid" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>
              Close 🚀
            </button>
          </div>
        </div>
      )}
    </>
  );
}
