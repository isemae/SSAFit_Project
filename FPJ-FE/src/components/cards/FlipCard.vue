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
      <CircularProgress
        v-if="!exerciseStore.isExerciseDone"
        :progress="100"
        :duration="data.time"
      />
      <div class="button-wrapper">
        <CustomButton @click="doExercise(data)">운동하기</CustomButton>
        <CustomButton @click="toggleFlip">취소</CustomButton>
      </div>
    </template>
  </CardBase>
</template>

<script setup>
import { useCardService } from '@/composables/data/useCardService'
import { useExerciseStore } from '@/stores/exerciseStore'
import CircularProgress from './CircularProgress.vue'
import CardBase from './CardBase.vue'
import CustomButton from '../common/CustomButton.vue'
import { ref } from 'vue'
import { useUserInfoService } from '@/composables/data/useUserInfoService'
import { useExerciseService } from '@/composables/data/useExerciseService'
import { useUserStore } from '@/stores/userStore'

defineProps({
  data: Object,
})

const exerciseStore = useExerciseStore()
const exerciseService = useExerciseService()
const circularProgress = ref(null)

const flipped = ref(false)
const toggleFlip = () => {
  flipped.value = !flipped.value
}

const doExercise = async (data) => {
  // 운동시작했다
  exerciseStore.isExerciseDone = false
  // DB에 운동 정보 등록
  const exercise = await exerciseService.postExercise(data)
  //
  //
  // 타이머 중간 실행
  //
  //
  // 운동끝났다
  exerciseService.updateExerciseState(data, exercise.exerciseId)
  exerciseStore.isExerciseDone = true
  // toggleFlip()
}
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
