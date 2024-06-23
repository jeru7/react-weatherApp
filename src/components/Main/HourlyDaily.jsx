import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const HourlyDaily = ({ isDarkMode }) => {
  return (
    <div
      className={
        'p-4 rounded-2xl flex flex-col items-center gap-8 lg:col-start-3 lg:col-end-8 lg:row-start-2 ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <div className='flex justify-center w-full text-center shadow-md rounded-2xl lg:w-2/5'>
        <div
          className={
            'p-4 rounded-l-2xl w-full ' +
            (isDarkMode ? 'second-bg' : 'light-bg')
          }
        >
          <p className='text-xl'>Hourly</p>
        </div>
        <div className='w-full p-4 rounded-r-2xl'>
          <p className='text-xl'>Daily</p>
        </div>
      </div>
      <div className='flex w-full gap-2 p-2 overflow-x-auto'>
        <div
          className={
            'flex flex-col items-center gap-8 p-4 rounded-2xl drop-shadow-md w-45 flex-shrink-0 ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <p className='text-4xl'>1 PM</p>
          <FontAwesomeIcon icon={faCloud} className='text-7xl' />
          <p className='text-4xl'>10°</p>
          <p className='text-lg'>Overcast clouds</p>
        </div>
        <div
          className={
            'flex flex-col items-center gap-8 p-4 rounded-2xl drop-shadow-md w-45 flex-shrink-0 ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <p className='text-4xl'>1 PM</p>
          <FontAwesomeIcon icon={faCloud} className='text-7xl' />
          <p className='text-4xl'>10°</p>
          <p className='text-lg'>Overcast clouds</p>
        </div>
        <div
          className={
            'flex flex-col items-center gap-8 p-4 rounded-2xl drop-shadow-md w-45 flex-shrink-0 ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <p className='text-4xl'>1 PM</p>
          <FontAwesomeIcon icon={faCloud} className='text-7xl' />
          <p className='text-4xl'>10°</p>
          <p className='text-lg'>Overcast clouds</p>
        </div>
      </div>
    </div>
  )
}

export default HourlyDaily
