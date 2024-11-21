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
import { ref, reactive } from 'vue'
import LoginForm from '@/components/user/LoginForm.vue'
import RegisterForm from '@/components/user/RegisterForm.vue'

const currentView = ref('login')

const formData = reactive({})
</script>

<style scoped></style>
