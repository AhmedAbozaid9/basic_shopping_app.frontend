import Axios from 'axios'
import Cookies from 'js-cookie'

function authRequestInterceptor(config: { headers: { authorization: string; Accept: string } }) {
  const token = Cookies.get('user-token')
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  config.headers.Accept = 'application/json'
  return config
}

export const axios = Axios.create({
  baseURL: 'http://localhost:3000/api',
})

axios.interceptors.request.use(authRequestInterceptor as never)
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove('user-token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)
