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
import { ref } from 'vue'
defineProps({
  data: Object,
  isCollected: Boolean,
})

const getCardColor = (tier) => {
  const colors = ['white', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'ruby', 'black']
  return colors[tier % colors.length]
}

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
  --card-width: 12rem;
  --card-height: 20rem;
  --card-min-width: 6rem;
  --card-min-height: 10rem;
  --base-rotate-angle: 7deg;
  --flip-angle: 180deg;
  --width-offset: 70%;
  --hover-translate: 65%;
  --hover-rotate: 8deg;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  /* --highlight-color: ; */
  /* --base-color: ; */
  /* --shadow-color: ; */

  --card-color-white: #fff;
  --card-color-bronze: #cb7e72;
  --card-color-silver: #e6e3e3;
  --card-color-gold: #ffd200;
  --card-color-platinum: #fff7de;
  --card-color-diamond: linear-gradient(
    135deg,
    var(--card-color-platinum),
    var(--card-color-diamond)
  );
  --card-color-ruby: #ff2c80;
  --card-color-black: #000;
}

.white > * {
  background-color: var(--card-color-white);
  border: 2px var(--card-color-black) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.bronze > * {
  background-color: var(--card-color-bronze);
  border: 2px var(--card-color-white) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.silver > * {
  background-color: var(--card-color-silver);
  border: 2px var(--card-color-bronze) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.gold > * {
  background-color: var(--card-color-gold);
  border: 2px var(--card-color-silver) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.platinum > * {
  background-color: var(--card-color-platinum);
  border: 2px var(--card-color-gold) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.diamond > * {
  background-color: var(--card-color-diamond);
  border: 2px var(--card-color-platinum) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.ruby > * {
  background-color: var(--card-color-ruby);
  border: 2px var(--card-color-diamond) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.black > * {
  background-color: var(--card-color-black);
  border: 2px var(--card-color-white) solid;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 10px black);
}

.card-wrapper {
  width: var(--card-width);
  height: var(--card-height);
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

.card-face {
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  transform-origin: center;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease,
    z-index 0.4s ease;
}

.card-face.front {
  transform: rotateY(var(--flip-angle));
  transform-origin: center;
}

.card-face.back {
  transform: rotateY(0deg);
}

.flipped {
  z-index: 10;
}

.flipped .front {
  position: absolute;
  transform: scale(var(--scale-factor, 1.2));
  width: calc(1.5 * var(--card-min-width));
  height: calc(1.5 * var(--card-min-height));
}

/* .card-wrapper:nth-child(1).flipped .front { */
/*   left: 100%; */
/* } */
/* .card-wrapper:nth-child(2).flipped .front { */
/* } */
/* .card-wrapper:nth-child(3).flipped .front { */
/*   left: -100%; */
/* } */

.card-wrapper.flipped .back {
  transform: rotateY(var(--flip-angle));
}

.card-wrapper:nth-child(1):not(.flipped) {
  transform: translateX(var(--width-offset)) rotate(calc(-1 * var(--base-rotate-angle)));
  z-index: 3;
}

.card-wrapper:nth-child(2):not(.flipped) {
  z-index: 2;
}

.card-wrapper:nth-child(3):not(.flipped) {
  transform: translateX(calc(-1 * var(--width-offset))) rotate(var(--base-rotate-angle));
  z-index: 1;
}

.card-wrapper:nth-child(1):not(.flipped):hover {
  transform: translateX(var(--hover-translate)) rotate(calc(-1 * var(--hover-rotate))) scale(1.01);
}

.card-wrapper:nth-child(2):not(.flipped):hover {
  transform: scale(1.01);
}

.card-wrapper:nth-child(3):not(.flipped):hover {
  transform: translateX(calc(-1 * var(--hover-translate))) rotate(var(--hover-rotate)) scale(1.01);
}

.card-wrapper img {
  max-width: 256px;
  width: 128px;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
</style>
