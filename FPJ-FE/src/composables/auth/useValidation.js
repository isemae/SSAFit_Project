import { watch, reactive, ref } from 'vue'

export const useValidation = () => {
  const errors = reactive({
    loginId: '',
    password: '',
    passwordCheck: '',
    username: '',
  })

  // 사용자 입력 데이터의 유효성 검증.
  // 특정 입력 형식에 대한 규칙 정의(예: 이메일, 비밀번호, 이름 등).
  // 폼 필드별 에러 메시지 관리.
  // ------------------------ 회원가입 시 사용 메서드
  // 공백체크
  const isInputBlank = (input) => {
    return input === ''
  }

  // 비밀번호 & 비밀번호 확인 일치여부 검증
  const isPasswordMatching = (password, passwordCheck) => {
    return password === passwordCheck
  }

  // 입력 패스워드가 규칙에 맞는지 검증
  const isPasswordValid = (input) => {
    return input.length >= 8
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
  // 전체 폼 유효성 검증
  const validateFormData = async (formData) => {
    await Promise.all(Object.keys(formData).map((field) => validateField(formData, field)))
    return Object.values(errors).every((error) => error === null)
  }

  const validateField = async (formData, field) => {
    const value = ref(formData[field]).value
    if (value) {
      switch (field) {
        case 'userId':
          errors.loginId = value.length >= 6 ? null : 'ID는 6자 이상이어야 합니다'
          return !errors.loginId
        case 'password':
          errors.password = value.length >= 8 ? null : '비밀번호는 8자 이상이어야 합니다'
          return !errors.password
        case 'passwordCheck':
          errors.passwordCheck = isPasswordMatching(formData['password'], value)
            ? null
            : '비밀번호가 일치하지 않습니다'
          return !errors.passwordCheck
        case 'userName':
          errors.userName = value.length >= 2 ? null : '닉네임은 2자 이상이어야 합니다'
          return !errors.userName
        default:
          errors[field] = null
          return true
      }
    }
    errors[field] = ''
    return false
  }

  // // @keyup시 필드 유효성 검증
  // const validateFormField = (formData) => {
  //   watch(
  //     formData,
  //     (newData, oldData) => {
  //       for (const field in newData) {
  //         if (newData[field] !== oldData[field]) {
  //           validateField(formData, field)
  //         }
  //       }
  //     },
  //     { deep: true },
  //     console.log(formData),
  //   )
  // }

  return { errors, validateField, validateFormData }
}
