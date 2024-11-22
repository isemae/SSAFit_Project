import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useAccountStore } from '@/stores/accountStore'
import { useAxiosService } from '../data/useAxiosService'

/** 사용자 계정 정보 통신을 담당하는 Composable입니다.
 *
 *
 *
 *
 */

export const useAccountService = () => {
  const { createClient } = useAxiosService()
  const accountStore = useAccountStore()

  const accountClient = createClient(API_ENDPOINTS.ACCOUNT.BASE)

  const handleRequest = async (name, req) => {
    try {
      const res = await req()
      return { success: true, data: res.data }
    } catch (err) {
      return { success: false, error: err.response?.data }
    }
  }

  const login = async ({ loginId, password }) => {
    const endpoint = API_ENDPOINTS.ACCOUNT.LOGIN() // 함수 호출 필요
    const res = await handleRequest('login', () =>
      accountClient.post(endpoint.url, { loginId, password }),
    )
    if (res.success) {
      accountStore.accessToken = res.data
      localStorage.setItem('accessToken', res.data)
    }
    return res
  }

  const logout = async () => {
    localStorage.removeItem('accessToken')
  }

  /** 사용자 등록
   * @function register
   * @param {String} loginId
   * @param {String} password
   * @param {String} userName
   * @returns {Boolean}
   * @url /accounts/register
   * ( id: loginId, password, name: userName ) => boolean
   * 입력한 정보가 유효하다면 form 데이터를 모아 서버에 요청을 보냅니다.
   */
  const register = async ({ loginId, password, userName }) => {
    const res = await handleRequest('register', () =>
      accountClient.post('/register', { loginId, password, userName }),
    )
    return res
  }
  return { login, logout, register }
}
