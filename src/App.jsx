import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mesajınız gönderildi!')
    setFormData({ name: '', email: '', message: '' })
  }

  const projects = [
    {
      title: 'İnşaat Holding Web Sitesi',
      description: 'Modern ve kurumsal bir inşaat holding web sitesi. Proje portföyü, kurumsal bilgiler ve iletişim modülleri.',
      tags: ['React.js', 'Material-UI', 'Node.js'],
      github: '#',
      demo: 'https://www.burakyolmuhendislik.com'
    },
    {
      title: 'Voice Chat Uygulaması',
      description: 'MERN stack ile geliştirilmiş gerçek zamanlı sesli sohbet uygulaması. WebRTC teknolojisi ile anlık iletişim.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: 'https://voice-chat-app.netlify.app'
    },
    {
      title: 'Hastane Randevu Sistemi',
      description: 'Hastaneler için geliştirilmiş mobil randevu yönetim sistemi. Firebase altyapısı ile gerçek zamanlı senkronizasyon.',
      tags: ['Flutter', 'Firebase', 'Dart'],
      github: '#',
      demo: 'https://hastanerandevusistemi.netlify.app'
    },
    {
      title: 'Burger Restaurant Website',
      description: 'Modern tasarıma sahip, responsive restaurant web sitesi. Menü yönetimi ve online sipariş sistemi.',
      tags: ['React', 'CSS', 'JavaScript'],
      github: '#',
      demo: 'https://saracburak.github.io/burgerwebsite/'
    },
    {
      title: 'E-Ticaret Mobil Uygulaması',
      description: 'E-ticaret için geliştirilmiş mobil sipariş sistemi. Kullanıcı dostu arayüz ve güvenli ödeme.',
      tags: ['Flutter', 'Firebase', 'State Management'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Teknogenç Projesi',
      description: 'Gençler için teknoloji platformu. Blog, eğitim içerikleri ve etkinlik yönetimi modülleri.',
      tags: ['React', 'Redux', 'Material-UI'],
      github: '#',
      demo: 'https://teknogencfrontend.netlify.app'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Angular', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Mobile', items: ['Flutter', 'React Native', 'Dart'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'Postman'] }
  ]

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Ana Navigasyon">
        <div className="nav-container">
          <div className="logo" role="img" aria-label="Burak Saraç Logo">BS.</div>
          <ul className="nav-menu" role="menubar">
            <li role="none"><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''} role="menuitem" aria-label="Ana Sayfaya Git">Ana Sayfa</button></li>
            <li role="none"><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''} role="menuitem" aria-label="Hakkımda Bölümüne Git">Hakkımda</button></li>
            <li role="none"><button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''} role="menuitem" aria-label="Yetenekler Bölümüne Git">Yetenekler</button></li>
            <li role="none"><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''} role="menuitem" aria-label="Projeler Bölümüne Git">Projeler</button></li>
            <li role="none"><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''} role="menuitem" aria-label="İletişim Bölümüne Git">İletişim</button></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Merhaba, Ben 👋</span>
            <h1 className="hero-title">
              Muhammed Burak <span className="gradient-text">Saraç</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer & Data Scientist</p>
            <p className="hero-description">
              Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, 
              estetik ve işlevsel dijital çözümler geliştiriyorum.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                Projelerimi Gör
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                İletişime Geç
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/buraksaraç/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:buraksarac_@outlook.com" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tanışalım</span>
            <h2 className="section-title">Hakkımda</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Full-Stack geliştirme ve mobil uygulama geliştirme alanlarında uzmanlaşmış bir yazılım geliştiricisiyim. 
                Frontend'de React, TypeScript, Angular ve Vue.js ile etkileyici kullanıcı arayüzleri oluştururken, 
                backend'de Node.js, Express ve MongoDB ile güçlü API'ler geliştiriyorum. Flutter ile platformlar arası mobil uygulamalar tasarlıyorum.
              </p>
              <p>
                Her projede kullanıcı deneyimini ön planda tutarak, frontend ve backend teknolojilerini harmanlayıp 
                estetik ve işlevsellik açısından güçlü, ölçeklenebilir dijital çözümler sunuyorum. 
                Ayrıca, Data Science & Machine Learning alanında aldığım eğitimle analitik düşünme becerilerimi geliştirdim.
              </p>
              <p>
                Yazılım geliştirme süreçlerinde takım çalışmasına yatkın ve yeniliklere açık bir şekilde ilerliyorum. 
                Sürekli öğrenmeye ve kendimi geliştirmeye önem vererek, kariyerimi Full-Stack Developer olarak şekillendiriyorum.
              </p>
              <a href="/cv.pdf" className="btn btn-primary" download>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                CV İndir
              </a>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Tamamlanmış Proje</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Yıl Deneyim</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Teknoloji</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Neler Yapabilirim</span>
            <h2 className="section-title">Yeteneklerim</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Çalışmalarım</span>
            <h2 className="section-title">Projelerim</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link project-link-primary" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Bana Ulaşın</span>
            <h2 className="section-title">İletişim</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Birlikte Çalışalım</h3>
              <p>Bir projeniz mi var? Hemen iletişime geçin ve projelerinizi hayata geçirelim!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>buraksarac_@outlook.com</span>
                </div>
                
                <div className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mesajınızı buraya yazın..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Muhammed Burak Saraç. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
