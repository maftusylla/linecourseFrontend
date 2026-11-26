import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function TeacherProfilePage() {
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
            <Link to="/enseignant/studio" className="sidebar-link">Studio pédagogique</Link>
            <Link to="/enseignant/inscriptions" className="sidebar-link">Inscriptions</Link>
            <Link to="/enseignant/profil" className="sidebar-link is-active" aria-current="page">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="surface-panel" aria-labelledby="teacher-profile-heading">
            <div className="section-header">
              <div className="author-inline">
                <img src={images.instructorPortrait} alt="Moussa Diop" className="avatar-lg" referrerPolicy="no-referrer" />
                <div className="stack-sm">
                  <div className="meta-line">
                    <span>Enseignant</span>
                    <span aria-hidden="true">·</span>
                    <span className="status-label is-success">E-mail vérifié</span>
                  </div>
                  <h1 className="page-title" id="teacher-profile-heading">Moussa Diop</h1>
                  <span className="muted-text">moussa.diop@linecourse.edu · Compte actif</span>
                </div>
              </div>
              <Link to="/connexion" className="btn btn-secondary">Déconnexion</Link>
            </div>
          </section>

          <section className="two-col-panels" aria-label="Paramètres du compte enseignant">
            <div className="stack-lg">
              <form className="surface-panel stack-md" action="#" method="post">
                <div className="panel-header">
                  <div>
                    <h2 className="card-title">Informations personnelles</h2>
                    <p className="muted-text">Identité affichée sur vos fiches de formation.</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="teacher-name">Nom complet</label>
                    <input id="teacher-name" name="name" type="text" className="input" defaultValue="Moussa Diop" required />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Mettre à jour le nom</button>
              </form>

              <form className="surface-panel stack-md" action="#" method="post">
                <div className="panel-header">
                  <div>
                    <h2 className="card-title">Adresse e-mail</h2>
                    <p className="muted-text">Nécessite votre mot de passe actuel et une confirmation.</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="teacher-email">Nouvelle adresse e-mail</label>
                    <input id="teacher-email" name="email" type="email" className="input" defaultValue="moussa.diop@linecourse.edu" required />
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="teacher-email-pwd">Mot de passe actuel</label>
                    <input id="teacher-email-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
                  </div>
                </div>

                <button type="submit" className="btn btn-secondary">Modifier l’adresse e-mail</button>
              </form>
            </div>

            <form className="surface-panel stack-md" action="#" method="post">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">Changer le mot de passe</h2>
                  <p className="muted-text">Sécurisez l’accès au studio pédagogique.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label className="field-label" htmlFor="teacher-cur-pwd">Mot de passe actuel</label>
                  <input id="teacher-cur-pwd" name="current_password" type="password" className="input" placeholder="••••••••••••" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="teacher-new-pwd">Nouveau mot de passe</label>
                  <input id="teacher-new-pwd" name="password" type="password" className="input" placeholder="Minimum 8 caractères" required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="teacher-confirm-pwd">Confirmation du mot de passe</label>
                  <input id="teacher-confirm-pwd" name="password_confirmation" type="password" className="input" placeholder="Répétez le nouveau mot de passe" required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Enregistrer le mot de passe</button>
            </form>
          </section>

        </div>
      </div>
    
    </>
  )
}