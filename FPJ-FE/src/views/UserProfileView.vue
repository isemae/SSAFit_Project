<template>
  <InfoPanel />
  <div></div>
</template>

<script setup>
import InfoPanel from '@/components/common/InfoPanel.vue'
import { onBeforeMount } from 'vue'
import { useAccountStore } from '@/stores/accountStore'

const store = useAccountStore()
onBeforeMount(() => {
  store.login()
})
</script>

<style scoped></style>
