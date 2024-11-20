<template>
  <section class="collections">
    <RecentCards />
    <RecentCards />
    <RecentCards />
    <RecentCards />
    <RecentCards />
    <RecentCards />
  </section>
</template>

<script setup>
import RecentCards from '../common/RecentCards.vue'
</script>

<style scoped>
.collections {
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  padding: 1rem;
  border-radius: 10px;

  background-color: lightgray;
  overflow-y: auto;
  box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.6);
}
</style>
