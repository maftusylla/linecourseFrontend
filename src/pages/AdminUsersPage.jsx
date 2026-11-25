import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function AdminUsersPage() {
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
            <Link to="/admin/utilisateurs" className="sidebar-link is-active" aria-current="page">Utilisateurs</Link>
            <Link to="/admin/cours" className="sidebar-link">Cours</Link>
            <Link to="/admin/roles-acces" className="sidebar-link">Rôles &amp; accès</Link>
            <Link to="/admin/securite" className="sidebar-link">Sécurité</Link>
            <Link to="/admin/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="users-heading">
            <div className="section-header">
              <div>
                <h1 className="page-title" id="users-heading">Gestion des utilisateurs</h1>
                <p className="lead-text">
                  Recherchez un compte, consultez son état de vérification ou créez un nouvel utilisateur.
                </p>
              </div>
              <a href="#create-user-form" className="btn btn-primary">+ Créer un utilisateur</a>
            </div>

            <form className="surface-panel filter-toolbar" action="#" method="get" aria-label="Filtres des utilisateurs">
              <div className="search-input-wrap" style={{ flex: '1 1 250px' }}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" className="input" placeholder="Rechercher par nom ou e-mail..." aria-label="Rechercher par nom ou e-mail" />
              </div>

              <div className="segmented" role="group" aria-label="Filtrer par rôle">
                <Link to="/admin/utilisateurs" className="segmented-item is-active">Tous</Link>
                <Link to="/admin/utilisateurs" className="segmented-item">Apprenant</Link>
                <Link to="/admin/utilisateurs" className="segmented-item">Enseignant</Link>
                <Link to="/admin/utilisateurs" className="segmented-item">Admin</Link>
              </div>

              <select className="select" aria-label="Filtrer par statut" style={{ width: 'auto', minWidth: '160px' }}>
                <option value="all">Tous les statuts</option>
                <option value="active">Actifs</option>
                <option value="unverified">Non vérifiés</option>
                <option value="disabled">Désactivés</option>
              </select>
            </form>
          </section>

          <section className="table-wrap" aria-label="Liste des utilisateurs">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Adresse e-mail</th>
                  <th>Rôle</th>
                  <th>Vérification e-mail</th>
                  <th>Statut</th>
                  <th className="col-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Awa Ndiaye</strong></td>
                  <td className="muted-text">awa.ndiaye@linecourse.edu</td>
                  <td>Apprenant</td>
                  <td><span className="status-label is-success">Vérifié</span></td>
                  <td><span className="status-label is-success">Actif</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/admin/roles-acces" className="btn btn-secondary btn-sm">Rôle</Link>
                      <button type="button" className="btn btn-ghost btn-sm">Désactiver</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Moussa Diop</strong></td>
                  <td className="muted-text">moussa.diop@linecourse.edu</td>
                  <td>Enseignant</td>
                  <td><span className="status-label is-success">Vérifié</span></td>
                  <td><span className="status-label is-success">Actif</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/admin/roles-acces" className="btn btn-secondary btn-sm">Rôle</Link>
                      <button type="button" className="btn btn-ghost btn-sm">Désactiver</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Cheikh Gueye</strong></td>
                  <td className="muted-text">cheikh.gueye@linecourse.edu</td>
                  <td>Apprenant</td>
                  <td><span className="status-label is-warning">En attente</span></td>
                  <td><span className="status-label is-info">Actif</span></td>
                  <td className="col-right">
                    <div className="filter-toolbar" style={{ justifyContent: 'flex-end' }}>
                      <Link to="/admin/roles-acces" className="btn btn-secondary btn-sm">Rôle</Link>
                      <button type="button" className="btn btn-ghost btn-sm">Désactiver</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>Aminata Touré</strong></td>
                  <td className="muted-text">aminata.toure@linecourse.edu</td>
                  <td>Administrateur</td>
                  <td><span className="status-label is-success">Vérifié</span></td>
                  <td><span className="status-label is-success">Actif</span></td>
                  <td className="col-right"><span className="muted-text">Compte protégé</span></td>
                </tr>
                <tr>
                  <td><strong>Oumar Sarr</strong></td>
                  <td className="muted-text">oumar.sarr@linecourse.edu</td>
                  <td>Apprenant</td>
                  <td><span className="status-label is-success">Vérifié</span></td>
                  <td><span className="status-label is-danger">Désactivé</span></td>
                  <td className="col-right">
                    <button type="button" className="btn btn-secondary btn-sm">Réactiver</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="two-col-panels" aria-label="Création et détail utilisateur">
            <div className="surface-panel stack-md">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Fiche rapide du compte sélectionné</h2>
                  <p className="muted-text">Awa Ndiaye · Apprenante</p>
                </div>
                <span className="status-label is-success">Compte actif</span>
              </div>
              <div className="stack-sm">
                <div className="meta-line"><strong>E-mail :</strong><span>awa.ndiaye@linecourse.edu</span></div>
                <div className="meta-line"><strong>Vérification :</strong><span>Confirmée le 10 nov. 2026</span></div>
                <div className="meta-line"><strong>Formations suivies :</strong><span className="mono-num">3 inscriptions</span></div>
                <div className="meta-line"><strong>Sessions actives :</strong><span className="mono-num">2 appareils</span></div>
              </div>
            </div>

            <form id="create-user-form" className="surface-panel stack-md" action="#" method="post">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Créer un compte utilisateur</h2>
                  <p className="muted-text">Provisionnement direct par l’administrateur.</p>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label className="field-label" htmlFor="admin-new-name">Nom complet</label>
                  <input id="admin-new-name" name="name" type="text" className="input" placeholder="Fatou Sow" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="admin-new-role">Rôle attribué</label>
                  <select id="admin-new-role" name="role" className="select">
                    <option value="learner">Apprenant</option>
                    <option value="teacher">Enseignant</option>
                    <option value="admin">Administrateur</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label className="field-label" htmlFor="admin-new-email">Adresse e-mail</label>
                  <input id="admin-new-email" name="email" type="email" className="input" placeholder="nom@linecourse.edu" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="admin-new-pwd">Mot de passe initial</label>
                  <input id="admin-new-pwd" name="password" type="password" className="input" placeholder="Minimum 8 caractères" required />
                </div>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="admin-new-pwd-confirm">Confirmation du mot de passe</label>
                <input id="admin-new-pwd-confirm" name="password_confirmation" type="password" className="input" placeholder="Répéter le mot de passe" required />
              </div>

              <button type="submit" className="btn btn-primary">Créer l’utilisateur</button>
            </form>
          </section>
        </div>
      </div>
    
    </>
  )
}