import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function AdminSecurityPage() {
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
            <Link to="/admin/cours" className="sidebar-link">Cours</Link>
            <Link to="/admin/roles-acces" className="sidebar-link">Rôles &amp; accès</Link>
            <Link to="/admin/securite" className="sidebar-link is-active" aria-current="page">Sécurité</Link>
            <Link to="/admin/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="security-heading">
            <div>
              <h1 className="page-title" id="security-heading">Sécurité &amp; journal des événements</h1>
              <p className="lead-text">
                Consultez l’historique des événements d’authentification et contrôlez les sessions ouvertes.
              </p>
            </div>

            <form className="surface-panel filter-toolbar" action="#" method="get" aria-label="Filtrer les événements de sécurité">
              <div className="search-input-wrap" style={{ flex: '1 1 250px' }}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" className="input" placeholder="Filtrer par utilisateur ou IP..." aria-label="Filtrer par utilisateur ou IP" />
              </div>

              <div className="segmented" role="group" aria-label="Filtrer par type d'événement">
                <Link to="/admin/securite" className="segmented-item is-active">Tous</Link>
                <Link to="/admin/securite" className="segmented-item">Connexions</Link>
                <Link to="/admin/securite" className="segmented-item">Échecs</Link>
                <Link to="/admin/securite" className="segmented-item">Mots de passe</Link>
              </div>
            </form>
          </section>

          <section className="surface-panel stack-md" aria-labelledby="audit-events-heading">
            <div className="panel-header">
              <div>
                <h2 className="card-title" id="audit-events-heading">Événements récents d’authentification</h2>
                <p className="muted-text">Journalisation statique à titre de maquette visuelle.</p>
              </div>
            </div>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Horodatage</th>
                    <th>Événement</th>
                    <th>Compte concerné</th>
                    <th>Adresse IP</th>
                    <th>Résultat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mono-num">25 nov. 2026 · 09:42</td>
                    <td>Connexion par mot de passe</td>
                    <td>moussa.diop@linecourse.edu</td>
                    <td className="mono-num">192.168.1.12</td>
                    <td><span className="status-label is-success">Succès</span></td>
                  </tr>
                  <tr>
                    <td className="mono-num">25 nov. 2026 · 09:18</td>
                    <td>Tentative de connexion</td>
                    <td>cheikh.gueye@linecourse.edu</td>
                    <td className="mono-num">41.82.194.88</td>
                    <td><span className="status-label is-danger">Échec (mot de passe)</span></td>
                  </tr>
                  <tr>
                    <td className="mono-num">24 nov. 2026 · 21:05</td>
                    <td>Vérification d’adresse e-mail</td>
                    <td>mariama.ba@linecourse.edu</td>
                    <td className="mono-num">105.235.112.40</td>
                    <td><span className="status-label is-success">Confirmée</span></td>
                  </tr>
                  <tr>
                    <td className="mono-num">24 nov. 2026 · 17:30</td>
                    <td>Réinitialisation du mot de passe</td>
                    <td>ibrahima.fall@linecourse.edu</td>
                    <td className="mono-num">41.82.190.15</td>
                    <td><span className="status-label is-info">Jeton consommé</span></td>
                  </tr>
                  <tr>
                    <td className="mono-num">24 nov. 2026 · 14:12</td>
                    <td>Désactivation administrative</td>
                    <td>oumar.sarr@linecourse.edu</td>
                    <td className="mono-num">192.168.1.8</td>
                    <td><span className="status-label is-warning">Sessions révoquées</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-panel stack-md" aria-labelledby="global-sessions-heading">
            <div className="panel-header">
              <div>
                <h2 className="card-title" id="global-sessions-heading">Supervision des sessions actives</h2>
                <p className="muted-text">Révoquez manuellement une session active en cas d’anomalie.</p>
              </div>
            </div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Utilisateur</th>
                    <th>Appareil</th>
                    <th>Adresse IP</th>
                    <th>Expiration du rafraîchissement</th>
                    <th className="col-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Awa Ndiaye</td>
                    <td>Firefox · Linux Desktop</td>
                    <td className="mono-num">192.168.1.24</td>
                    <td className="mono-num">02 déc. 2026</td>
                    <td className="col-right">
                      <button type="button" className="btn btn-danger btn-sm">Révoquer</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Moussa Diop</td>
                    <td>Firefox · macOS</td>
                    <td className="mono-num">192.168.1.12</td>
                    <td className="mono-num">02 déc. 2026</td>
                    <td className="col-right">
                      <button type="button" className="btn btn-danger btn-sm">Révoquer</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    
    </>
  )
}