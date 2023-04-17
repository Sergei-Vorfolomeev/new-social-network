import {ResponseType} from "app/store";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9b7bf10d-55fc-4d6e-b69f-50e6002c9999'
    }
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    setSelectedPage (pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId: number) {
        return instance.post<ResponseType>(`/follow/${userId}`, {})
            .then(response => response.data)
    },

    unfollow (userId: number) {
        return instance.delete<ResponseType>(`/follow/${userId}`)
            .then(response => response.data)
    },
    getProfile (userId: string = '2') {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
}