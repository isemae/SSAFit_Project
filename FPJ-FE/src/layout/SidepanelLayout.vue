<template>
  <div class="sidepanel-layout">
    <slot />
    <slot name="navigations" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

import collectionIcon from '@/assets/collection_icon.svg'
import userIcon from '@/assets/user_icon.svg'
import preferenceIcon from '@/assets/preference_icon.svg'
</script>

<style scoped>
.sidepanel-layout {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
background-image: linear-gradient(135deg, #d4d4d4 0%, #e2c8c3 100%);

  flex-direction: row;
}

.navigations {
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
}
</style>
