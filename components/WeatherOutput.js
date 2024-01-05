import Image from 'next/image'
require('dotenv').config();


import getClientIp from "../utility/getClientIp";

async function getCurrentWeatherBasedOnIp() {
    try {
        const ip = getClientIp();
        if (!ip) {
            return res.status(400).json({ error: 'No ip provided' });
        }

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${ip}`, {
            // cache: "force-cache", /// SSG
            cache: "no-store", /// SSR
            // next : {
            //     revalidate: 10, /// ISR
            // }
        });
        
        if (!response.ok) {
            throw new Error('Error fetching weather data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return JSON.stringify({ error: 'Error fetching weather data' });
    }
}

export default async function WeatherOutput() {
    const weatherData = await getCurrentWeatherBasedOnIp();
    return (
        <div id="weather-output" className="min-h-screen flex flex-col relative pb-20">
            <h1>Current Weather</h1>
            <div id="location-info">
                <p>City: {weatherData.location.name}</p>
                <p>Region: {weatherData.location.region}</p>
                <p>Country: {weatherData.location.country}</p>
            </div>
            <div id="weather-info">
                <Image src={`https:${weatherData.current.condition.icon}`} width={100} height={100}></Image>
                <p>Temperature: {weatherData.current.temp_c} °C</p>
                <p>Feels like: {weatherData.current.feelslike_c} °C</p>
                <p>Description: {weatherData.current.condition.text}</p>
                <p>Precipation: {weatherData.current.precip_mm} mm</p>
                <p>Pressure: {weatherData.current.pressure_mb} hPa</p>
                <p>Humidity: {weatherData.current.humidity} %</p>
                <p>Wind direction: {weatherData.current.wind_dir}</p>
                <p>Wind: {weatherData.current.wind_kph} km/h</p>
                <p>Last updated: {weatherData.current.last_updated}</p>
            </div>
        </div>
    )
}
