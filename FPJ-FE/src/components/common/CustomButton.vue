<template>
  <button :class="['custom-button']" @click="handleClick">
    <slot name="icon"></slot>
    <slot>Button</slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['buttonClick'])

const props = defineProps({
  buttonType: String,
  payload: Object,
})

const handleClick = (event) => {
  emit('buttonClick', props.payload)
}
</script>

<style scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button.primary {
  background-color: #007bff;
  color: white;
}

.custom-button.disabled {
  background-color: #e0e0e0;
  color: #6c757d;
  cursor: not-allowed;
}
</style>
