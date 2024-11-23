<template>
  <div class="card-wrapper" :class="[{ flipped }, getCardColor(tier)]" @click="toggleFlip">
    <div class="card-face back" v-if="$slots.back">
      <slot name="back"></slot>
    </div>
    <div class="card-face front">
      <slot name="front"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const flipped = ref(false)
const toggleFlip = () => {
  flipped.value = !flipped.value
}

const getCardColor = (tier) => {
  const colors = ['white', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'ruby', 'black']
  return colors[tier % colors.length]
}
</script>

<style scoped>
@import './CardFace.module.css';
.card-wrapper {
  width: var(--card-width);
  height: var(--card-height);
  transform-origin: center;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition:
    transform 0.2s ease,
    width 0.2s ease,
    height 0.2s ease,
    z-index 0.2s ease;
}
</style>
