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
import { useRouter } from 'vue-router'
const accountService = useAccountService()
const authService = useAuthService()
const router = useRouter()

const registerFormData = reactive({
  loginId: '',
  password: '',
  passwordCheck: '',
  userName: '',
})

defineProps({
    viewProp: String
})

const emit = defineEmits(['registered'])

const handleSubmit = async (formData) => {
  const res = await accountService.register(formData)
  if (res.success) {
    alert('회원가입 성공')
    emit('registered')
  } else {
    alert(res.error)
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
