<template>
  <CardBase :class="[{ flipped: flipped }]" @toggle="toggleFlip" :tier="3">
    <template #back>
      <div></div>
    </template>
    <template #front>
      <div class="exercise-info">
        <div class="info-summary">
          <h2 class="title">
            {{ data.name }}
          </h2>
          <div class="additional-info">
            <span>
              {{ data.part }}
            </span>
            <span> {{ data.time }}초 </span>
          </div>
        </div>
        <p>
          {{ data.info }}
        </p>
      </div>
      <div class="button-wrapper">
        <CustomButton @click="cardService.handleExercise(data.id, data.time)"
          >운동하기</CustomButton
        >
        <CustomButton @click="toggleFlip">취소</CustomButton>
      </div>
    </template>
  </CardBase>
</template>

<script setup>
import { useCardService } from '@/composables/data/useCardService'
import CardBase from './CardBase.vue'
import CustomButton from '../common/CustomButton.vue'
import { ref } from 'vue'

defineProps({
  data: Object,
  // user: Object,
})

const flipped = ref(false)
const toggleFlip = () => {
  flipped.value = !flipped.value
}
const cardService = useCardService()
</script>

<style scoped>
.card-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.exercise-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.info-summary {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  text-align: center;
}

.info-summary .title {
  font-size: 1.5rem;
  font-weight: bold;
}

.additional-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
