import api from './index'

export const GetuserController = () => {
  return {
    GetDataUser: async () => {
      return await api.get(`/v1/users`)
    },
 

  }
}