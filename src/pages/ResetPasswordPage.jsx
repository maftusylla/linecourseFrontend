import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function ResetPasswordPage() {
  return (
    <>

      <section className="auth-layout" aria-labelledby="reset-heading">
        <div className="auth-visual">
          <img
            src={images.courseSecurity}
            alt="Renouvellement sécurisé du mot de passe"
            referrerPolicy="no-referrer"
          />
          <div className="auth-visual-overlay">
            <span className="hero-kicker" style={{ color: '#fbbf24' }}>Nouveau mot de passe</span>
            <h1 className="section-title" style={{ color: '#f5f4f1' }}>
              Définissez un mot de passe robuste et fermez les anciennes sessions.
            </h1>
            <p style={{ margin: '0', color: '#d6d3cd', maxWidth: '44ch' }}>
              Après réinitialisation, toutes vos sessions ouvertes sur d’autres appareils sont automatiquement révoquées par sécurité.
            </p>
          </div>
        </div>

        <div className="auth-panel">
          <div>
            <h2 className="page-title" id="reset-heading">Réinitialiser le mot de passe</h2>
            <p className="muted-text" style={{ marginTop: '0.35rem' }}>
              Renseignez le jeton reçu par e-mail puis votre nouveau mot de passe.
            </p>
          </div>

          <form className="form-grid" action="connexion.html" method="get">
            <div className="field">
              <label className="field-label" htmlFor="reset-token">Jeton de réinitialisation</label>
              <input
                className="input mono-num"
                id="reset-token"
                name="token"
                type="text"
                placeholder="Jeton à usage unique"
                required
              />
            </div>

            <div className="form-grid-2">
              <div className="field">
                <label className="field-label" htmlFor="reset-pwd">Nouveau mot de passe</label>
                <input
                  className="input"
                  id="reset-pwd"
                  name="password"
                  type="password"
                  placeholder="Min. 8 caractères"
                  required
                />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="reset-confirm">Confirmation</label>
                <input
                  className="input"
                  id="reset-confirm"
                  name="password_confirmation"
                  type="password"
                  placeholder="Répéter"
                  required
                />
              </div>
            </div>

            <span className="field-hint">
              Le nouveau mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre, et être différent de l’ancien.
            </span>

            <button type="submit" className="btn btn-primary btn-block">Enregistrer le nouveau mot de passe</button>

            <div className="meta-line">
              <Link to="/mot-de-passe-oublie" className="inline-link">Demander un nouveau lien</Link>
            </div>
          </form>
        </div>
      </section>
    
    </>
  )
}