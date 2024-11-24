import { useAuthStore } from '@/stores/authStore'
import { useAxiosService } from '../data/useAxiosService'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useRouter } from 'vue-router'

/**
 * 사용자 인증 서비스
 */
export const useAuthService = function () {
  const router = useRouter()
  const authStore = useAuthStore()
  const { createClient, handleRequest } = useAxiosService()
  const authClient = createClient(API_ENDPOINTS.ACCOUNT.BASE)

  // 로그인
  const login = async ({ loginId, password }) => {
    const endpoint = API_ENDPOINTS.ACCOUNT.LOGIN()
    const res = await handleRequest(() => authClient.post(endpoint.url, { loginId, password }))

    if (res.success) {
      authStore.setAccessToken(res.data) // 상태와 localStorage 동기화

      router.push({ name: 'main' })
      return res
    }
  }

  // 로그아웃
  const logout = async () => {
    authStore.clearAccessToken() // 상태와 localStorage 동기화
  }

  return { login, logout }
}
