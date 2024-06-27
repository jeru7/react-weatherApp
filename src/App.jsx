import Nav from './components/Nav.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { GetCurrentWeather, GetDayForecast } from './api/weatherAPI.js'
import { useState, useEffect } from 'react'
import Search from './components/Search.jsx'
import Suggestions from './components/Suggestions.jsx'
import Loader from './components/Loader.jsx'
import ErrorModal from './components/ErrorModal.jsx'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [mobSearchOpen, setMobSearchOpen] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [dayForecastData, setDayForecastData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    if (screenWidth >= 1024) {
      setMobSearchOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])

  const themeHandler = () => {
    setIsDarkMode((prev) => !prev)
  }

  const geoUserName = import.meta.env.VITE_WEATHERAPP_GEONAMES_USERNAME

  const handleInputSearch = async (e) => {
    e.preventDefault()
    searchValueHandler(e.target.value)

    if (e.target.value.length > 0) {
      try {
        const response = await axios.get(
          'https://secure.geonames.org/searchJSON',
          {
            params: {
              q: e.target.value,
              maxRows: `${mobSearchOpen ? 10 : 5}`,
              username: geoUserName,
            },
          }
        )
        suggestionsHandler(response.data.geonames)
      } catch (e) {
        setError(true)
      }
    } else {
      suggestionsHandler([])
    }
  }

  const searchHandler = async (city, countryCode, lat, lon) => {
    try {
      setLoading(true)
      let currentWeatherData
      if (lat && lon) {
        currentWeatherData = await GetCurrentWeather(null, null, lat, lon)
      } else if (city && countryCode) {
        currentWeatherData = await GetCurrentWeather(city, countryCode)
      }
      setWeatherData(currentWeatherData)

      lat = lat || currentWeatherData.coord.lat
      lon = lon || currentWeatherData.coord.lon

      const currentForecastData = await GetDayForecast(lat, lon)
      setDayForecastData(currentForecastData)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const suggestionsHandler = (value) => {
    setSuggestions(value)
  }

  const mobSearchOpenHandler = () => {
    setMobSearchOpen((prev) => !prev)
  }

  const searchValueHandler = (value) => {
    setSearchValue(value)
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      try {
        await searchHandler(searchValue)
      } catch (e) {
        setError(true)
      }
    }
  }

  const handleSearchClick = async (e) => {
    e.preventDefault()
    const splitValue = searchValue.split(',')
    try {
      await searchHandler(splitValue[0], splitValue[1])
      setSearchValue('')
    } catch (e) {
      setMobSearchOpen(false)
      setError(true)
    }
  }

  const handleSuggestionClick = async (city) => {
    setSearchValue('')
    suggestionsHandler([])
    try {
      if (screenWidth >= 1024) {
        setMobSearchOpen(false)
      }
      setMobSearchOpen(false)
      await searchHandler(city.name, city.countryCode)
    } catch (e) {
      setMobSearchOpen(false)
      setError(true)
    }
  }

  const handleLoading = () => {
    setLoading((prev) => !prev)
    setSearchValue('')
  }

  const searchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // rounding to one decimal place returns my correct location
          searchHandler(null, null, latitude.toFixed(1), longitude)
        },
        (e) => {
          console.log(`Error fetching current location. ${e.message}`)
        },
        {
          enableHighAccuracy: true,
        }
      )
    } else {
      console.log(`This feature is not available on this browser`)
    }
  }

  const handleError = () => {
    setError(null)
    setSearchValue('')
    setMobSearchOpen(false)
  }

  const conditionalClassnames = () => {
    if (isDarkMode) {
      if (weatherData) {
        return 'second-bg white-text'
      } else {
        if (screenWidth >= 1024) {
          return 'h-full white-text second-bg'
        } else {
          return 'h-full white-text second-bg'
        }
      }
    } else {
      if (weatherData) {
        return 'light-bg dark-text'
      } else {
        if (screenWidth >= 1024) {
          return 'h-full light-bg dark-text'
        } else {
          return 'h-full second-light-bg dark-text'
        }
      }
    }
  }

  return (
    <>
      {error && <ErrorModal handleError={handleError} />}
      {loading && <Loader />}
      <div
        className={`flex flex-col ${conditionalClassnames()} ${
          mobSearchOpen ? 'h-full justify-start' : 'justify-center'
        }`}
      >
        {mobSearchOpen ? (
          <>
            <div className='flex flex-col gap-3 p-4'>
              <Button
                className={'text-2xl flex items-center ml-auto p-4'}
                onClick={() => mobSearchOpenHandler()}
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
              <Search
                mobSearchOpen={mobSearchOpen}
                isDarkMode={isDarkMode}
                weatherData={weatherData}
                searchValue={searchValue}
                handleInputSearch={handleInputSearch}
                handleKeyDown={handleKeyDown}
                handleSearchClick={handleSearchClick}
                handleSuggestionClick={handleSuggestionClick}
                suggestions={suggestions}
              />
            </div>
            <Suggestions
              isDarkMode={isDarkMode}
              weatherData={weatherData}
              mobSearchOpen={mobSearchOpen}
              suggestions={suggestions}
              handleSuggestionClick={handleSuggestionClick}
            />
          </>
        ) : (
          <>
            <Nav
              isDarkMode={isDarkMode}
              themeHandler={themeHandler}
              screenWidth={screenWidth}
              searchValue={searchValue}
              searchHandler={searchHandler}
              suggestionsHandler={suggestionsHandler}
              suggestions={suggestions}
              handleInputSearch={handleInputSearch}
              handleSuggestionClick={handleSuggestionClick}
              mobSearchOpenHandler={mobSearchOpenHandler}
              handleKeyDown={handleKeyDown}
              handleSearchClick={handleSearchClick}
              currentCity={
                weatherData
                  ? `${weatherData.name}, ${weatherData.sys.country}`
                  : ''
              }
              weatherData={weatherData}
            />
            <Button
              className={`rounded-2xl flex py-2 px-4 gap-3 items-center dark-text lg:z-10 self-center ${
                isDarkMode ? 'highlight-dark-bg ' : 'hightlight-light-bg'
              } ${weatherData ? 'hidden' : ''}`}
              onClick={searchCurrentLocation}
            >
              <FontAwesomeIcon icon={faEarthAmericas} className='text-xl' />
              <p className='font-extrabold text-md'>Get current location</p>
            </Button>
            {weatherData && (
              <>
                <Main
                  isDarkMode={isDarkMode}
                  weatherData={weatherData}
                  dayForecastData={dayForecastData}
                  searchCurrentLocation={searchCurrentLocation}
                  handleLoading={handleLoading}
                />
              </>
            )}
            <Footer
              isDarkMode={isDarkMode}
              weatherData={weatherData}
              screenWidth={screenWidth}
            />
          </>
        )}
      </div>
    </>
  )
}

export default App
