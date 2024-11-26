import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { useAuthService } from './useAuthService'
import { useAxiosService } from '../data/useAxiosService'

/** 유저 정보 관련 작업을 처리합니다.
 *   - 유저 정보 관리
 *   - Store 상태 관리
 *   - useAuthService호출
 *   - Component 와 연결
 */

export const useAccountService = () => {
  const { createClient, handleRequest } = useAxiosService()
  // const accountStore = useAccountStore()
  const accountClient = createClient(API_ENDPOINTS.ACCOUNT.BASE)

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
    const res = await handleRequest(() =>
      accountClient.post('/register', { loginId, password, userName }),
    )
    console.log(res)
    return res
  }

  return { register }
}
