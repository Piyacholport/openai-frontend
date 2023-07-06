
import axios, { AxiosInstance } from 'axios'

const axiosService: AxiosInstance = axios.create({
  baseURL: `/api`,
 
})

axiosService.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default axiosService
