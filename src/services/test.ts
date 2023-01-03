import { axiosInstance } from './index'

export const hello = () => {
  axiosInstance.get('/hello').then((response) => {
    console.log(response.data)
  })
}

export const helloAdmin = () => {
  axiosInstance.get('/admin/hello').then((response) => {
    console.log(response.data)
  })
}
