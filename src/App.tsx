import { useEffect, useState } from 'react'

const scrollToNextSection = () => {
  const sections = ['about', 'parcours', 'skills', 'contact']
  // Scroll vers la section suivante
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top > 0) {
        el.scrollIntoView({ behavior: 'smooth' })
        break
      }
    }
  }
}

function App() {
  const [typedText, setTypedText] = useState('')
  const [activeSection, setActiveSection] = useState('')
  const fullText = 'Développeur Fullstack'

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'parcours', 'skills', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            Clément<span>Subtil</span>
          </a>
          <div className="nav-links">
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>À propos</a>
            <a href="#parcours" className={activeSection === 'parcours' ? 'active' : ''}>Parcours</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-center">
            <img src="/profile.jpg" alt="Clément Subtil" className="hero-photo" />
            <h1>
              Clément <span>Subtil</span>
            </h1>
            <p className="hero-tagline">{typedText || '...'}</p>
            <div className="hero-cta">
              <a href="#parcours" className="btn btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn btn-secondary">
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">À propos</h2>
          <div className="about-grid">
            <div className="card">
              <h3>🎓 Formation</h3>
              <p>
                Bachelor RP (Responsable de Projet Informatique) - <strong>2ème année</strong> à{' '}
                <strong>ISITECH Lyon</strong>. Alternance en cours, prêt à relever de nouveaux défis
                techniques.
              </p>
            </div>
            <div className="card">
              <h3>💼 Expérience</h3>
              <p>
                En alternance chez <strong>Kodo Tech</strong>, entreprise spécialisée dans
                l'outillage pour architectures distribuées. Je travaille sur <strong>Cortex</strong>,
                leur produit phare.
              </p>
            </div>
            <div className="card">
              <h3>⚡ Approche</h3>
              <p>
                Développement orienté résultats, code propre et maintenable. Fan d'automatisation et
                d'architecture moderne. Toujours prêt à apprendre et tester de nouvelles technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="section" id="parcours">
        <div className="container">
          <h2 className="section-title">Parcours</h2>
          <div className="parcours-grid">
            {/* Experience */}
            <div className="parcours-card">
              <div className="parcours-header">
                <h3>Kodo Tech — Cortex</h3>
                <span>Alternance</span>
              </div>
              <p>
                <strong>Cortex</strong> est une plateforme pour <em>construire, exécuter et déployer des systèmes distribués</em>{' '}
                sans la complexité opérationnelle.
              </p>
              <ul style={{ color: '#a0a0a0', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Modélisation centralisée des services et environnements</li>
                <li>Exécution locale (docker-compose)</li>
                <li>Génération auto CI/CD et manifests</li>
                <li>Déploiement sur AKS, GKE, EKS</li>
              </ul>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Vite</span>
                <span className="tag">Docker</span>
              </div>
              <a
                href="https://www.cortex.kodo-tech.com/fr"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{ marginTop: '1rem', display: 'inline-block' }}
              >
                Voir la landing page →
              </a>
            </div>

            {/* Projects */}
            <div className="parcours-card">
              <h3>🔥 Têtes Brûlées</h3>
              <p>
                <strong>Site web du club de Speedriding</strong> à Valfréjus. Gestion des membres avec validation FFVL, événements, calendrier de présence et covoiturage.
              </p>
              <ul style={{ color: '#a0a0a0', marginBottom: '1rem', paddingLeft: '1.5rem', fontSize: '0.875rem' }}>
                <li>Authentification sécurisée (NextAuth)</li>
                <li>CI/CD automatique sur Vercel</li>
                <li>Base de données PostgreSQL</li>
              </ul>
              <div className="tags" style={{ marginBottom: '1rem' }}>
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">TailwindCSS</span>
                <span className="tag">Prisma</span>
                <span className="tag">PostgreSQL</span>
              </div>
              <a
                href="https://tetes-brulees.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir le projet →
              </a>
            </div>

            <div className="parcours-card">
              <h3>🛠️ Portfolio</h3>
              <p>
                Ce portfolio ! Développé from scratch en React + TypeScript.
              </p>
              <div className="tags" style={{ marginBottom: '1rem' }}>
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Vite</span>
                <span className="tag">Vercel</span>
              </div>
              <a
                href="https://github.com/ClementSubtil/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir le repo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-icon">⚛️</span>
              <span className="skill-name">React / TypeScript</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">☕</span>
              <span className="skill-name">Java</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🐳</span>
              <span className="skill-name">Docker</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🔧</span>
              <span className="skill-name">Git / GitHub</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🔌</span>
              <span className="skill-name">n8n (Automation)</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🦊</span>
              <span className="skill-name">OpenClaw</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🗄️</span>
              <span className="skill-name">PostgreSQL</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">☁️</span>
              <span className="skill-name">Cloud (AWS/GCP)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact">
            <h2>Me contacter</h2>
            <p>
              Tu cherches un développeur motivé, curieux et prêt à bosser sur des projets
              intéressants ? Parlons-en !
            </p>
            <div className="contact-links">
              <a
                href="https://github.com/clementsbt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-subtil-45690125b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="tel:+33769865441"
                className="btn btn-secondary"
              >
                📞 07 69 86 54 41
              </a>
              <a
                href="mailto:clementsubtil@icloud.com"
                className="btn btn-secondary"
              >
                ✉️ clementsubtil@icloud.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Clément Subtil</p>
        </div>
      </footer>

      <button 
        onClick={scrollToNextSection} 
        className="scroll-btn" 
        aria-label="Passer à la section suivante"
        style={{ display: activeSection === 'contact' ? 'none' : 'flex' }}
      >
        ↓
      </button>
    </div>
  )
}

export default App