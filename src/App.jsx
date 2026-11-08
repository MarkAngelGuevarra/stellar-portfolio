import { useState, useEffect, useRef, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './App.css';
import { skillsData } from './data/skills.jsx';
import { projectsData } from './data/projects.js';
import { certData } from './data/certs.js';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Only animate once
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

// Magnetic Button Hook
function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate pull based on distance
      const distance = Math.sqrt(x*x + y*y);
      if (distance < 100) {
        element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      } else {
        element.style.transform = `translate(0px, 0px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (element) element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}

function App() {
  const [activeCert, setActiveCert] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = (id) => {
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };
  
  // Custom Cursor logic
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const magBtn1 = useMagnetic();
  const magBtn2 = useMagnetic();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('.clickable-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Escape key handler to close any active modal or mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeCert) closeCertModal();
        if (activeSkill) closeSkillModal();
        if (activeProject) closeProjectModal();
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert, activeSkill, activeProject]);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending secure message...');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/marcangelguevarra@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormStatus("Message securely sent! I'll get back to you shortly.");
        e.target.reset();
      } else {
        setFormStatus('Error sending message. Please try again.');
      }
    } catch {
      setFormStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCertModal = (cert) => {
    setActiveCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertModal = () => {
    setActiveCert(null);
    document.body.style.overflow = 'unset';
  };

  const openProjectModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  const openSkillModal = (skill) => {
    setActiveSkill(skill);
    document.body.style.overflow = 'hidden';
  };

  const closeSkillModal = () => {
    setActiveSkill(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`} 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      <nav className="navbar glass-panel">
        <div className="nav-content container">
          <h2 className="logo">Mark.</h2>
          
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#timeline">Journey</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-dropdown animate-fade-in">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)}>Journey</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <main className="container">
        
        <FadeInSection>
          <section id="hero" className="hero-section">
            <Particles 
              id="tsparticles" 
              init={particlesInit} 
              options={{
                fullScreen: { enable: false, zIndex: -1 },
                background: { color: "transparent" },
                particles: {
                  number: { value: 40, density: { enable: true, value_area: 800 } },
                  color: { value: ["#c084fc", "#00f0ff"] },
                  links: { enable: true, color: "#ffffff", opacity: 0.1, distance: 150 },
                  move: { enable: true, speed: 1 },
                  size: { value: { min: 1, max: 3 } },
                  opacity: { value: 0.3 }
                },
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: "grab" },
                  },
                  modes: { grab: { distance: 140, links: { opacity: 0.5 } } }
                }
              }}
              className="particles-canvas"
            />
            
            <img src="/profile.jpg" alt="Mark Angel Guevarra" className="profile-pic" />
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-cyan">Mark Angel</span>.<br/>
              I build <span className="highlight-purple">Secure & Automated</span> Systems.
            </h1>
            
            <div className="hero-subtitle type-wrap">
              <TypeAnimation
                sequence={[
                  '> Founder & Lead Web3 Architect @ GigPay (Stellar Instawards)_',
                  1500,
                  '> IT Operations & Security Intern @ Telework PH_',
                  1500,
                  '> Cybersecurity & Threat Analyst_',
                  1500,
                  '> Qualys & Fortinet Certified Specialist_',
                  1500,
                  '> Cisco & AWS Certified Professional_',
                  1500,
                ]}
                wrapper="span"
                speed={75}
                repeat={Infinity}
                style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}
              />
            </div>
            
            <div className="hero-cta">
              <div ref={magBtn1} style={{transition: 'transform 0.1s ease-out'}}>
                <a href="#certifications" className="btn-primary">View Credentials</a>
              </div>
              <div ref={magBtn2} style={{transition: 'transform 0.1s ease-out'}}>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary resume-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="about" className="about-section">
            <div className="about-content glass-panel">
              <h2 className="section-title">About Me</h2>
              <p>
                Welcome! I'm <strong>Mark Angel Guevarra</strong>, a passionate Information Technology professional specializing in Cybersecurity, Network Administration, Vulnerability Management, and IT Automation. With a strong foundation in building secure, scalable systems, I thrive at the intersection of enterprise infrastructure and technical innovation.
              </p>
              <p>
                I hold a Bachelor of Science in Information Technology and am driven by continuous learning—having earned 22 industry-recognized certifications from global tech leaders like <strong>Qualys, Fortinet, Google, Cisco, AWS, and Microsoft</strong>. Currently contributing as an <strong>IT Operations & Security Intern at Telework PH</strong>, I actively apply my skills across enterprise hardware, Slack-driven helpdesk triage, vulnerability remediation, and network defense to create resilient digital environments.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="timeline" className="timeline-section">
            <h2 className="section-title">Professional Journey</h2>
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>IT Operations & Security Intern</h3>
                  <span className="timeline-date">Telework PH • Aug 2026 – Present</span>
                  <p>Supporting enterprise IT operations, hardware diagnostics, desktop provisioning, Slack helpdesk triage, and network troubleshooting in a fast-paced BPO environment.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>Cybersecurity Analyst</h3>
                  <span className="timeline-date">Recent Focus</span>
                  <p>Specializing in vulnerability management (Qualys VMDR), threat mitigation, TruRisk scoring, and deploying robust IAM protocols to defend enterprise architectures.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>Network Administrator</h3>
                  <span className="timeline-date">Applied Experience</span>
                  <p>Managing Cisco network topologies, configuring firewalls, and ensuring high-availability connections across diverse infrastructures.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>BS Information Technology</h3>
                  <span className="timeline-date">Educational Foundation</span>
                  <p>Developed a rigorous foundation in software engineering, database management, network security, and systems administration at Baliuag University.</p>
                </div>
              </div>

            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="skills" className="skills-section">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle" style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem'}}>Click on any domain to view my specific capabilities.</p>
            <div className="skills-grid">
              {skillsData.map((skill) => (
                <div key={skill.id} className="skill-card glass-panel clickable-card" onClick={() => openSkillModal(skill)}>
                  <div className="skill-icon-container">
                    <skill.Icon />
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.shortDesc}</p>
                  <div className="cert-overlay">
                    <span>View Expertise</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projectsData.map((project) => (
                <div key={project.id} className="project-card glass-panel clickable-card" onClick={() => openProjectModal(project)}>
                  <div className="project-header">
                    <span className="project-icon">{project.icon}</span>
                    <span className="project-category">{project.category}</span>
                    {project.demo && (
                      <span style={{ marginLeft: 'auto', background: 'rgba(0, 242, 254, 0.15)', color: '#00f2fe', border: '1px solid rgba(0, 242, 254, 0.4)', borderRadius: '999px', padding: '0.15rem 0.55rem', fontSize: '0.72rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00f2fe', display: 'inline-block' }}></span>
                        Live dApp
                      </span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech-list">
                    {project.tech.map((t, index) => (
                      <span key={index} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="cert-overlay">
                    <span>View Project Details</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="certifications" className="certs-section">
            <h2 className="section-title">Featured Certifications</h2>
            <p className="section-subtitle" style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem'}}>Click on any certification to view authenticity details.</p>
            <div className="certs-grid">
              
              {certData.map((cert) => (
                <div key={cert.id} className="cert-card glass-panel clickable-card" onClick={() => openCertModal(cert)}>
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <div className="cert-header">
                    <h3>{cert.title}</h3>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <div className="cert-overlay">
                    <span>View Verification</span>
                  </div>
                </div>
              ))}

            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
              <div className="contact-info glass-panel">
                <h3>Let's Secure the Future</h3>
                <p>Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!</p>
                <div className="contact-details">
                  <a href="mailto:marcangelguevarra@gmail.com" className="contact-link clickable-card">
                    📧 marcangelguevarra@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/markangelguevarra" target="_blank" rel="noreferrer" className="contact-link clickable-card">
                    💼 LinkedIn Profile
                  </a>
                  <a href="https://github.com/MarkAngelGuevarra" target="_blank" rel="noreferrer" className="contact-link clickable-card">
                    🐙 GitHub Repositories
                  </a>
                </div>
              </div>
              
              <form className="contact-form glass-panel" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Hello Mark..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-primary form-submit clickable-card" 
                  style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
                {formStatus && <p style={{color: 'var(--accent-cyan)', marginTop: '1rem', fontWeight: '600'}}>{formStatus}</p>}
              </form>
            </div>
          </section>
        </FadeInSection>

      </main>
      
      <footer className="footer glass-panel" style={{marginTop: '0'}}>
        <div className="container footer-content">
          <p className="copyright">© 2026 Mark Angel Guevarra. Designed for Stellar.</p>
        </div>
      </footer>

      {/* Certification Modal */}
      {activeCert && (
        <div className="modal-backdrop" onClick={closeCertModal} role="dialog" aria-modal="true" aria-label={activeCert.title}>
          <div className="modal-content modal-large glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeCertModal}>✕</button>
            
            {/* Framed Certificate Preview */}
            <a 
              href={activeCert.modalImage || activeCert.image} 
              target="_blank" 
              rel="noreferrer" 
              title="Click to expand high-resolution certificate"
              className="cert-showcase-frame clickable-card"
            >
              <img 
                src={activeCert.modalImage || activeCert.image} 
                alt={activeCert.title} 
                className="cert-showcase-img" 
              />
              <span className="cert-zoom-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                Click to Expand Full Credential
              </span>
            </a>
            
            {/* Header and Badges */}
            <div className="modal-project-header">
              <h2 className="modal-title" style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{activeCert.title}</h2>
              <div className="modal-meta-row">
                <span className="cert-issuer modal-issuer">{activeCert.issuer}</span>
                <span className="cert-status-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Verified & Active Credential
                </span>
                {activeCert.issueDate && (
                  <span className="modal-date-badge">📅 {activeCert.issueDate}</span>
                )}
                <span className={`difficulty-badge ${activeCert.difficulty.toLowerCase()}`}>
                  {activeCert.difficulty} Level
                </span>
              </div>
            </div>

            {/* Overview Section */}
            <div className="project-modal-section-title">
              <span>📜</span> Credential Overview
            </div>
            <p className="cert-overview-box">{activeCert.description}</p>

            {/* Skills & Competencies */}
            {activeCert.skills && activeCert.skills.length > 0 && (
              <>
                <div className="project-modal-section-title">
                  <span>🎯</span> Core Competencies Validated
                </div>
                <div className="cert-competencies-wrap">
                  {activeCert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-competency-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Acquisition Rigor */}
            <div className="cert-rigor-card">
              <div className="cert-rigor-header">
                <h4>
                  <span>⚡</span> Curriculum Rigor & Examination Criteria
                </h4>
              </div>
              <p className="cert-rigor-text">{activeCert.effort}</p>
            </div>

            {/* Verification Box */}
            <div className="cert-verification-card">
              <div className="cert-verification-top">
                <div className="credential-label-wrap">
                  <span className="credential-label">Official Credential ID</span>
                  <span className="credential-id-val">{activeCert.badgeId}</span>
                </div>
                <button 
                  className="copy-id-btn clickable-card"
                  onClick={() => handleCopyId(activeCert.badgeId)}
                >
                  {copiedId ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Copy ID
                    </>
                  )}
                </button>
              </div>

              {activeCert.verifyUrl && activeCert.verifyUrl !== '#' && (
                <a 
                  href={activeCert.verifyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary cert-verify-action-btn clickable-card"
                >
                  Verify on Official Registry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>

            <div className="project-modal-footer">
              <button className="btn-secondary clickable-card" onClick={closeCertModal}>
                Close Credential
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Skill Modal */}
      {activeSkill && (
        <div className="modal-backdrop" onClick={closeSkillModal} role="dialog" aria-modal="true" aria-label={activeSkill.title}>
          <div className="modal-content glass-panel skill-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeSkillModal}>✕</button>
            
            <div className="modal-skill-icon-wrap">
               <activeSkill.Icon />
            </div>

            <div className="modal-header">
              <h2 className="modal-title" style={{color: 'var(--accent-cyan)'}}>{activeSkill.title}</h2>
            </div>
            
            <div className="skill-focus-box">
              <h3>Core Focus</h3>
              <p>{activeSkill.focus}</p>
            </div>

            <div className="skill-details">
              <h3>Technical Execution</h3>
              <p>{activeSkill.details}</p>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {activeProject && (
        <div className="modal-backdrop" onClick={closeProjectModal} role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <div className="modal-content modal-large glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeProjectModal}>✕</button>
            
            <div className="modal-project-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}>{activeProject.icon}</span>
                <h2 className="modal-title">{activeProject.title}</h2>
              </div>
              <div className="modal-meta-row">
                <span className="cert-issuer modal-issuer">{activeProject.category}</span>
                {activeProject.role && (
                  <span className="modal-role-badge">👤 {activeProject.role}</span>
                )}
                {activeProject.date && (
                  <span className="modal-date-badge">📅 {activeProject.date}</span>
                )}
              </div>
            </div>

            <div className="project-modal-section-title">
              <span>📋</span> Executive Summary
            </div>
            <p className="project-modal-overview">{activeProject.description}</p>
            
            {activeProject.highlights && activeProject.highlights.length > 0 && (
              <>
                <div className="project-modal-section-title">
                  <span>⚡</span> Key Technical Highlights
                </div>
                <div className="project-highlights-box">
                  <ul className="project-highlights-list">
                    {activeProject.highlights.map((item, idx) => (
                      <li key={idx}>
                        <span className="highlight-bullet">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="project-modal-section-title">
              <span>🛠️</span> Technologies & Competencies
            </div>
            <div className="project-tech-list" style={{ marginBottom: '1.75rem' }}>
              {activeProject.tech.map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ background: 'rgba(34, 211, 238, 0.1)', color: 'var(--text-primary)', borderColor: 'rgba(34, 211, 238, 0.25)', fontWeight: '600' }}>
                  {t}
                </span>
              ))}
            </div>

            {activeProject.gallery && activeProject.gallery.length > 0 && (
              <>
                <div className="project-modal-section-title">
                  <span>📸</span> Photographic Evidence & Field Documentation
                </div>
                <div className="project-gallery-container">
                  {activeProject.gallery.map((item, idx) => (
                    <div key={idx} className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img 
                          src={item.src} 
                          alt={item.title} 
                          className="gallery-img" 
                        />
                        {item.tag && <span className="gallery-badge">{item.tag}</span>}
                      </div>
                      <div className="gallery-info">
                        <h4 className="gallery-title">{item.title}</h4>
                        <p className="gallery-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="project-modal-footer">
              {activeProject.demo && (
                <a 
                  href={activeProject.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary clickable-card" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', color: '#090d16', fontWeight: 'bold' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live dApp / Website
                </a>
              )}
              {activeProject.github && (
                <a 
                  href={activeProject.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={activeProject.demo ? "btn-secondary clickable-card" : "btn-primary clickable-card"} 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub Repository
                </a>
              )}
              <button className="btn-secondary clickable-card" onClick={closeProjectModal}>
                Close Overview
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default App;
