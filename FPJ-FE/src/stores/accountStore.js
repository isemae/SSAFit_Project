import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore('accounts', () => {
  const REST_PJT_URL_ACCOUNT = `http://localhost:8080/accounts`

  const loginUser = ref(null)
  const isLoggedin = ref(false)
  // 로그인: POST
  // /accounts/login
  // ( loginId, password ) => boolean
  const login = async function (loginId, password) {
    try {
      const req = { loginId, password }
      const res = await axios({
        url: `${REST_PJT_URL_ACCOUNT}/login`,
        method: 'POST',
        data: req,
      })
      loginUser.value = req
      isLoggedin.value = res.data
    } catch (err) {
      console.error(err)
    }
    return isLoggedin.value
  }

  // 사용자 등록: POST
  // /accounts/regist
  // ( id: loginId, password, name: userName ) => boolean

  return { login, loginUser, isLoggedin }
})
