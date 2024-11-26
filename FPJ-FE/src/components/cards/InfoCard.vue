<template>
  <CardBase :tier="data.tier">
    <template #front> </template>
    <template #back>
      <div>{{ data.id }}</div>
      <img :src="exerciseIcon" alt="" />
      <div>{{ data.name }}</div>
      <div>{{ data.score }}</div>
    </template>
  </CardBase>
</template>

<script setup>
const props = defineProps({
  data: Object,
})

import CardBase from './CardBase.vue'
import exerciseIcon from '@/assets/test-stretch-icon.png'
</script>

<style scoped>
.card-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.exercise-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.info-summary {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  text-align: center;
}

.info-summary .title {
  font-size: 1.5rem;
  font-weight: bold;
}

.additional-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  width: 100%;
}
</style>
