<template>
  <main>
    <div class="test-wrapper">
      <FlipCard />
      <FlipCard />
      <FlipCard />

      <FlipCard class="card position-left" />
      <FlipCard class="card position-center" />
      <FlipCard class="card position-right" />
    </div>
  </main>
</template>

<script setup>
import FlipCard from '@/components/common/cards/FlipCard.vue'
</script>

<style scoped>
@import '../components/common/cards/CardFace.module.css';
main {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #631f3a;
}

.test-wrapper {
  width: 50%;
  height: 50%;
  position: relative;
  perspective: 1000;
}

.test-wrapper .card {
  position: absolute;
}

.card-wrapper.flipped {
  z-index: 10;
  transform: translate(-50%, -50%);
  transform-origin: center;
  width: calc(1.5 * var(--card-width));
  height: calc(1.5 * var(--card-height));
}

.card-wrapper.position-left:not(.flipped) {
  transform: translate(calc(-50% - var(--width-offset)), -50%)
    rotate(calc(-1 * var(--base-rotate-angle)));
  z-index: 3;
}

.card-wrapper.position-center:not(.flipped) {
  transform: translate(-50%, -50%);
  z-index: 2;
}

.card-wrapper.position-right:not(.flipped) {
  transform: translate(calc(-50% + var(--width-offset)), -50%) rotate(var(--base-rotate-angle));
  z-index: 1;
}

.card-wrapper.position-left:not(.flipped):hover {
  transform: translate(calc(-50% - var(--hover-translate)), -50%)
    rotate(calc(-1 * var(--hover-rotate))) scale(1.01);
}

.card-wrapper.position-center:not(.flipped):hover {
  transform: translate(-50%, -50%) scale(1.01);
}

.card-wrapper.position-right:not(.flipped):hover {
  transform: translate(calc(-50% + var(--hover-translate)), -50%) rotate(var(--hover-rotate))
    scale(1.01);
}
</style>
