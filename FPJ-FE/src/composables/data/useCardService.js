import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import axios from 'axios'

import { useCardStore } from '@/stores/cardStore'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useAccountStore } from '@/stores/accountStore'

export const useCardService = function () {
  const cardStore = useCardStore()
  const exerciseStore = useExerciseStore()
  const accountStore = useAccountStore()

  const initExerciseData = async () => {
    await getRandomlySelectedExerciseData()
    return exerciseStore.randomExercises
  }

  const handleExerciseStatus = (status, data) => {
    if (!status && data) {
      let card = {
        exerciseId: data.id,
        score: 100,
        tier: 1,
      }
      cardStore.postCard(1, card)
    }
  }

  /** 카드에 등록할 운동 정보를 받아옵니다.
   * @function getRandomlySelectedExerciseData
   * @async
   * @returns {Promise<Exercise[]>}
   * @throws {Error}
   */
  const getRandomlySelectedExerciseData = async () => {
    try {
      const res = await axios({
        url: `${API_ENDPOINTS.EXERCISE.RANDOM}`,
        method: 'GET',
      })
      const excercises = res.data
      console.log(excercises)
      exerciseStore.randomlySelectedExerciseData.value = excercises
    } catch (err) {
      console.error(`Error fetching excercise data. (${err})`)
    }
  }

  /** 운동 완료 후 User DB 테이블에 등록 요청을 보냅니다.
   * @function postCard
   * @async
   * @returns {Promise<Card[]>}
   * @throws {Error}
   */
  const postCard = async function (card) {
    const userId = accountStore.loginUser.value.id
    try {
      axios({
        url: `${API_ENDPOINTS.EXERCISE.BASE}/${userId}`,
        method: 'POST',
        data: card,
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 유저정보(티어, id)
  // 운동정보(카드 내용)
  // 최종적으로 반환할 카드

  return { initExerciseData, handleExerciseStatus, postCard }
}
