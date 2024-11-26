import { useAuthStore } from '@/stores/authStore'
import { useAxiosService } from '../data/useAxiosService'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useUserInfoService } from '../data/useUserInfoService'

/**
 * 사용자 인증 서비스
 */
export const useAuthService = function () {
  const router = useRouter()
  const authStore = useAuthStore()
  const userStore = useUserStore()
  const userService = useUserInfoService()
  const { createClient, handleRequest } = useAxiosService()
  const authClient = createClient(API_ENDPOINTS.ACCOUNT.BASE)

  // 로그인
  const login = async ({ loginId, password }) => {
    const endpoint = API_ENDPOINTS.ACCOUNT.LOGIN()
    const res = await handleRequest(() => authClient.post(endpoint.url, { loginId, password }))

    if (res.success) {
      authStore.setAccessToken(res.data) // 상태와 localStorage 동기화
      userStore.userScore = userService.getUserScore(authStore.loginUser.userId)

      alert(`${loginId} 님, 반갑습니다.`)

      router.push({ name: 'main' })
      return res
    }
  }

  // 로그아웃
  const logout = async () => {
    authStore.clearAccessToken() // 상태와 localStorage 동기화
    userStore.userScore = 0
  }

  return { login, logout }
}
