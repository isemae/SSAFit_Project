<template>
  <div class="card-container">
    <Card
      v-for="item in exerciseStore.randomlySelectedExerciseData"
      :key="item.id"
      :data="item"
      :isFlipped="false"
      @exerciseStatus="handleExerciseStatus"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'
import { useCardStore } from '@/stores/cardStore'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useUserStore } from '@/stores/userStore'
import { ref, watch, onBeforeMount } from 'vue'
const cardStore = useCardStore()
const exerciseStore = useExerciseStore()
const userStore = useUserStore()

onBeforeMount(async () => {
  // await cardStore.getUserCollectedCardData(1)
  // await cardStore.getUserRecentlyCollectedCardData(1)
  await exerciseStore.getRandomlySelectedExerciseData()
})

const handleExerciseStatus = function ({ status, data }) {
  if (!status && data) {
    let card = {
      exerciseId: data.id,
      score: 100,
      tier: 1,
    }
    cardStore.postCard(1, card)
  }
}
</script>

<style scoped>
.card-container {
  /* background-color: rebeccapurple; */
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
