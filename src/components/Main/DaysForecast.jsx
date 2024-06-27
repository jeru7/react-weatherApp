import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const DaysForecast = ({
  isDarkMode,
  days,
  months,
  dayForecastData,
  weatherData,
}) => {
  const loggedDays = new Set()
  const loggedDate = new Set()

  const currentDay = new Date((weatherData.dt + weatherData.timezone) * 1000)
  const currentDayKey = `${currentDay.getUTCMonth()}${currentDay.getUTCDate()}`

  if (dayForecastData && dayForecastData.list) {
    dayForecastData.list.forEach((item) => {
      const date = new Date((item.dt + weatherData.timezone) * 1000)
      const dayKey = `${date.getUTCMonth()}${date.getUTCDate()}`

      if (!loggedDays.has(dayKey)) {
        loggedDays.add(dayKey)
        loggedDate.add(item)
      }
    })
  }
  return (
    <div
      className={
        'p-4 rounded-2xl flex flex-col items-center gap-4 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 lg:mt-12 ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <h3 className='self-start text-2xl'>5 Days Forecasts</h3>
      {[...loggedDate].map((item, index) => {
        const date = new Date((item.dt + weatherData.timezone) * 1000)
        const dayNumber = date.getUTCDate()
        const month = months[date.getUTCMonth()]
        const dayName = days[date.getUTCDay()]
        const temp = item.main.temp
        const dayKey = `${date.getUTCMonth()}${date.getUTCDate()}`

        if (dayKey !== currentDayKey) {
          return (
            <Day
              key={index}
              isDarkMode={isDarkMode}
              dayName={dayName}
              month={month}
              dayNumber={dayNumber}
              temp={temp.toFixed(1)}
              icon={item.weather[0].icon}
            />
          )
        }
      })}
    </div>
  )
}

const Day = ({ isDarkMode, dayName, month, dayNumber, temp, icon }) => {
  return (
    <div
      className={
        'flex p-2 rounded-2xl w-full justify-evenly drop-shadow-md gap-2 h-full ' +
        (isDarkMode ? 'second-bg' : 'second-light-bg')
      }
    >
      <div className='flex items-center gap-1'>
        <img
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt='Logo'
          className='w-18 md:w-24 lg:w-20'
        />
        <p className='text-2xl md:text-3xl lg:text-2xl xl:text-3xl'>{temp}°</p>
      </div>
      <div className='flex items-center gap-6'>
        <FontAwesomeIcon icon={faCalendar} className='text-xl' />
        <div className='flex flex-col text-sm md:text-lg lg:text-sm'>
          <p>{dayName.slice(0, 3)}</p>
          <p>
            {month.slice(0, 3)} {dayNumber}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DaysForecast
