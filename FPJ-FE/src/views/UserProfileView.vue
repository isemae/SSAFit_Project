<template>
  <div id="user-profile-view">
    <UserInfo />
  </div>
</template>

<script setup>
import InfoPanel from '@/components/common/InfoPanel.vue'
import UserInfo from '@/components/user/UserInfo.vue'
import { useAuthStore } from '@/stores/authStore'
import { provide } from 'vue'

const authStore = useAuthStore()

provide('user', authStore.loginUser)
</script>

<style scoped>
#user-profile-view {
  display: flex;
  flex-direction: row;
}
div {
  margin-bottom: 0.5rem;
}
strong {
  color: #333;
  margin-right: 0.3rem;
}
</style>
