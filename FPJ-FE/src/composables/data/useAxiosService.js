import axios from 'axios'
import { useAuthService } from '../auth/useAuthService'
import { useAuthStore } from '@/stores/authStore'

export const useAxiosService = () => {
  const authStore = useAuthStore()

  const handleRequest = async (req) => {
    try {
      const res = await req()
      return { success: true, data: res.data }
    } catch (err) {
      console.error('Request failed:', err)
      return { success: false, error: err.response?.data }
    }
  }

  // 요청과 응답 인스턴스를 생성합니다.
  const createClient = (baseURL) => {
    const client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    client.interceptors.request.use((config) => {
      if (!config.headers) return config

      if (authStore.accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${authStore.accessToken}`
      }
      return config
    })

    client.interceptors.response.use(
      (response) => response,
      async (err) => {
        console.error('Response error:', err)
        if (err.response?.status === 401) {
          console.warn('Unauthorized: Token might be expired.')
        }
        return Promise.reject(err)
      },
    )

    return client
  }

  return { createClient, handleRequest }
}
