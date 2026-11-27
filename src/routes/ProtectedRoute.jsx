import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

const destinations = {
  learner: '/apprenant/tableau-de-bord',
  teacher: '/enseignant/tableau-de-bord',
  admin: '/admin/tableau-de-bord',
}

export default function ProtectedRoute({ role }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <p>Vérification de votre session...</p>
  }

  if (!user) {
    return (
      <Navigate
        to="/connexion"
        replace
        state={{ from: location }}
      />
    )
  }

  if (user.role !== role) {
    return (
      <Navigate
        to={destinations[user.role] || '/'}
        replace
      />
    )
  }

  return <Outlet />
}
