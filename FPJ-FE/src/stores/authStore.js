import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

// 사용자 인증 정보를 보관, 검증할 Store
// JWT를 파싱한 값으로 정보를 저장하기 때문에 변경되지 않는 사용자 정보를 참조하는 용도로 사용 (ex. userId, exp)
// 변경되어야 하는 값이 있을 경우 서버와 통신해 검증할 것
// 클라이언트에서 빈번히 업데이트가 일어나는 값을 저장하기 위해서는 useUserStore를 참조
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
  })

  return { accessToken, loginUser, setAccessToken, clearAccessToken }
})
