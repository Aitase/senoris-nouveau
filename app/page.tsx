'use client';

import React, { useState } from 'react';

export default function Home() {
  const techs = [
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "React Native", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Kali Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" }
  ];

  // --- Contact form state ---
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur inconnue');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setNewsletterError('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur inconnue');

      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch (err: unknown) {
      setNewsletterStatus('error');
      setNewsletterError(err instanceof Error ? err.message : 'Erreur inconnue');
    }
  };

  // --- Scroll reveal animation (IntersectionObserver) ---
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(32px)';
      (el as HTMLElement).style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* --- RICH BORDEAUX HERO SECTION --- */}
      <section className="hero-wrapper" id="accueil">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>

        <nav className="nav-glass">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="#accueil" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, marginTop: '-30px', marginBottom: '-30px' }}>
              <img
                src="/logo-transparent.png"
                alt="Senoris Logo"
                className="nav-logo-img"
                style={{
                  height: '130px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.3))',
                }}
              />
            </a>
            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display: 'flex', gap: '40px', alignItems: 'center', fontWeight: '700' }}>
              <a href="#about" style={{ color: 'var(--bg-cream)', textDecoration: 'none', fontSize: '1.1rem' }}>Mission</a>
              <a href="#services" style={{ color: 'var(--bg-cream)', textDecoration: 'none', fontSize: '1.1rem' }}>Expertise</a>
              <a href="#projets" style={{ color: 'var(--bg-cream)', textDecoration: 'none', fontSize: '1.1rem' }}>Réalisations</a>
              <a href="#equipe" style={{ color: 'var(--bg-cream)', textDecoration: 'none', fontSize: '1.1rem' }}>Équipe</a>
              <a href="#contact" className="btn btn-nude" style={{ padding: '12px 32px', fontSize: '1.05rem' }}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="container" style={{ paddingTop: '160px', paddingBottom: '160px', display: 'flex', alignItems: 'center', gap: '6%', flexWrap: 'wrap' }}>

          {/* LEFT — Text content */}
          <div style={{ flex: '1 1 480px', minWidth: '300px' }} className="reveal">

            {/* Badge pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', marginBottom: '36px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', display: 'inline-block', boxShadow: '0 0 10px #FFFFFF' }}></span>
              <span style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Agence Tech Premium au Sénégal</span>
            </div>

            <h1 className="hero-title">
              Excellence <br />
              <span className="text-gradient">Technologique</span> &amp; <br />
              <span style={{ color: 'var(--bg-cream)' }}>Cybersécurité.</span>
            </h1>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.85', marginBottom: '50px', opacity: 0.85, maxWidth: '560px', color: 'var(--bg-cream)' }}>
              Nous combinons le développement sur-mesure d'applications web &amp; mobiles avec des audits de cybersécurité offensifs pour les entreprises ambitieuses.
            </p>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#services" className="btn btn-nude">Découvrir l'Expertise</a>
              <a href="#contact" style={{ color: 'var(--bg-cream)', fontWeight: 'bold', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '4px', textDecoration: 'none', transition: 'opacity 0.3s' }}>Démarrer un projet ↗</a>
            </div>
          </div>

          {/* RIGHT — Stats cards */}
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="reveal reveal-delay-1">

            {/* Card 1 — Projets */}
            <div style={{
              background: 'rgba(253,250,247,0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(253,250,247,0.18)',
              borderRadius: '24px',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              animation: 'floatCard 4s ease-in-out infinite',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            }}>
              <div style={{ width: 56, height: 56, borderRadius: '16px', background: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b2313" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>12<span style={{ color: 'var(--accent-gold)' }}>+</span></div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,247,0.7)', marginTop: '4px', fontWeight: 600 }}>Projets livrés</div>
              </div>
            </div>

            {/* Card 2 — Team */}
            <div style={{
              background: 'rgba(253,250,247,0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(253,250,247,0.14)',
              borderRadius: '24px',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              animation: 'floatCard 4s ease-in-out infinite 1.3s',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            }}>
              <div style={{ width: 56, height: 56, borderRadius: '16px', background: 'rgba(193,154,107,0.25)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>5<span style={{ color: 'var(--accent-gold)' }}> ✦</span></div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,247,0.7)', marginTop: '4px', fontWeight: 600 }}>Expertes Tech</div>
              </div>
            </div>

            {/* Card 3 — Satisfaction */}
            <div style={{
              background: 'rgba(139,90,43,0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(193,154,107,0.3)',
              borderRadius: '24px',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              animation: 'floatCard 4s ease-in-out infinite 2.6s',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            }}>
              <div style={{ width: 56, height: 56, borderRadius: '16px', background: 'var(--accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>98<span style={{ color: 'var(--accent-gold)' }}>%</span></div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,247,0.7)', marginTop: '4px', fontWeight: 600 }}>Satisfaction client</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* --- SERVICES SECTION --- */}
      <section id="services" style={{ background: 'var(--bg-cream)', paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="service-grid">

            <div className="glass-card-nude reveal">
              <div className="number-watermark">01</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: 800 }}>Plateforme Web & CV</h3>
              <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.6' }}>
                Créez des CV professionnels en quelques minutes avec notre plateforme dédiée, profitez de sites vitrines élégants.
              </p>
            </div>

            <div className="glass-card-nude reveal reveal-delay-1" style={{ background: 'var(--accent-main)', color: 'var(--bg-cream)', border: 'none' }}>
              <div className="number-watermark" style={{ color: 'rgba(255,255,255,0.06)' }}>02</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--bg-cream-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-main)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', fontWeight: 800 }}>Cybersécurité & Audit</h3>
              <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>
                Audit complet, pentesting et accompagnement à la conformité pour renforcer la résilience de votre organisation.
              </p>
            </div>

            <div className="glass-card-nude reveal reveal-delay-2">
              <div className="number-watermark">03</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: 800 }}>Applications Mobiles</h3>
              <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.6' }}>
                Conception et développement d'applications mobiles iOS & Android intuitives et extrêmement rapides.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- RECENT PROJECTS SECTION --- */}
      <section id="projets" className="section-padding" style={{ background: '#FFF', paddingTop: '160px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '30px' }}>
            <div className="reveal">
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Portfolio Premium</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)' }}>Nos Réalisations.</h2>
            </div>
            <p className="reveal reveal-delay-1" style={{ maxWidth: '450px', fontSize: '1rem', opacity: 0.7, lineHeight: 1.6 }}>
              Découvrez comment nous aidons nos clients à transformer leurs idées en solutions numériques impactantes.
            </p>
          </div>

          <div className="reveal">
            <div style={{
              background: 'var(--bg-cream-alt)',
              borderRadius: '32px',
              overflow: 'hidden',
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid var(--bg-nude-border)',
              transition: 'transform 0.4s ease'
            }}>
              <div style={{ flex: '1 1 450px', padding: '40px' }}>
                <div style={{ color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '16px' }}>Produit Interne (SaaS)</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '20px' }}>Senoris CV Generator</h3>
                <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.8, marginBottom: '32px' }}>
                  Une plateforme intelligente permettant aux professionnels sénégalais de créer des CV optimisés aux standards internationaux.
                </p>
                <a href="https://cv.senoris.net/" target="_blank" className="btn" style={{ background: 'var(--accent-main)', color: '#FFF', border: 'none' }}>
                  Visiter le site ↗
                </a>
              </div>
              <div style={{ flex: '1 1 300px', background: 'var(--footer-dark)', position: 'relative', overflow: 'hidden', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  position: 'relative',
                  width: '90%',
                  height: '90%',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg) scale(1.1)',
                  transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }} className="hover-tilt">
                  <img
                    src="/cv-showcase.png"
                    alt="Senoris CV Showcase"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '-30px 40px 80px rgba(0,0,0,0.5)',
                      background: 'white'
                    }}
                  />
                </div>
                {/* Decorative dots or pattern for brand feel */}
                <div style={{ position: 'absolute', top: '10%', right: '10%', opacity: 0.1 }}>
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="10" cy="10" r="2" fill="white" />
                    <circle cx="30" cy="10" r="2" fill="white" />
                    <circle cx="50" cy="10" r="2" fill="white" />
                    <circle cx="10" cy="30" r="2" fill="white" />
                    <circle cx="30" cy="30" r="2" fill="white" />
                    <circle cx="50" cy="30" r="2" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="reveal" style={{ marginTop: '32px' }}>
            <div style={{
              background: 'var(--bg-white)',
              borderRadius: '32px',
              overflow: 'hidden',
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid var(--bg-nude-border)',
              transition: 'transform 0.4s ease'
            }}>
              <div style={{ flex: '1 1 300px', background: 'linear-gradient(135deg, var(--footer-base), var(--footer-dark))', position: 'relative', overflow: 'hidden', minHeight: '260px', order: -1 }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(193,154,107,0.6)" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                  <div style={{ height: '4px', background: 'rgba(193,154,107,0.3)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: '70%', height: '100%', background: 'var(--accent-gold)', borderRadius: '10px' }}></div>
                  </div>
                  <p style={{ color: 'rgba(253,250,247,0.5)', fontSize: '0.75rem', margin: '8px 0 0', fontFamily: 'monospace' }}>Audit en cours... 70%</p>
                </div>
              </div>
              <div style={{ flex: '1 1 450px', padding: '40px' }}>
                <div style={{ color: 'var(--accent-main)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '16px' }}>Client Entreprise</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '20px' }}>Audit Cybersécurité</h3>
                <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.8, marginBottom: '32px' }}>
                  Analyse de vulnérabilités, test d’intrusion et rapport de conformité pour une PME du secteur banque & finance au Sénégal.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'var(--bg-cream)', border: '1px solid var(--bg-nude-border)', borderRadius: '100px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>En cours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH TICKER --- */}
      <div className="ticker-container">
        <div className="ticker-wrapper">
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className="ticker-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={tech.url} alt={tech.name} style={{ height: '24px', opacity: 0.9 }} />
              <span style={{ fontWeight: 600 }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- TEAM SECTION --- */}
      <section id="equipe" className="section-padding" style={{ background: 'var(--bg-global)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '16px' }} className="reveal">
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
              Les Architectes du Changement
            </h4>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 16px' }}>Notre Équipe.</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Cinq expertises au service d’une même vision : propulser l’Afrique dans l’ère numérique.
            </p>
          </div>

          <div className="team-grid">

            {/* Ndeye Aita Seck */}
            <div className="team-card reveal">
              <div className="team-avatar">NA</div>
              <p className="team-name">Ndeye Aita Seck</p>
              <p className="team-role-title">CEO</p>
              <span className="team-specialty">Ingénieure SSI</span>
            </div>

            {/* Anna Ndoye */}
            <div className="team-card reveal reveal-delay-1">
              <div className="team-avatar">AN</div>
              <p className="team-name">Anna Ndoye</p>
              <p className="team-role-title">CFO</p>
              <span className="team-specialty">Ingénieure SSI</span>
            </div>

            {/* Mame Diarra Dieng */}
            <div className="team-card reveal reveal-delay-2">
              <div className="team-avatar">MD</div>
              <p className="team-name">Mame Diarra Dieng</p>
              <p className="team-role-title">Lead-Developer</p>
              <span className="team-specialty">Ingénieure IA</span>
            </div>

            {/* Fatoumata Dial */}
            <div className="team-card reveal reveal-delay-1">
              <div className="team-avatar">FD</div>
              <p className="team-name">Fatoumata Dial</p>
              <p className="team-role-title">CTO</p>
              <span className="team-specialty">Ingénieure IA</span>
            </div>

            {/* Mame Diarra Mbacké */}
            <div className="team-card reveal reveal-delay-2">
              <div className="team-avatar">DM</div>
              <p className="team-name">Mame Diarra Mbacké</p>
              <p className="team-role-title">CMO</p>
              <span className="team-specialty">Ingénieure SSI</span>
            </div>

          </div>
        </div>
      </section>

      {/* --- ABOUT / MISSION --- */}
      <section id="about" className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="reveal" style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(139, 90, 43, 0.08)', borderRadius: '100px', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-main)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  L'ADN de Senoris
                </span>
              </div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '30px', letterSpacing: '-1px' }}>
                Passionnés par <br /> <span style={{ color: 'var(--accent-main)' }}>l'innovation</span> &amp; la <span style={{ color: 'var(--accent-gold)' }}>Cybersécurité.</span>
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px' }}>
                Basée au Sénégal, SENORIS accompagne les entreprises dans la conception, la sécurisation et la mise à l'échelle de leurs solutions digitales avec une exigence de qualité supérieure.
              </p>
            </div>
            <div className="reveal reveal-delay-1" style={{ flex: '1 1 450px' }}>
              <div style={{ background: 'var(--bg-cream-alt)', padding: '50px', borderRadius: '40px', border: '1px solid var(--bg-nude-border)', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: 12, height: 12, background: 'var(--accent-main)', borderRadius: '3px' }}></span>
                    Notre Mission
                  </h4>
                  <p style={{ opacity: 0.9, fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Offrir des services technologiques premium avec une précision artisanale et une rigueur ingénierie.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: 12, height: 12, background: 'var(--accent-gold)', borderRadius: '3px' }}></span>
                    Notre Vision
                  </h4>
                  <p style={{ opacity: 0.9, fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Construire l'architecture numérique de demain pour une Afrique connectée et sécurisée.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFINED CONTACT SECTION SIDE-BY-SIDE --- */}
      <section id="contact" className="section-padding" style={{ background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Contactez-nous aujourd'hui</h4>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', fontWeight: 900 }}>Démarrons votre projet.</h2>
          </div>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

            {/* Left Side: Contact Info Blocks */}
            <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="reveal glass-card-nude" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', transform: 'none' }}>
                {/* Location icon */}
                <div style={{ width: 52, height: 52, borderRadius: '16px', background: 'var(--accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>Coordonnées</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.85rem', margin: 0 }}>Dakar, Sénégal </p>
                </div>
              </div>

              <div className="reveal reveal-delay-1 glass-card-nude" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', transform: 'none' }}>
                {/* Mail icon */}
                <div style={{ width: 52, height: 52, borderRadius: '16px', background: 'var(--accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>Mail Direct</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.85rem', margin: '0 0 8px 0' }}>Senoris2026@gmail.com</p>
                  <a href="mailto:Senoris2026@gmail.com" style={{ color: 'var(--accent-main)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem' }}>Nous écrire ↗</a>
                </div>
              </div>

              <div className="reveal reveal-delay-2 glass-card-nude" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', transform: 'none' }}>
                {/* Social / Globe icon */}
                <div style={{ width: 52, height: 52, borderRadius: '16px', background: 'var(--accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 12px 0' }}>Réseaux Sociaux</h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {/* WhatsApp */}
                    <a href="https://wa.me/221774830501" title="WhatsApp" target="_blank" rel="noreferrer"
                      style={{ width: 40, height: 40, borderRadius: '12px', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(37,211,102,0.3)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(37,211,102,0.4)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(37,211,102,0.3)'; }}>
                      <svg width="20" height="20" viewBox="0 0 32 32" fill="#ffffff"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.436-2.012A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.078 22.531c-.338.95-1.964 1.813-2.694 1.926-.73.113-1.633.16-2.636-.165a24.09 24.09 0 0 1-2.387-.883C12.5 21.86 9.688 18.75 9.25 18.188c-.438-.563-1.5-1.938-1.5-3.626 0-1.687.875-2.5 1.188-2.875.312-.375.687-.469.916-.469.23 0 .459.002.66.01.212.01.496-.08.776.594.287.687.975 2.375 1.06 2.55.087.175.145.375.029.594-.116.218-.174.354-.347.543-.174.188-.366.42-.521.563-.174.162-.355.337-.153.662.203.325.9 1.488 1.934 2.41 1.328 1.188 2.45 1.556 2.775 1.73.325.175.515.144.706-.087.188-.232.806-.944 1.022-1.269.215-.325.43-.27.72-.162.29.107 1.838.869 2.15 1.025.314.157.523.237.6.369.077.131.077.756-.261 1.706z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==" title="Instagram" target="_blank" rel="noreferrer"
                      style={{ width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(220,39,67,0.3)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/senoris" title="LinkedIn" target="_blank" rel="noreferrer"
                      style={{ width: 40, height: 40, borderRadius: '12px', background: '#0077B5', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(0,119,181,0.3)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@senoris2026" title="TikTok" target="_blank" rel="noreferrer"
                      style={{ width: 40, height: 40, borderRadius: '12px', background: '#010101', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28.01 4.38-.02 8.76.01 13.14-.03 1.1-.24 2.23-.74 3.24-1.01 2.15-3.19 3.65-5.54 3.89-2.58.27-5.23-.77-6.84-2.83-1.61-2.07-2-4.9-1.01-7.27.95-2.27 3.12-3.87 5.58-4.12.35-.04.7.01 1.05.04v4.03c-.63.07-1.27.24-1.84.55-.95.53-1.57 1.48-1.66 2.56-.09 1.15.5 2.3 1.47 2.89.97.59 2.24.59 3.21 0 .97-.59 1.56-1.74 1.47-2.89V0h.01Z" /></svg>
                    </a>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/share/1THZQkQK6q/" title="Facebook" target="_blank" rel="noreferrer"
                      style={{ width: 40, height: 40, borderRadius: '12px', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(24,119,242,0.3)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div style={{ flex: '1 1 500px' }} className="reveal reveal-delay-2">
              <div className="form-container" style={{ padding: '30px' }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nom Complet</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Professionnel</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Sujet</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Objet de votre demande"
                      value={formData.subject}
                      onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Votre Message</label>
                    <textarea
                      className="form-input"
                      style={{ minHeight: '130px', resize: 'vertical' }}
                      placeholder="Comment pouvons-nous vous aider ?"
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Success message */}
                  {status === 'success' && (
                    <div style={{ background: 'rgba(139,90,43,0.08)', border: '1px solid var(--accent-main)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-main)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <div>
                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--accent-main)', fontSize: '0.9rem' }}>Message envoyé avec succès !</p>
                        <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Nous vous répondrons dans les meilleurs délais.</p>
                      </div>
                    </div>
                  )}

                  {/* Error message */}
                  {status === 'error' && (
                    <div style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.72 3h16.92a2 2 0 0 0 1.72-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        </svg>
                      </span>
                      <p style={{ margin: 0, color: '#dc2626', fontSize: '0.85rem', fontWeight: 600 }}>{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-nude"
                    disabled={status === 'loading'}
                    style={{ width: '100%', padding: '16px', fontSize: '0.9rem', border: 'none', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer', transition: 'all 0.3s ease' }}
                  >
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message ↗'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: 'linear-gradient(to bottom, var(--footer-base), var(--footer-dark))', color: '#FFFFFF', padding: '50px 0 20px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', alignItems: 'start' }}>

            {/* Column 1: Brand */}
            <div className="reveal">
              <img
                src="/logo-transparent.png"
                alt="Senoris Logo"
                style={{ height: '70px', marginBottom: '20px', filter: 'brightness(1.3) drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
              />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: 0.9, maxWidth: '300px' }}>
                Experts en transformation digitale et cybersécurité premium au Sénégal.
              </p>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                {[{ href: 'https://linkedin.com/company/senoris', d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { href: 'https://instagram.com/senoris2026', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noreferrer" style={{ color: '#FFFFFF', opacity: 0.8, transition: '0.3s' }}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d={item.d} /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Menu */}
            <div className="reveal">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', color: 'var(--accent-gold)' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1rem' }}>
                <li><a href="#accueil" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Accueil</a></li>
                <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Expertise</a></li>
                <li><a href="#projets" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Réalisations</a></li>
                <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="reveal">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', color: 'var(--accent-gold)' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Dakar, Sénégal</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="mailto:Senoris2026@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Senoris2026@gmail.com</a>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z"></path></svg>
                  <a href="tel:+221774830501" style={{ color: 'inherit', textDecoration: 'none' }}>+221 77 483 05 01</a>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="reveal">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', color: 'var(--accent-gold)' }}>Newsletter</h4>
              <p style={{ fontSize: '1rem', marginBottom: '15px', opacity: 0.8 }}>Inscrivez-vous pour rester informé.</p>
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="email"
                  placeholder="Votre email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{ flex: 1, padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1rem' }}
                  required
                />
                <button type="submit" style={{ padding: '12px 20px', borderRadius: '10px', background: 'var(--accent-gold)', border: 'none', color: '#000', fontWeight: 900, cursor: 'pointer', fontSize: '1rem' }}>
                  Inscrire
                </button>
              </form>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px', opacity: 0.6, fontSize: '0.9rem' }}>
            <span>© 2026 Senoris Group. Dakar, Sénégal.</span>
            <span>Excellence Technologique à Dakar</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
