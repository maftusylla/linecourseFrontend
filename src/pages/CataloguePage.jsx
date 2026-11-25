import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function CataloguePage() {
  return (
    <>

      <section className="stack-md" aria-labelledby="catalog-title">
        <div className="section-header">
          <div>
            <h1 className="page-title" id="catalog-title">Catalogue des formations</h1>
            <p className="lead-text">
              Explorez nos parcours pratiques structurés en modules progressifs. Connectez-vous ou créez un compte pour vous inscrire.
            </p>
          </div>
        </div>

        <form className="surface-panel filter-toolbar" action="#" method="get" aria-label="Recherche et filtres du catalogue">
          <div className="search-input-wrap" style={{ flex: '1 1 280px' }}>
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              className="input"
              name="q"
              placeholder="Rechercher une formation par titre ou thématique..."
              aria-label="Rechercher une formation"
            />
          </div>

          <div className="segmented" role="group" aria-label="Filtrer par domaine">
            <Link to="/catalogue" className="segmented-item is-active">Toutes</Link>
            <Link to="/catalogue" className="segmented-item">Backend</Link>
            <Link to="/catalogue" className="segmented-item">Sécurité</Link>
            <Link to="/catalogue" className="segmented-item">Interfaces</Link>
            <Link to="/catalogue" className="segmented-item">Données</Link>
          </div>

          <select className="select" aria-label="Trier les formations" style={{ width: 'auto', minWidth: '190px' }}>
            <option value="recent">Plus récentes</option>
            <option value="alpha">Ordre alphabétique</option>
            <option value="modules">Nombre de modules</option>
          </select>
        </form>
      </section>

      <section aria-label="Liste des formations">
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
                <span className="mono-num">4 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">12 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Publié</span>
              </div>
              <h2 className="card-title">Architecture Express &amp; TypeScript Modulaire</h2>
              <p className="course-card-desc">
                Structurez des API robustes avec séparation claire entre routes, contrôleurs, services et dépôts de données.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Voir le cours</Link>
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
                <span className="mono-num">3 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">10 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Publié</span>
              </div>
              <h2 className="card-title">Sécurité des API, JWT &amp; Rotation des Sessions</h2>
              <p className="course-card-desc">
                Authentification par jetons, rotation sécurisée, contrôle d’accès par rôles et journal d’audit.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Voir le cours</Link>
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
                <span className="mono-num">3 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">11 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Publié</span>
              </div>
              <h2 className="card-title">Systèmes d’interfaces HTML5 &amp; CSS3 modernes</h2>
              <p className="course-card-desc">
                Hiérarchie typographique, grilles responsives, accessibilité clavier et thèmes clair/sombre maintenables.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Voir le cours</Link>
              </div>
            </div>
          </article>

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
                <span className="status-label is-success">Publié</span>
              </div>
              <h2 className="card-title">Modélisation MySQL &amp; Migrations Sequelize</h2>
              <p className="course-card-desc">
                Schémas relationnels propres, contraintes d’intégrité, migrations versionnées et suppression logique.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Voir le cours</Link>
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
                <span className="status-label is-success">Publié</span>
              </div>
              <h2 className="card-title">Tests unitaires et d’intégration avec Vitest</h2>
              <p className="course-card-desc">
                Doublures de dépôts, validation des schémas Zod et vérification complète des parcours authentifiés.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Voir le cours</Link>
              </div>
            </div>
          </article>

          <article className="course-card">
            <div className="media-frame">
              <img
                src={images.coursePedagogy}
                alt="Ingénierie pédagogique & Structuration de modules"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="course-card-body">
              <div className="meta-line">
                <span>Pédagogie</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">2 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">8 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Publié</span>
              </div>
              <h2 className="card-title">Ingénierie pédagogique &amp; Structuration de modules</h2>
              <p className="course-card-desc">
                Découpez un programme technique en séquences digestes, objectifs mesurables et exercices progressifs.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Voir le cours</Link>
              </div>
            </div>
          </article>
        </div>

        <nav className="pagination-bar" aria-label="Pagination du catalogue" style={{ marginTop: '2rem' }}>
          <span className="muted-text mono-num">Page 1 sur 2 · 6 formations affichées</span>
          <div className="filter-toolbar">
            <Link to="/catalogue" className="btn btn-secondary btn-sm" aria-disabled="true">Précédent</Link>
            <Link to="/catalogue" className="btn btn-primary btn-sm" aria-current="page">1</Link>
            <Link to="/catalogue" className="btn btn-secondary btn-sm">2</Link>
            <Link to="/catalogue" className="btn btn-secondary btn-sm">Suivant</Link>
          </div>
        </nav>
      </section>
    
    </>
  )
}