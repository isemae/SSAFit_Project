<template>
  <aside v-if="user" id="info-panel">
    <span class="user-score">{{ user.score }}</span>
    <span>당신의 건강력</span>
    <p>멋져</p>
    <p>최고야</p>
    <p>눈부셔</p>
    <RecentCards />
  </aside>
</template>

<script setup>
import RecentCards from './RecentCards.vue'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
const store = useAuthStore()
const { loginUser: user } = storeToRefs(store)
</script>

<style scoped>
#info-panel {
  flex: 0.8;
  width: 100%;
  height: 100vh;
  max-width: 30vh;
  min-width: 300px;
  padding: 0.8rem;
}

.user-score {
  font-size: 8rem;
}
</style>
