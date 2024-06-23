import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const API_KEY = import.meta.env.WEATHERAPP_OPENWEATHER_API_KEY

export const GetCurrentWeather = async (city, country) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          country,
          appid: API_KEY,
        },
      }
    )
    return response.data
  } catch (e) {
    console.log(`Error in fetching current weather. ${e.message}`)
  }
}

export const DaysForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          q: lat,
          lon,
          appid: API_KEY,
        },
      }
    )
    return response.data
  } catch (e) {
    console.log(`Error in fetching the day/hour forecast. ${e.message}`)
  }
}
