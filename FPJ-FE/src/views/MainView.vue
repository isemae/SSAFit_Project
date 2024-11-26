<template #content>
  <div v-if="!isLoading" class="card-stack-wrapper" @click.self="resetFocus">
    <CardBase
      v-for="(data, index) in exerciseStore.randomExerciseData.value"
      :key="index"
      :data="data"
      :tier="userTier"
    >
      <template #back-content>
        <div />
      </template>
      <template #front-content>
        <div>
          <div class="exercise-info">
            <div class="info-summary">
              <h2>
                {{ data.name }}
              </h2>
            </div>

            <div class="additional-info">
              <span>
                {{ data.part }}
              </span>
              <span> {{ data.time }}초</span>
            </div>

            <CircularProgress
              v-if="exerciseStore.isExerciseStarted"
              :duration="exerciseStore.selectedExercise.value.time"
              @progressDone="() => doneExercise()"
            />
            <p>
              {{ data.info }}
            </p>
          </div>
          <div v-if="!exerciseStore.isExerciseStarted" class="button-wrapper">
            <CustomButton id="start-exercise" @click.stop="() => doExercise(index)"
              >운동하기</CustomButton
            >
            <CustomButton id="cancel" :payload="{ action: 'cancel', data }" @buttonClick=""
              >취소</CustomButton
            >
          </div>
        </div>
      </template>
    </CardBase>
  </div>
  <div v-else></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import CircularProgress from '@/components/cards/CircularProgress.vue'
import CustomButton from '@/components/common/CustomButton.vue'
import CardBase from '@/components/cards/CardBase.vue'
import { useExerciseService } from '@/composables/data/useExerciseService'
import { useUserInfoService } from '@/composables/data/useUserInfoService'
import { useExerciseStore } from '@/stores/exerciseStore'
import { useAuthStore } from '@/stores/authStore'
import { useCardService } from '@/composables/data/useCardService'

const exerciseStore = useExerciseStore()
const exerciseService = useExerciseService()
const cardService = useCardService()
const userService = useUserInfoService()
const router = useRouter()

const userTier = ref(null)

const isLoading = ref(true)
const props = defineProps({
  data: Object,
})

// 로드 시 랜덤 운동 데이터 받아옴
onMounted(async () => {
  const exerciseRes = await exerciseService.fetchRandomExercise()
  if (exerciseRes.success) {
    isLoading.value = false
    exerciseStore.isExerciseStarted = false
  }

  const tierRes = await userService.getUserTier()
  userTier.value = tierRes
})

// DB에 운동정보 포스팅
const doExercise = async (index) => {
  const exercises = exerciseStore.randomExerciseData?.value
  const exerciseId = await exerciseService.postExercise(exercises[index])

  exerciseStore.exerciseId = exerciseId.exerciseId
  exerciseStore.isExerciseStarted = true

  const selectedExerciseData = {
    ...exercises[index],
    id: exerciseId.exerciseId,
  }
  exerciseStore.selectedExercise.value = selectedExerciseData
}

const doneExercise = async () => {
  const exerciseScore = exerciseStore.selectedExercise.value.time
  const addCardRes = await cardService.addCard(exerciseStore.exerciseId, exerciseScore)
  const putUserScoreRes = await userService.putUserScore(exerciseScore)

  if (putUserScoreRes.success) {
    exerciseStore.isExerciseStarted = false
    router.push({ name: 'cardCollection' })
  }
}
</script>

<style scoped>
@import '../components/cards/CardFace.module.css';

.card-stack-wrapper {
  position: relative;
  width: 50%;
  height: 50%;
  perspective: 1000px;
}

.card-stack-wrapper .card-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card-stack-wrapper > .flipped {
  z-index: 10;
  width: calc(1.6 * var(--card-width));
  height: calc(1.6 * var(--card-height));
  transform: translate(-50%, -50%);
}

.card-stack-wrapper > :nth-of-type(1):not(.flipped) {
  transform: translate(calc(-50% - var(--width-offset)), -50%)
    rotate(calc(-1 * var(--base-rotate-angle)));
  z-index: 3;
}

.card-stack-wrapper > :nth-of-type(2):not(.flipped) {
  transform: translate(-50%, -50%);
  z-index: 2;
}

.card-stack-wrapper > :nth-of-type(3):not(.flipped) {
  transform: translate(calc(-50% + var(--width-offset)), -50%) rotate(var(--base-rotate-angle));
  z-index: 1;
}

.card-stack-wrapper > :nth-of-type(1):not(.flipped):hover {
  transform: translate(calc(-50% - var(--hover-translate)), -50%)
    rotate(calc(-1 * var(--hover-rotate))) scale(1.01);
}

.card-stack-wrapper > :nth-of-type(2):not(.flipped):hover {
  transform: translate(-50%, -50%) scale(1.02);
}

.card-stack-wrapper > :nth-of-type(3):not(.flipped):hover {
  transform: translate(calc(-50% + var(--hover-translate)), -50%) rotate(var(--hover-rotate))
    scale(1.01);
}
</style>
