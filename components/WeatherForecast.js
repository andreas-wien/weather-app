import Image from "next/image";
import getClientIp from "../utility/getClientIp";
const dayjs = require("dayjs");
require("dotenv").config();
import styles from "./WeatherForecast.module.css";

async function getWeatherForecastBasedOnIp() {
  try {
    const ip = await getClientIp();
    if (!ip) {
      return JSON.stringify({ error: "No ip provided" });
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${ip}&days=3`,
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
    return data.forecast.forecastday;
  } catch (error) {
    console.error(error);
    return JSON.stringify({ error: "Error fetching weather data" });
  }
}

export default async function WeatherForecast() {
  const weatherForecast = await getWeatherForecastBasedOnIp();

  return (
    <div className={styles.weatherForeCastContainer}>
        {weatherForecast.map((singleDay) => {
          return (
            <div
              className={styles.weatherForeCastSingleItem}
              key={singleDay.date}
            >
              <p>{singleDay.date}</p>
              <Image
                src={`https:${singleDay.day.condition.icon}`}
                width={64}
                height={64}
              ></Image>
              <p>{singleDay.day.maxtemp_c} °C</p>
            </div>
          );
        })}
    </div>
  );
}
