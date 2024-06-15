import Searchbox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] =  useState({
        city : "delhi",
        feelslike : 24.08,
        temp: 25.06,
        tempMin : 25.05,
        tempMax : 25.06,
        humidity: 47,
        weather : "haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App </h1>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}