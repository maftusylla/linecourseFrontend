import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function TeacherCataloguePage() {
  return (
    <>

      <div className="workspace-shell">
        <aside className="workspace-sidebar" aria-label="Menu de l'espace enseignant">
          <div className="sidebar-heading">
            <div className="author-inline">
              <img
                src={images.instructorPortrait}
                alt="Moussa Diop"
                className="avatar-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <div><strong>Moussa Diop</strong></div>
                <div className="muted-text">Enseignant</div>
              </div>
            </div>
          </div>
          <nav className="sidebar-nav">
            <Link to="/enseignant/tableau-de-bord" className="sidebar-link">Tableau de bord</Link>
            <Link to="/enseignant/catalogue" className="sidebar-link is-active" aria-current="page">Catalogue</Link>
            <Link to="/enseignant/cours-crees" className="sidebar-link">Cours créés (4)</Link>
            <Link to="/enseignant/studio" className="sidebar-link">Studio pédagogique</Link>
            <Link to="/enseignant/inscriptions" className="sidebar-link">Inscriptions</Link>
            <Link to="/enseignant/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="teacher-catalog-heading">
            <div className="section-header">
              <div>
                <h1 className="page-title" id="teacher-catalog-heading">Catalogue des formations publiées</h1>
                <p className="lead-text">
                  Consultez l’offre publique de la plateforme. Seules vos propres formations restent éditables depuis le Studio.
                </p>
              </div>
              <Link to="/enseignant/studio" className="btn btn-primary">Nouveau cours</Link>
            </div>

            <form className="surface-panel filter-toolbar" action="#" method="get" aria-label="Recherche dans le catalogue">
              <div className="search-input-wrap" style={{ flex: '1 1 260px' }}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" className="input" name="q" placeholder="Rechercher un cours publié..." aria-label="Rechercher un cours" />
              </div>
              <div className="segmented" role="group" aria-label="Filtre auteur">
                <Link to="/enseignant/catalogue" className="segmented-item is-active">Tous les cours</Link>
                <Link to="/enseignant/catalogue" className="segmented-item">Mes cours publiés</Link>
              </div>
            </form>
          </section>

          <section className="course-grid-2" aria-label="Liste des cours publiés">
            <article className="course-card">
              <div className="media-frame">
                <img src={images.courseArchitecture} alt="Architecture Express & TypeScript Modulaire" referrerPolicy="no-referrer" />
              </div>
              <div className="course-card-body">
                <div className="meta-line">
                  <span>Backend</span>
                  <span aria-hidden="true">·</span>
                  <span className="mono-num">4 modules · 12 leçons</span>
                  <span aria-hidden="true">·</span>
                  <span className="status-label is-success">Votre cours</span>
                </div>
                <h2 className="card-title">Architecture Express &amp; TypeScript Modulaire</h2>
                <p className="course-card-desc">Structurez des API robustes avec séparation claire entre routes, contrôleurs, services et dépôts.</p>
                <div className="course-card-footer">
                  <span className="muted-text">Moussa Diop</span>
                  <Link to="/enseignant/studio" className="btn btn-primary btn-sm">Éditer dans le Studio</Link>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="media-frame">
                <img src={images.courseSecurity} alt="Sécurité des API, JWT & Rotation des Sessions" referrerPolicy="no-referrer" />
              </div>
              <div className="course-card-body">
                <div className="meta-line">
                  <span>Sécurité</span>
                  <span aria-hidden="true">·</span>
                  <span className="mono-num">3 modules · 10 leçons</span>
                  <span aria-hidden="true">·</span>
                  <span className="status-label is-success">Votre cours</span>
                </div>
                <h2 className="card-title">Sécurité des API, JWT &amp; Rotation des Sessions</h2>
                <p className="course-card-desc">Authentification par jetons, rotation sécurisée, contrôle d’accès par rôles et journal d’audit.</p>
                <div className="course-card-footer">
                  <span className="muted-text">Moussa Diop</span>
                  <Link to="/enseignant/studio" className="btn btn-primary btn-sm">Éditer dans le Studio</Link>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="media-frame">
                <img src={images.courseUiSystems} alt="Systèmes d'interfaces HTML5 & CSS3 modernes" referrerPolicy="no-referrer" />
              </div>
              <div className="course-card-body">
                <div className="meta-line">
                  <span>Interfaces</span>
                  <span aria-hidden="true">·</span>
                  <span className="mono-num">3 modules · 11 leçons</span>
                  <span aria-hidden="true">·</span>
                  <span className="status-label is-info">Publié</span>
                </div>
                <h2 className="card-title">Systèmes d’interfaces HTML5 &amp; CSS3 modernes</h2>
                <p className="course-card-desc">Hiérarchie typographique, grilles responsives, accessibilité clavier et thèmes clair/sombre.</p>
                <div className="course-card-footer">
                  <span className="muted-text">Fatou Sow</span>
                  <span className="muted-text">Lecture seule</span>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="media-frame">
                <img src={images.courseDatabase} alt="Modélisation MySQL & Migrations Sequelize" referrerPolicy="no-referrer" />
              </div>
              <div className="course-card-body">
                <div className="meta-line">
                  <span>Données</span>
                  <span aria-hidden="true">·</span>
                  <span className="mono-num">4 modules · 14 leçons</span>
                  <span aria-hidden="true">·</span>
                  <span className="status-label is-info">Publié</span>
                </div>
                <h2 className="card-title">Modélisation MySQL &amp; Migrations Sequelize</h2>
                <p className="course-card-desc">Schémas relationnels propres, contraintes d’intégrité et migrations versionnées.</p>
                <div className="course-card-footer">
                  <span className="muted-text">Fatou Sow</span>
                  <span className="muted-text">Lecture seule</span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    
    </>
  )
}