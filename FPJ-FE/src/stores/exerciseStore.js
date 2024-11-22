import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExerciseStore = defineStore('exercise', () => {
  const randomlySelectedExerciseData = ref([{}, {}, {}])

  return { randomlySelectedExerciseData }
})
