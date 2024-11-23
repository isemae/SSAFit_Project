<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup>
import SidepanelLayout from './layout/SidepanelLayout.vue'
import WebViewLayout from './layout/WebViewLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

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
