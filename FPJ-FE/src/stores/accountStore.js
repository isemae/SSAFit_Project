import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAccountStore = defineStore('accounts', () => {
  const loginUser = ref(null)
  const isLoggedIn = computed(() => Boolean(loginUser.value))

  return { loginUser, isLoggedIn }
})
