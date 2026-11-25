import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <>

      <section className="auth-layout" aria-labelledby="register-heading">
        <div className="auth-visual">
          <img
            src={images.heroStudio}
            alt="Espace d'apprentissage LineCourse"
            referrerPolicy="no-referrer"
          />
          <div className="auth-visual-overlay">
            <span className="hero-kicker" style={{ color: '#fbbf24' }}>Nouveau compte apprenant</span>
            <h1 className="section-title" style={{ color: '#f5f4f1' }}>
              Rejoignez LineCourse et démarrez votre parcours.
            </h1>
            <p style={{ margin: '0', color: '#d6d3cd', maxWidth: '44ch' }}>
              La création de compte attribue un profil apprenant et envoie un message de vérification afin de sécuriser l’accès aux formations.
            </p>
          </div>
        </div>

        <div className="auth-panel">
          <div>
            <h2 className="page-title" id="register-heading">Créer un compte apprenant</h2>
            <p className="muted-text" style={{ marginTop: '0.35rem' }}>
              Tous les champs sont requis pour valider votre inscription.
            </p>
          </div>

          <form className="form-grid" action="#" method="post">
            <div className="field">
              <label className="field-label" htmlFor="reg-name">Nom complet</label>
              <input className="input" id="reg-name" name="name" type="text" placeholder="Awa Ndiaye" required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="reg-email">Adresse e-mail</label>
              <input className="input" id="reg-email" name="email" type="email" placeholder="awa.ndiaye@exemple.com" required />
            </div>

            <div className="form-grid-2">
              <div className="field">
                <label className="field-label" htmlFor="reg-password">Mot de passe</label>
                <input className="input" id="reg-password" name="password" type="password" placeholder="Min. 8 caractères" required />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="reg-confirm">Confirmation</label>
                <input className="input" id="reg-confirm" name="password_confirmation" type="password" placeholder="Répéter le mot de passe" required />
              </div>
            </div>

            <span className="field-hint">
              Minimum 8 caractères incluant une majuscule, une minuscule et un chiffre.
            </span>

            <button type="submit" className="btn btn-primary btn-block">Créer mon compte</button>

            <div className="meta-line">
              <span>Déjà inscrit ?</span>
              <Link to="/connexion" className="inline-link">Se connecter</Link>
            </div>
          </form>
        </div>
      </section>
    
    </>
  )
}