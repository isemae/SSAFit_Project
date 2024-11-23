import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import axios from 'axios'
import { useCardStore } from '@/stores/cardStore'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useAuthStore } from '@/stores/authStore'
import { useAxiosService } from './useAxiosService'
import { storeToRefs } from 'pinia'

export const useCardService = function () {
  const { createClient, handleRequest } = useAxiosService()
  const cardStore = useCardStore()
  const exerciseStore = useExerciseStore()
  const authStore = useAuthStore()
  const exerciseClient = createClient(API_ENDPOINTS.EXERCISE.BASE)
  const userClient = createClient(API_ENDPOINTS.USER.BASE)

  const { loginUser: user } = storeToRefs(authStore)

  const initExerciseData = async () => {
    await getRandomlySelectedExerciseData()
    return exerciseStore.randomExercises
  }

  const handleExerciseStatus = async (status, data) => {
    // if (loginUser && !status) {
    let card = {
      exerciseId: 1,
      score: 100,
      tier: user.tier,
    }
    const res = await postCard(card, user.userId)
    // }
  }

  /** 카드에 등록할 운동 정보를 받아옵니다.
   * @function getRandomlySelectedExerciseData
   * @async
   * @returns {Promise<Exercise[]>}
   * @throws {Error}
   */
  const getRandomlySelectedExerciseData = async () => {
    const endpoint = API_ENDPOINTS.EXERCISE.RANDOM()
    const res = await handleRequest(() => exerciseClient.get(endpoint.url))
    // console.log(res.data)
    exerciseStore.randomlySelectedExerciseData.value = res.data
  }

  /** 운동 완료 후 User DB 테이블에 등록 요청을 보냅니다.
   * @function postCard
   * @async
   * @returns {Promise<Card[]>}
   * @throws {Error}
   */
  const postCard = async function (card, userId) {
    const user = accountStore.loginUser
    const endpoint = API_ENDPOINTS.CARDS.COLLECT({
      pathParams: { userId: user.userId },
    })

    const cardClient = createClient(API_ENDPOINTS.CARDS.BASE)
    const res = await handleRequest(() => {
      return cardClient.post(endpoint.url, card)
    })
    if (res.success) {
    }
  }

  // 유저정보(티어, id)
  // 운동정보(카드 내용)
  // 최종적으로 반환할 카드

  return { initExerciseData, handleExerciseStatus, postCard }
}
