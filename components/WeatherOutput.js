import Image from "next/image";
require("dotenv").config();

import getClientIp from "../utility/getClientIp";
import styles from "./WeatherOutput.module.css";

async function getCurrentWeatherBasedOnIp() {
  try {
    const ip = await getClientIp();
    if (!ip) {
      return JSON.stringify({ error: "No ip provided" });
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${ip}`,
      {
        // cache: "force-cache", /// SSG
        cache: "no-store", /// SSR
        // next : {
        //     revalidate: 10, /// ISR
        // }
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching weather data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return JSON.stringify({ error: "Error fetching weather data" });
  }
}

export default async function WeatherOutput() {
  const weatherData = await getCurrentWeatherBasedOnIp();
  return (
    <div className={styles.weatherOutputContainer}>
      <div className={styles.locationInfoContainer}>
        <p>City: {weatherData.location.name}</p>
        <p>Region: {weatherData.location.region}</p>
        <p>Country: {weatherData.location.country}</p>
      </div>
      <div className={styles.weatherIconContainer}>
        <Image
          src={`https:${weatherData.current.condition.icon}`}
          width={64}
          height={64}
        ></Image>
      </div>
      <div className={styles.weatherInfoContainer}>
        <p>Temperature: {weatherData.current.temp_c} °C</p>
        <p>Feels like: {weatherData.current.feelslike_c} °C</p>
        <p>Description: {weatherData.current.condition.text}</p>
        <p>Precipation: {weatherData.current.precip_mm} mm</p>
        <p>Pressure: {weatherData.current.pressure_mb} hPa</p>
        <p>Humidity: {weatherData.current.humidity} %</p>
        <p>Wind direction: {weatherData.current.wind_dir}</p>
        <p>Wind: {weatherData.current.wind_kph} km/h</p>
        <p className="mt-16">Last updated: {weatherData.current.last_updated}</p>
      </div>
    </div>
  );
}
