import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const layouts = {
  public: {
    navigation: [
      { label: 'Accueil', to: '/' },
      { label: 'Catalogue', to: '/catalogue' },
      { label: 'Connexion', to: '/connexion' },
      { label: 'Inscription', to: '/inscription' },
    ],
    footerText: 'Plateforme de formation en ligne, parcours modulaires et suivi des apprentissages.',
    footerLabel: 'Maquette statique · API non connectée',
  },
  learner: {
    navigation: [
      { label: 'Tableau de bord', to: '/apprenant/tableau-de-bord' },
      { label: 'Catalogue', to: '/apprenant/catalogue' },
      { label: 'Mes cours', to: '/apprenant/mes-cours' },
      { label: 'Apprentissage', to: '/apprenant/apprentissage' },
      { label: 'Profil & sécurité', to: '/apprenant/profil' },
    ],
    footerText: 'Espace apprenant · Formations suivies et progression des apprentissages.',
    footerLabel: 'Espace apprenant',
  },
  teacher: {
    navigation: [
      { label: 'Tableau de bord', to: '/enseignant/tableau-de-bord' },
      { label: 'Catalogue', to: '/enseignant/catalogue' },
      { label: 'Mes formations', to: '/enseignant/cours-crees' },
      { label: 'Studio', to: '/enseignant/studio' },
      { label: 'Inscriptions', to: '/enseignant/inscriptions' },
      { label: 'Profil & sécurité', to: '/enseignant/profil' },
    ],
    footerText: 'Espace formateur · Création de formations et suivi des inscriptions.',
    footerLabel: 'Espace formateur',
  },
  administrator: {
    navigation: [
      { label: 'Tableau de bord', to: '/admin/tableau-de-bord' },
      { label: 'Utilisateurs', to: '/admin/utilisateurs' },
      { label: 'Formations', to: '/admin/cours' },
      { label: 'Rôles & accès', to: '/admin/roles-acces' },
      { label: 'Sécurité & événements', to: '/admin/securite' },
      { label: 'Profil & sécurité', to: '/admin/profil' },
    ],
    footerText: 'Espace administration · Gestion des utilisateurs, formations et sécurité.',
    footerLabel: 'Espace administrateur',
  },
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('linecourse-theme')
    return savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', theme === 'dark')
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    window.localStorage.setItem('linecourse-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'}
      title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {theme === 'dark' ? (
          <circle cx="12" cy="12" r="4" />
        ) : (
          <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
        )}
      </svg>
    </button>
  )
}

function SiteHeader({ layout }) {
  const { pathname } = useLocation()
  const isPublic = layout === layouts.public
  const visibleNavigation = isPublic ? layout.navigation.slice(0, 3) : layout.navigation

  return (
    <header className="topbar" role="banner">
      <div className="topbar-inner">
        <Link to={isPublic ? '/' : layout.navigation[0].to} className="brand-wordmark">LineCourse</Link>
        <nav className="topbar-nav" aria-label={isPublic ? 'Navigation publique' : 'Navigation de l’espace'}>
          {visibleNavigation.map((item) => {
            const active = pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link${active ? ' is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="topbar-actions">
          {isPublic && (
            <Link
              to="/inscription"
              className={`btn btn-primary btn-nav-cta${pathname === '/inscription' ? ' is-active' : ''}`}
              aria-current={pathname === '/inscription' ? 'page' : undefined}
            >
              Inscription
            </Link>
          )}
          <ThemeToggle />
          <details className="mobile-nav-details">
            <summary className="mobile-menu-summary" aria-label="Ouvrir le menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </summary>
            <div className="mobile-drawer">
              <nav className="mobile-nav" aria-label="Navigation mobile">
                {layout.navigation.map((item) => {
                  const active = pathname === item.to
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`mobile-nav-link${active ? ' is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

function SiteFooter({ layout }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="brand-wordmark">LineCourse</Link>
          <p className="footer-copy">{layout.footerText}</p>
        </div>
        <nav className="footer-links" aria-label="Navigation du pied de page">
          {layout.navigation.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </nav>
        <div className="footer-legal">
          <span>© 2026 LineCourse</span>
          <span aria-hidden="true">·</span>
          <span>{layout.footerLabel}</span>
        </div>
      </div>
    </footer>
  )
}

export default function SiteLayout({ kind }) {
  const layout = layouts[kind]
  const location = useLocation()
  const [formNotice, setFormNotice] = useState({ pathname: '', message: '' })
  const showNotice = formNotice.pathname === location.pathname

  function handleDemoSubmit(event) {
    event.preventDefault()
    setFormNotice({
      pathname: location.pathname,
      message: 'Action non envoyée : le raccordement au backend n’est pas encore implémenté.',
    })
  }

  return (
    <div className={`page-layout page-layout--${kind}`} onSubmitCapture={handleDemoSubmit}>
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <SiteHeader layout={layout} />
      <main id="main-content" className="main-container stack-xl">
        <Outlet />
      </main>
      {showNotice && formNotice.message && (
        <div className="form-notice alert-banner is-info" role="status">
          {formNotice.message}
        </div>
      )}
      <SiteFooter layout={layout} />
    </div>
  )
}
