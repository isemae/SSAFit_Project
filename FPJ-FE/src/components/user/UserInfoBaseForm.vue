<template>
  <form @submit.prevent="onSubmit(formData)">
    <div>
      <label for="loginId">ID</label>
      <input id="loginId" type="text" v-model="formData.loginId" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input id="password" type="password" v-model="formData.password" />
    </div>
    <slot name="additional-fields" :validate-field="validateField" :form-data="formData"></slot>
    <!-- <button :disabled="!isFormValid">확인</button> -->
    <button>확인</button>
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

const formData = reactive({ ...props.initialFormData })

const isFormValid = computed(() => Object.values(errors).every((error) => error === null))
</script>

<style scoped></style>

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
