import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function TeacherStudioPage() {
  return (
    <>

      <div className="workspace-shell">
        <aside className="workspace-sidebar" aria-label="Menu de l'espace enseignant">
          <div className="sidebar-heading">
            <div className="author-inline">
              <img src={images.instructorPortrait} alt="Moussa Diop" className="avatar-md" referrerPolicy="no-referrer" />
              <div>
                <div><strong>Moussa Diop</strong></div>
                <div className="muted-text">Enseignant</div>
              </div>
            </div>
          </div>
          <nav className="sidebar-nav">
            <Link to="/enseignant/tableau-de-bord" className="sidebar-link">Tableau de bord</Link>
            <Link to="/enseignant/catalogue" className="sidebar-link">Catalogue</Link>
            <Link to="/enseignant/cours-crees" className="sidebar-link">Cours créés (4)</Link>
            <Link to="/enseignant/studio" className="sidebar-link is-active" aria-current="page">Studio pédagogique</Link>
            <Link to="/enseignant/inscriptions" className="sidebar-link">Inscriptions</Link>
            <Link to="/enseignant/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="studio-heading">
            <div className="section-header">
              <div>
                <div className="meta-line">
                  <span>Studio pédagogique</span>
                  <span aria-hidden="true">·</span>
                  <span className="status-label is-warning">Brouillon en édition</span>
                </div>
                <h1 className="page-title" id="studio-heading">Journalisation structurée &amp; Diagnostic Node.js</h1>
              </div>
              <div className="filter-toolbar">
                <Link to="/enseignant/cours-crees" className="btn btn-secondary">Retour aux cours créés</Link>
                <button type="button" className="btn btn-primary">Publier la formation</button>
              </div>
            </div>
          </section>

          
          <form className="surface-panel stack-md" action="#" method="post" aria-labelledby="course-form-heading">
            <div className="panel-header">
              <div>
                <h2 className="card-title" id="course-form-heading">Informations générales de la formation</h2>
                <p className="muted-text">Définissez le titre, la description et le statut de visibilité dans le catalogue.</p>
              </div>
              <span className="status-label is-warning">Statut : Brouillon</span>
            </div>

            <div className="form-grid-2">
              <div className="field">
                <label className="field-label" htmlFor="course-title">Titre de la formation</label>
                <input
                  id="course-title"
                  name="titre"
                  type="text"
                  className="input"
                  defaultValue="Journalisation structurée & Diagnostic Node.js"
                  required
                />
              </div>

              <div className="field">
                <label className="field-label" htmlFor="course-status">Statut de publication</label>
                <select id="course-status" name="status" className="select" defaultValue="draft">
                  <option value="draft">Brouillon (non publié)</option>
                  <option value="published">Publié dans le catalogue</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="course-description">Description de la formation</label>
              <textarea id="course-description" name="description" className="textarea" required>Apprenez à concevoir des journaux structurés avec corrélation des requêtes, filtrage des données sensibles et diagnostic rapide des erreurs en production.</textarea>
            </div>

            <div className="filter-toolbar">
              <button type="submit" className="btn btn-primary">Enregistrer la formation</button>
              <button type="button" className="btn btn-secondary">Passer en publié</button>
              <button type="button" className="btn btn-danger">Supprimer ce brouillon</button>
            </div>
          </form>

          
          <section className="two-col-panels" aria-label="Gestion des modules et leçons">
            <div id="modules" className="surface-panel stack-md">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Modules de la formation</h2>
                  <p className="muted-text">Organisez le programme par modules thématiques.</p>
                </div>
                <span className="mono-num muted-text">2 modules</span>
              </div>

              <div className="module-list">
                <div className="module-block">
                  <div className="module-header">
                    <div>
                      <strong>1. Fondamentaux de la journalisation</strong>
                      <div className="muted-text">3 leçons</div>
                    </div>
                    <div className="filter-toolbar">
                      <button type="button" className="btn btn-ghost btn-sm">Modifier</button>
                      <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </div>
                </div>

                <div className="module-block">
                  <div className="module-header">
                    <div>
                      <strong>2. Corrélation et masquage des secrets</strong>
                      <div className="muted-text">2 leçons</div>
                    </div>
                    <div className="filter-toolbar">
                      <button type="button" className="btn btn-ghost btn-sm">Modifier</button>
                      <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </div>
                </div>
              </div>

              <form className="form-grid" action="#" method="post">
                <div className="field">
                  <label className="field-label" htmlFor="new-module-title">Titre du nouveau module</label>
                  <input id="new-module-title" name="titre" type="text" className="input" placeholder="Ex. 3. Exploitation des journaux en production" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="new-module-desc">Description du module</label>
                  <textarea id="new-module-desc" name="description" className="textarea" placeholder="Objectifs et contenu couvert par ce module..." required></textarea>
                </div>
                <button type="submit" className="btn btn-secondary">Ajouter le module</button>
              </form>
            </div>

            <div id="lecons" className="surface-panel stack-md">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Leçons du Module 1</h2>
                  <p className="muted-text">Fondamentaux de la journalisation</p>
                </div>
                <span className="mono-num muted-text">3 leçons</span>
              </div>

              <div className="module-block">
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">01. Journaux texte vs journaux JSON</div>
                    <div className="muted-text">Leçon 1</div>
                  </div>
                  <div className="filter-toolbar">
                    <button type="button" className="btn btn-ghost btn-sm">Éditer</button>
                    <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                  </div>
                </div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">02. Niveaux de gravité adaptés</div>
                    <div className="muted-text">Leçon 2</div>
                  </div>
                  <div className="filter-toolbar">
                    <button type="button" className="btn btn-ghost btn-sm">Éditer</button>
                    <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                  </div>
                </div>
                <div className="lesson-row">
                  <div>
                    <div className="lesson-row-title">03. Identifiant de corrélation par requête</div>
                    <div className="muted-text">Leçon 3</div>
                  </div>
                  <div className="filter-toolbar">
                    <button type="button" className="btn btn-ghost btn-sm">Éditer</button>
                    <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                  </div>
                </div>
              </div>

              <form className="form-grid" action="#" method="post">
                <div className="field">
                  <label className="field-label" htmlFor="lesson-title-input">Titre de la leçon</label>
                  <input id="lesson-title-input" name="titre" type="text" className="input" placeholder="Ex. 04. Tracer les temps de réponse" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="lesson-content-input">Contenu pédagogique de la leçon</label>
                  <textarea id="lesson-content-input" name="contenu" className="textarea" placeholder="Rédigez le contenu complet de la leçon..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer la leçon</button>
              </form>
            </div>
          </section>
        </div>
      </div>
      
    </>
  )
}