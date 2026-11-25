import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function TeacherCoursesPage() {
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
            <Link to="/enseignant/cours-crees" className="sidebar-link is-active" aria-current="page">Cours créés (4)</Link>
            <Link to="/enseignant/studio" className="sidebar-link">Studio pédagogique</Link>
            <Link to="/enseignant/inscriptions" className="sidebar-link">Inscriptions</Link>
            <Link to="/enseignant/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="created-courses-heading">
            <div className="section-header">
              <div>
                <h1 className="page-title" id="created-courses-heading">Mes cours créés</h1>
                <p className="lead-text">
                  Gérez uniquement les formations dont vous êtes le formateur : publication, édition des modules et suppression des brouillons.
                </p>
              </div>
              <Link to="/enseignant/studio" className="btn btn-primary">+ Nouveau cours</Link>
            </div>

            <div className="surface-panel filter-toolbar">
              <div className="search-input-wrap" style={{ flex: '1 1 240px' }}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" className="input" placeholder="Filtrer vos formations..." aria-label="Filtrer vos formations" />
              </div>

              <div className="segmented" role="group" aria-label="Filtrer par statut">
                <Link to="/enseignant/cours-crees" className="segmented-item is-active">Tous (4)</Link>
                <Link to="/enseignant/cours-crees" className="segmented-item">Publiés (3)</Link>
                <Link to="/enseignant/cours-crees" className="segmented-item">Brouillons (1)</Link>
              </div>
            </div>
          </section>

          <section className="table-wrap" aria-label="Tableau des formations créées">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Formation</th>
                  <th>Catégorie</th>
                  <th>Contenu</th>
                  <th>Inscrits</th>
                  <th>Statut</th>
                  <th className="col-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Architecture Express &amp; TypeScript Modulaire</strong></td>
                  <td>Backend</td>
                  <td className="mono-num">4 mod. · 12 leç.</td>
                  <td className="mono-num">18</td>
                  <td><span className="status-label is-success">Publié</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/enseignant/studio" className="btn btn-secondary btn-sm">Studio</Link>
                      <Link to="/enseignant/inscriptions" className="btn btn-ghost btn-sm">Inscrits</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Sécurité des API, JWT &amp; Rotation des Sessions</strong></td>
                  <td>Sécurité</td>
                  <td className="mono-num">3 mod. · 10 leç.</td>
                  <td className="mono-num">15</td>
                  <td><span className="status-label is-success">Publié</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/enseignant/studio" className="btn btn-secondary btn-sm">Studio</Link>
                      <Link to="/enseignant/inscriptions" className="btn btn-ghost btn-sm">Inscrits</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Tests unitaires et d’intégration avec Vitest</strong></td>
                  <td>Qualité logicielle</td>
                  <td className="mono-num">3 mod. · 9 leç.</td>
                  <td className="mono-num">9</td>
                  <td><span className="status-label is-success">Publié</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/enseignant/studio" className="btn btn-secondary btn-sm">Studio</Link>
                      <Link to="/enseignant/inscriptions" className="btn btn-ghost btn-sm">Inscrits</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Journalisation structurée &amp; Diagnostic Node.js</strong></td>
                  <td>Qualité logicielle</td>
                  <td className="mono-num">2 mod. · 5 leç.</td>
                  <td className="mono-num">0</td>
                  <td><span className="status-label is-warning">Brouillon</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/enseignant/studio" className="btn btn-primary btn-sm">Éditer</Link>
                      <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    
    </>
  )
}