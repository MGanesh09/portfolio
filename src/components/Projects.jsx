'use client';
import { useState, useEffect, useRef } from 'react';
import { projects } from '@/data/resume';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -15;
    setTilt({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="glass-card project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      onMouseMove={onMouseMove}
      style={{
        background: hovered ? project.gradient : 'rgba(255,255,255,0.03)',
        transform: hovered ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px)` : 'none',
        boxShadow: hovered ? '0 20px 40px rgba(0,245,255,0.15)' : 'none',
        borderColor: hovered ? 'rgba(0,245,255,0.3)' : 'rgba(255,255,255,0.1)',
        transition: hovered ? 'transform 0.08s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="project-number" style={{ fontSize: 13, fontFamily: 'JetBrains Mono, monospace', color: '#00f5ff' }}>{project.id}</span>
        <span style={{ fontSize: 26, filter: hovered ? 'drop-shadow(0 0 10px rgba(0,245,255,0.5))' : 'none', transition: 'filter 0.3s' }}>
          {index === 0 ? '🏢' : index === 1 ? '🏠' : '🌾'}
        </span>
      </div>

      <h3 className="project-title" style={{ fontSize: '1.6rem', fontWeight: 800, transition: 'color 0.3s' }}>{project.title}</h3>
      <p className="project-desc" style={{ color: '#8b949e', fontSize: 14.5, lineHeight: 1.7, flex: 1 }}>{project.description}</p>

      <div style={{ margin: '12px 0' }}>
        <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', color: '#00f5ff', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>KEY FEATURES</div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {project.features.slice(0, 3).map(f => (
            <li key={f} style={{ fontSize: 13, color: '#8b949e', display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ color: '#bf00ff', fontSize: 12 }}>◆</span>{f}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '12px 0' }}>
        {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>

      <div className="project-links" style={{ display: 'flex', gap: 16, marginTop: 12 }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: '#8b949e', textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: '#8b949e', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
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
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out', stagger: 0.15,
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
    <section className="section" id="projects">
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(191,0,255,0.03)', bottom: '10%', right: '0%' }} />
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 60 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: 3, color: '#8b949e', marginBottom: 8 }}>WHAT I'VE BUILT</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">AI-powered platforms that solve real-world problems</p>
        </div>
        <div ref={containerRef} className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
