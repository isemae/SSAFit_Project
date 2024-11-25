<template>
  <section class="recent-cards">
    <p>최근 카드...</p>
    <div class="card-list">
      <InfoCard
        v-for="card in cardStore.userRecentlyCollectedCards.value"
        :key="card.id"
        :data="card"
      ></InfoCard>
    </div>
  </section>
</template>

<script setup>
import InfoCard from '../cards/InfoCard.vue'
import { useCardStore } from '@/stores/cardStore'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { useCardService } from '@/composables/data/useCardService'

const cardService = useCardService()
const cardStore = useCardStore()
const authStore = useAuthStore()
const { loginUser: user } = storeToRefs(authStore)
onBeforeMount(async () => {
  await cardService.fetchRecentCards(user.value.userId, 3)
})
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 1.2rem;
}

.recent-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.card-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.card-wrapper {
  height: 10rem;
}
</style>
