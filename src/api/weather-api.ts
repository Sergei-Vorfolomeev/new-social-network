import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/3.0/',
})

export const weatherAPI = {
    getWeather (latitude: string, longitude: string, apiKey: string) {
        return instance.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${apiKey}`)
            .then(res => res.data)
    }
}

