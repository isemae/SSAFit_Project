<template>
  <div class="card-container">
    <Card
      v-for="data in exerciseData"
      :key="data.id"
      :data="data"
      :class="[{ flipped: false }, 'white']"
      @exerciseStatus="handleExerciseStatus"
    />
  </div>
</template>

<script setup>
import Card from './CardBase.vue'
import { onBeforeMount } from 'vue'
import { useCardService } from '@/composables/data/useCardService'
import { useExerciseStore } from '@/stores/exerciseStore'
import { storeToRefs } from 'pinia'

const { initExerciseData, handleExerciseStatus } = useCardService()
const exerciseStore = useExerciseStore()
const { randomlySelectedExerciseData: exerciseData } = storeToRefs(exerciseStore)

onBeforeMount(() => {
  initExerciseData()
})
</script>

<style scoped>
.card-container {
  width: 36rem;
  height: 20rem;
  background-color: rebeccapurple;
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
