import { images } from '../assets/images.js'
import { Link } from 'react-router-dom'

export default function TeacherEnrollmentsPage() {
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
            <Link to="/enseignant/inscriptions" className="sidebar-link is-active" aria-current="page">Inscriptions</Link>
            <Link to="/enseignant/profil" className="sidebar-link">Profil &amp; sécurité</Link>
          </nav>
        </aside>

        <div className="workspace-main">
          <section className="stack-md" aria-labelledby="enrollments-heading">
            <div className="section-header">
              <div>
                <h1 className="page-title" id="enrollments-heading">Suivi des inscriptions</h1>
                <p className="lead-text">
                  Consultez les apprenants inscrits à vos formations publiées et suivez leur avancement par leçon.
                </p>
              </div>
            </div>

            <form className="surface-panel filter-toolbar" action="#" method="get" aria-label="Sélectionner une formation">
              <div className="field" style={{ flex: '1 1 280px' }}>
                <label className="field-label" htmlFor="course-selector">Formation sélectionnée</label>
                <select id="course-selector" className="select" defaultValue="arch">
                  <option value="arch">Architecture Express &amp; TypeScript Modulaire (18 inscrits)</option>
                  <option value="sec">Sécurité des API, JWT &amp; Rotation des Sessions (15 inscrits)</option>
                  <option value="test">Tests unitaires et d’intégration avec Vitest (9 inscrits)</option>
                </select>
              </div>
              <div className="search-input-wrap" style={{ flex: '1 1 220px' }}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" className="input" placeholder="Rechercher un apprenant..." aria-label="Rechercher un apprenant" />
              </div>
            </form>
          </section>

          <section className="table-wrap" aria-label="Liste des apprenants inscrits">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Apprenant</th>
                  <th>Adresse e-mail</th>
                  <th>Date d’inscription</th>
                  <th>Progression</th>
                  <th>Statut</th>
                  <th className="col-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Awa Ndiaye</strong></td>
                  <td className="muted-text">awa.ndiaye@linecourse.edu</td>
                  <td className="mono-num">12 nov. 2026</td>
                  <td>
                    <div className="meta-line">
                      <span className="mono-num">68 %</span>
                      <span className="muted-text">(8/12)</span>
                    </div>
                  </td>
                  <td><span className="status-label is-info">En cours</span></td>
                  <td className="col-right">
                    <form action="#" method="post">
                      <button type="submit" className="btn btn-ghost btn-sm">Retirer</button>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td><strong>Ibrahima Fall</strong></td>
                  <td className="muted-text">ibrahima.fall@linecourse.edu</td>
                  <td className="mono-num">11 nov. 2026</td>
                  <td>
                    <div className="meta-line">
                      <span className="mono-num">100 %</span>
                      <span className="muted-text">(12/12)</span>
                    </div>
                  </td>
                  <td><span className="status-label is-success">Terminé</span></td>
                  <td className="col-right">
                    <form action="#" method="post">
                      <button type="submit" className="btn btn-ghost btn-sm">Retirer</button>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td><strong>Mariama Ba</strong></td>
                  <td className="muted-text">mariama.ba@linecourse.edu</td>
                  <td className="mono-num">16 nov. 2026</td>
                  <td>
                    <div className="meta-line">
                      <span className="mono-num">25 %</span>
                      <span className="muted-text">(3/12)</span>
                    </div>
                  </td>
                  <td><span className="status-label is-info">En cours</span></td>
                  <td className="col-right">
                    <form action="#" method="post">
                      <button type="submit" className="btn btn-ghost btn-sm">Retirer</button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <form className="surface-panel stack-md" action="#" method="post" aria-labelledby="manual-enroll-heading">
            <div>
              <h2 className="card-title" id="manual-enroll-heading">Inscrire un apprenant manuellement</h2>
              <p className="muted-text">Ajoutez un apprenant vérifié à l’une de vos formations publiées.</p>
            </div>
            <div className="form-grid-2">
              <div className="field">
                <label className="field-label" htmlFor="enroll-learner-email">Adresse e-mail de l’apprenant</label>
                <input id="enroll-learner-email" name="learnerEmail" type="email" className="input" placeholder="apprenant@linecourse.edu" required />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="enroll-course-select">Formation cible</label>
                <select id="enroll-course-select" name="courseId" className="select">
                  <option value="arch">Architecture Express &amp; TypeScript Modulaire</option>
                  <option value="sec">Sécurité des API, JWT &amp; Rotation des Sessions</option>
                  <option value="test">Tests unitaires et d’intégration avec Vitest</option>
                </select>
              </div>
            </div>
            <div className="filter-toolbar">
              <button type="submit" className="btn btn-primary">Confirmer l’inscription</button>
            </div>
          </form>
        </div>
      </div>
    
    </>
  )
}