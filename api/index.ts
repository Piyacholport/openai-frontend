import axiosService from './axiosService'



const service = () => {
  return {
    get: async (url: string, params?: any) => {
      return await axiosService.get(url, params)
    },
    post: async (url: string, params?: any) => {
      return await axiosService.post(url, params)
    },
    patch: async (url: string, params: any) => {
      return await axiosService.patch(url, params)
    },
    put: async (url: string, params: any) => {
      return await axiosService.put(url, params)
    },
    delete: async (url: string, params?: any) => {
      return await axiosService.delete(url, params)
    },
    axios: axiosService,
  }
}

const api = service()
export default api