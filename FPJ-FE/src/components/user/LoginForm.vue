<template>
  <h2>로그인</h2>
  <AuthBaseForm :form-data="loginFormData">
    <template #additional-fields="{}"> </template>
  </AuthBaseForm>
</template>

<script setup>
import AuthBaseForm from './UserInfoBaseForm.vue'

const loginFormData = {
  userId: '',
  password: '',
}
</script>

<style scoped></style>
