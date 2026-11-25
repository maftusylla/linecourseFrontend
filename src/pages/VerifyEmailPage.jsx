import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function VerifyEmailPage() {
  return (
    <>

      <section className="auth-layout" aria-labelledby="verify-heading">
        <div className="auth-visual">
          <img
            src={images.courseSecurity}
            alt="Vérification d'identité et sécurité de compte"
            referrerPolicy="no-referrer"
          />
          <div className="auth-visual-overlay">
            <span className="hero-kicker" style={{ color: '#fbbf24' }}>Confirmation d’identité</span>
            <h1 className="section-title" style={{ color: '#f5f4f1' }}>
              Validez votre adresse e-mail pour activer l’ensemble de vos droits.
            </h1>
            <p style={{ margin: '0', color: '#d6d3cd', maxWidth: '44ch' }}>
              Une adresse vérifiée est requise pour vous inscrire aux formations, suivre votre progression et utiliser les outils d’enseignement.
            </p>
          </div>
        </div>

        <div className="auth-panel">
          <div>
            <h2 className="page-title" id="verify-heading">Vérification de l’adresse e-mail</h2>
            <p className="muted-text" style={{ marginTop: '0.35rem' }}>
              Collez le jeton reçu par e-mail ou ouvrez le lien transmis dans votre boîte de réception.
            </p>
          </div>

          <form className="form-grid" action="#" method="post">
            <div className="field">
              <label className="field-label" htmlFor="verify-token">Jeton de vérification à usage unique</label>
              <input
                className="input mono-num"
                id="verify-token"
                name="token"
                type="text"
                placeholder="Ex. 9f28c1b4e7a041a89a2c..."
                required
              />
              <span className="field-hint">Ce code n’est valable qu’une seule fois et expire automatiquement.</span>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Valider mon adresse e-mail</button>

            <div className="meta-line" style={{ justifyContent: 'space-between' }}>
              <Link to="/connexion" className="inline-link">Retour à la connexion</Link>
              <Link to="/" className="inline-link">Accueil public</Link>
            </div>
          </form>
        </div>
      </section>
    
    </>
  )
}