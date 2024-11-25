import { useAuthStore } from '@/stores/authStore'
import { useCardStore } from '@/stores/cardStore'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useAxiosService } from './useAxiosService'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { storeToRefs } from 'pinia'

export const useCardService = () => {
  const { createClient, handleRequest } = useAxiosService()
  const cardStore = useCardStore()
  const exerciseStore = useExerciseStore()
  const authStore = useAuthStore()

  const cardClient = createClient(API_ENDPOINTS.CARDS.BASE)
  const exerciseClient = createClient(API_ENDPOINTS.EXERCISE.BASE)

  // 1. 카드 데이터 가져오기
  const fetchUserCards = async (userId) => {
    const endpoint = API_ENDPOINTS.CARDS.ALL({ pathParams: { userId } })
    const res = await handleRequest(() => cardClient.get(endpoint.url))
    if (res.success) {
      return res.data
    }
  }

  // 2. 최근 카드 가져오기
  const fetchRecentCards = async (userId, cardCount) => {
    const endpoint = API_ENDPOINTS.CARDS.RECENT({ pathParams: { userId, cardCount } })
    const res = await handleRequest(() => cardClient.get(endpoint.url))
    if (res.success) {
      cardStore.userRecentlyCollectedCards.value = res.data
    }
  }

  // 3. 운동 데이터 가져오기
  const fetchRandomExercise = async () => {
    const endpoint = API_ENDPOINTS.EXERCISE.RANDOM()
    const res = await handleRequest(() => exerciseClient.get(endpoint.url))
    if (res.success) {
      exerciseStore.randomExerciseData.value = res.data
    }
  }

  // 4. 카드 추가하기
  const addCard = async (card, userId) => {
    const endpoint = API_ENDPOINTS.CARDS.COLLECT({ pathParams: { userId } })
    const res = await handleRequest(() => cardClient.post(endpoint.url, card))
    return res.success
  }

  // 5. 운동 상태 처리
  const handleExercise = async (exerciseId, score) => {
    const { loginUser } = storeToRefs(authStore)
    const { isExerciseDone: done } = storeToRefs(exerciseStore)
    if (!loginUser.value) throw new Error('User is not logged in')

    done.value = false
    const card = {
      exerciseId,
      score,
      tier: loginUser.value.tier,
    }

    const success = await addCard(card, loginUser.value.userId)
    done.value = true

    return success
  }

  return {
    fetchUserCards,
    fetchRecentCards,
    fetchRandomExercise,
    addCard,
    handleExercise,
  }
}
