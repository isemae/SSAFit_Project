import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('accessToken') || '')

  // 로그인된 사용자 정보
  const loginUser = computed(() => {
    if (accessToken.value) {
      try {
        const payload = JSON.parse(atob(accessToken.value.split('.')[1]))
        return payload
      } catch (error) {
        console.error('Invalid token:', error)
        return null
      }
    }
    return null
  })

  // AccessToken 설정
  const setAccessToken = (token) => {
    accessToken.value = token
    localStorage.setItem('accessToken', token)
  }

  // AccessToken 제거
  const clearAccessToken = () => {
    accessToken.value = ''
    localStorage.removeItem('accessToken')
  }

  // 동기화
  watch(accessToken, (newToken) => {
    if (newToken) {
      localStorage.setItem('accessToken', newToken)
    } else {
      localStorage.removeItem('accessToken')
    }
  })

  return { accessToken, loginUser, setAccessToken, clearAccessToken }
})
