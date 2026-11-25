import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function AdminDashboardPage() {
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
            <Link to="/admin/tableau-de-bord" className="sidebar-link is-active" aria-current="page">Tableau de bord</Link>
            <Link to="/admin/utilisateurs" className="sidebar-link">Utilisateurs</Link>
            <Link to="/admin/cours" className="sidebar-link">Cours</Link>
            <Link to="/admin/roles-acces" className="sidebar-link">Rôles &amp; accès</Link>
            <Link to="/admin/securite" className="sidebar-link">Sécurité</Link>
            <Link to="/admin/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="surface-panel stack-md" aria-labelledby="admin-dash-heading">
            <div className="section-header">
              <div className="stack-sm">
                <span className="hero-kicker">Espace Administration</span>
                <h1 className="page-title" id="admin-dash-heading">Vue globale de la plateforme</h1>
                <p className="muted-text">
                  Supervision des comptes utilisateurs, modération des formations, attribution des rôles et suivi de sécurité.
                </p>
              </div>
              <div className="filter-toolbar">
                <Link to="/admin/utilisateurs" className="btn btn-primary">Gérer les utilisateurs</Link>
                <Link to="/admin/securite" className="btn btn-secondary">Journal de sécurité</Link>
              </div>
            </div>

            <div className="alert-banner is-info" role="note">
              <div>
                <strong className="alert-title">Données fictives de maquette</strong>
                <span>Les chiffres affichés ci-dessous servent uniquement d’exemple visuel statique avant le raccordement aux données réelles.</span>
              </div>
            </div>
          </section>

          <section className="kpi-strip" aria-label="Indicateurs globaux fictifs">
            <div className="kpi-item">
              <div className="kpi-value">128</div>
              <div className="kpi-label">Comptes enregistrés</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">12</div>
              <div className="kpi-label">Formations au total</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">342</div>
              <div className="kpi-label">Inscriptions actives</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">2</div>
              <div className="kpi-label">Alertes à vérifier</div>
            </div>
          </section>

          <section className="surface-panel stack-md" aria-labelledby="role-dist-heading">
            <div className="section-header">
              <div>
                <h2 className="section-title" id="role-dist-heading">Répartition des comptes par rôle</h2>
                <p className="muted-text">Volumes indicatifs pour l’aperçu visuel de la maquette.</p>
              </div>
              <Link to="/admin/roles-acces" className="inline-link">Configurer les rôles →</Link>
            </div>

            <div className="role-distribution">
              <div className="role-metric-box">
                <span className="muted-text">Apprenants</span>
                <div className="kpi-value">114</div>
                <span className="status-label is-success">108 e-mails vérifiés</span>
              </div>
              <div className="role-metric-box">
                <span className="muted-text">Enseignants</span>
                <div className="kpi-value">11</div>
                <span className="status-label is-info">8 auteurs actifs</span>
              </div>
              <div className="role-metric-box">
                <span className="muted-text">Administrateurs</span>
                <div className="kpi-value">3</div>
                <span className="status-label is-success">Comptes protégés</span>
              </div>
            </div>
          </section>

          <section className="two-col-panels" aria-label="État des comptes et des cours">
            <div className="surface-panel stack-md">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">État des comptes</h2>
                  <p className="muted-text">Vérification et activation sur la plateforme</p>
                </div>
                <Link to="/admin/utilisateurs" className="btn btn-secondary btn-sm">Ouvrir</Link>
              </div>
              <div className="stack-sm">
                <div className="meta-line">
                  <span className="status-label is-success">Actifs et vérifiés</span>
                  <strong className="mono-num">119</strong>
                </div>
                <div className="meta-line">
                  <span className="status-label is-warning">En attente de vérification e-mail</span>
                  <strong className="mono-num">6</strong>
                </div>
                <div className="meta-line">
                  <span className="status-label is-danger">Comptes désactivés</span>
                  <strong className="mono-num">3</strong>
                </div>
              </div>
            </div>

            <div className="surface-panel stack-md">
              <div className="panel-header">
                <div>
                  <h2 className="card-title">État des formations</h2>
                  <p className="muted-text">Répartition entre cours publiés et brouillons</p>
                </div>
                <Link to="/admin/cours" className="btn btn-secondary btn-sm">Gérer</Link>
              </div>
              <div className="stack-sm">
                <div className="meta-line">
                  <span className="status-label is-success">Publiées dans le catalogue</span>
                  <strong className="mono-num">9</strong>
                </div>
                <div className="meta-line">
                  <span className="status-label is-warning">Brouillons enseignants</span>
                  <strong className="mono-num">3</strong>
                </div>
                <div className="meta-line">
                  <span className="muted-text">Formations archivées</span>
                  <strong className="mono-num">2</strong>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    
    </>
  )
}