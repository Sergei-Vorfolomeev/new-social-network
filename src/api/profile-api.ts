import {ResponseType} from "app/store";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9b7bf10d-55fc-4d6e-b69f-50e6002c9999'
    }
})

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