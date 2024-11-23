<template>
  <section v-if="userCards.length > 0" class="collections">
    <Card v-for="item in userCards" :key="item.id" :data="item">test</Card>
  </section>
  <p v-else class="message no-card">{{ cardStore.messageNoCard }}</p>
</template>

<script setup>
import { useCardService } from '@/composables/data/useCardService'
import { onMounted, computed } from 'vue'
import CardStack from '../common/cards/CardStack.vue'
import { useUserInfoService } from '@/composables/data/useUserInfoService'
import { ref, onBeforeMount } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import Card from '../common/cards/CardBase.vue'
import { useCardStore } from '@/stores/cardStore'
import { useAuthService } from '@/composables/auth/useAuthService'

const userService = useUserInfoService()
const authStore = useAuthStore()
const cardStore = useCardStore()
const userCards = cardStore.userCollectedCardData

// onMounted(async () => {
// const user = authStore.loginUser
// console.log(user)
// userCards.value = await userService.getUserCollectedCardData(user.userId)
// console.log(userCards.value)
// })
</script>

<style scoped>
.collections {
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  padding: 1rem;
  border-radius: 10px;

  background-color: lightgray;
  overflow-y: auto;
  box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.6);
}

.message {
  display: inline-block;
}
</style>
