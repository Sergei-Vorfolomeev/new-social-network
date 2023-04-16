import s from './Weather.module.scss'

import React, {useEffect} from 'react';
import {getWeatherTC, WeatherResponseType} from "features/components/Weather/weatherReducer";
import {AppRootStateType, useAppDispatch} from "app/store";
import {useSelector} from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import thunderstorm from 'common/assets/img/weather/thunderstorm.png'
import rain from 'common/assets/img/weather/rain.png'
import snow from 'common/assets/img/weather/snow.png'
import clear from 'common/assets/img/weather/clear.png'
import clouds from 'common/assets/img/weather/clouds.png'
import alert from 'common/assets/img/weather/alert.png'

export const Weather = () => {

    const weather = useSelector<AppRootStateType, WeatherResponseType>(state => state.weather.weatherData)
    const loading = useSelector<AppRootStateType, boolean>(state => state.weather.loading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getWeatherTC())
    }, [])

    const renderSwitchWeather = (weather: WeatherResponseType) => {
        switch (weather.current.weather[0].main) {
            case "Thunderstorm":
                return <img src={thunderstorm} alt="thunderstorm"/>
            case "Drizzle":
                return <img src={rain} alt="rain"/>
            case "Rain":
                return <img src={rain} alt="rain"/>
            case "Snow":
                return <img src={snow} alt="snow"/>
            case "Clear":
                return <img src={clear} alt="clear"/>
            case "Clouds":
                return <img src={clouds} alt="clouds"/>
            default:
                return <img src={alert} alt="alert"/>
        }
    }

    if (loading) return <div className={s.loading}><CircularProgress/></div>

    return (
        <div className={s.mainContainer}>
            <h1 className={s.title}>Weather in {weather.timezone}</h1>
            <div className={s.flexContainer}>
                <div className={s.imgContainer}>
                    {renderSwitchWeather(weather)}
                    <span className={s.mainParam}>Now {weather.current.weather[0].main}</span>
                </div>
                <div className={s.weatherInfo}>
                    <p className={s.paramWeather}>Temperature: {weather.current.temp} °C</p>
                    <p className={s.paramWeather}>Feels like: {weather.current.feels_like} °C</p>
                    <p className={s.paramWeather}>Pressure: {weather.current.pressure} hPa</p>
                    <p className={s.paramWeather}>Humidity: {weather.current.humidity}%</p>
                    <p className={s.paramWeather}>Wind speed: {weather.current.wind_speed} metre/sec</p>
                </div>
            </div>
        </div>
    );
};


