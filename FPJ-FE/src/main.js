import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { API_ENDPOINTS } from './constants/apiEndpoints'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.config.globalProperties.API_ENDPOINTS = API_ENDPOINTS
app.mount('#app')
