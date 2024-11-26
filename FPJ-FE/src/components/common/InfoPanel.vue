<template>
  <aside id="info-panel">
    <span class="user-score">{{ userStore.userScore }}</span>
    <span>당신의 건강력</span>
  </aside>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { onMounted } from 'vue'
import { useUserInfoService } from '@/composables/data/useUserInfoService'
const userStore = useUserStore()
const userService = useUserInfoService()

onMounted(async () => {
  if (userStore.userScore <= 0) {
    const res = await userService.getUserScore()

    if (res.success) {
      userStore.userScore = res.data
    }
  }
})
</script>

<style scoped>
#info-panel {
  flex: 0.8;
  height: 100%;
  max-width: 20rem;
  padding: 0.8rem;
}

.user-score {
  font-size: 8rem;
}
</style>
