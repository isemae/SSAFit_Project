<template>
  <form @submit.prevent="submitForm" class="login-form">
    <div class="logo-container">
      <img src="/src/assets/logo.png" alt="SSAFY Logo" class="logo">
    </div>
    <div class="form-group">
      <label for="loginId">아이디</label>
      <input id="loginId" type="text" v-model="formData.loginId" class="form-input" />
    </div>
    <div class="form-group">
      <label for="password">비밀번호</label>
      <input id="password" type="password" v-model="formData.password" class="form-input" />
    </div>
    <slot name="additional-fields" :validate-field="validateField" :form-data="formData"></slot>
    <button class="login-button">확인</button>
  </form>
</template>
<script setup>

import { useValidation } from '@/composables/auth/useValidation'
import { reactive, computed, watchEffect, ref } from 'vue'
const { validateField, errors } = useValidation()

const props = defineProps({
  initialFormData: Object,
  onSubmit: Function,
})

const formData = reactive({ ...props.initialFormData } || {})

const submitForm = () => {
  props.onSubmit(formData)
}

const isFormValid = computed(() => Object.values(errors).every((error) => error === null))
</script>

<style scoped>
.login-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 5px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.logo-container {
  margin-bottom: 40px;
  text-align: left;
}

.logo {
  height: 100px;
  width: auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 4px;
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

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;
}

.remember-checkbox {
  margin: 0;
}

.checkbox-group label {
  font-size: 14px 0;
  color: #666;
}

.login-button {
  width: 100%;
  padding: 6px 0;
  background-color: #1428a0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: #0f1f7a;
}

.login-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.links {
  margin-top: 20px;
  text-align: center;
}

.forgot-link {
  color: #666;
  text-decoration: none;
  font-size: 14px;
}

.forgot-link:hover {
  text-decoration: underline;
}
</style>



<!-- ========================================================================= -->
<!-- ========================================================================= -->
<!-- ========================================================================= -->
<!-- <template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="loginId">ID</label>
      <input id="loginId" type="text" v-model="formData.loginId" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input id="password" type="password" v-model="formData.password" />
    </div>
    <slot name="additional-fields" :validate-field="validateField" :form-data="formData"></slot>
    
    <button>확인</button>
  </form>
</template> -->

<!-- <script setup>
import { useValidation } from '@/composables/auth/useValidation'
import { reactive, computed, watchEffect, ref } from 'vue'
const { validateField, errors } = useValidation()

const props = defineProps({
  initialFormData: Object,
  onSubmit: Function,
})

const formData = reactive({ ...props.initialFormData } || {})

const submitForm = () => {
  props.onSubmit(formData)
}

const isFormValid = computed(() => Object.values(errors).every((error) => error === null))
</script> -->

<!-- <style scoped></style> -->

<!-- ========================================================================= -->
<!-- ========================================================================= -->
<!-- ========================================================================= -->



<!-- gpt가 짜준거... 이대로 안쓸거임 -->
<!-- <template> -->
<!--   <form @submit.prevent="onSubmit"> -->
<!--     <div> -->
<!--       <label for="userId">User ID</label> -->
<!--       <input -->
<!--         id="userId" -->
<!--         v-model="formData.userId" -->
<!--         @focus="setFocusedField('userId')" -->
<!--         @blur="setFocusedField(null)" -->
<!--       /> -->
<!--       <span v-if="errors.userId">{{ errors.userId }}</span> -->
<!--     </div> -->
<!--     <div> -->
<!--       <label for="password">Password</label> -->
<!--       <input -->
<!--         id="password" -->
<!--         type="password" -->
<!--         v-model="formData.password" -->
<!--         @focus="setFocusedField('password')" -->
<!--         @blur="setFocusedField(null)" -->
<!--       /> -->
<!--       <span v-if="errors.password">{{ errors.password }}</span> -->
<!--     </div> -->
<!--     <div v-if="isRegistration"> -->
<!--       <label for="passwordCheck">Confirm Password</label> -->
<!--       <input -->
<!--         id="passwordCheck" -->
<!--         type="password" -->
<!--         v-model="formData.passwordCheck" -->
<!--         @focus="setFocusedField('passwordCheck')" -->
<!--         @blur="setFocusedField(null)" -->
<!--       /> -->
<!--       <span v-if="errors.passwordCheck">{{ errors.password }}</span> -->
<!--     </div> -->
<!--     <div v-if="isRegistration"> -->
<!--       <label for="username">Username</label> -->
<!--       <input -->
<!--         id="username" -->
<!--         v-model="formData.username" -->
<!--         @focus="setFocusedField('username')" -->
<!--         @blur="setFocusedField(null)" -->
<!--       /> -->
<!--       <span v-if="errors.username">{{ errors.username }}</span> -->
<!--     </div> -->
<!--     <button type="submit" :disabled="!isFormValid">Submit</button> -->
<!--   </form> -->
<!-- </template> -->
<!---->
<!-- <script> -->
<!-- import { reactive, computed } from "vue"; -->
<!-- import { useFormFieldWatcher } from "./useFormFieldWatcher"; -->
<!---->
<!-- export default { -->
<!--   props: { -->
<!--     isRegistration: { -->
<!--       type: Boolean, -->
<!--       default: false, -->
<!--     }, -->
<!--   }, -->
<!--   setup(props) { -->
<!--     const formData = reactive( -->
<!--       props.isRegistration -->
<!--         ? { userId: "", password: "", passwordCheck: "", username: "" } -->
<!--         : { userId: "", password: "" } -->
<!--     ); -->
<!---->
<!--     const { -->
<!--       errors, -->
<!--       setFocusedField, -->
<!--       validateFormData, -->
<!--     } = useFormFieldWatcher(formData); -->
<!---->
<!--     // 전체 폼 유효성 확인 -->
<!--     const isFormValid = computed(() => -->
<!--       Object.values(errors).every((error) => error === null) -->
<!--     ); -->
<!---->
<!--     // 폼 제출 핸들러 -->
<!--     const onSubmit = () => { -->
<!--       if (validateFormData()) { -->
<!--         console.log("Form submitted:", formData); -->
<!--       } else { -->
<!--         console.log("Form contains errors:", errors); -->
<!--       } -->
<!--     }; -->
<!---->
<!--     return { formData, errors, setFocusedField, isFormValid, onSubmit }; -->
<!--   }, -->
<!-- }; -->
<!-- </script> -->
