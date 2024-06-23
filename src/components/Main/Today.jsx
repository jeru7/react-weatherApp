import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWind,
  faDroplet,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from '@fortawesome/free-solid-svg-icons'
import sunriseIcon from '../../assets/sunriseIcon.png'
import sunsetIcon from '../../assets/sunsetIcon.png'

const Today = ({ isDarkMode }) => {
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
              3.7<span className='text-base'>km/h</span>
            </p>
          </div>
          <p>Wind</p>
        </div>
        <div
          className={
            'rounded-2xl p-4 flex items-center justify-center gap-8 drop-shadow-md h-full ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <FontAwesomeIcon
                icon={faTemperatureArrowUp}
                className='text-5xl lg:text-3xl'
              />
              <p className='text-5xl lg:text-3xl'>10</p>
            </div>
            <p>Max</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <FontAwesomeIcon
                icon={faTemperatureArrowDown}
                className='text-5xl lg:text-3xl'
              />
              <p className='text-5xl lg:text-3xl'>10</p>
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
            <p className='text-5xl lg:text-3xl'>22%</p>
          </div>
          <p>Humidity</p>
        </div>
      </div>

      <div
        className={
          'flex justify-around sm:justify-center sm:gap-36 rounded-2xl drop-shadow-md p-4 lg:gap-8 xl:gap-16 ' +
          (isDarkMode ? 'second-bg' : 'second-light-bg')
        }
      >
        <div className='flex flex-col items-center'>
          <img
            src={sunriseIcon}
            alt='Sunrise'
            className={'lg:w-9 ' + (isDarkMode ? 'filter-white' : '')}
          />
          <p className='lg:text-sm'>Sunrise</p>
          <p className='text-2xl lg:text-sm'>5:45AM</p>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src={sunsetIcon}
            alt='Sunset'
            className={'lg:w-9 ' + (isDarkMode ? 'filter-white' : '')}
          />
          <p className='lg:text-sm'>Sunrise</p>
          <p className='text-2xl lg:text-sm'>6:15PM</p>
        </div>
      </div>

      <div
        className={
          'p-4 rounded-2xl drop-shadow-md flex flex-col items-center gap-4 lg:col-start-2 ' +
          (isDarkMode ? 'second-bg' : 'second-light-bg')
        }
      >
        <h3 className='text-3xl lg:text-xl'>UV Index</h3>
        <div className='flex flex-col items-center'>
          <p className='text-6xl lg:text-3xl'>3</p>
          <p className='text-4xl uvReport_pholder lg:text-2xl'>Low</p>
        </div>
        <div className='w-full border border-gray-500'></div>
        <p className='text-lg text-center lg:text-sm'>
          Low for the rest of the day
        </p>
      </div>
    </div>
  )
}

export default Today
