import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useExerciseStore = defineStore('exercise', () => {
  const randomExerciseData = ref([])
  const isExerciseStarted = ref(true)
  const selectedExercise = ref({})
  const exerciseId = ref(0)
  return { randomExerciseData, isExerciseStarted, exerciseId, selectedExercise }
})
