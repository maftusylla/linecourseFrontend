const API_URL = import.meta.env.VITE_API_URL

export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
      result.error?.message || 'Une erreur est survenue.'
    )
  }

  return result.data
}

