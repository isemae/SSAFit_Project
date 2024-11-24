import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import axios from 'axios'
import { useCardStore } from '@/stores/cardStore'
import { useUserStore } from '@/stores/userStore'
import { useAxiosService } from './useAxiosService'

export const useUserInfoService = () => {
  const { createClient, handleRequest } = useAxiosService()
  const cardStore = useCardStore()
  const userStore = useUserStore()
  const userClient = createClient(API_ENDPOINTS.USER.BASE)
  const cardClient = createClient(API_ENDPOINTS.CARDS.BASE)
  /** 유저별 카드 정보 중 개별 카드 정보를 가져옵니다.
   * @function getCardFromCollectedCardData
   * @param {number} cardId - 카드 고유 id
   * @returns {Promise<Card[]>}
   * @throws {Error}
   */

  // // 유저의 전체 정보 조회: GET
  // // /user/{user_id}
  // // (user_id) => { id, loginId, userName, score, totalCardCount, tier }
  // const getUserInfoAll = async function (userId) {
  //   try {
  //     const res = axios({
  //       url: `${API_ENDPOINTS.USER.BASE}/${userId}`,
  //       method: 'GET',
  //     })
  //     console.log(res.data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  //

  // // 유저의 건강력 조회: GET
  // // /user/{user_id}/score
  // // (user_id) => { score }
  // const getUserScore = async function (userId) {
  //   try {
  //     const res = axios({
  //       url: `${API_ENDPOINTS.USER.BASE}/${userId}/score`,
  //       method: 'GET',
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

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

  // try {
  //   const res = axios({
  //     url: `${API_ENDPOINTS.USER.BASE}/${userId}/tier`,
  //     method: 'GET',
  //   })
  // } catch (err) {
  //   console.error(err)
  // }
  // }

  // // 유저가 획득한 총 카드 수 조회: GET
  // // /user/{user_id}/totalCardCount
  // const getUserTotalCardCount = async function (userId) {
  //   try {
  //     const res = axios({
  //       url: `${API_ENDPOINTS.USER.BASE}/${userId}/totalCardCount`,
  //       method: 'GET',
  //     })
  //     return res
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

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
    // getUserInfoAll,
    // getUserScore,
    getUserStreak,
    // getUserTier,
    // getUserTotalCardCount,
    updateUserTotalCardCount,
  }
}
