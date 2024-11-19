<template>
  <div class="card-container">
    <Card v-for="item in exerciseStore.randomlySelectedExerciseData" :key="item.id" :data="item" />
  </div>
</template>

<script setup>
import Card from './Card.vue'
import { useCardStore } from '@/stores/cardStore'
import { useExerciseStore } from '@/stores/exerciseStore'
import { ref, watch, onBeforeMount } from 'vue'
const cardStore = useCardStore()
const exerciseStore = useExerciseStore()

onBeforeMount(async () => {
  await cardStore.getUserCollectedCardData(1)
  await cardStore.getUserRecentlyCollectedCardData(1)
  await exerciseStore.getRandomlySelectedExerciseData()
})

watch('exerciseStatus', (status, data) => {
  if (!status && data) {
    console.log(data)
  }
})
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
