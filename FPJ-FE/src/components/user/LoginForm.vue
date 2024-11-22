<template>
  <h2>로그인</h2>
  <AuthBaseForm :form-data="loginFormData" :on-submit="accountService.login">
    <template #additional-fields="{}"> </template>
  </AuthBaseForm>
</template>

<script setup>
import AuthBaseForm from './UserInfoBaseForm.vue'
import { reactive } from 'vue'
import { useAccountService } from '@/composables/auth/useAccountService'
const currentView = 'login'
const accountService = useAccountService()
const loginFormData = reactive({
  loginId: '',
  password: '',
})
</script>

<style scoped></style>
