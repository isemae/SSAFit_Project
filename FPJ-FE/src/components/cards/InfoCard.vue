<template>
  <CardBase :tier="props.data.tier">
    <template #front> </template>
    <template #back>
      <div>{{ props.data.id }}</div>
      <img :src="exerciseIcon" alt="" />
      <div>{{ props.data.name }}</div>
      <div>{{ props.data.score }}</div>
    </template>
  </CardBase>
</template>

<script setup>
const props = defineProps({
  data: Object,
})

import { onMounted } from 'vue'
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
