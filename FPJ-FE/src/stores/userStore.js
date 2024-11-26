import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { useUserInfoService } from '@/composables/data/useUserInfoService'
import { useAuthStore } from './authStore'

export const useUserStore = defineStore('user', () => {
  const userService = useUserInfoService()
  const authStore = useAuthStore()

  const userScore = ref(0)
  const userTier = ref(0)
  const userCardCount = ref(0)

  return {
    userScore,
    userTier,
    userCardCount,
  }
})
