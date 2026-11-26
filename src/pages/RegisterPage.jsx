import { images } from '../assets/images.js'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import  {apiRequest} from '../services/api.js'

export default function RegisterPage() {
  const navigate=useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [passwordConfirmation,setPasswordConfirmation]= useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)

    async function handleSubmit(event){
      event.preventDefault()

      setError('')

      if(password!==passwordConfirmation){
        setError('Les deux mots de passe ne correspondent pas')
        return
      }
      setLoading(true)
      try{
        const data =await apiRequest('/auth/register',{
          method: 'POST',
          body: JSON.stringify({
            email,
            name,
            password,
            password_confirmation: passwordConfirmation
        })
      })
      console.log('Compte crée :',data)
     await navigate('/connexion')
     
    }catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }
  }
    return (

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

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field-label" htmlFor="reg-name">Nom Complet</label>
              <input className="input" id="reg-name" name="name" type="text" placeholder="Awa Ndiaye" value={name} onChange={(event)=>setName(event.target.value)} required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="reg-email">Adresse e-mail</label>
              <input className="input" id="reg-email" name="email" type="email" placeholder="awa.ndiaye@exemple.com" value={email} onChange={(event)=>setEmail(event.target.value)} required />
            </div>

            <div className="form-grid-2">
              <div className="field">
                <label className="field-label" htmlFor="reg-password">Mot de Passe</label>
                <input className="input" id="reg-password" name="password" type="password" placeholder="Min. 8 caractères" value={password} onChange={(event)=>setPassword(event.target.value)} required />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="reg-confirm">Confirmation du  Mot de Passe</label>
                <input className="input" id="reg-confirm" name="password_confirmation" type="password" placeholder="Répéter le mot de passe" value={passwordConfirmation} onChange={(event)=>setPasswordConfirmation(event.target.value)} required />
              </div>
            </div>

            <span className="field-hint">
              Minimum 8 caractères incluant une majuscule, une minuscule et un chiffre.
            </span>

            {error && <p role="alert" className="error-message">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block" disabled={loading} >{loading ? 'Inscription en cours...' : "S'inscrire"}
            </button>

            <div className="meta-line">
              <span>Déjà inscrit ?</span>
              <Link to="/connexion" className="inline-link">Se connecter</Link>
            </div>
          </form>
        </div>
      </section>
  

    )
 
  
}