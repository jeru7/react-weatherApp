import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import DaysForecast from './DaysForecast'
import Today from './Today'
import HourlyDaily from './HourlyDaily'
import Current from './Current'

function Main({
  isDarkMode,
  weatherData,
  dayForecastData,
  searchCurrentLocation,
  handleLoading,
}) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const dateFormat = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const dayName = days[date.getUTCDay()]
    const month = months[date.getUTCMonth()]
    const dayNumber = date.getUTCDate()

    return `${dayName} ${dayNumber}, ${month}`
  }

  const timeFormat = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000)
    let hours = date.getUTCHours()
    let minutes = date.getUTCMinutes()
    let amPm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours === 0 ? 12 : hours
    let minutesStr = minutes < 10 ? '0' + minutes : minutes

    return `${hours}:${minutesStr}${amPm}`
  }

  return (
    <>
      <main className='flex flex-col w-full gap-4 p-4 main_card--wrapper lg:grid lg:grid-cols-7'>
        <Button
          className={
            'rounded-2xl sm:w-fit flex py-2 px-4 gap-3 items-center dark-text lg:absolute lg:z-10 ' +
            (isDarkMode ? 'highlight-dark-bg' : 'hightlight-light-bg')
          }
          onClick={searchCurrentLocation}
        >
          <FontAwesomeIcon icon={faEarthAmericas} className='text-xl' />
          <p className='font-extrabold text-md'>Get current location</p>
        </Button>
        {weatherData && (
          <>
            <Current
              isDarkMode={isDarkMode}
              weatherData={weatherData}
              dateFormat={dateFormat}
            />
            <Today
              isDarkMode={isDarkMode}
              weatherData={weatherData}
              timeFormat={timeFormat}
            />
            <HourlyDaily
              isDarkMode={isDarkMode}
              days={days}
              months={months}
              dayForecastData={dayForecastData}
              currentTimestamp={weatherData.dt}
              handleLoading={handleLoading}
            />
            <DaysForecast
              isDarkMode={isDarkMode}
              days={days}
              months={months}
              dayForecastData={dayForecastData}
            />
          </>
        )}
      </main>
    </>
  )
}

export default Main
