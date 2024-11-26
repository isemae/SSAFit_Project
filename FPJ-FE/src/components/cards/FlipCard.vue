<template>
  <CardBase :class="[{ flipped: flipped }]">
    <!-- <template #back> -->
    <!--   <div /> -->
    <!-- </template> -->
    <!---->
    <!-- <template #front> -->
    <!---->
    <!--   <div class="exercise-info"> -->
    <!---->
    <!--     <div class="info-summary"> -->
    <!--       <h2> -->
    <!--         {{ data.name }} -->
    <!--       </h2> -->
    <!--     </div> -->
    <!---->
    <!--     <div class="additional-info"> -->
    <!--       <span> -->
    <!--         {{ data.part }} -->
    <!--       </span> -->
    <!--       <span> {{ data.time }}초</span> -->
    <!--     </div> -->
    <!---->
    <!--     <CircularProgress -->
    <!--       v-if="!exerciseStore.isExerciseDone" -->
    <!--       :progress="100" -->
    <!--       :duration="data.time" -->
    <!--       @progressDone="doneExercise(cardData)" -->
    <!--     /> -->
    <!---->
    <!--     <p> -->
    <!--       {{ data.info }} -->
    <!--     </p> -->
    <!--   </div> -->
    <!---->
    <!--   <div v-if="exerciseStore.isExerciseDone" class="button-wrapper"> -->
    <!--     <CustomButton -->
    <!--       :payload="{ action: 'doExercise', data }" -->
    <!--       id="start-exercise" -->
    <!--       @buttonClick="startExercise" -->
    <!--       >운동하기</CustomButton -->
    <!--     > -->
    <!--     <CustomButton -->
    <!--       id="cancel" -->
    <!--       :payload="{ action: 'cancel', data }" -->
    <!--       @buttonClick="" -->
    <!--       >취소</CustomButton -->
    <!--     > -->
    <!--   </div> -->
    <!-- </template> -->
  </CardBase>
</template>

<script setup></script>

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
