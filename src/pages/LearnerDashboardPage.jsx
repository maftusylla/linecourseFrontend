import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function LearnerDashboardPage() {
  return (
    <>

      <section className="surface-panel stack-md" aria-labelledby="welcome-heading">
        <div className="section-header">
          <div className="author-inline">
            <img
              src={images.learnerPortrait}
              alt="Portrait de Awa Ndiaye"
              className="avatar-lg"
              referrerPolicy="no-referrer"
            />
            <div className="stack-sm">
              <div className="meta-line">
                <span>Espace Apprenant</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Compte vérifié</span>
              </div>
              <h1 className="page-title" id="welcome-heading">Bonjour Awa Ndiaye</h1>
              <p className="muted-text">
                Reprenez vos formations en cours ou explorez de nouveaux modules disponibles dans le catalogue.
              </p>
            </div>
          </div>

          <div className="filter-toolbar">
            <Link to="/apprenant/apprentissage" className="btn btn-primary">Reprendre la leçon en cours</Link>
            <Link to="/apprenant/catalogue" className="btn btn-secondary">Parcourir le catalogue</Link>
          </div>
        </div>
      </section>

      <section className="kpi-strip" aria-label="Indicateurs de progression">
        <div className="kpi-item">
          <div className="kpi-value">3</div>
          <div className="kpi-label">Formations inscrites</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">18 / 33</div>
          <div className="kpi-label">Leçons complétées</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">64 %</div>
          <div className="kpi-label">Progression moyenne</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">1</div>
          <div className="kpi-label">Formation achevée à 100 %</div>
        </div>
      </section>

      <section className="stack-md" aria-labelledby="active-courses-heading">
        <div className="section-header">
          <div>
            <h2 className="section-title" id="active-courses-heading">Aperçu de vos cours suivis</h2>
            <p className="muted-text">Votre avancement est calculé à partir de la progression enregistrée sur chaque leçon.</p>
          </div>
          <Link to="/apprenant/mes-cours" className="inline-link">Voir tous mes cours →</Link>
        </div>

        <div className="course-grid">
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
                <span className="mono-num">8 / 12 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-info">En cours</span>
              </div>
              <h3 className="card-title">Architecture Express &amp; TypeScript Modulaire</h3>
              <div className="stack-sm">
                <div className="meta-line">
                  <span>Module 2 · Leçon 05 en cours</span>
                  <span className="mono-num">68 %</span>
                </div>
                <div className="progress-track" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="Progression Architecture Express : 68%">
                  <div className="progress-fill" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="course-card-footer">
                <Link to="/apprenant/detail-cours" className="btn btn-ghost btn-sm">Programme</Link>
                <Link to="/apprenant/apprentissage" className="btn btn-primary btn-sm">Continuer</Link>
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
                <span className="mono-num">3 / 10 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-info">En cours</span>
              </div>
              <h3 className="card-title">Sécurité des API, JWT &amp; Rotation des Sessions</h3>
              <div className="stack-sm">
                <div className="meta-line">
                  <span>Module 1 · Leçon 04 à suivre</span>
                  <span className="mono-num">25 %</span>
                </div>
                <div className="progress-track" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="Progression Sécurité des API : 25%">
                  <div className="progress-fill" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="course-card-footer">
                <Link to="/apprenant/detail-cours" className="btn btn-ghost btn-sm">Programme</Link>
                <Link to="/apprenant/apprentissage" className="btn btn-primary btn-sm">Continuer</Link>
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
                <span className="mono-num">11 / 11 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Terminé</span>
              </div>
              <h3 className="card-title">Systèmes d’interfaces HTML5 &amp; CSS3 modernes</h3>
              <div className="stack-sm">
                <div className="meta-line">
                  <span>Parcours complété</span>
                  <span className="mono-num">100 %</span>
                </div>
                <div className="progress-track" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Progression Systèmes d'interfaces : 100%">
                  <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="course-card-footer">
                <Link to="/apprenant/detail-cours" className="btn btn-ghost btn-sm">Programme</Link>
                <Link to="/apprenant/apprentissage" className="btn btn-secondary btn-sm">Relire</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="stack-md" aria-labelledby="recommended-heading">
        <div className="section-header">
          <div>
            <h2 className="section-title" id="recommended-heading">Formations accessibles dans le catalogue</h2>
            <p className="muted-text">Autres parcours publiés disponibles pour inscription immédiate.</p>
          </div>
          <Link to="/apprenant/catalogue" className="btn btn-secondary btn-sm">Tout afficher</Link>
        </div>

        <div className="course-grid-2">
          <article className="course-card">
            <div className="media-frame">
              <img
                src={images.courseDatabase}
                alt="Modélisation MySQL & Migrations Sequelize"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="course-card-body">
              <div className="meta-line">
                <span>Données</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">4 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">14 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Disponible</span>
              </div>
              <h3 className="card-title">Modélisation MySQL &amp; Migrations Sequelize</h3>
              <p className="course-card-desc">
                Concevez des schémas relationnels cohérents, maîtrisez les migrations versionnées et gérez l’intégrité des données.
              </p>
              <div className="course-card-footer">
                <div className="author-inline">
                  <img
                    src={images.instructorPortrait}
                    alt="Fatou Sow"
                    className="avatar-sm"
                    referrerPolicy="no-referrer"
                  />
                  <span className="muted-text">Fatou Sow</span>
                </div>
                <Link to="/apprenant/detail-cours" className="btn btn-primary btn-sm">Consulter et s’inscrire</Link>
              </div>
            </div>
          </article>

          <article className="course-card">
            <div className="media-frame">
              <img
                src={images.courseDevops}
                alt="Tests unitaires et d'intégration avec Vitest"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="course-card-body">
              <div className="meta-line">
                <span>Qualité logicielle</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">3 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">9 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Disponible</span>
              </div>
              <h3 className="card-title">Tests unitaires et d’intégration avec Vitest</h3>
              <p className="course-card-desc">
                Écrivez des tests fiables sur les services, les schémas de validation et les contrôles d’accès.
              </p>
              <div className="course-card-footer">
                <div className="author-inline">
                  <img
                    src={images.instructorPortrait}
                    alt="Moussa Diop"
                    className="avatar-sm"
                    referrerPolicy="no-referrer"
                  />
                  <span className="muted-text">Moussa Diop</span>
                </div>
                <Link to="/apprenant/detail-cours" className="btn btn-primary btn-sm">Consulter et s’inscrire</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    
    </>
  )
}