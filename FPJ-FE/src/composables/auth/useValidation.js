import { watch } from 'vue'

export const useValidation = () => {
  const decodeJWT = (token) => {
    const payload = token.split('.')[1]
    return JSON.parse(atob(payload))
  }

  // 사용자 입력 데이터의 유효성 검증.
  // 특정 입력 형식에 대한 규칙 정의(예: 이메일, 비밀번호, 이름 등).
  // 폼 필드별 에러 메시지 관리.

  // ------------------------ 회원가입 시 사용 메서드
  // 공백체크
  const isInputBlank = () => {
    return false
  }

  // 비밀번호 & 비밀번호 확인 일치여부 검증
  const isPasswordMatching = (input) => {
    return false
  }

  // 입력 패스워드가 규칙에 맞는지 검증
  const isPasswordValid = (input) => {
    return false
  }

  // 계정 존재 여부를 확인
  const isUserIdExisting = async (input) => {
    return false
  }

  // 계정 & 패스워드 유효성 확인
  const isLoginInfoValid = async (userId, password) => {
    return false
  }

  // 회원가입, 로그인 시 유효성 검증
  // @submit 시 form내 모든 필드 유효성 검증
  const validateFormData = (formData) => {
    // form컴포넌트에서 formData를 reactive로 사용
    ///////////// registration
    // const formData = reactive({
    //  userId: "",
    //  password: "",
    //  passwordCheck: "",
    //  username:
    // })
    //
    // //////////// login
    // const formData = reactive({
    //   userId: "",
    //   password: "",
    // })
    //
    let isValid = true

    for (const field in formData) {
      const isFieldValid = validateField(formData, field)
      if (!isFieldValid) {
        isValid = false
        break
      }
    }
    return isValid
  }

  // 회원가입 시 유효성 검증
  const validateField = async (formData, field) => {
    const value = formData[field]
    if (value) {
      switch (field) {
        // id는 6자 이상 & 존재하는지 검증
        case 'userId': {
          return value.length >= 6 && !(await isUserIdExisting(value))
        }
        // 패스워드는 8자 이상
        case 'password':
          return value.length >= 8 && isPasswordValid(value)
        // 패스워드가 입력돼 있고 같은지 검증
        case 'passwordCheck':
          return isPasswordMatching(formData.password, value)
        // 존재하는지 검증
        case 'userName':
          return value.length >= 2 && isUserNameAvailable(value)
        default:
          return true
      }
    }
    return false
  }

  // @keyup시 필드 유효성 검증
  const useFormFieldWatcher = (formData) => {
    watch(formData, (newData, oldData) => {
      for (const field in newData) {
        if (newData[field] !== oldData[field]) {
          validateField(formData, field)
        }
      }
    })
  }

  // watch 와 debounce로 실시간 확인
  //
  //
  return { decodeJWT }
}
