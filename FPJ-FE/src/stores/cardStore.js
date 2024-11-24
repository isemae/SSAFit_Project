import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const userCollectedCards = ref([])
  const userRecentlyCollectedCards = ref([])
  const messageNoCard = '수집한 카드가 없어요. 운동을 시작해 볼까요?'

  return {
    userCollectedCards,
    userRecentlyCollectedCards,
    messageNoCard,
  }
})
