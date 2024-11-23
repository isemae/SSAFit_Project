import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import CollectionView from '@/views/CollectionView.vue'
import PreferenceView from '@/views/PreferenceView.vue'
import AuthView from '@/views/AuthView.vue'
import { useAuthService } from '@/composables/auth/useAuthService'
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      meta: { layout: 'sidepanel' },
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      meth: { title: '', layout: 'sidepanel' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfileView,
      meta: { title: '프로필', layout: 'webView', requiresAuth: true },
    },
    {
      path: '/collection',
      name: 'cardCollection',
      component: CollectionView,
      meta: { title: '컬렉션', layout: 'webView', requiresAuth: true },
    },
    {
      path: '/preference',
      name: 'preference',
      component: PreferenceView,
      meta: { title: '설정', layout: 'webView', requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const { loginUser: user } = storeToRefs(authStore)
  if (to.meta.requiresAuth && !user.value) {
    next('/auth')
  } else if (to.name === 'auth' && user.value?.userName) {
    next(from)
  } else {
    next()
  }
})

export default router
