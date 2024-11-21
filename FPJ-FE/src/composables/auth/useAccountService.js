import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useAccountStore } from '@/stores/accountStore'
import axios from 'axios'
import { useValidation } from './useValidation'
export const useAccountService = () => {
  const accountStore = useAccountStore()
  // 로그인: POST
  // /accounts/login
  // ( loginId, password ) => boolean
  const login = async function ({ loginId, password }) {
    try {
      const req = { loginId, password }
      const res = await axios({
        url: `${API_ENDPOINTS.ACCOUNT.BASE}/login`,
        method: 'POST',
        data: req,
      })
      accountStore.loginUser = req
    } catch (err) {
      console.error(err)
    }
    return useAccountStore.isLoggedIn
  }

  const logout = async () => {}

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
  // const register = async ({ loginId, password, userName }) => {
  const register = async ({ loginId, password, userName }) => {
    console.log(loginId)
    console.log(password)
    console.log(userName)
    try {
      const req = { loginId, password, userName }
      console.log('req' + JSON.stringify(req))
      const res = await axios({
        url: `${API_ENDPOINTS.ACCOUNT.BASE}/register`,
        method: 'POST',
        data: req,
      })
    } catch (err) {
      console.error(err)
    }
  }
  return { login, logout, register }
}
