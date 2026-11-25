import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function LearnerProfilePage() {
  return (
    <>

      <section className="surface-panel" aria-labelledby="learner-profile-heading">
        <div className="section-header">
          <div className="author-inline">
            <img
              src={images.learnerPortrait}
              alt="Awa Ndiaye"
              className="avatar-lg"
              referrerPolicy="no-referrer"
            />
            <div className="stack-sm">
              <div className="meta-line">
                <span>Apprenante</span>
                <span aria-hidden="true">·</span>
                <span className="status-label is-success">E-mail vérifié</span>
              </div>
              <h1 className="page-title" id="learner-profile-heading">Awa Ndiaye</h1>
              <span className="muted-text">awa.ndiaye@linecourse.edu · Inscrite depuis le 10 nov. 2026</span>
            </div>
          </div>
          <Link to="/connexion" className="btn btn-secondary">Fermer cette session</Link>
        </div>
      </section>

      <section className="two-col-panels" aria-label="Informations personnelles et sécurité">
        <div className="stack-lg">
          <form className="surface-panel stack-md" action="#" method="post">
            <div className="panel-header">
              <div>
                <h2 className="card-title">Informations personnelles</h2>
                <p className="muted-text">Mettez à jour votre nom affiché sur la plateforme.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="field">
                <label className="field-label" htmlFor="learner-name">Nom complet</label>
                <input id="learner-name" name="name" type="text" className="input" defaultValue="Awa Ndiaye" required />
              </div>
            </div>

            <div className="filter-toolbar">
              <button type="submit" className="btn btn-primary">Enregistrer le nom</button>
            </div>
          </form>

          <form className="surface-panel stack-md" action="#" method="post">
            <div className="panel-header">
              <div>
                <h2 className="card-title">Adresse e-mail</h2>
                <p className="muted-text">Le changement d’adresse e-mail requiert votre mot de passe actuel et une nouvelle vérification.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="field">
                <label className="field-label" htmlFor="learner-email">Nouvelle adresse e-mail</label>
                <input id="learner-email" name="email" type="email" className="input" defaultValue="awa.ndiaye@linecourse.edu" required />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="learner-email-pwd">Mot de passe actuel</label>
                <input id="learner-email-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
              </div>
            </div>

            <div className="filter-toolbar">
              <button type="submit" className="btn btn-secondary">Modifier l’adresse e-mail</button>
            </div>
          </form>
        </div>

        <form className="surface-panel stack-md" action="#" method="post">
          <div className="panel-header">
            <div>
              <h2 className="card-title">Modifier le mot de passe</h2>
              <p className="muted-text">Choisissez un mot de passe robuste d’au moins 8 caractères.</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label className="field-label" htmlFor="learner-current-pwd">Mot de passe actuel</label>
              <input id="learner-current-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="learner-new-pwd">Nouveau mot de passe</label>
              <input id="learner-new-pwd" name="password" type="password" className="input" placeholder="Minimum 8 caractères" required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="learner-confirm-pwd">Confirmation du mot de passe</label>
              <input id="learner-confirm-pwd" name="password_confirmation" type="password" className="input" placeholder="Répétez le nouveau mot de passe" required />
            </div>
          </div>

          <div className="filter-toolbar">
            <button type="submit" className="btn btn-primary">Mettre à jour le mot de passe</button>
          </div>
        </form>
      </section>

      <section className="surface-panel stack-md" aria-labelledby="sessions-heading">
        <div className="panel-header">
          <div>
            <h2 className="card-title" id="sessions-heading">Sessions actives</h2>
            <p className="muted-text">Appareils connectés à votre compte apprenant.</p>
          </div>
          <form action="#" method="post">
            <button type="submit" className="btn btn-secondary btn-sm">Déconnecter les autres sessions</button>
          </form>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Appareil / Navigateur</th>
                <th>Adresse IP</th>
                <th>Dernière activité</th>
                <th>Statut</th>
                <th className="col-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Firefox · Linux Desktop</td>
                <td className="mono-num">192.168.1.24</td>
                <td>Aujourd’hui, 10:15</td>
                <td><span className="status-label is-success">Session actuelle</span></td>
                <td className="col-right"><span className="muted-text">—</span></td>
              </tr>
              <tr>
                <td>Chrome Mobile · Android</td>
                <td className="mono-num">105.235.112.40</td>
                <td>Hier, 21:04</td>
                <td><span className="status-label is-info">Active</span></td>
                <td className="col-right">
                  <form action="#" method="post">
                    <button type="submit" className="btn btn-ghost btn-sm">Révoquer</button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="surface-panel stack-md" aria-labelledby="danger-zone-heading">
        <div>
          <h2 className="card-title" id="danger-zone-heading">Désactivation du compte</h2>
          <p className="muted-text">
            La désactivation suspend l’accès à vos cours et révoque vos jetons de session actifs.
          </p>
        </div>
        <form className="form-grid" action="#" method="post">
          <div className="form-grid-2">
            <div className="field">
              <label className="field-label" htmlFor="learner-deact-pwd">Mot de passe actuel</label>
              <input id="learner-deact-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="learner-deact-confirm">Saisissez DESACTIVER pour confirmer</label>
              <input id="learner-deact-confirm" name="confirmation" type="text" className="input" placeholder="DESACTIVER" required />
            </div>
          </div>
          <div className="filter-toolbar">
            <button type="submit" className="btn btn-danger btn-sm">Désactiver mon compte</button>
          </div>
        </form>
      </section>
    
    </>
  )
}