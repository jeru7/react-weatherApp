import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons'
const Current = ({ isDarkMode, weatherData, dateFormat }) => {
  const description = weatherData.weather[0].description
  const temp = weatherData.main.temp
  return (
    <div
      className={`card flex flex-col items-center justify-around p-4 drop-shadow-md rounded-2xl lg:col-start-3 lg:col-end-5 ${
        isDarkMode ? 'main-bg' : 'second-light-bg'
      }`}
    >
      <div className='flex items-center gap-4 main--top lg:self-start'>
        <FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
        <h3 className='text-3xl city_pholder lg:text-4xl'>
          {weatherData.name}
        </h3>
      </div>
      <div className='flex items-center h-2/4'>
        <div className='flex flex-col items-center justify-center '>
          <h3 className='text-5xl xl:text-6xl'>{temp.toFixed(1)}°</h3>
          <p className='text-center text-md lg:text-xl'>
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </p>
        </div>
        {/* http://openweathermap.org/img/w/10d.png
         */}
        <img
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt='Logo'
          className='w-36'
        />
      </div>
      <div className='w-full mb-4 border border-gray-500'></div>
      <div className='flex items-center justify-start w-full gap-4 main--bot sm:w-fit lg:w-full'>
        <FontAwesomeIcon icon={faCalendar} className='text-md md:text-2xl' />
        <p className='text-sm md:text-md'>
          {dateFormat(weatherData.dt, weatherData.timezone)}
        </p>
      </div>
    </div>
  )
}

export default Current
