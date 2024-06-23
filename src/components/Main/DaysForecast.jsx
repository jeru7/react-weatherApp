import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCalendar } from '@fortawesome/free-solid-svg-icons'

const DaysForecast = ({ isDarkMode }) => {
  const days = 5

  return (
    <div
      className={
        'p-4 rounded-2xl flex flex-col items-center gap-4 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 mt-12 ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <h3 className='self-start text-2xl'>5 Days Forecasts</h3>
      {Array.from({ length: days }).map((_, index) => (
        <Day key={index} isDarkMode={isDarkMode} />
      ))}
    </div>
  )
}

const Day = ({ isDarkMode }) => {
  return (
    <div
      className={
        'flex p-4 rounded-2xl w-full justify-around lg:h-full drop-shadow-md ' +
        (isDarkMode ? 'second-bg' : 'second-light-bg')
      }
    >
      <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faCloud} className='text-4xl' />
        <p className='text-4xl'>10°</p>
      </div>
      <div className='flex items-center gap-6'>
        <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
        <div className='text-md'>
          <p>Thu</p>
          <p>May 30</p>
        </div>
      </div>
    </div>
  )
}

export default DaysForecast
