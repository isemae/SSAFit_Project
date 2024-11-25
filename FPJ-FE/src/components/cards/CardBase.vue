<template>
  <div class="card-wrapper">
    <div class="card-face back" :class="getCardColor(tier)" v-if="$slots.back" @click="toggleFlip">
      <slot name="back" />
    </div>
    <div class="card-face front" :class="getCardColor(tier)">
      <slot name="front" />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { loginUser: user } = storeToRefs(authStore)

const emit = defineEmits(['toggle'])
defineProps({
  tier: Number,
})

const toggleFlip = () => {
  emit('toggle')
}
const getCardColor = (tier) => {
  const colors = ['white', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'ruby', 'black']
  return colors[(tier + 7) % colors.length]
}
</script>

<style scoped>
@import './CardFace.module.css';
.card-wrapper {
  /* aspect-ratio: 1/1.54; */
  width: var(--card-width);
  height: var(--card-height);
  min-width: var(--card-min-width);
  min-height: var(--card-min-height);
  box-sizing: border-box;
  transform-origin: center;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    width 0.3s ease,
    height 0.3s ease;
}

.card-face {
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  backface-visibility: hidden;
  perspective: 1000px;
  transform-origin: center;
  transition:
    transform 0.3s ease-out,
    width 0.3s ease,
    height 0.3s ease,
    opacity 0.3s ease,
    z-index 0.3s ease;
}

.flipped,
.flipped > * {
  width: 100%;
  height: 100%;
  transition:
    transform 0.5s ease-in,
    width 0.5s ease,
    height 0.5s ease,
    opacity 0.5s ease,
    z-index 0.5s ease;
}

.card-wrapper.flipped .back {
  transform: rotateY(calc(-1 * var(--flip-angle)));
}

.card-wrapper.flipped .front,
.card-wrapper:not(.flipped) .back {
  transform: rotateY(0deg);
}

.card-wrapper:not(.flipped) .front {
  transform: rotateY(var(--flip-angle));
}

.card-wrapper img {
  max-width: 256px;
  min-width: 24px;
  width: 80%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
</style>
