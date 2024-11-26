import { useAuthStore } from '@/stores/authStore'
import { useCardStore } from '@/stores/cardStore'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useAxiosService } from './useAxiosService'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { storeToRefs } from 'pinia'

export const useCardService = () => {
  const { createClient, handleRequest } = useAxiosService()
  const cardStore = useCardStore()
  const authStore = useAuthStore()
  const { loginUser } = storeToRefs(authStore)
  const cardClient = createClient(API_ENDPOINTS.CARDS.BASE)

  // 1. 카드 데이터 가져오기
  const fetchUserCards = async (userId) => {
    const endpoint = API_ENDPOINTS.CARDS.ALL({ pathParams: { userId } })
    const res = await handleRequest(() => cardClient.get(endpoint.url))
    if (res.success) {
      return res.data
    }
  }

  // 2. 최근 카드 가져오기
  const fetchRecentCards = async (userId, limit) => {
    const endpoint = API_ENDPOINTS.CARDS.RECENT({
      pathParams: { userId: userId },
      queryParams: { limit: limit },
    })
    const res = await handleRequest(() => cardClient.get(endpoint.url))
    cardStore.userRecentlyCollectedCards.value = res.data
    return res
  }

  // 3. 카드 추가하기
  const addCard = async (exerciseId, score) => {
    if (!loginUser.value) throw new Error('User is not logged in')

    const card = {
      exerciseId: exerciseId,
      score: score,
      tier: loginUser.value.tier,
    }

    const endpoint = API_ENDPOINTS.CARDS.COLLECT({ pathParams: { userId: loginUser.value.userId } })
    const res = await handleRequest(() => cardClient.post(endpoint.url, card))
    return res.success
  }

  return {
    fetchUserCards,
    fetchRecentCards,
    addCard,
  }
}
