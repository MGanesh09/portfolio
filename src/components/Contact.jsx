'use client';
import { useState, useEffect, useRef } from 'react';
import { personal } from '@/data/resume';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Hi Mannena,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: '#00f5ff' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/mannenaganesh', href: personal.linkedin, color: '#0077b5' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/mannenaganesh', href: personal.github, color: '#8b949e' },
    { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, color: '#00ff88' },
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

      gsap.fromTo(containerRef.current.children,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power4.out', stagger: 0.15,
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
    <section className="section" id="contact">
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(0,245,255,0.03)', top: '20%', right: '0%' }} />
      <div className="glow-orb" style={{ width: 350, height: 350, background: 'rgba(191,0,255,0.03)', bottom: '10%', left: '0%' }} />
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 60 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, color: '#8b949e', marginBottom: 8 }}>GET IN TOUCH</p>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's build something amazing together.</p>
        </div>

        <div ref={containerRef} className="contact-grid">
          <div className="contact-info">
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 16 }}>Ready to <span className="neon-text">collaborate?</span></h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, fontSize: 15, marginBottom: 32 }}>I'm currently open to full-time roles, internships, and freelance projects. Whether you have a big idea or just want to say hi — my inbox is always open.</p>
            <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="glass-card contact-link" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', textDecoration: 'none', color: '#f0f6fc', transition: 'all 0.3s' }}>
                  <div className="contact-link-icon" style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0, background: `${l.color}15`, border: `1px solid ${l.color}30` }}>
                    {l.icon}
                  </div>
                  <div>
                    <div className="contact-link-text" style={{ color: l.color, fontWeight: 600 }}>{l.label}</div>
                    <div className="contact-link-sub" style={{ fontSize: 13, color: '#8b949e' }}>{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 8, color: '#00f5ff' }}>Message Sent!</h3>
                <p style={{ color: '#8b949e' }}>Your email client is opening. Looking forward to connecting!</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label">YOUR NAME</label>
                    <input className="form-input" name="name" value={form.name} onChange={onChange} placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EMAIL</label>
                    <input className="form-input" name="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">SUBJECT</label>
                  <input className="form-input" name="subject" value={form.subject} onChange={onChange} placeholder="Project Collaboration / Job Opportunity" required />
                </div>
                <div className="form-group">
                  <label className="form-label">MESSAGE</label>
                  <textarea className="form-input" name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project or opportunity..." rows={5} required />
                </div>
                <button type="submit" className="btn-solid" style={{ width: '100%', justifyContent: 'center', fontSize: 16 }}>
                  ✉ Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
