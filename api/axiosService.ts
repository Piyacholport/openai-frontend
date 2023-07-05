
import { getAuthStorage } from '../helper/authStorage'
// import isServer from '../helper/isServer'
import axios, { AxiosInstance } from 'axios'

const axiosService: AxiosInstance = axios.create({
  baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "69420"
  },
  timeout: 120000,
  withCredentials: true,
})

axiosService.interceptors.request.use(
  (request: any) => {
    const { token }: any = getAuthStorage()
    if (token) {
      request.headers.Authorization =  `Bearer ${token}`
      request.headers['Access-Control-Allow-Origin'] =  `*`
      // request.headers['Content-Type']=`multipart/form-data`
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
axiosService.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    // if (error.response.status === 401 && window.location.pathname !== '/login') {
    //   window.location.href = '/login'
    // }
    return Promise.reject(error)
  }
)

export default axiosService
