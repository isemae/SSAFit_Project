import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExerciseStore = defineStore('exercise', () => {
  const randomExerciseData = ref([])
  const isExerciseDone = ref(true)

  return { randomExerciseData, isExerciseDone }
})
