const ACCOUNT_BASE = `http://localhost:8080/accounts`
const EXERCISE_BASE = `http://localhost:8080/exercise`
const CARDS_BASE = `http://localhost:8080/cards`
const USER_BASE = `http://localhost:8080/user`
export const API_ENDPOINTS = {
  ACCOUNT: {
    BASE: ACCOUNT_BASE,
  },

  EXERCISE: {
    BASE: EXERCISE_BASE,
    RANDOM: `${EXERCISE_BASE}/random`,
  },

  CARDS: {
    BASE: CARDS_BASE,
  },
  USER: {
    BASE: USER_BASE,
  },
}
