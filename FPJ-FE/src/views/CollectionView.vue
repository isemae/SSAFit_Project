<template>
  <div id="collection-view">
    <InfoPanel class="info-panel" />
    <section class="view-content">
      <RecentCards class="recent-cards" />
    </section>
  </div>
</template>

<script setup>
import InfoPanel from '@/components/common/InfoPanel.vue'
import RecentCards from '@/components/common/RecentCards.vue'
</script>

<style scoped>
#collection-view {
  display: flex;
  flex-grow: 1;
}

.info-panel {
  background-color: rebeccapurple;
  flex: 1;
}

.view-content {
  background-color: blue;
  flex: 2;
}
</style>
