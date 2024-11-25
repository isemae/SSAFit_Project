<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup>
import { useAuthService } from './composables/auth/useAuthService'
import SidepanelLayout from './layout/SidepanelLayout.vue'
import WebViewLayout from './layout/WebViewLayout.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore()
const authService = useAuthService()
const route = useRoute()
const layoutComponent = computed(() => {
  return route.meta.layout === 'sidepanel' ? SidepanelLayout : WebViewLayout
})
</script>

<style>
@import 'assets/normalize.css';
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

body {
  overflow: hidden;
}
</style>
