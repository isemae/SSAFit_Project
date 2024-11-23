<template>
  <div class="card-face front"></div>
</template>

<script setup></script>

<style scoped>
.front {
  border: 1px solid black;
  background-color: white;
  position: absolute;
  transform: scale(var(--scale-factor, 1.2));
  transform-origin: center;
}

.flipped .front {
  width: 100%;
  height: 100%;
  transform: rotateY(0deg);
}

.card-wrapper:not(.flipped) .back {
  transform: rotateY(var(--flip-angle));
}
</style>
