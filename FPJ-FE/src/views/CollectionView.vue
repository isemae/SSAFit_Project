<template #content>
  <section class="collection-view">
    <div class="collections-container">
      <div class="card-collections">
        <InfoCard
          v-for="item in cardStore.userCollectedCards.value"
          :key="item.id"
          :data="item"
        ></InfoCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useCardStore } from '@/stores/cardStore'
import { storeToRefs } from 'pinia'
import { useCardService } from '@/composables/data/useCardService'
import InfoCard from '@/components/cards/InfoCard.vue'

const authStore = useAuthStore()
const cardStore = useCardStore()
const cardService = useCardService()
const { loginUser: user } = storeToRefs(authStore)

onBeforeMount(async () => {
  if (!user.value) {
    console.error('User data is not available.')
    return
  }
  try {
    const res = await cardService.fetchUserCards(user.value.userId)
    cardStore.userCollectedCards.value = res || []
  } catch (error) {
    console.error('Failed to load cards:', error)
  }
})
</script>

<style scoped>
.collection-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  flex-grow: 1;
}

.collections-container {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
}

.card-collections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, max-content));
  justify-content: start;
  padding: 1rem;
  border-radius: 10px;
  height: 100%;
  overflow-y: auto;
  box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  gap: 1rem;
  flex: 2;
}

.card-wrapper {
  flex-grow: 0;
  flex-shrink: 0;
}
</style>
