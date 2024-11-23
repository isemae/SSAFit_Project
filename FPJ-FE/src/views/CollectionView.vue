<template>
  <section id="collection-view">
    <Collections />
  </section>
</template>

<script setup>
import RecentCards from '@/components/common/RecentCards.vue'
import Collections from '@/components/content/Collections.vue'
import { useAuthStore } from '@/stores/authStore'
</script>

<style>
#collection-view {
  display: flex;
  flex-grow: 1;
}

.view-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  flex: 2;
  height: 100vh;
}
</style>
