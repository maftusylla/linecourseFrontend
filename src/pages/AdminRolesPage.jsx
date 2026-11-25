import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function AdminRolesPage() {
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
            <Link to="/admin/roles-acces" className="sidebar-link is-active" aria-current="page">Rôles &amp; accès</Link>
            <Link to="/admin/securite" className="sidebar-link">Sécurité</Link>
            <Link to="/admin/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-sm" aria-labelledby="roles-heading">
            <h1 className="page-title" id="roles-heading">Rôles &amp; contrôle d’accès</h1>
            <p className="lead-text">
              Attribuez les rôles fonctionnels aux comptes existants et gérez l’activation ou la suspension d’accès.
            </p>
          </section>

          <section className="two-col-panels" aria-label="Attribution des rôles et statut">
            <form className="surface-panel stack-md" action="#" method="post">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Attribuer ou modifier un rôle</h2>
                  <p className="muted-text">Chaque compte dispose d’un rôle unique parmi les trois profils de LineCourse.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label className="field-label" htmlFor="role-user-select">Compte utilisateur</label>
                  <select id="role-user-select" name="userId" className="select">
                    <option value="awa">Awa Ndiaye (awa.ndiaye@linecourse.edu) — Apprenant</option>
                    <option value="moussa">Moussa Diop (moussa.diop@linecourse.edu) — Enseignant</option>
                    <option value="cheikh">Cheikh Gueye (cheikh.gueye@linecourse.edu) — Apprenant</option>
                  </select>
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="role-value-select">Nouveau rôle</label>
                  <select id="role-value-select" name="role" className="select" defaultValue="teacher">
                    <option value="learner">Apprenant</option>
                    <option value="teacher">Enseignant</option>
                    <option value="admin">Administrateur</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Enregistrer le rôle</button>
            </form>

            <form className="surface-panel stack-md" action="#" method="post">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Activation / désactivation d’un compte</h2>
                  <p className="muted-text">La désactivation révoque immédiatement les jetons de session associés.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label className="field-label" htmlFor="status-user-select">Compte utilisateur</label>
                  <select id="status-user-select" name="userId" className="select">
                    <option value="oumar">Oumar Sarr (oumar.sarr@linecourse.edu) — Désactivé</option>
                    <option value="cheikh">Cheikh Gueye (cheikh.gueye@linecourse.edu) — Actif</option>
                  </select>
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="status-action-select">État souhaité</label>
                  <select id="status-action-select" name="is_active" className="select">
                    <option value="true">Activer le compte</option>
                    <option value="false">Désactiver le compte</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-secondary">Appliquer l’état du compte</button>
            </form>
          </section>

          <section className="surface-panel stack-md" aria-labelledby="permissions-matrix-heading">
            <div>
              <h2 className="section-title" id="permissions-matrix-heading">Périmètre fonctionnel par rôle</h2>
              <p className="muted-text">Référence statique des droits appliqués sur la plateforme.</p>
            </div>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Capacité métier</th>
                    <th>Apprenant</th>
                    <th>Enseignant</th>
                    <th>Administrateur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Consulter le catalogue publié</td>
                    <td><span className="status-label is-success">Autorisé</span></td>
                    <td><span className="status-label is-success">Autorisé</span></td>
                    <td><span className="status-label is-success">Autorisé</span></td>
                  </tr>
                  <tr>
                    <td>S’inscrire aux formations et enregistrer sa progression</td>
                    <td><span className="status-label is-success">Autorisé</span></td>
                    <td><span className="muted-text">Non applicable</span></td>
                    <td><span className="muted-text">Non applicable</span></td>
                  </tr>
                  <tr>
                    <td>Créer, éditer et publier ses propres formations (modules &amp; leçons)</td>
                    <td><span className="muted-text">Non autorisé</span></td>
                    <td><span className="status-label is-success">Ses cours uniquement</span></td>
                    <td><span className="status-label is-success">Tous les cours</span></td>
                  </tr>
                  <tr>
                    <td>Inscrire ou retirer un apprenant sur une formation</td>
                    <td><span className="muted-text">Soi-même uniquement</span></td>
                    <td><span className="status-label is-success">Ses cours uniquement</span></td>
                    <td><span className="status-label is-success">Tous les cours</span></td>
                  </tr>
                  <tr>
                    <td>Gérer les comptes utilisateurs, rôles et journaux de sécurité</td>
                    <td><span className="muted-text">Non autorisé</span></td>
                    <td><span className="muted-text">Non autorisé</span></td>
                    <td><span className="status-label is-success">Accès complet</span></td>
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