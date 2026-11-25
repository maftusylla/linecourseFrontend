import { Link } from 'react-router-dom'

export default function LearningPage() {
  return (
    <>

      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        <Link to="/apprenant/mes-cours">Mes cours</Link>
        <span aria-hidden="true">/</span>
        <Link to="/apprenant/detail-cours">Architecture Express &amp; TypeScript Modulaire</Link>
        <span aria-hidden="true">/</span>
        <span>Module 2 · Leçon 05</span>
      </nav>

      <section className="learning-split-sidebar-left" aria-label="Espace de lecture des leçons">
        <aside className="stack-md" aria-label="Navigation des modules et leçons">
          <div className="surface-panel stack-sm">
            <div className="meta-line">
              <span>Avancement du cours</span>
              <strong className="mono-num">68 %</strong>
            </div>
            <div className="progress-track" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="Avancement global : 68%">
              <div className="progress-fill" style={{ width: '68%' }}></div>
            </div>
            <span className="muted-text mono-num">8 sur 12 leçons terminées</span>
          </div>

          <div className="module-list">
            <div className="module-block">
              <div className="module-header">
                <strong>Module 1 · Fondations HTTP</strong>
                <span className="status-label is-success">100 %</span>
              </div>
              <div>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <span className="lesson-row-title">01. Arborescence par domaines</span>
                  <span className="status-label is-success">100 %</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <span className="lesson-row-title">02. Journalisation des requêtes</span>
                  <span className="status-label is-success">100 %</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <span className="lesson-row-title">03. Erreurs applicatives typées</span>
                  <span className="status-label is-success">100 %</span>
                </Link>
              </div>
            </div>

            <div className="module-block">
              <div className="module-header">
                <strong>Module 2 · Validation &amp; Métier</strong>
                <span className="status-label is-info">En cours</span>
              </div>
              <div>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <span className="lesson-row-title">04. Valider paramètres et corps JSON</span>
                  <span className="status-label is-success">100 %</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row is-active" aria-current="page">
                  <span className="lesson-row-title">05. Contrôle d’accès &amp; propriété</span>
                  <span className="status-label is-info">60 %</span>
                </Link>
                <Link to="/apprenant/apprentissage" className="lesson-row">
                  <span className="lesson-row-title">06. Pagination et filtres sûrs</span>
                  <span className="muted-text mono-num">0 %</span>
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <article className="surface-panel stack-md" aria-labelledby="lesson-title">
          <div className="panel-header">
            <div className="stack-sm">
              <div className="meta-line">
                <span>Module 2 · Validation &amp; Logique métier</span>
                <span aria-hidden="true">·</span>
                <span className="mono-num">Leçon 05 / 12</span>
                <span aria-hidden="true">·</span>
                <span>Durée estimée : 25 min</span>
              </div>
              <h1 className="page-title" id="lesson-title">
                05. Contrôle d’accès et vérification de propriété
              </h1>
            </div>
            <span className="status-label is-info">En cours · 60 %</span>
          </div>

          <div className="lesson-prose">
            <p>
              L’authentification vérifie l’identité de l’utilisateur qui envoie la requête, mais elle ne suffit jamais à garantir qu’il a le droit d’agir sur une ressource précise. Dans une plateforme de cours, un enseignant ne doit pouvoir modifier que les formations dont il est l’auteur, et un apprenant ne peut consulter ou mettre à jour que ses propres inscriptions.
            </p>
            <p>
              Pour éviter toute fuite d’information ou élévation de privilèges, appliquez systématiquement trois vérifications côté serveur :
            </p>
            <ul>
              <li>Validez d’abord le rôle fonctionnel requis sur l’action demandée (apprenant, enseignant ou administrateur).</li>
              <li>Chargez la ressource ciblée depuis le dépôt et vérifiez la correspondance entre son propriétaire et l’identifiant du compte authentifié.</li>
              <li>Centralisez ces contrôles dans la couche service afin qu’ils restent identiques quel que soit le point d’entrée qui les sollicite.</li>
            </ul>
            <p>
              Lorsque les conditions ne sont pas réunies, renvoyez une erreur métier explicite empêchant toute modification partielle de l’état en base de données.
            </p>
          </div>

          <form className="surface-panel stack-md" action="#" method="post" aria-label="Enregistrer l'avancement de la leçon">
            <div className="section-header">
              <div>
                <h2 className="card-title">Avancement sur cette leçon</h2>
                <p className="muted-text">Ajustez votre pourcentage entre 0 et 100 % ou marquez la leçon comme terminée.</p>
              </div>
              <span className="mono-num"><strong>60 %</strong></span>
            </div>

            <div className="form-grid-2">
              <div className="field">
                <label className="field-label" htmlFor="lesson-progress-range">Curseur de progression (0 à 100 %)</label>
                <input
                  id="lesson-progress-range"
                  name="progressRange"
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="60"
                  className="range-input"
                />
              </div>

              <div className="field">
                <label className="field-label" htmlFor="lesson-progress-num">Pourcentage exact</label>
                <input
                  id="lesson-progress-num"
                  name="progress"
                  type="number"
                  min="0"
                  max="100"
                  defaultValue="60"
                  className="input mono-num"
                />
              </div>
            </div>

            <div className="filter-toolbar">
              <button type="submit" className="btn btn-secondary">Enregistrer la progression</button>
              <button type="submit" className="btn btn-primary">Marquer comme terminée (100 %)</button>
            </div>
          </form>

          <nav className="lesson-nav-footer" aria-label="Navigation entre les leçons">
            <Link to="/apprenant/apprentissage" className="btn btn-secondary">← Leçon précédente (04)</Link>
            <Link to="/apprenant/apprentissage" className="btn btn-primary">Leçon suivante (06) →</Link>
          </nav>
        </article>
      </section>
    
    </>
  )
}