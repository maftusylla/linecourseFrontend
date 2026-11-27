import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  clearAccessToken,
  logout as logoutRequest,
  restoreSession,
  setAccessToken,
} from '../services/api.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function initializeSession() {
      const session = await restoreSession()

      if (active) {
        if (session) {
          setUser(session.user)
        }

        setLoading(false)
      }
    }

    initializeSession()

    return () => {
      active = false
    }
  }, [])

  function login(userData, token) {
    setAccessToken(token)
    setUser(userData)
  }

  async function logout() {
    try {
      await logoutRequest()
    } finally {
      clearAccessToken()
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// The context hook is exported alongside its provider for a single source of auth state.
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuth doit être utilisé dans AuthProvider.',
    )
  }

  return context
}
