import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useExerciseStore = defineStore('exercise', () => {
  const randomExerciseData = ref([])
  const isExerciseDone = ref(true)
  const exerciseId = ref(0)
  const currentExercise = reactive({
    id: 0,
    part: '',
    name: '',
    info: '',
    time: '',
  })

  return { randomExerciseData, isExerciseDone, exerciseId }
})
