import { axiosInstance, removeToken, Response } from './index'

export interface changePasswordParam {
  oldPassword: string
  newPassword: string
}

export const changePassword = (param: changePasswordParam) => {
  axiosInstance.post('/change-password', param).then((response) => {
    const res: Response = response.data
    if (res.code === 0) {
      console.log('Password changed')
      removeToken()
    } else if (res.code === 4003) {
      console.log('Password wrong')
    }
  })
}
