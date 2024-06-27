import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWind,
  faDroplet,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from '@fortawesome/free-solid-svg-icons'
import sunriseIcon from '../../assets/sunriseIcon.png'
import sunsetIcon from '../../assets/sunsetIcon.png'

const Today = ({ isDarkMode, weatherData, timeFormat }) => {
  const min = weatherData.main.temp_min
  const max = weatherData.main.temp_max
  return (
    <div
      className={
        'flex flex-col gap-4 p-4 rounded-2xl lg:grid lg:grid-cols-2 lg:col-start-5 lg:col-end-8 ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <h3 className='text-xl lg:absolute lg:text-sm lg:z-10'>
        Today&apos;s highlights
      </h3>
      <div className='flex flex-col gap-2 lg:row-start-1 lg:row-end-3 lg:mt-6 '>
        <div
          className={
            'rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md h-full ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <div className='flex justify-center gap-4'>
            <FontAwesomeIcon icon={faWind} className='text-5xl lg:text-3xl' />
            <p className='text-5xl wind_pholder lg:text-3xl'>
              {weatherData.wind.speed}
              <span className='text-base'>km/h</span>
            </p>
          </div>
          <p>Wind</p>
        </div>
        <div
          className={`rounded-2xl p-4 flex items-center justify-around gap-8 lg:gap-2 md:justify-center lg:justify-around drop-shadow-md h-full ${
            isDarkMode ? 'second-bg' : 'second-light-bg'
          }`}
        >
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <FontAwesomeIcon
                icon={faTemperatureArrowUp}
                className='text-2xl sm:text-5xl lg:text-xl xl:text-2xl'
              />
              <p className='text-2xl sm:text-5xl lg:text-xl xl:text-2xl'>
                {max.toFixed(1)}°
              </p>
            </div>
            <p>Max</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <FontAwesomeIcon
                icon={faTemperatureArrowDown}
                className='text-2xl sm:text-5xl lg:text-xl xl:text-2xl'
              />
              <p className='text-2xl sm:text-5xl lg:text-xl xl:text-2xl'>
                {min.toFixed(1)}°
              </p>
            </div>
            <p>Min</p>
          </div>
        </div>
        <div
          className={
            'flex flex-col items-center justify-center rounded-2xl p-4 gap-3 drop-shadow-md second-bg h-full ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <div className='flex justify-center gap-4'>
            <FontAwesomeIcon
              icon={faDroplet}
              className='text-5xl lg:text-3xl'
            />
            <p className='text-5xl lg:text-3xl'>{weatherData.main.humidity}%</p>
          </div>
          <p>Humidity</p>
        </div>
      </div>

      <div
        className={
          'flex justify-around sm:justify-center items-center sm:gap-36 rounded-2xl drop-shadow-md p-4 lg:gap-8 xl:gap-16 ' +
          (isDarkMode ? 'second-bg' : 'second-light-bg')
        }
      >
        <div className='flex flex-col items-center'>
          <img
            src={sunriseIcon}
            alt='Sunrise'
            className={`lg:w-12 xl:w-16 ${isDarkMode ? 'filter-white' : ''}`}
          />
          <p className='md:text-md lg:text-lg'>Sunrise</p>
          <p className='text-2xl md:text-md lg:text-lg'>
            {timeFormat(weatherData.sys.sunrise, weatherData.timezone)}
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src={sunsetIcon}
            alt='Sunset'
            className={`lg:w-12 xl:w-16 ${isDarkMode ? 'filter-white' : ''}`}
          />
          <p className='lg:text-lg md:text-md'>Sunset</p>
          <p className='text-2xl lg:text-lg md:text-md'>
            {timeFormat(weatherData.sys.sunset, weatherData.timezone)}
          </p>
        </div>
      </div>

      <div
        className={
          'hidden p-4 rounded-2xl drop-shadow-md lg:flex justify-center items-center gap-4 lg:col-start-2 ' +
          (isDarkMode ? 'second-bg' : 'second-light-bg')
        }
      >
        <p className='text-center placeholder-text'>
          UV INDEX IS NOT AVAILABLE AT THE MOMENT
        </p>
      </div>
    </div>
  )
}

export default Today
