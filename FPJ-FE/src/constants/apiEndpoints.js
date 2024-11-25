const BASE_URL = `http://localhost:8080`

const createEndpoint = (base, endpoints) => {
  const BASE = `${BASE_URL}/${base}`
  const res = { BASE }

  Object.entries(endpoints).forEach(([key, config]) => {
    res[key] = ({ pathParams = {}, queryParams = {} } = {}) => {
      let url = `${BASE}${config.url}`
      Object.entries(pathParams).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value)
      })

      const queryString = new URLSearchParams(queryParams).toString()
      if (queryString) {
        url += `?${queryString}`
      }
      return {
        url,
        method: config.method,
      }
    }
  })
  return res
}

export const API_ENDPOINTS = {
  ACCOUNT: createEndpoint('auth', {
    REGISTER: { url: '/register', method: 'POST' },
    LOGIN: { url: '/login', method: 'POST' },
  }),
  EXERCISE: createEndpoint('exercises', {
    POST: { url: '', method: 'POST' },
    ALL: { url: '', method: 'GET' },
    ONE: { url: '/:exerciseId', method: 'GET' },
    GETPART: { url: '?part={:partName}', method: 'GET' },
    RANDOM: { url: '/random', method: 'GET' },
  }),
  USER: createEndpoint('users', {
    ONE: { url: '/:userId', method: 'GET' },
    GETSCORE: { url: '/:userId/score', method: 'GET' },
    STREAK: { url: '/:userId/streak', method: 'GET' },
    TIER: { url: '/:userId/tier', method: 'GET' },
    GETCARDCOUNT: { url: '/:userId/totalCardCount', method: 'GET' },
    PUTCARDCOUNT: { url: '/:userId/totalCardCount', method: 'PUT' },
    PUTSCORE: { url: '/:userId/score', method: 'PUT' },
  }),
  CARDS: createEndpoint('users', {
    COLLECT: { url: '/:userId/cards', method: 'POST' },
    ALL: { url: '/:userId/cards', method: 'GET' },
    ONE: { url: '/:userId/:cardId', method: 'GET' },
    RECENT: { url: '/:userId/recent/:cardCount', method: 'GET' },

    // GETALL: {},
    // GETSCORE: {},
    // GETTIER: {},
    // GETCARDCOUNT: {},
    // PUTCARDCOUNT: {},
    // PUTSCORE: {},
  }),
}
