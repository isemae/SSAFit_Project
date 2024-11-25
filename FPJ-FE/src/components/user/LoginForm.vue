<template>
  <h2>로그인</h2>
  <AuthBaseForm :form-data="loginFormData" :on-submit="authService.login">
    <template #additional-fields="{}"> </template>
  </AuthBaseForm>
</template>

<script setup>
import AuthBaseForm from './UserInfoBaseForm.vue'
import { reactive } from 'vue'
import { useAuthService } from '@/composables/auth/useAuthService'
const currentView = 'login'
const authService = useAuthService()
const loginFormData = reactive({
  loginId: '',
  password: '',
})
</script>

<style scoped></style>
