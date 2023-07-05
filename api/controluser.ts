import api from './index'
import { deluserinterface } from './interface/deluserinterface'

export const CreateController = () => {
    return {

        // Login: async ({ username, password }: ICreate) => {

        //     return await api.post(`/v1/auth/login`, { username, password })
        // },
        Logout: async ({ Authorization }: any) => {
            return await api.patch(`/v1/auth/logout/`, Authorization)
        },

        // CreateUser: async ({ username, password, first_name, last_name, email, age, phone_number, date_of_birth }: ICreate) => {

        //     return await api.post(`/v1/user`, { username, password, first_name, last_name, email, age, phone_number, date_of_birth })
        // },

        // UpdateUser: async ({ data }: any) => {
        //     const formData = new FormData();
        //     formData.append("id", data.id);
        //     formData.append("first_name", data.first_name);
        //     formData.append("last_name", data.last_name);
        //     formData.append("email", data.email);
        //     formData.append("phone_number", data.phone_number);
        //     formData.append("age", data.age);
        //     formData.append("date_of_birth", data.date_of_birth);
        //     formData.append("is_active", data.is_active);
        //      formData.append("file",data.file);
        //     return await api.putformdata(`/v1/user`, formData
        //     )
        // },
        DeleteUser: async ({ _id }: deluserinterface) => {
            return await api.delete(`/v1/user/${_id}`)
        },
        GetDataUserbyID: async ({ id }: any) => {
            return await api.get(`/v1/user/${id}`)
        },

    }
}