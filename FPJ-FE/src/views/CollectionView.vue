<template>
  <section id="collection-view">
    <InfoPanel class="info-panel" />
    <section class="view-content">
      <Collections />
    </section>
  </section>
</template>

<script setup>
import InfoPanel from '@/components/common/InfoPanel.vue'
import RecentCards from '@/components/common/RecentCards.vue'
import Collections from '@/components/content/Collections.vue'
import { useAuthStore } from '@/stores/authStore'
</script>

<style>
#collection-view {
  display: flex;
  flex-grow: 1;
}

.info-panel {
  flex: 0.8;
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
