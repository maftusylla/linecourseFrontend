import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function AdminProfilePage() {
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
            <Link to="/admin/securite" className="sidebar-link">Sécurité</Link>
            <Link to="/admin/profil" className="sidebar-link is-active" aria-current="page">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="surface-panel" aria-labelledby="admin-profile-heading">
            <div className="section-header">
              <div className="author-inline">
                <img src={images.instructorPortrait} alt="Aminata Touré" className="avatar-lg" referrerPolicy="no-referrer" />
                <div className="stack-sm">
                  <div className="meta-line">
                    <span>Administratrice</span>
                    <span aria-hidden="true">·</span>
                    <span className="status-label is-success">E-mail vérifié</span>
                  </div>
                  <h1 className="page-title" id="admin-profile-heading">Aminata Touré</h1>
                  <span className="muted-text">aminata.toure@linecourse.edu · Compte protégé</span>
                </div>
              </div>
              <Link to="/connexion" className="btn btn-secondary">Déconnexion</Link>
            </div>
          </section>

          <section className="two-col-panels" aria-label="Informations et mot de passe administrateur">
            <div className="stack-lg">
              <form className="surface-panel stack-md" action="#" method="post">
                <div className="panel-header">
                  <div>
                    <h2 className="card-title">Informations personnelles</h2>
                    <p className="muted-text">Coordonnées du compte administrateur.</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="admin-name">Nom complet</label>
                    <input id="admin-name" name="name" type="text" className="input" defaultValue="Aminata Touré" required />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Mettre à jour le nom</button>
              </form>

              <form className="surface-panel stack-md" action="#" method="post">
                <div className="panel-header">
                  <div>
                    <h2 className="card-title">Adresse e-mail</h2>
                    <p className="muted-text">Nécessite votre mot de passe actuel et une nouvelle vérification.</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="admin-email">Nouvelle adresse e-mail</label>
                    <input id="admin-email" name="email" type="email" className="input" defaultValue="aminata.toure@linecourse.edu" required />
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="admin-email-pwd">Mot de passe actuel</label>
                    <input id="admin-email-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
                  </div>
                </div>

                <button type="submit" className="btn btn-secondary">Modifier l’adresse e-mail</button>
              </form>
            </div>

            <form className="surface-panel stack-md" action="#" method="post">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Modifier le mot de passe</h2>
                  <p className="muted-text">Renouvelez régulièrement votre mot de passe administrateur.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label className="field-label" htmlFor="admin-cur-pwd">Mot de passe actuel</label>
                  <input id="admin-cur-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="admin-new-pwd">Nouveau mot de passe</label>
                  <input id="admin-new-pwd" name="password" type="password" className="input" placeholder="Minimum 8 caractères" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="admin-confirm-pwd">Confirmation du mot de passe</label>
                  <input id="admin-confirm-pwd" name="password_confirmation" type="password" className="input" placeholder="Répétez le nouveau mot de passe" required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Mettre à jour le mot de passe</button>
            </form>
          </section>

          <section className="surface-panel stack-md" aria-labelledby="admin-sessions-heading">
            <div className="panel-header">
              <div>
                <h2 className="card-title" id="admin-sessions-heading">Sessions actives de votre compte</h2>
                <p className="muted-text">Postes actuellement authentifiés avec ce compte administrateur.</p>
              </div>
              <button type="button" className="btn btn-secondary btn-sm">Déconnecter les autres sessions</button>
            </div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Appareil</th>
                    <th>Adresse IP</th>
                    <th>Dernière activité</th>
                    <th>Statut</th>
                    <th className="col-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Firefox · Linux Desktop</td>
                    <td className="mono-num">192.168.1.8</td>
                    <td>Aujourd’hui, 09:50</td>
                    <td><span className="status-label is-success">Session actuelle</span></td>
                    <td className="col-right"><span className="muted-text">—</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-panel stack-md" aria-labelledby="admin-protection-heading">
            <h2 className="card-title" id="admin-protection-heading">Protection du compte administrateur</h2>
            <div className="alert-banner is-info">
              <div>
                <strong className="alert-title">Auto-désactivation bloquée</strong>
                <span>Par sécurité, un compte administrateur ne peut pas se désactiver lui-même afin d’éviter toute perte d’accès à l’administration de LineCourse.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    
    </>
  )
}