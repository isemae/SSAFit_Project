<template>
  <CardBase>
    <template #front>
      info
      <img :src="exerciseIcon" alt="" />
      <!-- <p>{{ data.collectedDate }}</p> -->
      <!-- <p>{{ data.exerciseId }}</p> -->
    </template>
  </CardBase>
</template>

<script setup>
defineProps({
  data: Object,
})

import CardBase from './CardBase.vue'
import exerciseIcon from '@/assets/test-stretch-icon.png'
</script>

<style scoped>
.front {
  width: 200px;
  height: 360px;
  border: 1px solid black;
  background-color: white;
}
</style>
