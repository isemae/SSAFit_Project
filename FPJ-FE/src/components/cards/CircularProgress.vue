<template>
  <div class="circular-progress">
    <svg viewBox="0 0 36 36" class="circular-chart">
      <path
        class="circle"
        :stroke-dasharray="`${progressValue}, 100`"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  progress: Number, // 목표 진행률 (100)
  duration: Number, // 총 지속 시간 (초 단위)
  callback: Function,
})

const progressValue = ref(0) // 현재 진행률
let timer = null

const startProgress = () => {
  if (timer) clearInterval(timer) // 기존 타이머 초기화

  const interval = 50 // 진행률 업데이트 주기 (밀리초)
  const steps = Math.ceil((props.duration * 100) / interval) // 총 업데이트 단계
  let currentStep = 0

  timer = setInterval(() => {
    currentStep++
    progressValue.value = Math.min(100, (currentStep / steps) * props.progress)

    if (currentStep >= steps) {
      clearInterval(timer) // 타이머 종료
      progressValue.value = props.progress // 최종 진행률 설정
      props.callback()
    }
  }, interval)
}

onMounted(() => {
  startProgress() // 컴포넌트 마운트 시 타이머 시작
  console.log("prgs => ", props.duration)
})

onUnmounted(() => {
  if (timer) clearInterval(timer) // 컴포넌트 언마운트 시 타이머 정리
})
</script>

<style scoped>
.circular-progress {
  position: relative;
  width: 100px;
  height: 100px;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 100%;
  max-height: 100%;
  transform: rotate(-90deg);
}

.circle {
  fill: none;
  stroke: #4caf50;
  stroke-width: 2.8;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease-out;
}
</style>
