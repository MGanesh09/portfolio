'use client';
import { useEffect, useState } from 'react';
import { personal } from '@/data/resume';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certs' },
  { href: '#achievements', label: 'Wins' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo gradient-text" onClick={e => { e.preventDefault(); scrollTo('#hero'); }}>
          MG<span style={{ color: '#00f5ff' }}>.</span>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>Hire Me</a>
        <button className="nav-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: 'rgba(3,7,18,0.98)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px' }}>
          {links.map(l => (
            <div key={l.href} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <a href={l.href} style={{ color: '#8b949e', textDecoration: 'none', fontSize: 15 }}
                onClick={e => { e.preventDefault(); scrollTo(l.href); }}>{l.label}</a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
