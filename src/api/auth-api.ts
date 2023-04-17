import axios from "axios";
import {ResponseType} from "app/store";
import {AuthMeResponseType} from "features/Login/authReducer";

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

export const authAPI = {
    me () {
        return instance.get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data)
    },
    login (data: LoginType) {
        return instance.post<ResponseType<{userId: number}>>('/auth/login', data)
            .then(response => response.data)
    },
    logout () {
        return instance.delete<ResponseType>('/auth/login')
            .then(response => response.data)
    }
}