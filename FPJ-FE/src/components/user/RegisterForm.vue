<template>
  <h2>회원가입</h2>
  <AuthBaseForm :initial-form-data="registerFormData" :on-submit="accountService.register">
    <template #additional-fields="{ validateField, formData }">
      <div>
        <label for="passwordCheck">비밀번호 확인</label>
        <input type="password" v-model="formData.passwordCheck" />
      </div>
      <div>
        <label for="userName">닉네임</label>
        <input type="text" v-model="formData.userName" />
      </div>
    </template>
  </AuthBaseForm>
</template>

<script setup>
import AuthBaseForm from './UserInfoBaseForm.vue'
import { useAccountService } from '@/composables/auth/useAccountService'
import { reactive } from 'vue'
const accountService = useAccountService()

const registerFormData = reactive({
  loginId: '',
  password: '',
  passwordCheck: '',
  userName: '',
})
</script>

<style lang="scss" scoped></style>
