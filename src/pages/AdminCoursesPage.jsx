import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function AdminCoursesPage() {
  return (
    <>

      <div className="workspace-shell">
        <aside className="workspace-sidebar" aria-label="Menu d'administration">
          <div className="sidebar-heading">
            <div className="author-inline">
              <img src={images.instructorPortrait} alt="Aminata Touré" className="avatar-md" referrerPolicy="no-referrer" />
              <div>
                <div><strong>Aminata Touré</strong></div>
                <div className="muted-text">Administratrice</div>
              </div>
            </div>
          </div>
          <nav className="sidebar-nav">
            <Link to="/admin/tableau-de-bord" className="sidebar-link">Tableau de bord</Link>
            <Link to="/admin/utilisateurs" className="sidebar-link">Utilisateurs</Link>
            <Link to="/admin/cours" className="sidebar-link is-active" aria-current="page">Cours</Link>
            <Link to="/admin/roles-acces" className="sidebar-link">Rôles &amp; accès</Link>
            <Link to="/admin/securite" className="sidebar-link">Sécurité</Link>
            <Link to="/admin/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="admin-courses-heading">
            <div className="section-header">
              <div>
                <h1 className="page-title" id="admin-courses-heading">Gestion des cours</h1>
                <p className="lead-text">
                  Supervisez l’ensemble des formations de la plateforme, quel que soit leur enseignant créateur.
                </p>
              </div>
            </div>

            <form className="surface-panel filter-toolbar" action="#" method="get" aria-label="Filtrer les formations">
              <div className="search-input-wrap" style={{ flex: '1 1 260px' }}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" className="input" placeholder="Rechercher un cours ou un enseignant..." aria-label="Rechercher un cours" />
              </div>

              <div className="segmented" role="group" aria-label="Filtrer par statut de publication">
                <Link to="/admin/cours" className="segmented-item is-active">Tous (12)</Link>
                <Link to="/admin/cours" className="segmented-item">Publiés (9)</Link>
                <Link to="/admin/cours" className="segmented-item">Brouillons (3)</Link>
              </div>
            </form>
          </section>

          <section className="table-wrap" aria-label="Tableau global des formations">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Formation</th>
                  <th>Enseignant</th>
                  <th>Structure</th>
                  <th>Inscrits</th>
                  <th>Statut</th>
                  <th className="col-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Architecture Express &amp; TypeScript Modulaire</strong></td>
                  <td>Moussa Diop</td>
                  <td className="mono-num">4 mod. · 12 leç.</td>
                  <td className="mono-num">18</td>
                  <td><span className="status-label is-success">Publié</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <button type="button" className="btn btn-secondary btn-sm">Dépublier</button>
                      <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Modélisation MySQL &amp; Migrations Sequelize</strong></td>
                  <td>Fatou Sow</td>
                  <td className="mono-num">4 mod. · 14 leç.</td>
                  <td className="mono-num">24</td>
                  <td><span className="status-label is-success">Publié</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <button type="button" className="btn btn-secondary btn-sm">Dépublier</button>
                      <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Sécurité des API, JWT &amp; Rotation des Sessions</strong></td>
                  <td>Moussa Diop</td>
                  <td className="mono-num">3 mod. · 10 leç.</td>
                  <td className="mono-num">15</td>
                  <td><span className="status-label is-success">Publié</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <button type="button" className="btn btn-secondary btn-sm">Dépublier</button>
                      <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Journalisation structurée &amp; Diagnostic Node.js</strong></td>
                  <td>Moussa Diop</td>
                  <td className="mono-num">2 mod. · 5 leç.</td>
                  <td className="mono-num">0</td>
                  <td><span className="status-label is-warning">Brouillon</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <button type="button" className="btn btn-primary btn-sm">Publier</button>
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