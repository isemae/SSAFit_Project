<template #back>
  <div class="card-face back" :class="{ flipped }" @click="toggleFlip" />
</template>

<script setup></script>

<style scoped>
.back {
  border: 1px solid black;
  position: absolute;
  background-color: white;
}

.flipped .back {
  transform: rotateY(var(--flip-angle));
}

.card-wrapper:not(.flipped) .back {
  transform: rotateY(0deg);
}
</style>
