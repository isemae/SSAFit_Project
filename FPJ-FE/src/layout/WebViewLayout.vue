<template>
  <div class="webview-layout">
    <Header />
    <section>
      <InfoPanel />
      <slot />
    </section>
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import InfoPanel from '@/components/common/InfoPanel.vue'
</script>
<style scoped>
.webview-layout {
  display: flex;
  flex-direction: column;
}
</style>
