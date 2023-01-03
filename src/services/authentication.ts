import { anonymousInstance, getAccessToken, getRefreshToken, removeToken, Response, setToken } from './index'

export interface LoginParam {
  username: string
  password: string
}

export interface RefreshTokenParam {
  accessToken: string
}

export const login = (param: LoginParam) => {
  anonymousInstance.post('/login', param).then((response) => {
    const res: Response = response.data
    console.log(response.data)
    if (res.code === 0) {
      const data = response.data.data
      setToken(data.accessToken, data.refreshToken)
    }
  })
}

export const refreshToken = async () => {
  let success = false
  const refreshToken = getRefreshToken()
  const accessToken = getAccessToken()
  if (refreshToken && accessToken) {
    const param: RefreshTokenParam = {
      accessToken: accessToken,
    }
    const response = await anonymousInstance.post('/refresh-token', param, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    const res: Response = response.data
    console.log(res)
    if (res.code === 0) {
      const data = res.data
      setToken(data.accessToken, data.refreshToken)
      success = true
    } else {
      console.log('You must login')
      removeToken()
    }
  } else {
    console.log("Don't have token, can't refresh")
  }
  return await Promise.resolve(success)
}

export const logout = () => {
  console.log('You logout')
  removeToken()
}
