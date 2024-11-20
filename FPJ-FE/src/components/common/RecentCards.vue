<template>
  <section id="recent-cards">
    <p>최근 카드...</p>
    <div class="card-list">
      <Card
        v-for="data in cardStore.userRecentlyCollectedCardData.value"
        :key="data.id"
        :data="data"
        :isCollected="true"
        :class="[{ flipped: true }, data.tier]"
      />
    </div>
  </section>
</template>

<script setup>
import Card from '../cards/Card.vue'

import { useCardStore } from '@/stores/cardStore'
import { onBeforeMount, ref } from 'vue'
import { useUserInfoService } from '@/composables/data/useUserInfoService'

const cardStore = useCardStore()
const userService = useUserInfoService()
// {
// collectedDate: '2024-11-19 17:10:47'
// exerciseId: 11
// id: 73
// score: 100
// tier: 1
// userId: 1
// }
//
onBeforeMount(async () => {
  await userService.getUserRecentlyCollectedCardData(1)
})
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 1.2rem;
}

#recent-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.card-list {
  width: 100%;
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
