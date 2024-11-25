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
  ACCOUNT: createEndpoint('accounts', {
    REGISTER: { url: '/register', method: 'POST' },
    LOGIN: { url: '/login', method: 'POST' },
  }),
  EXERCISE: createEndpoint('exercise', {
    ONE: { url: '/:exerciseId', method: 'GET' },
    ALL: { url: '/:exerciseId', method: 'GET' },
    GETPART: { url: '/:exerciseId/part/:partName', method: 'GET' },
    RANDOM: { url: '/random', method: 'GET' },
  }),
  CARDS: createEndpoint('cards', {
    COLLECT: { url: '/:userId', method: 'POST' },
    ALL: { url: '/:userId', method: 'GET' },
    ONE: { url: '/:userId/:cardId', method: 'GET' },
    RECENT: { url: '/:userId/recent/:cardCount', method: 'GET' },
  }),
  USER: createEndpoint('user', {
    GETSTREAK: {},
    // GETALL: {},
    // GETSCORE: {},
    // GETTIER: {},
    // GETCARDCOUNT: {},
    // PUTCARDCOUNT: {},
    // PUTSCORE: {},
  }),
}
