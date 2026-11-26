const API_URL = import.meta.env.VITE_API_URL

export async function apiRequest(endpoint, options = {}) {
  const { returnFullResponse = false, ...fetchOptions } = options
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
      result.error?.message || 'Une erreur est survenue.'
    )
  }

return returnFullResponse ? result : result.data
}

