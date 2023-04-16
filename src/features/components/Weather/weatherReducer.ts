import {Dispatch} from "redux";
import {weatherAPI} from "api/weather-api";
import {appNetworkErrorUtil} from "common/utils/app-network-error-util";

type IniatialStateType = typeof initialState

const initialState = {
    loading: false,
    weatherData: {
        lat: 0,
        lon: 0,
        timezone: '',
        timezone_offset: 0,
        current: {
            dt: 0,
            sunrise: 0,
            sunset: 0,
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            dew_point: 0,
            uvi: 0,
            clouds: 0,
            visibility: 0,
            wind_speed: 0,
            wind_deg: 0,
            weather: [
                {
                    id: 0,
                    main: '',
                    description: "",
                    icon: ""
                }
            ]
        }
    } as WeatherResponseType
}

export const weatherReducer = (state: IniatialStateType = initialState, action: ActionsType): IniatialStateType => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {...state, weatherData: {...action.payload.data}}
        case "SET_LOADING":
            return {...state, loading: action.payload.value}
        default:
            return state
    }
}

// actions
const setWeatherAC = (data: WeatherResponseType) => {
    return {
        type: 'SET_WEATHER',
        payload: {data}
    } as const
}
const setLoadingAC = (value: boolean) => {
    return {
        type: 'SET_LOADING',
        payload: {value}
    } as const
}


// thunks
export const getWeatherTC = () => async (dispatch: Dispatch) => {
    dispatch(setLoadingAC(true))
    try {
        const res = await weatherAPI.getWeather('50.088', '14.4208', '81cbf1e2a12bb98a242f1d85f3355540')
        dispatch(setWeatherAC(res))
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    } finally {
        dispatch(setLoadingAC(false))
    }
}


type ActionsType = SetWeatherACType | SetLoadingACType
type SetWeatherACType = ReturnType<typeof setWeatherAC>
type SetLoadingACType = ReturnType<typeof setLoadingAC>
export type WeatherResponseType = {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        weather: [
            {
                id: number,
                main: string,
                description: string,
                icon: string
            }
        ]
    }
}