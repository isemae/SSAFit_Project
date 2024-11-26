<template>
  <CardBase :class="[{ flipped: flipped }]" :tier="authStore.loginUser.tier" @toggle="toggleFlip">
    <template #back>
      <div></div>
    </template>
    <template #front>
      <div class="exercise-info">
        <div class="info-summary">
          <h2 class="title">
            {{ data.name }}
          </h2>
        </div>
        <div class="additional-info">
          <span>
            {{ data.part }}
          </span>
          <span> {{ data.time }}초 </span>
        </div>

        <CircularProgress
          v-if="!exerciseStore.isExerciseDone"
          :progress="100"
          :duration="data.time"
          @progressDone="doneExercise(cardData)"
        />
        <p>
          {{ data.info }}
        </p>
      </div>
      <div v-if="exerciseStore.isExerciseDone" class="button-wrapper">
        <CustomButton
          :payload="{ action: 'doExercise', data }"
          id="start-exercise"
          @buttonClick="handleButtonClick"
          >운동하기</CustomButton
        >
        <CustomButton
          id="cancel"
          :payload="{ action: 'cancel', data }"
          @buttonClick="handleButtonClick"
          >취소</CustomButton
        >
      </div>
    </template>
  </CardBase>
</template>

<script setup>
import { useExerciseStore } from '@/stores/exerciseStore'
import CircularProgress from './CircularProgress.vue'
import CardBase from './CardBase.vue'
import CustomButton from '../common/CustomButton.vue'
import { computed, reactive, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useExerciseService } from '@/composables/data/useExerciseService'
import { useRouter } from 'vue-router'

const props = defineProps({
  data: Object,
})

const authStore = useAuthStore()
const exerciseStore = useExerciseStore()
const exerciseService = useExerciseService()
const router = useRouter()

const cardData = reactive({
  id: 0,
  part: props.data.part,
  name: props.data.name,
  info: props.data.info,
  time: props.data.time,
})

const flipped = ref(false)
const toggleFlip = () => {
  flipped.value = !flipped.value
}

const doExercise = async () => {
  exerciseStore.isExerciseDone = false
  const exercise = await exerciseService.postExercise(props.data)
  exerciseStore.exerciseId = exercise.exerciseId
}

// 운동끝났다
const doneExercise = async (data) => {
  if (!exerciseStore.isExerciseDone) {
    console.log(exerciseStore.exerciseId)
    await exerciseService.updateExerciseState(data, exerciseStore.exerciseId)

    exerciseStore.isExerciseDone = true
  }
  router.push({ name: 'cardCollection' })
}

const handleButtonClick = ({ action, data }) => {
  if (action === 'doExercise') {
    doExercise(data)
  } else if (action === 'cancel') {
    toggleFlip()
  }
}
</script>

<style scoped>
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
