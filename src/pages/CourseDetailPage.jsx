import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function CourseDetailPage() {
  return (
    <>

      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        <Link to="/">Accueil</Link>
        <span aria-hidden="true">/</span>
        <Link to="/catalogue">Catalogue</Link>
        <span aria-hidden="true">/</span>
        <span>Architecture Express &amp; TypeScript Modulaire</span>
      </nav>

      <section className="course-banner" aria-labelledby="course-heading">
        <div className="stack-md" style={{ justifyContent: 'center' }}>
          <div className="meta-line">
            <span>Backend</span>
            <span aria-hidden="true">·</span>
            <span className="mono-num">4 modules</span>
            <span aria-hidden="true">·</span>
            <span className="mono-num">12 leçons</span>
            <span aria-hidden="true">·</span>
            <span className="status-label is-success">Formation publiée</span>
          </div>

          <h1 className="page-title" id="course-heading">
            Architecture Express &amp; TypeScript Modulaire
          </h1>

          <p className="lead-text">
            Apprenez à concevoir une application Node.js évolutive en séparant nettement la couche HTTP, la validation des entrées, les services métier et les dépôts relationnels.
          </p>

          <div className="author-inline">
            <img
              src={images.instructorPortrait}
              alt="Moussa Diop"
              className="avatar-md"
              referrerPolicy="no-referrer"
            />
            <div>
              <div><strong>Moussa Diop</strong></div>
              <div className="muted-text">Formateur principal · Publié le 10 nov. 2026</div>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/connexion" className="btn btn-primary">Se connecter pour s’inscrire</Link>
            <a href="#programme" className="btn btn-secondary">Consulter le programme</a>
          </div>
        </div>

        <div className="course-banner-media">
          <img
            src={images.courseArchitecture}
            alt="Poste d'architecture logicielle et schémas modulaires"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="surface-panel stack-md" aria-labelledby="objectives-heading">
        <h2 className="section-title" id="objectives-heading">Objectifs pédagogiques</h2>
        <ul className="objectives-list">
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Organiser un projet TypeScript par modules métier indépendants.</span>
          </li>
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Valider chaque requête entrante avant d’atteindre la logique métier.</span>
          </li>
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Centraliser la gestion des erreurs applicatives et des codes HTTP.</span>
          </li>
          <li className="objectives-item">
            <span className="objectives-check" aria-hidden="true">✓</span>
            <span>Isoler les modèles Sequelize derrière des interfaces de dépôt testables.</span>
          </li>
        </ul>
      </section>

      <section id="programme" className="learning-split" aria-labelledby="syllabus-heading">
        <div className="stack-md">
          <div>
            <h2 className="section-title" id="syllabus-heading">Programme des modules et leçons</h2>
            <p className="muted-text">4 modules structurés · 12 leçons détaillées</p>
          </div>

          <div className="module-list">
            <article className="module-block">
              <div className="module-header">
                <div>
                  <h3 className="card-title">Module 1 · Fondations du socle HTTP</h3>
                  <p className="muted-text">Configuration Express, middlewares transverses et typage strict.</p>
                </div>
                <span className="mono-num muted-text">3 leçons</span>
              </div>
              <div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">01. Structurer l’arborescence par domaines</div>
                    <div className="muted-text">Lecture · 15 min</div>
                  </div>
                  <span className="muted-text">Aperçu</span>
                </div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">02. Traçabilité des requêtes et journalisation</div>
                    <div className="muted-text">Lecture · 20 min</div>
                  </div>
                  <span className="muted-text">Aperçu</span>
                </div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">03. Enveloppe de réponse unifiée et erreurs typées</div>
                    <div className="muted-text">Lecture · 18 min</div>
                  </div>
                  <span className="muted-text">Aperçu</span>
                </div>
              </div>
            </article>

            <article className="module-block">
              <div className="module-header">
                <div>
                  <h3 className="card-title">Module 2 · Validation &amp; Logique métier</h3>
                  <p className="muted-text">Schémas Zod, services découplés et règles d’autorisation.</p>
                </div>
                <span className="mono-num muted-text">3 leçons</span>
              </div>
              <div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">04. Valider paramètres, requêtes et corps JSON</div>
                    <div className="muted-text">Lecture · 22 min</div>
                  </div>
                  <span className="muted-text">Aperçu</span>
                </div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">05. Contrôle d’accès et vérification de propriété</div>
                    <div className="muted-text">Lecture · 25 min</div>
                  </div>
                  <span className="muted-text">Aperçu</span>
                </div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">06. Pagination propre et filtres sécurisés</div>
                    <div className="muted-text">Lecture · 15 min</div>
                  </div>
                  <span className="muted-text">Aperçu</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <aside className="surface-panel stack-md" aria-labelledby="enroll-info-heading">
          <h2 className="card-title" id="enroll-info-heading">Accéder à la formation</h2>
          <p className="muted-text">
            L’inscription est réservée aux membres disposant d’un compte vérifié sur LineCourse.
          </p>

          <div className="stack-sm">
            <div className="meta-line">
              <strong>Accès :</strong>
              <span>Compte apprenant vérifié</span>
            </div>
            <div className="meta-line">
              <strong>Contenu inclus :</strong>
              <span className="mono-num">4 modules · 12 leçons</span>
            </div>
          </div>

          <Link to="/connexion" className="btn btn-primary btn-block">Se connecter</Link>
          <Link to="/inscription" className="btn btn-secondary btn-block">Créer un compte apprenant</Link>
        </aside>
      </section>
    
    </>
  )
}