const API_URL = import.meta.env.VITE_API_URL

let accessToken = null
let refreshPromise = null
let restorePromise = null

const NO_REFRESH_ENDPOINTS = new Set([
  '/auth/login',
  '/auth/register',
  '/auth/refresh',
  '/auth/logout',
])

export function setAccessToken(token) {
  accessToken = token
}

export function clearAccessToken() {
  accessToken = null
}

async function sendRequest(endpoint, options = {}) {
  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {}),
      ...options.headers,
    },
  })
}

async function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const response = await sendRequest('/auth/refresh', {
        method: 'POST',
      })

      const result = await response.json()

      if (!response.ok) {
        clearAccessToken()
        throw new Error(
          result.error?.message ||
          'Votre session a expiré. Reconnectez-vous.',
        )
      }

      setAccessToken(result.data.access_token)

      return result.data.access_token
    })().finally(() => {
      refreshPromise = null
    })
  }

  return refreshPromise
}

export async function apiRequest(endpoint, options = {}) {
  const {
    returnFullResponse = false,
    retryOnUnauthorized = true,
    ...fetchOptions
  } = options

  let response = await sendRequest(endpoint, fetchOptions)

  if (
    response.status === 401 &&
    retryOnUnauthorized &&
    !NO_REFRESH_ENDPOINTS.has(endpoint)
  ) {
    await refreshAccessToken()
    response = await sendRequest(endpoint, fetchOptions)
  }

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
      result.error?.message || 'Une erreur est survenue.',
    )
  }

  return returnFullResponse ? result : result.data
}

export async function restoreSession() {
  if (!restorePromise) {
    restorePromise = (async () => {
      try {
        const token = await refreshAccessToken()

        const user = await apiRequest('/auth/me', {
          retryOnUnauthorized: false,
        })

        return {
          user,
          accessToken: token,
        }
      } catch {
        clearAccessToken()
        return null
      }
    })().finally(() => {
      restorePromise = null
    })
  }

  return restorePromise
}

export async function logout() {
  try {
    await apiRequest('/auth/logout', {
      method: 'POST',
      retryOnUnauthorized: false,
    })
  } finally {
    clearAccessToken()
  }
}
