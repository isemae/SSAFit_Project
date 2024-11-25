import { useAccountStore } from '@/stores/accountStore'

/** 사용자 인증정보의 유효성을 검증하는 hook입니다.
 * 인증상태에 따라 토큰을 만료시키거나 refresh합니다.
 */

export const useAuthService = function () {
  const accountStore = useAccountStore()
  const loginUser = accountStore.loginUser

  const decodeJWT = (token) => {
    if (!token) {
      return
    }
    const payload = token?.split('.')[1]
    return JSON.parse(atob(payload))
  }

  const isTokenValid = () => {
    const currentTime = Math.floor(Date.now() / 1000)
    if (loginUser?.exp && loginUser.exp < currentTime) {
      return false
    }
    return true
  }

  return { decodeJWT, isTokenValid }
}
