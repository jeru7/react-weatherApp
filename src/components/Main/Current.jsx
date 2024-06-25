import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCloud,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons'
const Current = ({ isDarkMode, weatherData }) => {
  const description = weatherData.weather[0].description
  return (
    <div
      className={
        'card flex flex-col items-center gap-8 p-8 drop-shadow-md rounded-2xl lg:col-start-3 lg:col-end-5 ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <div className='flex items-center gap-4 main--top lg:self-start'>
        <FontAwesomeIcon
          icon={faLocationDot}
          className='text-3xl lg:text-4xl'
        />
        <h3 className='text-3xl city_pholder lg:text-4xl'>
          {weatherData.name}
        </h3>
      </div>
      <div className='flex items-center justify-center w-full gap-4'>
        <div className='flex flex-col items-center temp--wrapper'>
          <h3 className='text-6xl temp_pholder lg:text-7xl xl:text-7xl'>
            {Math.round(weatherData.main.temp)}°
          </h3>
          <p className='text-md lg:text-xl lg:text-center'>
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </p>
        </div>
        <FontAwesomeIcon
          icon={faCloud}
          className='text-7xl lg:text-8xl xl:text-9xl white-text'
        />
      </div>
      <div className='w-full border border-gray-500'></div>
      <div className='flex items-center justify-start w-full gap-4 main--bot sm:w-fit lg:w-full'>
        <FontAwesomeIcon icon={faCalendar} className='text-2xl' />
        <p className='text-md'>Saturday 25, May</p>
      </div>
    </div>
  )
}

export default Current
