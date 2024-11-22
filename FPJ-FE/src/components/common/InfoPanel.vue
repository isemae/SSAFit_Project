<template>
  <section id="info-panel">
    <!-- <p>{{ userScore.data }}</p> -->
    <span class="user-score">{{ 1529 }}</span>
    <span>당신의 건강력</span>
    <p>멋져</p>
    <p>최고야</p>
    <p>눈부셔</p>
    <RecentCards />
  </section>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref, onBeforeMount } from 'vue'
import RecentCards from './RecentCards.vue'
const userStore = useUserStore()
const userScore = ref(null)

// onBeforeMount(() => {
//   userScore.value = userStore.getUserScore(1)
//   console.log(userScore.value.data)
// })
</script>

<style scoped>
@import 'InfoPanel.module.css';
</style>
