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
  const fetchRecentCards = async (userId, limit) => {
    const endpoint = API_ENDPOINTS.CARDS.RECENT({
      pathParams: { userId: userId },
      queryParams: { limit: limit },
    })
    const res = await handleRequest(() => cardClient.get(endpoint.url))
    if (res.success) {
      cardStore.userRecentlyCollectedCards.value = res.data
    }
  }

  // 3. 운동 데이터 가져오기
  const fetchRandomExercise = async () => {
    const endpoint = API_ENDPOINTS.EXERCISE.RANDOM()
    const res = await handleRequest(() => exerciseClient.get(endpoint.url))
    console.log(res.data)
    if (res.success) {
      exerciseStore.randomExerciseData.value = res.data
    }
  }

  // 4. 운동 정보 포스팅
  // 생성된 운동 정보를 DB에 포스팅
  // exerciseId를 응답받음
  const postExercise = async (exercise) => {
    const endpoint = API_ENDPOINTS.EXERCISE.BASE
    // 운동 시작 시
    const res = await handleRequest(() => exerciseClient.post(endpoint.url, exercise))
    return res.data
  }

  // 5. 카드 추가하기
  const addCard = async (exerciseId, score) => {
    const { isExerciseDone: done } = storeToRefs(exerciseStore)

    // 운동 완수 시
    const { loginUser } = storeToRefs(authStore)
    if (!loginUser.value) throw new Error('User is not logged in')

    // 상태 전파에 사용할 exerciseStore state
    done.value = true
    const card = {
      exerciseId,
      score,
      tier: loginUser.value.tier,
    }

    const endpoint = API_ENDPOINTS.CARDS.COLLECT({ pathParams: { userId: loginUser.value.userId } })
    const res = await handleRequest(() => cardClient.post(endpoint.url, card))
    return res.success
  }

  return {
    fetchUserCards,
    fetchRecentCards,
    fetchRandomExercise,
    addCard,
    postExercise,
  }
}
