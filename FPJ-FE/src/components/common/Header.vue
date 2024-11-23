<template>
  <div id="webview-header">
    <h1>{{ currentPage }}</h1>
    <nav v-if="authStore.loginUser" id="navigations-container">
      <div class="navigation">
        <RouterLink :to="{ name: 'cardCollection' }"
          ><img :src="collectionIcon" alt="컬렉션 아이콘" />컬렉션</RouterLink
        >
      </div>
      <div class="navigation">
        <RouterLink :to="{ name: 'profile' }"
          ><img :src="userIcon" alt="프로필 아이콘" />프로필</RouterLink
        >
      </div>
      <div class="navigation">
        <RouterLink :to="{ name: 'preference' }"
          ><img :src="preferenceIcon" alt="설정 아이콘" />설정</RouterLink
        >
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
import collectionIcon from '@/assets/collection_icon.svg'
import userIcon from '@/assets/user_icon.svg'
import preferenceIcon from '@/assets/preference_icon.svg'
import { useAuthService } from '@/composables/auth/useAuthService'

const authService = useAuthService()
const authStore = useAuthStore()

const route = useRoute()
const currentPage = computed(() => route.meta.title)
</script>

<style scoped>
#webview-header {
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

#navigations-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.navigation img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
</style>
