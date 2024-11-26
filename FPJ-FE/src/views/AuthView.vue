<template>
  <div class="auth-view" @loggedIn="handleLogin" @registered="handleLogin">
    <template v-if="currentView === 'login'">
      <LoginForm />
      <button @click="currentView = 'register'" class="viewChange">회원가입</button>
    </template>
    <template v-if="currentView === 'register'">
      <RegisterForm :view-prop="currentView" @registered="changeComponent"/>
      <button @click="currentView = 'login'" class="viewChange">로그인</button>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/user/LoginForm.vue'
import RegisterForm from '@/components/user/RegisterForm.vue'
import { useAuthService } from '@/composables/auth/useAuthService'
import { useRoute, useRouter } from 'vue-router'
const authService = useAuthService()
const currentView = ref('login')

const changeComponent = () => {
  currentView.value = 'login'
}

const router = useRouter()
const handleLogin = (formData) => {
  console.log(formData)
  authService.login({ loginId: formData.loginId, password: formData.password })
}
</script>

<style scoped>
.auth-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.viewChange {
  margin-top: 15px;
  width: 100%;
  padding: 14px 0;
  background-color: aliceblue;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
</style>
