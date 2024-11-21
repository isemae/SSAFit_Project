<template>
  <h2>회원가입</h2>
  <AuthBaseForm :initialFormData="registerFormData">
    <template #additional-fields="{ validateField }">
      <div>
        <label for="passwordCheck">비밀번호 확인</label>
        <input type="password" @keyup="validateField(registerFormData, 'passwordCheck')" />
      </div>
      <div>
        <label for="username">닉네임</label>
        <input type="text" @keyup="validateField(registerFormData, 'username')" />
      </div>
    </template>
  </AuthBaseForm>
</template>

<script setup>
import AuthBaseForm from './UserInfoBaseForm.vue'

const registerFormData = {
  userId: '',
  password: '',
  passwordCheck: '',
  username: '',
}
</script>

<style lang="scss" scoped></style>
