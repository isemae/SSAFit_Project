<template>
  <div>
    <template v-if="currentView === 'login'">
      <LoginForm />
      <button @click="currentView = 'register'">회원가입</button>
    </template>
    <template v-if="currentView === 'register'">
      <RegisterForm />
      <button @click="currentView = 'login'">로그인</button>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/user/LoginForm.vue'
import RegisterForm from '@/components/user/RegisterForm.vue'

import { useAccountService } from '@/composables/auth/useAccountService'

const currentView = ref('login')
// if ((currentView.value = 'login')) {
//   // 로그인함
//   accountService.login()
// } else {
//   // 회원가입하고 로그인함
// }
</script>

<style scoped></style>
