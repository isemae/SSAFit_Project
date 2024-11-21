import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

export const useAccountStore = defineStore('accounts', () => {
  const loginUser = reactive({})
  const isLoggedIn = computed(() => Boolean(loginUser))

  return { loginUser, isLoggedIn }
})
