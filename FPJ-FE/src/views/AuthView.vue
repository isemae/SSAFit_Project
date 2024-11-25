<template>
  <div class="auth-view">
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

const currentView = ref('login')
</script>

<style scoped>
.auth-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
