const BASE_URL = `http://localhost:8080`

const createEndpoint = (base, endpoints) => {
  const BASE = `${BASE_URL}/${base}`
  const url = { BASE }
  Object.entries(endpoints).forEach(([key, config]) => {
    url[key] = ({ params } = {}) => ({
      url: `${BASE}${config.path}${params ? `/${params}` : ''}`,
      method: config.method,
    })
  })
  return url
}

export const API_ENDPOINTS = {
  ACCOUNT: createEndpoint('accounts', {
    REGISTER: { path: '/register', method: 'POST' },
    LOGIN: { path: '/login', method: 'POST' },
  }),
  EXERCISE: createEndpoint('exercise', {
    RANDOM: { path: '/random', method: 'GET' },
  }),
  CARDS: createEndpoint('cards', {}),
  USER: createEndpoint('user', {}),
}
