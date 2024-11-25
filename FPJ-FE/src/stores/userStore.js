import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { useAuthStore } from './authStore'

// 클라이언트 내에서 변경되는 유저 state를 저장하는 Store
// 해당 state로 DB의 유저 정보를 업데이트,
// 데이터 일관성 확보를 위해 클라이언트 내 정보는 DB 내 정보와 동기화
// 유저 정보 업데이트는 해당 store를 통해서만
// 다른 composable이 유저 정보를 변경시킬 수 없도록 하기
//
// User 정보를 업데이트하는 케이스마다 여러 state를 변경시킬 수 있기 때문에 기능별로 userService action을 설정
// 해당 액션을 통해서만 state를 변화시키는 접근법
//
// Service로만 state를 변경하면 참조는 자유롭고 변경을 제한할 수 있지만 그렇다고 해서 데이터 일관성을 유지할 수 있나?
// 한 Service가 여러 state를 변화시키는 상황이 높은 확률로 존재하고, 이런 service가 여러 개 실행되는 경우 중복으로 변화하는 state가 반드시 존재
// 그런 경우에 Race Condition이 안 발생한다고 확신할 수 있나요?
// 비동기적으로 관리할 수도 있겠지 근데 그걸 전부 쉽게 추적할 수 있나요?
//
// store에서 내부 state의 변화를 직접 추적하고 일정 주기마다 통신 action 실행한다면?
// 변경과 참조가 자유롭고 서버와 클라이언트의 상태를 일관되게 유지
// 너무 잦은 변경이 일어나지 않도록 동기화 주기만 잘 설정하면 문제?없지않을까????

export const useUserStore = defineStore('user', () => {
  const userScore = ref(0)

  return {
    userScore,
  }
})
