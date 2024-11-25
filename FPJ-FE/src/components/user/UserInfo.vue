<template>
  <div v-if="user" v-for="[key, value] in Object.entries(user)" :key="key">
    <strong>{{ key }}</strong
    >: {{ value }}
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { loginUser: user } = storeToRefs(authStore)
</script>

<style scoped></style>
