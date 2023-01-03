import { anonymousInstance } from './index'

export const index = () => {
  anonymousInstance.get('/index').then((response) => {
    console.log(response.data)
  })
}
