<template>
  <aside v-if="store.loginUser" id="info-panel">
    <span class="user-score">{{ store.loginUser.score }}</span>
    <span>당신의 건강력</span>
    <RecentCards />
  </aside>
</template>

<script setup>
import RecentCards from './RecentCards.vue'
import { useAuthStore } from '@/stores/authStore'
const store = useAuthStore()
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
