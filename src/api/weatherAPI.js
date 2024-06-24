import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHERAPP_OPENWEATHER_API_KEY

export const GetCurrentWeather = async (city, countryCode) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: `${city},${countryCode}`,
          appid: API_KEY,
          units: 'metric',
        },
      }
    )
    return response.data
  } catch (e) {
    console.log(`Error in fetching current weather. ${e.message}`)
  }
}

export const GetDayForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
          units: 'metric',
        },
      }
    )
    return response.data
  } catch (e) {
    console.log(`Error in fetching the day/hour forecast. ${e.message}`)
  }
}
