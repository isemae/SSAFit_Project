<template>
  <div class="card-list">
    <Card
      v-for="data in cardStore.userRecentlyCollectedCardData"
      :key="data.id"
      :data="data"
      :isCollected="true"
      :class="[{ flipped: true }, data.tier]"
    />
  </div>
</template>

<script setup>
import Card from '../cards/Card.vue'

import { useCardStore } from '@/stores/cardStore'
import { onBeforeMount, ref } from 'vue'
const cardStore = useCardStore()
const recentCards = ref([{}, {}, {}])
// {
// collectedDate: '2024-11-19 17:10:47'
// exerciseId: 11
// id: 73
// score: 100
// tier: 1
// userId: 1
// }
onBeforeMount(async () => {
  recentCards.value = await cardStore.getUserRecentlyCollectedCardData(1)
})
</script>

<style scoped>
.card-list {
  height: 20rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
