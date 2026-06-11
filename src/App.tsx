import { useEffect, useState } from 'react'

function App() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Développeur Fullstack'

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
            <a href="#about">À propos</a>
            <a href="#experience">Expérience</a>
            <a href="#projets">Projets</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <img src="/profile.jpg" alt="Clément Subtil" className="hero-photo" />
          <h1>
            Clément <span>Subtil</span>
          </h1>
          <p className="hero-tagline">{typedText || '...'}</p>
          <div className="hero-cta">
            <a href="#projets" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-secondary">
              Me contacter
            </a>
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

      {/* Experience - Kodo Tech / Cortex */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="section-title">Expérience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Kodo Tech — Cortex</h3>
              <span>Alternance</span>
            </div>
            <p>
              <strong>Cortex</strong> est une plateforme qui permet de <em>construire, exécuter et déployer des systèmes distribués</em>{' '}
              sans la complexité opérationnelle habituelle. Elle offre :
            </p>
            <ul style={{ color: '#a0a0a0', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li>Modélisationcentralisée des services, dépendances et environnements</li>
              <li>Exécution complète du système en local (docker-compose)</li>
              <li>Génération automatique de la documentation, CI/CD et manifests de déploiement</li>
              <li>Déploiement sur AKS, GKE, EKS et DOKS</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Ma contribution :</strong> Développement de la landing page officielle en React.
             <a
                href="https://www.cortex.kodo-tech.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#22c55e', marginLeft: '0.5rem' }}
              >
                Voir le site →
              </a>
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Vite</span>
              <span className="tag">Docker</span>
              <span className="tag">GitHub Actions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projets">
        <div className="container">
          <h2 className="section-title">Projets</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>🔥 Têtes Brûlées</h3>
              <p>
                Projet personnel autour de <strong>l'actualité brôle-gueule</strong> et l'humour noir
                français. Interface moderne avec gestion de contenu dynamique.
              </p>
              <div className="tags" style={{ marginBottom: '1rem' }}>
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Vercel</span>
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
            <div className="project-card">
              <h3>🛠️ Portfolio</h3>
              <p>
                Ce portfolio ! Développé from scratch en React + TypeScript, déployé sur Vercel.
                Code source disponible sur GitHub.
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
                href="https://github.com/ClementSubtil"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-subtil/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Clément Subtil — Fait avec ⚛️ et beaucoup de café</p>
        </div>
      </footer>
    </div>
  )
}

export default App