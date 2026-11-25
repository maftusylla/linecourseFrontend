import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function LearnerCoursesPage() {
  return (
    <>

      <section className="stack-md" aria-labelledby="my-courses-heading">
        <div className="section-header">
          <div>
            <h1 className="page-title" id="my-courses-heading">Mes cours</h1>
            <p className="lead-text">
              Retrouvez les formations auxquelles vous êtes inscrit ainsi que votre avancement détaillé.
            </p>
          </div>
          <Link to="/apprenant/catalogue" className="btn btn-primary">Ajouter une formation</Link>
        </div>

        <div className="surface-panel filter-toolbar">
          <div className="segmented" role="group" aria-label="Filtrer mes inscriptions">
            <Link to="/apprenant/mes-cours" className="segmented-item is-active">Toutes (3)</Link>
            <Link to="/apprenant/mes-cours" className="segmented-item">En cours (2)</Link>
            <Link to="/apprenant/mes-cours" className="segmented-item">Terminées (1)</Link>
          </div>
          <span className="muted-text">Progression globale moyenne : <strong className="mono-num">64 %</strong></span>
        </div>
      </section>

      <section className="course-grid" aria-label="Formations inscrites">
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
              <span className="status-label is-info">En cours</span>
            </div>
            <h2 className="card-title">Architecture Express &amp; TypeScript Modulaire</h2>
            <p className="course-card-desc">
              Dernière leçon ouverte : 05. Contrôle d’accès et vérification de propriété.
            </p>
            <div className="stack-sm">
              <div className="meta-line">
                <span>Progression : <strong className="mono-num">68 %</strong></span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">8 / 12 leçons</span>
              </div>
              <div className="progress-track" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="Progression 68%">
                <div className="progress-fill" style={{ width: '68%' }}></div>
              </div>
            </div>
            <div className="course-card-footer">
              <form action="#" method="post">
                <button type="submit" className="btn btn-ghost btn-sm">Se désinscrire</button>
              </form>
              <Link to="/apprenant/apprentissage" className="btn btn-primary btn-sm">Poursuivre</Link>
            </div>
          </div>
        </article>

        <article className="course-card">
          <div className="media-frame">
            <img
              src={images.courseSecurity}
              alt="Sécurité des API, JWT & Rotation des Sessions"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="course-card-body">
            <div className="meta-line">
              <span>Sécurité</span>
              <span aria-hidden="true">·</span>
              <span className="mono-num">3 modules · 10 leçons</span>
              <span aria-hidden="true">·</span>
              <span className="status-label is-info">En cours</span>
            </div>
            <h2 className="card-title">Sécurité des API, JWT &amp; Rotation des Sessions</h2>
            <p className="course-card-desc">
              Dernière leçon ouverte : 03. Stockage sécurisé des jetons de rafraîchissement.
            </p>
            <div className="stack-sm">
              <div className="meta-line">
                <span>Progression : <strong className="mono-num">25 %</strong></span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">3 / 10 leçons</span>
              </div>
              <div className="progress-track" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="Progression 25%">
                <div className="progress-fill" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="course-card-footer">
              <form action="#" method="post">
                <button type="submit" className="btn btn-ghost btn-sm">Se désinscrire</button>
              </form>
              <Link to="/apprenant/apprentissage" className="btn btn-primary btn-sm">Poursuivre</Link>
            </div>
          </div>
        </article>

        <article className="course-card">
          <div className="media-frame">
            <img
              src={images.courseUiSystems}
              alt="Systèmes d'interfaces HTML5 & CSS3 modernes"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="course-card-body">
            <div className="meta-line">
              <span>Interfaces</span>
              <span aria-hidden="true">·</span>
              <span className="mono-num">3 modules · 11 leçons</span>
              <span aria-hidden="true">·</span>
              <span className="status-label is-success">Terminé</span>
            </div>
            <h2 className="card-title">Systèmes d’interfaces HTML5 &amp; CSS3 modernes</h2>
            <p className="course-card-desc">
              Toutes les leçons de ce parcours ont été marquées comme terminées.
            </p>
            <div className="stack-sm">
              <div className="meta-line">
                <span>Progression : <strong className="mono-num">100 %</strong></span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">11 / 11 leçons</span>
              </div>
              <div className="progress-track" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Progression 100%">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="course-card-footer">
              <Link to="/apprenant/detail-cours" className="btn btn-ghost btn-sm">Programme</Link>
              <Link to="/apprenant/apprentissage" className="btn btn-secondary btn-sm">Revoir les leçons</Link>
            </div>
          </div>
        </article>
      </section>
    
    </>
  )
}