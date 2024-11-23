import { useAuthStore } from '@/stores/authStore'
import { useAxiosService } from '../data/useAxiosService'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'

/**
 * 사용자 인증 서비스
 * - 로그인/로그아웃 API 호출
 * - JWT 검증 및 유효성 검사
 */
export const useAuthService = function () {
  const authStore = useAuthStore()
  const { createClient, handleRequest } = useAxiosService()
  const authClient = createClient(API_ENDPOINTS.ACCOUNT.BASE)

  // 로그인
  const login = async ({ loginId, password }) => {
    const endpoint = API_ENDPOINTS.ACCOUNT.LOGIN()
    const res = await handleRequest(() => authClient.post(endpoint.url, { loginId, password }))

    if (res.success) {
      authStore.setAccessToken(res.data) // 상태와 localStorage 동기화
    }
    return res
  }

  // 로그아웃
  const logout = async () => {
    authStore.clearAccessToken() // 상태와 localStorage 동기화
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

  return { login, logout, decodeJWT, isTokenValid }
}
