import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'
import { useAuthService } from '@/composables/auth/useAuthService'

export const useAccountStore = defineStore('accounts', () => {
  const authService = useAuthService()
  const accessToken = ref()
  const loginUser = computed(() => {
    if (accessToken) {
      !!authService.decodeJWT(accessToken.value)
    }
  })

  watch(accessToken, (newToken) => {
    if (newToken) {
      localStorage.setItem('accessToken', newToken)
    } else {
      localStorage.removeItem('accessToken')
    }
  })

  return { loginUser, accessToken }
})
