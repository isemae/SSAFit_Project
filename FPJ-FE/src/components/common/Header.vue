<template #navigations>
  <div class="webview-header">
    <h1>{{ currentPage }}</h1>
    <nav v-if="authStore.loginUser" class="navigations-container">
      <div class="navigation">
        <img :src="collectionIcon" alt="컬렉션 아이콘" />
        <RouterLink :to="{ name: 'cardCollection' }">컬렉션</RouterLink>
      </div>
      <div class="navigation">
        <img :src="userIcon" alt="프로필 아이콘" /><RouterLink :to="{ name: 'profile' }"
          >프로필</RouterLink
        >
      </div>
      <div class="navigation">
        <img :src="preferenceIcon" alt="설정 아이콘" />
        <RouterLink :to="{ name: 'preference' }">설정</RouterLink>
      </div>
      <div>
        <button @click="authService.logout()">로그아웃</button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useAuthService } from '@/composables/auth/useAuthService'
import collectionIcon from '@/assets/collection_icon.svg'
import userIcon from '@/assets/user_icon.svg'
import preferenceIcon from '@/assets/preference_icon.svg'

const authService = useAuthService()
const authStore = useAuthStore()

const route = useRoute()
const currentPage = computed(() => route.meta.title)
</script>

<style scoped>
.webview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid lightgray;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
}

a,
button {
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
}

a:hover,
button:hover {
  color: #007bff;
}

.navigations-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
