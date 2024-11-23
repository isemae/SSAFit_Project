<template>
  <CardBase>
    <template #back>
      <CardFaceBack></CardFaceBack>
    </template>
    <template #front>
      <CardFaceFront></CardFaceFront>
    </template>
  </CardBase>
</template>

<script setup>
import CardBase from './CardBase.vue'
import CardFaceBack from './CardFaceBack.vue'
import CardFaceFront from './CardFaceFront.vue'
</script>

<style scoped>
.card-wrapper.flipped .front {
  transform: rotateY(0deg);
}

.card-wrapper:not(.flipped) .front {
  transform: rotateY(var(--flip-angle));
}

.card-face {
  width: var(--card-width);
  height: var(--card-height);
  border-radius: 10px;
  backface-visibility: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform-origin: center;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease,
    z-index 0.4s ease;
}
</style>
