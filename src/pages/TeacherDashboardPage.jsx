import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function TeacherDashboardPage() {
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
            <Link to="/enseignant/tableau-de-bord" className="sidebar-link is-active" aria-current="page">Tableau de bord</Link>
            <Link to="/enseignant/catalogue" className="sidebar-link">Catalogue</Link>
            <Link to="/enseignant/cours-crees" className="sidebar-link">Cours créés (4)</Link>
            <Link to="/enseignant/studio" className="sidebar-link">Studio pédagogique</Link>
            <Link to="/enseignant/inscriptions" className="sidebar-link">Inscriptions</Link>
            <Link to="/enseignant/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="surface-panel stack-md" aria-labelledby="teacher-welcome-heading">
            <div className="section-header">
              <div className="stack-sm">
                <span className="hero-kicker">Espace Enseignant</span>
                <h1 className="page-title" id="teacher-welcome-heading">Tableau de bord pédagogique</h1>
                <p className="muted-text">
                  Pilotez vos propres formations, structurez vos modules et suivez les inscriptions de vos apprenants.
                </p>
              </div>
              <div className="filter-toolbar">
                <Link to="/enseignant/studio" className="btn btn-primary">Créer une formation</Link>
                <Link to="/enseignant/cours-crees" className="btn btn-secondary">Gérer mes cours</Link>
              </div>
            </div>
          </section>

          <section className="kpi-strip" aria-label="Indicateurs de l'enseignant">
            <div className="kpi-item">
              <div className="kpi-value">4</div>
              <div className="kpi-label">Formations créées</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">3</div>
              <div className="kpi-label">Cours publiés</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">1</div>
              <div className="kpi-label">Brouillon en préparation</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">42</div>
              <div className="kpi-label">Apprenants inscrits</div>
            </div>
          </section>

          <section className="stack-md" aria-labelledby="recent-teacher-courses">
            <div className="section-header">
              <div>
                <h2 className="section-title" id="recent-teacher-courses">Vos formations récentes</h2>
                <p className="muted-text">Accès direct à l’édition des modules, des leçons et aux listes d’inscrits.</p>
              </div>
              <Link to="/enseignant/cours-crees" className="inline-link">Voir tous mes cours →</Link>
            </div>

            <div className="course-grid-2">
              <article className="course-card">
                <div className="media-frame">
                  <img
                    src={images.courseArchitecture}
                    alt="Architecture Express & TypeScript Modulaire"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="course-card-body">
                  <div className="meta-line">
                    <span>Backend</span>
                    <span aria-hidden="true">·</span>
                    <span className="mono-num">4 modules · 12 leçons</span>
                    <span aria-hidden="true">·</span>
                    <span className="status-label is-success">Publié</span>
                  </div>
                  <h3 className="card-title">Architecture Express &amp; TypeScript Modulaire</h3>
                  <p className="course-card-desc">18 apprenants inscrits · Progression moyenne des inscrits : 64 %.</p>
                  <div className="course-card-footer">
                    <Link to="/enseignant/inscriptions" className="btn btn-ghost btn-sm">Inscrits (18)</Link>
                    <Link to="/enseignant/studio" className="btn btn-primary btn-sm">Ouvrir dans le Studio</Link>
                  </div>
                </div>
              </article>

              <article className="course-card">
                <div className="media-frame">
                  <img
                    src={images.courseDevops}
                    alt="Observation et métriques d'applications Node.js"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="course-card-body">
                  <div className="meta-line">
                    <span>Qualité logicielle</span>
                    <span aria-hidden="true">·</span>
                    <span className="mono-num">2 modules · 5 leçons</span>
                    <span aria-hidden="true">·</span>
                    <span className="status-label is-warning">Brouillon</span>
                  </div>
                  <h3 className="card-title">Journalisation structurée &amp; Diagnostic Node.js</h3>
                  <p className="course-card-desc">Formation en cours de rédaction, non visible dans le catalogue public.</p>
                  <div className="course-card-footer">
                    <Link to="/enseignant/cours-crees" className="btn btn-ghost btn-sm">Actions</Link>
                    <Link to="/enseignant/studio" className="btn btn-primary btn-sm">Compléter le brouillon</Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    
    </>
  )
}