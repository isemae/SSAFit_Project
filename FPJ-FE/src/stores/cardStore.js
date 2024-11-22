import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
  const userCollectedCardData = ref([])
  const userRecentlyCollectedCardData = ref([{}, {}, {}])

  return {
    userCollectedCardData,
    userRecentlyCollectedCardData,
  }
})
