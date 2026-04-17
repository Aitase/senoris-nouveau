'use client';

import React from 'react';

export default function Home() {
  const techs = [
    "Next.js", "Python", "React Native", "PostgreSQL",
    "Docker", "AWS", "Kali Linux", "TypeScript"
  ];

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
            <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '2px', color: 'var(--nude-light)' }}>
              SENORIS<span style={{ color: 'var(--bordeaux-light)' }}>.</span>
            </div>
            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display: 'flex', gap: '40px', alignItems: 'center', fontWeight: '600' }}>
              <a href="#about" style={{ color: 'var(--nude-base)', textDecoration: 'none' }}>Mission</a>
              <a href="#services" style={{ color: 'var(--nude-base)', textDecoration: 'none' }}>Expertise</a>
              <a href="#projets" style={{ color: 'var(--nude-base)', textDecoration: 'none' }}>Réalisations</a>
              <a href="#contact" className="btn btn-nude" style={{ padding: '10px 28px', fontSize: '1rem' }}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="container" style={{ paddingTop: '100px', paddingBottom: '150px', display: 'flex', alignItems: 'center', gap: '5%', flexWrap: 'wrap' }}>

          <div style={{ flex: '1 1 500px', minWidth: '300px' }} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '8px 20px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(245, 234, 225, 0.2)', borderRadius: '100px', marginBottom: '40px' }}>
              <span style={{ color: 'var(--nude-base)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>✦ Agence Tech Premium au Sénégal</span>
            </div>

            <h1 className="hero-title">
              Excellence <br />
              <span className="text-gradient">Technologique</span> & <br />
              <span style={{ color: 'var(--bordeaux-light)' }}>Cybersécurité.</span>
            </h1>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '50px', opacity: 0.9, maxWidth: '600px' }}>
              Nous combinons le développement sur-mesure d'applications web & mobiles avec des audits de cybersécurité offensifs pour les entreprises ambitieuses.
            </p>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'inherit' }}>
              <a href="#services" className="btn btn-nude">Découvrir l'Expertise</a>
              <a href="#contact" style={{ color: 'var(--nude-base)', fontWeight: 'bold', borderBottom: '2px solid var(--bordeaux-light)', paddingBottom: '4px', textDecoration: 'none' }}>Démarrer un projet ↗</a>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', position: 'relative', marginTop: '50px' }} className="reveal reveal-delay-1">
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 234, 225, 0.2), rgba(245, 234, 225, 0.05))',
              backdropFilter: 'blur(30px)',
              borderRadius: '40px',
              border: '1px solid rgba(245, 234, 225, 0.3)',
              padding: '30px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '30px' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '20px' }}>Security Status : <span style={{ color: '#27c93f' }}>Active</span></h3>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--nude-base)' }}></div>
              </div>
              <p style={{ fontSize: '0.8rem', opacity: 0.7, fontFamily: 'monospace' }}>Scanning core systems... No threats found.</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" style={{ background: 'var(--nude-base)', paddingBottom: '120px' }}>
        <div className="container">
          <div className="service-grid">

            <div className="glass-card-nude reveal">
              <div className="number-watermark">01</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--bordeaux-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--nude-base)" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--bordeaux-dark)', fontWeight: 800 }}>Plateforme Web & CV</h3>
              <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.6' }}>
                Créez des CV professionnels en quelques minutes avec notre plateforme dédiée, profitez de sites vitrines élégants.
              </p>
            </div>

            <div className="glass-card-nude reveal reveal-delay-1" style={{ background: 'var(--bordeaux-base)', color: 'var(--nude-light)', border: 'none' }}>
              <div className="number-watermark" style={{ color: 'rgba(255,255,255,0.05)' }}>02</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--nude-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--bordeaux-dark)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', fontWeight: 800 }}>Cybersécurité & Audit</h3>
              <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>
                Audit complet, pentesting et accompagnement à la conformité pour renforcer la résilience de votre organisation.
              </p>
            </div>

            <div className="glass-card-nude reveal reveal-delay-2">
              <div className="number-watermark">03</div>
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--bordeaux-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--nude-base)" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--bordeaux-dark)', fontWeight: 800 }}>Applications Mobiles</h3>
              <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.6' }}>
                Conception et développement d'applications mobiles iOS & Android intuitives et extrêmement rapides.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- RECENT PROJECTS SECTION --- */}
      <section id="projets" className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '30px' }}>
            <div className="reveal">
              <h4 style={{ fontSize: '0.9rem', color: 'var(--bordeaux-base)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Portfolio Premium</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--bordeaux-dark)' }}>Nos Réalisations.</h2>
            </div>
            <p className="reveal reveal-delay-1" style={{ maxWidth: '450px', fontSize: '1rem', opacity: 0.7, lineHeight: 1.6 }}>
              Découvrez comment nous aidons nos clients à transformer leurs idées en solutions numériques impactantes.
            </p>
          </div>

          <div className="reveal">
            <div style={{
              background: 'var(--nude-light)',
              borderRadius: '32px',
              overflow: 'hidden',
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid var(--nude-dark)',
              transition: 'transform 0.4s ease'
            }}>
              <div style={{ flex: '1 1 450px', padding: '40px' }}>
                <div style={{ color: 'var(--bordeaux-base)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '16px' }}>Produit Interne (SaaS)</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--bordeaux-dark)', marginBottom: '20px' }}>Senoris CV Generator</h3>
                <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.8, marginBottom: '32px' }}>
                  Une plateforme intelligente permettant aux professionnels sénégalais de créer des CV optimisés aux standards internationaux.
                </p>
                <a href="https://cv.senoris.net/" target="_blank" className="btn" style={{ background: 'var(--bordeaux-dark)', color: '#FFF', border: 'none' }}>
                  Visiter le site ↗
                </a>
              </div>
              <div style={{ flex: '1 1 300px', background: 'var(--bordeaux-dark)', position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '20%',
                  right: '-20%',
                  bottom: '-20%',
                  background: 'var(--nude-base)',
                  borderRadius: '20px 0 0 0',
                  boxShadow: '-20px -20px 50px rgba(0,0,0,0.3)',
                  padding: '20px'
                }}>
                  <div style={{ width: '40px', height: '8px', background: 'var(--bordeaux-base)', borderRadius: '10px', marginBottom: '20px' }}></div>
                  <div style={{ height: '30px', width: '200px', background: 'var(--nude-dark)', borderRadius: '4px', marginBottom: '15px' }}></div>
                  <div style={{ height: '150px', width: '100%', background: 'var(--nude-light)', borderRadius: '4px', border: '1px solid var(--nude-dark)' }}></div>
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
            <div key={i} className="ticker-item">
              <span>✦</span> {tech}
            </div>
          ))}
        </div>
      </div>

      {/* --- ABOUT / MISSION --- */}
      <section id="about" className="section-padding" style={{ background: 'var(--nude-light)', paddingTop: '100px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="reveal" style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--bordeaux-base)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>SENORIS, votre allié technologique</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.1, color: 'var(--bordeaux-dark)', marginBottom: '30px' }}>
                Passionnés par l'innovation et la cybersécurité.
              </h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                Basée au Sénégal, SENORIS accompagne les entreprises dans la conception, la sécurisation et la mise à l'échelle de leurs solutions digitales.
              </p>
            </div>
            <div className="reveal reveal-delay-1" style={{ flex: '1 1 450px' }}>
              <div style={{ background: '#FFF', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--bordeaux-base)', marginBottom: '12px', fontWeight: 700 }}>Notre Mission</h4>
                <p style={{ marginBottom: '24px', opacity: 0.8, fontSize: '0.95rem' }}>Offrir des services technologiques premium avec une exigence constante de qualité.</p>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--bordeaux-base)', marginBottom: '12px', fontWeight: 700 }}>Notre Vision</h4>
                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Construire un écosystème numérique plus sûr en Afrique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFINED CONTACT SECTION SIDE-BY-SIDE --- */}
      <section id="contact" className="section-padding" style={{ background: 'var(--nude-base)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--bordeaux-base)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Contactez-nous aujourd'hui</h4>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--bordeaux-dark)', fontWeight: 900 }}>Démarrons votre projet.</h2>
          </div>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

            {/* Left Side: Contact Info Blocks */}
            <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="reveal glass-card-nude" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', transform: 'none' }}>
                <div style={{ fontSize: '1.8rem' }}>📍</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--bordeaux-dark)', margin: '0 0 4px 0' }}>Coordonnées</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.85rem', margin: 0 }}>Dakar, Sénégal. HLM Grand Médine.</p>
                </div>
              </div>

              <div className="reveal reveal-delay-1 glass-card-nude" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', transform: 'none' }}>
                <div style={{ fontSize: '1.8rem' }}>✉️</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--bordeaux-dark)', margin: '0 0 4px 0' }}>Mail Direct</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.85rem', margin: '0 0 8px 0' }}>Senoris2026@gmail.com</p>
                  <a href="mailto:Senoris2026@gmail.com" style={{ color: 'var(--bordeaux-base)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem' }}>Nous écrire ↗</a>
                </div>
              </div>

              <div className="reveal reveal-delay-2 glass-card-nude" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', transform: 'none' }}>
                <div style={{ fontSize: '1.8rem' }}>🌐</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--bordeaux-dark)', margin: '0 0 12px 0' }}>Réseaux Sociaux</h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/221774830501" className="social-link" style={{ width: 36, height: 36 }} title="WhatsApp">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==" className="social-link" style={{ width: 36, height: 36 }} title="Instagram">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/senoris" className="social-link" style={{ width: 36, height: 36 }} title="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://www.tiktok.com/@senoris2026" className="social-link" style={{ width: 36, height: 36 }} title="TikTok">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28.01 4.38-.02 8.76.01 13.14-.03 1.1-.24 2.23-.74 3.24-1.01 2.15-3.19 3.65-5.54 3.89-2.58.27-5.23-.77-6.84-2.83-1.61-2.07-2-4.9-1.01-7.27.95-2.27 3.12-3.87 5.58-4.12.35-.04.7.01 1.05.04v4.03c-.63.07-1.27.24-1.84.55-.95.53-1.57 1.48-1.66 2.56-.09 1.15.5 2.3 1.47 2.89.97.59 2.24.59 3.21 0 .97-.59 1.56-1.74 1.47-2.89V0h.01Z" /></svg>
                    </a>
                    <a href="https://www.facebook.com/share/1THZQkQK6q/" className="social-link" style={{ width: 36, height: 36 }} title="Facebook">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div style={{ flex: '1 1 500px' }} className="reveal reveal-delay-2">
              <div className="form-container" style={{ padding: '30px' }}>
                <form>
                  <div className="form-group">
                    <label className="form-label">Nom Complet</label>
                    <input type="text" className="form-input" placeholder="Votre nom" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Professionnel</label>
                    <input type="email" className="form-input" placeholder="votre@email.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Votre Message</label>
                    <textarea className="form-input" style={{ minHeight: '130px', resize: 'vertical' }} placeholder="Comment pouvons-nous vous aider ?"></textarea>
                  </div>

                  <button type="submit" className="btn btn-nude" style={{ width: '100%', background: 'var(--bordeaux-dark)', color: '#FFF', padding: '16px', fontSize: '0.9rem', border: 'none' }}>
                    Envoyer le message ↗
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ background: 'var(--bordeaux-dark)', color: 'var(--nude-light)', padding: '60px 0 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>

            <div className="reveal">
              <div style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '20px' }}>
                SENORIS<span style={{ color: 'var(--bordeaux-light)' }}>.</span>
              </div>
              <p style={{ opacity: 0.6, fontSize: '0.8rem', lineHeight: '1.8' }}>
                Spécialistes de la transformation digitale et de la cybersécurité avancée au Sénégal.
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '20px' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li><a href="#accueil" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>Accueil</a></li>
                <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>Mission</a></li>
                <li><a href="#projets" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>Réalisations</a></li>
              </ul>
            </div>

            <div className="reveal reveal-delay-2">
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '20px' }}>Réseaux</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li><a href="https://www.linkedin.com/company/senoris" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>LinkedIn ↗</a></li>
                <li><a href="https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>Instagram ↗</a></li>
                <li><a href="https://www.tiktok.com/@senoris2026" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>TikTok ↗</a></li>
                <li><a href="https://www.facebook.com/share/1THZQkQK6q/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>Facebook ↗</a></li>
              </ul>
            </div>

          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', opacity: 0.4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', fontSize: '0.8rem' }}>
            <div>© 2026 Senoris Group. Dakar, Sénégal.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
