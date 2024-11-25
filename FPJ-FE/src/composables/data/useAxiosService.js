import axios from 'axios'
import { useAccountStore } from '@/stores/accountStore'

export const useAxiosService = () => {
  const accountStore = useAccountStore()

  const createClient = (baseURL) => {
    const client = axios.create({ baseURL })

    client.interceptors.request.use(
      (config) => {
        if (accountStore.accessToken) {
          config.headers.Authorization = `Bearer ${accountStore.accessToken}`
        }
        return config
      },
      (err) => Promise.reject(err),
    )

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

  return { createClient }
}
