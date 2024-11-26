<template #SidepanelNav>
  <div class="sidepanel-nav">
    <nav v-if="authStore.loginUser" class="navigations-container">
      <div class="navigation">
        <RouterLink :to="{ name: 'preference' }">
          <img :src="preferenceIcon" alt="설정 아이콘" />
        </RouterLink>
      </div>
      <div class="navigation">
        <RouterLink :to="{ name: 'cardCollection' }">
          <img :src="collectionIcon" alt="컬렉션 아이콘" />
        </RouterLink>
      </div>
      <div class="navigation">
        <RouterLink :to="{ name: 'auth' }">
          <img :src="logoutIcon" alt="로그아웃 아이콘" @click="authService.logout()" />
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import collectionIcon from '@/assets/collection_icon.png'
import preferenceIcon from '@/assets/preference_icon.png'
import logoutIcon from '@/assets/logout_icon.png'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useAuthService } from '@/composables/auth/useAuthService'

const authService = useAuthService()
const authStore = useAuthStore()

const route = useRoute()
const currentPage = computed(() => route.meta.title)
</script>

<style scoped>
.sidepanel-nav {
  display: flex;
  position: fixed;
  bottom: 0;
  flex-direction: column;
}

.navigations-container {
  display: flex;
  padding: 1rem;
  gap: 1rem;
}

.navigation {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  width: 64px;
  height: 40px;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
  border-radius: 10rem;
}

.navigation:hover {
  background-color: aliceblue;
}

.navigation * {
  text-decoration: none;
  text-align: center;
}
</style>
