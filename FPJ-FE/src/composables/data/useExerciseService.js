import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useUserInfoService } from './useUserInfoService'
import { useAxiosService } from './useAxiosService'
import { useCardService } from './useCardService'
import { useUserStore } from '@/stores/userStore'

export const useExerciseService = () => {
  const { createClient, handleRequest } = useAxiosService()
  const cardService = useCardService()
  const userService = useUserInfoService()
  const exerciseClient = createClient(API_ENDPOINTS.EXERCISE.BASE)
  const exerciseStore = useExerciseStore()
  const userStore = useUserStore()

  // 1. 무작위 운동 데이터 가져오기
  const fetchRandomExercise = async () => {
    const endpoint = API_ENDPOINTS.EXERCISE.RANDOM()
    const res = await handleRequest(() => exerciseClient.get(endpoint.url))
    if (res.success) {
      exerciseStore.randomExerciseData.value = res.data
    }
  }

  // 2. 특정 운동 정보 가져오기
  const fetchExerciseInfo = async (exerciseId) => {
    const endpoint = API_ENDPOINTS.EXERCISE.ONE((pathParams = { exerciseId }))
    const res = await handleRequest(() => exerciseClient.get(endpoint.url))
    return res
  }

  // 2. 운동 정보 포스팅
  // 생성된 운동 정보를 DB에 포스팅
  // exerciseId를 응답받음
  const postExercise = async (exercise) => {
    const endpoint = API_ENDPOINTS.EXERCISE.BASE
    const res = await handleRequest(() => exerciseClient.post(endpoint, exercise))
    return res.data
  }

  // 3. 운동 상태 업데이트
  const updateExerciseState = async (data, exerciseId) => {
    try {
      console.log(data, exerciseId)
      // Store내 사용자 건강력 업데이트
      userStore.userScore += data.time * 2

      // 운동 완료 시 카드 등록, 유저 건강력 업데이트
      await cardService.addCard(exerciseId, data.time)
      await userService.putUserScore(userStore.userScore)

      // 운동 상태 완료
      exerciseStore.isExerciseDone = true
    } catch (error) {
      console.error('Error updating exercise state:', error)
    }
  }

  return { fetchExerciseInfo, fetchRandomExercise, postExercise, updateExerciseState }
}
