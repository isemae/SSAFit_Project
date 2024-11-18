import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const REST_PJT_URL_USER = `http://localhost:8080/user`

  // 유저의 전체 정보 조회: GET
  // /user/{user_id}
  // (user_id) => { id, loginId, userName, score, totalCardCount, tier }
  const getUserInfoAll = async function (userId) {
    try {
      const res = axios({
        url: `${REST_PJT_URL_USER}/${userId}`,
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
        url: `${REST_PJT_URL_USER}/${userId}/score`,
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
        url: `${REST_PJT_URL_USER}/${userId}/streak`,
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
        url: `${REST_PJT_URL_USER}/${userId}/tier`,
        method: 'GET',
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 유저의 등급 갱신: PUT
  const updateUserTier = async function (userId) {
    try {
      const res = axios({
        url: `${REST_PJT_URL_USER}/${userId}/tier`,
        method: 'PUT',
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
        url: `${REST_PJT_URL_USER}/${userId}/totalCardCount`,
        method: 'GET',
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 유저가 획득한 총 카드 수 업데이트: PUT
  // /user/{user_id}/totalCardCount
  const updateUserTotalCardCount = async function () {
    try {
      const res = axios({
        url: `${REST_PJT_URL_USER}/${userId}/totalCardCount`,
        method: 'PUT',
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
    updateUserTier,
    getUserTotalCardCount,
    updateUserTotalCardCount,
  }
})
