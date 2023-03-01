import axios from "axios";
import {ResponseType} from "../store/store";
import {AuthMeResponseType} from "../store/authReducer";

// TYPES
export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}


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

export const profileAPI = {
    getProfile (userId: string = '2') {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus (userId: string) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus (newStatus: string) {
        return instance.put<ResponseType>(`/profile/status`, {status: newStatus})
            .then(response => response.data)
    }
}

export const authAPI = {
    me () {
        return instance.get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data)
    },
    loginIn (data: LoginType) {
        return instance.post<ResponseType<{userId: number}>>('/auth/login', data)
            .then(response => response.data)
    }
}