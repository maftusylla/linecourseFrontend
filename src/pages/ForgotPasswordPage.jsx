import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  return (
    <>

      <section className="auth-layout" aria-labelledby="forgot-heading">
        <div className="auth-visual">
          <img
            src={images.courseSecurity}
            alt="Récupération sécurisée d'accès LineCourse"
            referrerPolicy="no-referrer"
          />
          <div className="auth-visual-overlay">
            <span className="hero-kicker" style={{ color: '#fbbf24' }}>Récupération d’accès</span>
            <h1 className="section-title" style={{ color: '#f5f4f1' }}>
              Recevez un lien temporaire pour définir un nouveau mot de passe.
            </h1>
            <p style={{ margin: '0', color: '#d6d3cd', maxWidth: '44ch' }}>
              Pour protéger la confidentialité des comptes, le message de confirmation reste identique quelle que soit l’adresse saisie.
            </p>
          </div>
        </div>

        <div className="auth-panel">
          <div>
            <h2 className="page-title" id="forgot-heading">Mot de passe oublié</h2>
            <p className="muted-text" style={{ marginTop: '0.35rem' }}>
              Indiquez l’adresse e-mail associée à votre compte LineCourse.
            </p>
          </div>

          <form className="form-grid" action="reinitialisation-mot-de-passe.html" method="get">
            <div className="field">
              <label className="field-label" htmlFor="forgot-email">Adresse e-mail</label>
              <input
                className="input"
                id="forgot-email"
                name="email"
                type="email"
                placeholder="awa.ndiaye@linecourse.edu"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Envoyer le lien de réinitialisation</button>

            <div className="meta-line" style={{ justifyContent: 'space-between' }}>
              <Link to="/reinitialisation-mot-de-passe" className="inline-link">J’ai déjà un code</Link>
              <Link to="/connexion" className="inline-link">Retour à la connexion</Link>
            </div>
          </form>
        </div>
      </section>
    
    </>
  )
}