import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const HourlyDaily = ({
  isDarkMode,
  days,
  months,
  dayForecastData,
  currentTimestamp,
}) => {
  const [isHourly, setIsHourly] = useState(true)
  const currentDay = new Date(currentTimestamp * 1000).getUTCDate()
  let hourlyItems = []

  const loggedDays = new Set()
  const loggedDate = new Set()

  if (dayForecastData && dayForecastData.list) {
    dayForecastData.list.forEach((item) => {
      const date = new Date(item.dt * 1000)
      const day = date.getUTCDate()
      if (day === currentDay) {
        hourlyItems.push(item)
      }
    })

    dayForecastData.list.forEach((item) => {
      const date = new Date(item.dt_txt)
      const dayNumber = date.getUTCDate()
      const month = months[date.getUTCMonth()]

      const dayKey = `${month} ${dayNumber}`

      if (!loggedDays.has(dayKey)) {
        loggedDays.add(dayKey)
        loggedDate.add(item)
      }
    })
  }

  return (
    <div
      className={
        'p-4 rounded-2xl flex flex-col items-center gap-8 lg:col-start-3 lg:col-end-8 lg:row-start-2 ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <div className='flex justify-center w-full text-center shadow-md rounded-2xl lg:w-2/5'>
        <div
          className={`p-4 rounded-l-2xl w-full ${
            isDarkMode
              ? `${isHourly ? 'second-bg' : 'main-bg'}`
              : `${isHourly ? 'light-bg' : 'second-light-bg'}`
          }`}
          onClick={() => setIsHourly(true)}
        >
          <p className='text-xl bg-inherit'>Hourly</p>
        </div>
        <div
          className={`w-full p-4 rounded-r-2xl ${
            isDarkMode
              ? `${isHourly ? 'main-bg' : 'second-bg'}`
              : `${isHourly ? 'second-light-bg' : 'light-bg'}`
          } `}
          onClick={() => setIsHourly(false)}
        >
          <p className='text-xl'>Daily</p>
        </div>
      </div>
      <div className='flex w-full gap-2 p-2 overflow-x-auto '>
        {isHourly
          ? hourlyItems.map((item, index) => {
              const date = new Date(item.dt * 1000)
              let hours = date.getUTCHours()
              let amPm = hours >= 12 ? 'PM' : 'AM'
              hours = hours % 12
              hours = hours === 0 ? 12 : hours

              const temp = item.main.temp
              const description = item.weather[0].description
              const icon = item.weather[0].icon
              return (
                <Card
                  key={index}
                  isDarkMode={isDarkMode}
                  hours={hours}
                  amPm={amPm}
                  temp={temp}
                  description={description}
                  icon={icon}
                  isHourly={isHourly}
                />
              )
            })
          : [...loggedDate].map((item, index) => {
              const date = new Date(item.dt_txt)
              const dayNumber = date.getUTCDate()
              const month = months[date.getUTCMonth()]
              const temp = item.main.temp
              const description = item.weather[0].description
              const icon = item.weather[0].icon
              return (
                <Card
                  key={index}
                  isDarkMode={isDarkMode}
                  temp={temp}
                  description={description}
                  icon={icon}
                  dayNumber={dayNumber}
                  month={month}
                  isHourly={isHourly}
                />
              )
            })}
      </div>
    </div>
  )
}

const Card = ({
  isDarkMode,
  hours,
  amPm,
  temp,
  description,
  icon,
  month,
  dayNumber,
  isHourly,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-8 p-4 rounded-2xl drop-shadow-md w-45 flex-shrink-0 ${
        isDarkMode ? 'second-bg' : 'second-light-bg'
      }`}
    >
      <p className='text-4xl'>
        {isHourly ? `${hours} ${amPm}` : `${month} ${dayNumber}`}
      </p>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt='Logo'
        className='w-36'
      />
      <p className='text-4xl'>{temp.toFixed(1)}°</p>
      <p className='text-lg'>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </p>
    </div>
  )
}

export default HourlyDaily
