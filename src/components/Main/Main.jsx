import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import DaysForecast from './DaysForecast'
import Today from './Today'
import HourlyDaily from './HourlyDaily'
import Current from './Current'

function Main({ isDarkMode }) {
  return (
    <>
      <main className='flex flex-col w-full gap-4 p-4 main_card--wrapper lg:grid lg:grid-cols-7'>
        <Button
          className={
            'rounded-2xl sm:w-fit flex py-2 px-4 gap-3 items-center dark-text lg:absolute lg:z-10 ' +
            (isDarkMode ? 'highlight-dark-bg' : 'hightlight-light-bg')
          }
        >
          <FontAwesomeIcon icon={faEarthAmericas} className='text-xl' />
          <p className='font-extrabold text-md'>Get current location</p>
        </Button>
        <Current isDarkMode={isDarkMode} />
        <Today isDarkMode={isDarkMode} />
        <HourlyDaily isDarkMode={isDarkMode} />
        <DaysForecast isDarkMode={isDarkMode} />
      </main>
    </>
  )
}

export default Main
