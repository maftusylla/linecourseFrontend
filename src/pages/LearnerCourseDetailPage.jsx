import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function LearnerCourseDetailPage() {
  return (
    <>

      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        <Link to="/apprenant/tableau-de-bord">Tableau de bord</Link>
        <span aria-hidden="true">/</span>
        <Link to="/apprenant/catalogue">Catalogue</Link>
        <span aria-hidden="true">/</span>
        <span>Modélisation MySQL &amp; Migrations Sequelize</span>
      </nav>

      <section className="course-banner" aria-labelledby="course-detail-title">
        <div className="stack-md">
          <div className="meta-line">
            <span>Données</span>
            <span aria-hidden="true">·</span>
            <span className="mono-num">4 modules</span>
            <span aria-hidden="true">·</span>
            <span className="mono-num">14 leçons</span>
            <span aria-hidden="true">·</span>
            <span className="status-label is-success">Formation publiée</span>
          </div>

          <h1 className="page-title" id="course-detail-title">
            Modélisation MySQL &amp; Migrations Sequelize
          </h1>

          <p className="lead-text">
            Maîtrisez la conception de bases de données relationnelles fiables avec clés étrangères strictes, migrations versionnées et requêtes typées.
          </p>

          <div className="author-inline">
            <img
              src={images.instructorPortrait}
              alt="Fatou Sow"
              className="avatar-md"
              referrerPolicy="no-referrer"
            />
            <div>
              <div><strong>Fatou Sow</strong></div>
              <div className="muted-text">Enseignante · Publié le 14 nov. 2026</div>
            </div>
          </div>

          <div className="hero-actions">
            <form action="#" method="post">
              <button type="submit" className="btn btn-primary">M’inscrire à cette formation</button>
            </form>
            <Link to="/apprenant/apprentissage" className="btn btn-secondary">Accéder aux leçons</Link>
          </div>
        </div>

        <div className="course-banner-media">
          <img
            src={images.courseDatabase}
            alt="Schéma relationnel et tables MySQL"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="surface-panel stack-md" aria-labelledby="objectives-heading">
        <h2 className="section-title" id="objectives-heading">Objectifs de la formation</h2>
        <ul className="objectives-list">
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Modéliser des entités et relations 1-N / N-N avec contraintes d’intégrité.</span>
          </li>
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Rédiger des migrations réversibles et des jeux d’amorçage reproductibles.</span>
          </li>
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Implémenter la suppression logique (paranoid) sans perdre l’historique.</span>
          </li>
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Optimiser les jointures et éviter les requêtes N+1 sur les listes paginées.</span>
          </li>
        </ul>
      </section>

      <section className="learning-split" aria-labelledby="syllabus-heading">
        <div className="stack-md">
          <div>
            <h2 className="section-title" id="syllabus-heading">Contenu des modules et leçons</h2>
            <p className="muted-text">4 modules structurés · 14 leçons progressives</p>
          </div>

          <div className="module-list">
            <article className="module-block">
              <div className="module-header">
                <div>
                  <h3 className="card-title">Module 1 · Modèle relationnel &amp; Indexation</h3>
                  <p className="muted-text">Normalisation, clés primaires UUID/entiers et contraintes uniques.</p>
                </div>
                <span className="mono-num muted-text">4 leçons</span>
              </div>
              <div>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <div>
                    <div className="lesson-row-title">01. Concevoir un schéma normalisé</div>
                    <div className="muted-text">Lecture · 16 min</div>
                  </div>
                  <span className="status-label is-info">Ouvrir</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <div>
                    <div className="lesson-row-title">02. Clés étrangères et actions en cascade</div>
                    <div className="muted-text">Lecture · 19 min</div>
                  </div>
                  <span className="status-label is-info">Ouvrir</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <div>
                    <div className="lesson-row-title">03. Index simples et composites</div>
                    <div className="muted-text">Lecture · 22 min</div>
                  </div>
                  <span className="status-label is-info">Ouvrir</span>
                </Link>
              </div>
            </article>

            <article className="module-block">
              <div className="module-header">
                <div>
                  <h3 className="card-title">Module 2 · Migrations Sequelize &amp; Dépôts</h3>
                  <p className="muted-text">Évolution incrémentale de la base de données et tests d’intégration.</p>
                </div>
                <span className="mono-num muted-text">3 leçons</span>
              </div>
              <div>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <div>
                    <div className="lesson-row-title">04. Écrire des migrations idempotentes</div>
                    <div className="muted-text">Lecture · 20 min</div>
                  </div>
                  <span className="status-label is-info">Ouvrir</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <div>
                    <div className="lesson-row-title">05. Associations et chargement ciblé</div>
                    <div className="muted-text">Lecture · 24 min</div>
                  </div>
                  <span className="status-label is-info">Ouvrir</span>
                </Link>
              </div>
            </article>
          </div>
        </div>

        <aside className="surface-panel stack-md" aria-labelledby="enrollment-panel-heading">
          <h2 className="card-title" id="enrollment-panel-heading">Votre inscription</h2>
          <p className="muted-text">
            Votre compte apprenant est vérifié. Inscrivez-vous pour enregistrer votre progression sur chaque leçon.
          </p>

          <div className="alert-banner is-success" role="status">
            <div>
              <strong className="alert-title">Compte vérifié prêt</strong>
              <span>L’inscription ajoute immédiatement cette formation à votre liste « Mes cours ».</span>
            </div>
          </div>

          <form action="#" method="post" className="stack-sm">
            <button type="submit" className="btn btn-primary btn-block">Confirmer mon inscription</button>
            <Link to="/apprenant/mes-cours" className="btn btn-secondary btn-block">Retour à Mes cours</Link>
          </form>
        </aside>
      </section>
    
    </>
  )
}