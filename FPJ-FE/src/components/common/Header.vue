<template>
  <div id="webview-header">
    <h1>{{ currentPage }}</h1>
    <nav id="navigations-container">
      <div class="navigation">
        <img src="@/assets/collection_icon.svg" alt="" />
        <RouterLink :to="{ name: 'cardCollection' }">컬렉션</RouterLink>
      </div>
      <div class="navigation">
        <img src="@/assets/user_icon.svg" alt="" />
        <RouterLink :to="{ name: 'profile' }">프로필</RouterLink>
      </div>
      <div class="navigation">
        <img src="@/assets/preference_icon.svg" alt="" />
        <RouterLink :to="{ name: 'preference' }">설정</RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const currentPage = computed(() => route.meta.title)
</script>

<style scoped>
#webview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: black;
}

#navigations-container,
#navigations-container .navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.navigation {
  justify-content: space-around;
}

.navigation img {
  width: 24px;
  height: 24px;
}
</style>
