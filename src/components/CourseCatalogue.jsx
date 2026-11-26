
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRequest } from '../services/api.js'
import { images } from '../assets/images.js'

export default function CourseCatalogue({
  learner = false,
  showHeader = true
}) {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true)
      setError('')

      try {
        const result = await apiRequest(
          `/courses/public?page=${page}&per_page=10`,
          { returnFullResponse: true }
        )

        setCourses(result.data)
        setPagination(result.meta)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [page])

  return (
    <>
      {showHeader && (
        <section className="stack-md" aria-labelledby="catalog-title">
          <div className="section-header">
            <div>
              <h1 className="page-title" id="catalog-title">
                Catalogue des formations
              </h1>

              <p className="lead-text">
                Découvrez nos formations et consultez leur programme.
              </p>
            </div>

            {learner && (
              <Link
                to="/apprenant/mes-cours"
                className="btn btn-secondary"
              >
                Mes cours
              </Link>
            )}
          </div>
        </section>
      )}

      <section aria-label="Liste des formations">

        {loading && <p>Chargement des formations...</p>}

        {error && <p className="error-message">{error}</p>}

        {!loading && !error && courses.length === 0 && (
          <p>Aucune formation disponible pour le moment.</p>
        )}

        {!loading && !error && courses.length > 0 && (
          <>
            <div className="course-grid">
              {courses.map((course) => {
                const modules = course.modules || []

                const lessonCount = modules.reduce(
                  (total, module) =>
                    total + (module.lessons?.length || 0),
                  0
                )

                return (
                  <article className="course-card" key={course.id}>
                    <div className="media-frame">
                      <img
                        src={course.imageUrl || images.courseArchitecture}
                        alt={course.titre}
                      />
                    </div>

                    <div className="course-card-body">
                      <div className="meta-line">
                        <span className="mono-num">
                          {modules.length} modules
                        </span>

                        <span aria-hidden="true">·</span>

                        <span className="mono-num">
                          {lessonCount} leçons
                        </span>

                        <span aria-hidden="true">·</span>

                        <span className="status-label is-success">
                          Publié
                        </span>
                      </div>

                      <h2 className="card-title">
                        {course.titre}
                      </h2>

                      <p className="course-card-desc">
                        {course.description}
                      </p>

                      <div className="course-card-footer">
                        <Link
                          to={`/formations/${course.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Voir le cours
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {pagination && (
              <nav className="pagination-bar" aria-label="Pagination des formations">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm pagination-button"
                  onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
                  disabled={page === 1}
                  aria-label="Page précédente"
                >
                  <span aria-hidden="true">←</span>
                  <span>Précédent</span>
                </button>

                <span className="pagination-status" aria-live="polite">
                  <span>Page</span>
                  <strong className="mono-num">{pagination.page}</strong>
                  <span>sur</span>
                  <strong className="mono-num">{pagination.total_pages}</strong>
                </span>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm pagination-button"
                  onClick={() => setPage((currentPage) =>
                    Math.min(pagination.total_pages, currentPage + 1)
                  )}
                  disabled={page === pagination.total_pages}
                  aria-label="Page suivante"
                >
                  <span>Suivant</span>
                  <span aria-hidden="true">→</span>
                </button>
              </nav>
            )}
          </>
        )}
      </section>
    </>
  )
}
