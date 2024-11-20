import { useAccountStore } from '@/stores/accountStore'
import * as auth from '@/composables/auth'

/** 사용자 Authentication과정을 관리하는 hook입니다.
 * 사용자의 가입, 로그인 여부에 따라 useLogin, useRegister 훅 호출 후 각 훅에서 유효성을 검증합니다.
 *
 *
 *
 *
 *
 */

const accountStore = useAccountStore()

export const useAuth = function () {
  const isLoggedIn = accountStore.isLoggedIn

  // 로그인되어 있지 않은 경우
  if (!isLoggedIn) {
    // 로그인되어있지 않은 경우
    // login/register 페이지로 접근 제한
    // 로그인/회원가입 결과에 따라 응답 생성 및 확인
    //
    //
    //
    //
    //
  }

  // 회원가입이든 로그인이든 어쨌든 로그인은 함
  // 라우터 접근 설정
  // 컴포넌트 로딩 설정
}
