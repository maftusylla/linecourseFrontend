import { images } from '../assets/images.js'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'
import { apiRequest } from '../services/api.js'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })

      const role = data.user.role

      const destinations = {
        learner: '/apprenant/tableau-de-bord',
        teacher: '/enseignant/tableau-de-bord',
        admin: '/admin/tableau-de-bord',
      }

      const destination = destinations[role]

      if (!destination) {
        throw new Error('Role utilisateur non reconnu')
      }

      login(data.user, data.access_token)
      navigate(destination)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    

      <section className="auth-layout" aria-labelledby="login-heading">
        <div className="auth-visual">
          <img
            src={images.heroStudio}
            alt="Salle d'étude du studio LineCourse"
            referrerPolicy="no-referrer"
          />
          <div className="auth-visual-overlay">
            <span className="hero-kicker" style={{ color: '#fbbf24' }}>Accès sécurisé</span>
            <h1 className="section-title" style={{ color: '#f5f4f1' }}>
              Retrouvez votre espace d’apprentissage ou d’enseignement.
            </h1>
            <p style={{ margin: '0', color: '#d6d3cd', maxWidth: '44ch' }}>
              Connectez-vous avec votre adresse e-mail et votre mot de passe pour accéder à vos formations sur LineCourse.
            </p>
          </div>
        </div>

        <div className="auth-panel">
          <div>
            <h2 className="page-title" id="login-heading">Connexion à votre compte</h2>
            <p className="muted-text" style={{ marginTop: '0.35rem' }}>
              Saisissez vos identifiants pour ouvrir une session.
            </p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field-label" htmlFor="login-email">Adresse e-mail</label>
            <input
              className="input"
              id="login-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="login-password">Mot de passe</label>
              <input
                className="input"
                id="login-password"
                name="password"
                type="password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                placeholder="••••••••••••"
                required
              />
            </div>
            {error && <p role="alert" className="error-message">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block" disabled={loading} >{loading ? 'Connexion en cours...' : 'Se connecter'}</button>
            <div className="meta-line" style={{ justifyContent: 'space-between' }}>
              <Link to="/mot-de-passe-oublie" className="inline-link">Mot de passe oublié ?</Link>
              <Link to="/inscription" className="inline-link">Créer un compte</Link>
            </div>
          </form>
        </div>
      </section>
    
  )
}







