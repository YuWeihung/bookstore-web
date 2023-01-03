import axios from 'axios'
import { refreshToken } from './index'

axios.defaults.baseURL = '/api'

export const axiosInstance = axios.create({})

export const anonymousInstance = axios.create({})

export interface Response {
  code: number
  messege: string
  data: any
}

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken')
  return accessToken
}

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem('refreshToken')
  return refreshToken
}

export const removeToken = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export const setToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

axiosInstance.interceptors.request.use((request: any) => {
  const accessToken = getAccessToken()
  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`
  }
  return request
})

axiosInstance.interceptors.response.use(async (response: any) => {
  if (response.data.code === 4012) {
    const success = await refreshToken()
    if (success) {
      const config = response.config
      const accessToken = getAccessToken()
      config.headers['Authorization'] = `Bearer ${accessToken}`
      return axiosInstance(config)
    } else {
      return Promise.reject
    }
  }
  return response
})
