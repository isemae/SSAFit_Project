<template>
  <h2>회원가입</h2>
  <AuthBaseForm :initial-form-data="registerFormData" :on-submit="handleSubmit">
    <template #additional-fields="{ validateField, formData }">
      <div class="form-group">
        <label for="passwordCheck">비밀번호 확인</label>
        <input type="password" v-model="formData.passwordCheck" class="form-input" />
      </div>
      <div class="form-group">
        <label for="userName">닉네임</label>
        <input type="text" v-model="formData.userName" class="form-input" />
      </div>
    </template>
  </AuthBaseForm>
</template>

<script setup>
import AuthBaseForm from './UserInfoBaseForm.vue'
import { useAccountService } from '@/composables/auth/useAccountService'
import { useAuthService } from '@/composables/auth/useAuthService'
import { reactive } from 'vue'
const accountService = useAccountService()
const authService = useAuthService()

const registerFormData = reactive({
  loginId: '',
  password: '',
  passwordCheck: '',
  userName: '',
})
const handleSubmit = async (formData) => {
  try {
    const res = accountService.register(formData)
    console.log('회원가입 성공')
  } catch (error) {
    console.error('회원가입 또는 로그인 실패:', error)
    alert('회원가입 또는 로그인에 실패했습니다.')
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 6px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #1428a0;
}
</style>
