import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import axios from 'axios'
import { useCardStore } from '@/stores/cardStore'
import { useUserStore } from '@/stores/userStore'

export const useUserInfoService = () => {
  const cardStore = useCardStore()
  const userStore = useUserStore()

  /** 유저별 카드 정보 중 개별 카드 정보를 가져옵니다.
   * @function getCardFromCollectedCardData
   * @param {number} cardId - 카드 고유 id
   * @returns {Promise<Card[]>}
   * @throws {Error}
   */

  const getCardFromCollectedCardData = async (cardId) => {
    try {
      const res = await axios({
        url: `${API_ENDPOINTS.CARDS.BASE}/${cardId}`,
        method: 'GET',
      })
      const cards = res.data.value
      cardStore.userCollectedCardData.value = cards
    } catch (err) {
      console.error(`Error fetching (${err})`)
    }
  }

  /** 유저별 카드 정보를 가져옵니다.
   * @function getUserCollectedCardData
   * @param {number} userId - 유저 고유 id
   * @returns {Promise<Card[]>}
   * @throws {Error}
   */
  const getUserCollectedCardData = async (userId) => {
    try {
      const res = await axios({
        url: `${API_ENDPOINTS.CARDS.BASE}/${userId}`,
        method: 'GET',
      })
      userStore.userCollectedCardData.value = res.data
    } catch (err) {
      console.error(`Error fetching (${err})`)
    }
  }

  /** 유저의 최근 카드정보를 조회합니다.
   * @function getUserRecentCards
   * @params {number} userId
   * @returns {Promise<Card[]>}
   * @throws {Error}
   */

  const getUserRecentlyCollectedCardData = async (userId) => {
    try {
      const res = await axios({
        url: `${API_ENDPOINTS.CARDS.BASE}/${userId}/recent/${3}`,
        method: 'GET',
      })
      cardStore.userRecentlyCollectedCardData.value = res.data
    } catch (err) {
      console.error(`Error fetching recent card data. (${err})`)
    }
  }

  // 유저의 전체 정보 조회: GET
  // /user/{user_id}
  // (user_id) => { id, loginId, userName, score, totalCardCount, tier }
  const getUserInfoAll = async function (userId) {
    try {
      const res = axios({
        url: `${API_ENDPOINTS.USER.BASE}/${userId}`,
        method: 'GET',
      })
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  // 유저의 건강력 조회: GET
  // /user/{user_id}/score
  // (user_id) => { score }
  const getUserScore = async function (userId) {
    try {
      const res = axios({
        url: `${API_ENDPOINTS.USER.BASE}/${userId}/score`,
        method: 'GET',
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 유저가 건강관리한 연속 일수: GET
  // /user/{user_id}/streak
  // (user_id) => { streak }
  const getUserStreak = async function (userId) {
    try {
      const res = axios({
        url: `${API_ENDPOINTS.USER.BASE}/${userId}/streak`,
        method: 'GET',
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 유저의 등급 조회: GET
  // /user/{user_id}/tier
  const getUserTier = async function (userId) {
    try {
      const res = axios({
        url: `${API_ENDPOINTS.USER.BASE}/${userId}/tier`,
        method: 'GET',
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 유저가 획득한 총 카드 수 조회: GET
  // /user/{user_id}/totalCardCount
  const getUserTotalCardCount = async function (userId) {
    try {
      const res = axios({
        url: `${API_ENDPOINTS.USER.BASE}/${userId}/totalCardCount`,
        method: 'GET',
      })
      return res
    } catch (err) {
      console.error(err)
    }
  }

  // 유저가 획득한 총 카드 수 업데이트: PUT
  // /user/{user_id}/totalCardCount
  const updateUserTotalCardCount = async function (userId, count) {
    // path  variable,
    // body:
    // {
    //  "totalCardCount”: (number)
    // }
    const user = {
      totalCardCount: count + 1,
    }
    try {
      axios({
        url: `${REST_PJT_URL_USER}/${userId}/totalCardCount`,
        method: 'PUT',
        data: user,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return {
    getUserInfoAll,
    getUserScore,
    getUserStreak,
    getUserTier,
    getUserTotalCardCount,
    updateUserTotalCardCount,
    getCardFromCollectedCardData,
    getUserCollectedCardData,
    getUserRecentlyCollectedCardData,
  }
}
