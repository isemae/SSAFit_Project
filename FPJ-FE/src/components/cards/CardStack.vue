<template>
  <div class="card-container">
    <Card
      v-for="item in exerciseStore.randomlySelectedExerciseData"
      :key="item.id"
      :data="item"
      :isFlipped="false"
      :class="[{ flipped: false }, 'white']"
      @exerciseStatus="handleExerciseStatus"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'
import { onBeforeMount } from 'vue'
import { useCardService } from '@/composables/data/useCardService'
import { useExerciseStore } from '@/stores/exerciseStore'

const { initExerciseData, handleExerciseStatus } = useCardService()
const exerciseStore = useExerciseStore()

onBeforeMount(() => {
  initExerciseData()
})
</script>

<style scoped>
.card-container {
  background-color: rebeccapurple;
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
