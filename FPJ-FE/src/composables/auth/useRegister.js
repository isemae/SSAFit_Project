import { useAccountStore } from '@/stores/accountStore'
import { useAccountService } from './useAccountService'
import { useValidation } from './useValidation'
import { watch } from 'vue'

/** 사용자 등록
 * @function useRegister
 * @param {String} loginId
 * @param {String} password
 * @param {String} useName
 * @returns {Boolean}
 * @url /accounts/regist
 * ( id: loginId, password, name: userName ) => boolean
 * 입력한 정보가 유효하다면 form 데이터를 모아 서버에 요청을 보냅니다.
 * watch, debounce를 통해 회원가입 form에 입력된 값이 유효한지 확인합니다.
 *
 *
 *
 *
 *
 *
 */
export const useRegister = async () => {
  const register = () => {
    try {
      watch(source, cb)
    } catch (err) {
      console.error(err)
    }
  }

  return { register }
}
