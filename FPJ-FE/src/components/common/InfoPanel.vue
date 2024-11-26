<template>
  <aside v-if="userStore.userScore >= 0" id="info-panel">
    <span class="user-score">{{ userStore.userScore }}</span>
    <span>당신의 건강력</span>
    <RecentCards />
  </aside>
</template>

<script setup>
import RecentCards from './RecentCards.vue'
import { useUserStore } from '@/stores/userStore'
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
const userStore = useUserStore()
</script>

<style scoped>
#info-panel {
  flex: 0.8;
  height: 100%;
  max-width: 20rem;
  padding: 0.8rem;
}

.user-score {
  font-size: 8rem;
}
</style>
