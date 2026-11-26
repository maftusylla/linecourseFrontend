import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'
import CourseCatalogue from '../components/CourseCatalogue.jsx'

export default function HomePage() {
return ( 
    <>
      <section className="hero-split" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <span className="hero-kicker">Plateforme de formation en ligne LineCourse</span>
          <h1 className="hero-title" id="hero-heading">
            Développez vos compétences techniques avec des parcours structurés.
          </h1>
          <p className="lead-text">
            LineCourse rassemble des formations conçues par des formateurs expérimentés, découpées en modules clairs et leçons progressives pour accompagner chaque apprenant étape par étape.
          </p>
          <div className="hero-actions">
            <a href="#catalogue-accueil" className="btn btn-primary">Découvrir le catalogue</a>
            <Link to="/inscription" className="btn btn-secondary">Créer un compte</Link>
          </div>
        </div>

        <div className="hero-media">
          <img
            src={images.heroStudio}
            alt="Espace d'étude architectural de la plateforme LineCourse"
            referrerPolicy="no-referrer"
          />
          <div className="hero-media-scrim">
            <p className="hero-caption">
              Des cours pratiques en architecture web, sécurité applicative, bases de données et conception d’interfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="kpi-strip" aria-label="Aperçu de l'offre de formation">
        <div className="kpi-item">
          <div className="kpi-value">6</div>
          <div className="kpi-label">Formations publiées</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">19</div>
          <div className="kpi-label">Modules pédagogiques</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">64</div>
          <div className="kpi-label">Leçons détaillées</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">0–100%</div>
          <div className="kpi-label">Suivi individuel d’avancement</div>
        </div>
      </section>

      
      <section className="stack-md" aria-labelledby="featured-heading">
        <div className="section-header">
          <div>
            <h2 className="section-title" id="featured-heading">Cours mis en avant</h2>
            <p className="muted-text">Les parcours les plus suivis pour démarrer sur des bases solides.</p>
          </div>
          <Link to="/catalogue" className="inline-link">Voir tout le catalogue →</Link>
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
                <span className="mono-num">4 modules</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">12 leçons</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">Publié</span>
              </div>
              <h3 className="card-title">Architecture Express &amp; TypeScript Modulaire</h3>
              <p className="course-card-desc">
                Concevez des applications Node.js maintenables avec validation stricte des entrées, services découplés et gestion unifiée des erreurs.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Consulter la fiche</Link>
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
              <h3 className="card-title">Sécurité des API, JWT &amp; Rotation des Sessions</h3>
              <p className="course-card-desc">
                Maîtrisez l’authentification par jetons, le renouvellement sécurisé, la vérification d’e-mail et le contrôle d’accès par rôles.
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
                <Link to="/formations/architecture-express-typescript-modulaire" className="btn btn-primary btn-sm">Consulter la fiche</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      
      <section id="catalogue-accueil" className="stack-md" aria-labelledby="home-catalog-heading">
        <div className="section-header">
          <div>
            <h2 className="section-title" id="home-catalog-heading">Catalogue des formations</h2>
            <p className="muted-text">Parcourez l’ensemble des cours publiés par catégorie et consultez leur programme détaillé.</p>
          </div>
          <Link to="/catalogue" className="btn btn-secondary btn-sm">Filtrer dans le catalogue</Link>
        </div>

        <div className="surface-panel filter-toolbar" aria-label="Catégories de cours">
          <div className="segmented" role="group" aria-label="Catégories disponibles">
            <Link to="/catalogue" className="segmented-item is-active">Toutes</Link>
            <Link to="/catalogue" className="segmented-item">Backend</Link>
            <Link to="/catalogue" className="segmented-item">Sécurité</Link>
            <Link to="/catalogue" className="segmented-item">Interfaces</Link>
            <Link to="/catalogue" className="segmented-item">Données</Link>
            <Link to="/catalogue" className="segmented-item">Qualité logicielle</Link>
            <Link to="/catalogue" className="segmented-item">Pédagogie</Link>
          </div>
        </div>

      <CourseCatalogue showHeader={false} />
      </section>

      
      <section className="surface-panel stack-md" aria-labelledby="platform-info-heading">
        <div className="section-header">
          <div>
            <h2 className="section-title" id="platform-info-heading">Comment fonctionne LineCourse</h2>
            <p className="muted-text">Une structure claire pensée pour apprendre, enseigner et administrer en toute sérénité.</p>
          </div>
        </div>

        <div className="course-grid">
          <div className="stack-sm">
            <h3 className="card-title">01. Parcours modulaires clairs</h3>
            <p className="muted-text">
              Chaque formation est organisée en modules thématiques et en leçons ciblées afin de progresser sans surcharge cognitive.
            </p>
          </div>
          <div className="stack-sm">
            <h3 className="card-title">02. Suivi précis de la progression</h3>
            <p className="muted-text">
              Une fois inscrit avec un compte vérifié, chaque leçon enregistre votre taux d’avancement de 0 à 100 % et calcule la progression globale du cours.
            </p>
          </div>
          <div className="stack-sm">
            <h3 className="card-title">03. Comptes sécurisés et vérifiés</h3>
            <p className="muted-text">
              L’inscription inclut la confirmation par adresse e-mail, le renouvellement sécurisé du mot de passe et la maîtrise de vos sessions actives.
            </p>
          </div>
        </div>

        <div className="alert-banner">
          <div>
            <strong className="alert-title">Prêt à démarrer votre apprentissage ?</strong>
            <span>Créez votre compte apprenant ou connectez-vous pour vous inscrire aux formations publiées.</span>
          </div>
          <div className="filter-toolbar">
            <Link to="/connexion" className="btn btn-secondary btn-sm">Se connecter</Link>
            <Link to="/inscription" className="btn btn-primary btn-sm">Créer un compte</Link>
          </div>
        </div>
      </section>
    
    </>
  )
}
          
          