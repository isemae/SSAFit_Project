import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import axios from 'axios'
import { useAxiosService } from './useAxiosService'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'

export const useUserInfoService = () => {
  const { createClient, handleRequest } = useAxiosService()
  const userStore = useUserStore()
  const authStore = useAuthStore()
  const userClient = createClient(API_ENDPOINTS.USER.BASE)
  const cardClient = createClient(API_ENDPOINTS.CARDS.BASE)

  const { loginUser: user } = storeToRefs(authStore)

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

  // /** 유저별 카드 정보 중 개별 카드 정보를 가져옵니다.
  //  * @function getCardFromUserCollection
  //  * @param {number} cardId - 카드 고유 id
  //  * @returns {Promise<Card[]>}
  //  * @throws {Error}
  //  */

  // 유저의 건강력 조회: GET
  // /users/{user_id}/score
  // (user_id) => { score }
  const getUserScore = async () => {
    const endpoint = API_ENDPOINTS.USER.GETSCORE({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.get(endpoint.url))
    if (res.success) {
      userStore.userScore = res.data
      return res
    }
  }

  // 유저의 건강력 업데이트
  // /users/{user_id}/score
  // (user_id) => { score }
  const putUserScore = async () => {
    const score = userStore.userScore
    const endpoint = API_ENDPOINTS.USER.GETSCORE({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.put(endpoint.url, { score }))

    if (res.success) {
      return res
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
    // getUserTier,
    // getUserTotalCardCount,
    getUserStreak,
    getUserScore,
    putUserScore,
    updateUserTotalCardCount,
  }
}
