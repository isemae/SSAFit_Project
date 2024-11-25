import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(
    localStorage.getItem('accessToken') || '',
    // chrome.storage.sync.get(['accessToken']),
  )

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
    try {
      // chrome.storage.sync.set({ accessToken: token })
    } catch {}
  }

  // AccessToken 제거
  const clearAccessToken = () => {
    accessToken.value = ''
    localStorage.removeItem('accessToken')
    try {
      // chrome.storage.sync.remove({ accessToken })
    } catch {}
  }

  // JWT 디코딩
  const decodeJWT = (token) => {
    if (!token) return null
    try {
      const payload = token.split('.')[1]
      return JSON.parse(atob(payload))
    } catch (error) {
      console.error('Invalid token:', error)
      return null
    }
  }

  // JWT 유효성 검증
  const isTokenValid = (token) => {
    const decoded = decodeJWT(token)
    const currentTime = Math.floor(Date.now() / 1000)
    if (!decoded || !decoded.exp) return false
    return decoded.exp > currentTime
  }

  // 동기화
  watch(accessToken, (newToken) => {
    if (newToken) {
      localStorage.setItem('accessToken', newToken)
      try {
        // chrome.storage.sync.set({ accessToken: newToken })
      } catch {}
    } else {
      localStorage.removeItem('accessToken')

      try {
        // chrome.storage.sync.remove({ accessToken })
      } catch {}
    }
    console.log(accessToken?.value)
  })

  return { accessToken, loginUser, setAccessToken, clearAccessToken }
})
