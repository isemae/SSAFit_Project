import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import CollectionView from '@/views/CollectionView.vue'
import PreferenceView from '@/views/PreferenceView.vue'
import AuthView from '@/views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfileView,
      meta: { title: '프로필' },
    },
    {
      path: '/collection',
      name: 'cardCollection',
      component: CollectionView,
      meta: { title: '컬렉션' },
    },
    {
      path: '/preference',
      name: 'preference',
      component: PreferenceView,
      meta: { title: '설정' },
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      meth: { title: '' },
    },
  ],
})

export default router
