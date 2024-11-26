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

  const getUserScore = async () => {
    const endpoint = API_ENDPOINTS.USER.GETSCORE({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.get(endpoint.url))
    if (res.success && res.data !== userStore.userScore) {
      userStore.userScore = res.data
      return res
    }
  }

  // 유저 점수 업데이트
  // /users/{user_id}/score
  // (user_id) => { score }
  const putUserScore = async (addScore) => {
    const userScore = userStore.userScore
    const updateScore = userScore + addScore
    const endpoint = API_ENDPOINTS.USER.PUTSCORE({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.put(endpoint.url, { updateScore }))

    if (res.success) {
      userStore.userScore = updateScore
    }
    console.log(res)
    return res
  }

  // 유저가 획득한 총 카드 수 조회: GET
  // /user/{user_id}/totalCardCount
  const getUserCardCount = async (userId) => {
    const endpoint = API_ENDPOINTS.USER.GETCARDCOUNT({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.get(endpoint.url))

    userStore.userCardCount.value = res.data
    return res
  }

  // 유저 카드 수 업데이트
  const putUserCardCount = async () => {
    const score = userStore.userCardCount.value + 1
    const endpoint = API_ENDPOINTS.USER.GETCARDCOUNT({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.put(endpoint.url, { score }))

    return res
  }

  // 유저 티어 확인
  const getUserTier = async () => {
    const endpoint = API_ENDPOINTS.USER.TIER({
      pathParams: { userId: user.value.userId },
    })

    const res = await handleRequest(() => userClient.get(endpoint.url))
    userStore.userScore = res.data
    return res.data
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

  return {
    getUserTier,
    getUserStreak,
    getUserScore,
    putUserScore,
    getUserCardCount,
    putUserCardCount,
  }
}
