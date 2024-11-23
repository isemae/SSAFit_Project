<template>
  <div class="card-wrapper" :class="[{ flipped: isFlipped }, getCardColor(data.tier)]">
    <div class="card-face back" v-if="!isCollected" @click="flipCard"></div>
    <div class="card-face front">
      <template v-if="!isCollected">
        <img src="@/assets/test-stretch-icon.png" alt="" />
        <p>{{ data.name }}</p>
        <p>{{ data.info }}</p>
        <p>{{ data.time }} 초</p>
        <button @click="flipCard">cancel</button>
        <button @click="doExercise(data)">confirm</button>
      </template>
      <template v-else>
        <img src="@/assets/test-stretch-icon.png" alt="" />
        <p>{{ data.collectedDate }}</p>
        <p>{{ data.exerciseId }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
// 인터랙션이 필요한 flipcard
import { ref } from 'vue'
defineProps({
  data: Object,
  isCollected: Boolean,
})

const isFlipped = ref(false)
const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const emit = defineEmits(['exerciseStatus', { status: true, data: null }])

const doExercise = function (data) {
  console.log(data)
  setTimeout(() => {
    emit('exerciseStatus', { status: false, data: data })
  }, data.time * 1)
}
</script>

<style scoped>
.card-wrapper {
  width: 100%;
  height: 100%;
  min-width: var(--card-min-width);
  min-height: var(--card-min-height);
  position: relative;
  box-sizing: border-box;
  transform-origin: center;
  transition:
    transform 0.2s ease,
    z-index 0.2s ease;
  cursor: pointer;
}

.card-face.front {
  transform: rotateY(var(--flip-angle));
}

.flipped .front {
}

/* .card-wrapper:nth-child(1).flipped .front { */
/*   left: 100%; */
/* } */
/* .card-wrapper:nth-child(2).flipped .front { */
/* } */
/* .card-wrapper:nth-child(3).flipped .front { */
/*   left: -100%; */
/* } */

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
