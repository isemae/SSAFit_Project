import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useAccountStore } from '@/stores/accountStore'
import axios from 'axios'
import { useValidation } from './useValidation'
export const useAccountService = () => {
  // 로그인: POST
  // /accounts/login
  // ( loginId, password ) => boolean
  const login = async function (loginId, password) {
    try {
      const req = { loginId, password }
      const res = await axios({
        url: `${API_ENDPOINTS.ACCOUNT.BASE}/login`,
        method: 'POST',
        data: req,
      })
      useAccountStore.loginUser.value = req
      useAccountStore.isLoggedIn.value = res.data
    } catch (err) {
      console.error(err)
    }
    return useAccountStore.isLoggedIn.value
  }

  const logout = async () => {}

  return { login, logout }
}
