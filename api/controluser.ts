import api from './index'
import { chatinterface } from './interface/chat'

export const CreateController = () => {
    return {

        GetChat: async () => {
            return await api.get(`/`)
          },
        NewChat: async ({ usermessage , botmessage }: chatinterface) => {

            return await api.post(`/`, { usermessage , botmessage })
        },

        Uploadfile: async ({file }: any) => {

            return await api.post(`/`, { file })
        },   

    }
}