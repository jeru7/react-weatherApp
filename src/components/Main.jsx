import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEarthAmericas,
  faLocationDot,
  faCloud,
  faCalendar,
  faWind,
  faCloudRain,
  faDroplet,
} from '@fortawesome/free-solid-svg-icons'
import sunriseIcon from '../assets/sunriseIcon.png'
import sunsetIcon from '../assets/sunsetIcon.png'
import Button from './Button'

function Main() {
  return (
    <>
      <main className='flex flex-col main_card--wrapper w-full gap-4 p-4 '>
        <Button className='rounded-2xl sm:w-fit flex py-2 px-4 gap-3 items-center highlight-bg dark-text'>
          <FontAwesomeIcon icon={faEarthAmericas} className='text-xl' />
          <p className='text-md font-extrabold'>Get current location</p>
        </Button>

        <div className='card flex flex-col items-center gap-8 p-8 drop-shadow-md rounded-2xl main-bg'>
          <div className='main--top flex gap-4 items-center'>
            <FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
            <h3 className='city_pholder text-3xl'>Valenzuela</h3>
          </div>
          <div className='w-full flex items-center justify-center gap-4'>
            <div className='temp--wrapper flex flex-col items-center'>
              <h3 className='temp_pholder text-6xl'>10°</h3>
              <p className='text-md'>Overcast Clouds</p>
            </div>
            <FontAwesomeIcon icon={faCloud} className='text-7xl' />
          </div>
          <div className='border border-gray-500 w-full'></div>
          <div className='main--bot flex w-full sm:w-fit justify-start gap-4 items-center'>
            <FontAwesomeIcon icon={faCalendar} className='text-2xl' />
            <p className='fullDate_pholder text-md'>Saturday 25, May</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 p-4 rounded-2xl main-bg'>
          <h3 className='text-xl'>Today&apos;s highlights</h3>
          <div className='flex flex-col gap-2'>
            <div className='rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md second-bg'>
              <div className='wind--top flex justify-center gap-4'>
                <FontAwesomeIcon icon={faWind} className='text-5xl' />
                <p className='wind_pholder text-5xl'>
                  3.7<span className='text-base'>km/h</span>
                </p>
              </div>
              <p>Wind</p>
            </div>
            <div className='rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md second-bg'>
              <div className='flex justify-center gap-4'>
                <FontAwesomeIcon icon={faCloudRain} className='text-5xl' />
                <p className='text-5xl'>74%</p>
              </div>
              <p>Chance of Rain</p>
            </div>
            <div className='rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md second-bg'>
              <div className='flex justify-center gap-4'>
                <FontAwesomeIcon icon={faDroplet} className='text-5xl' />
                <p className='text-5xl'>22%</p>
              </div>
              <p>Humidity</p>
            </div>
          </div>

          <div className='flex justify-around sm:justify-center sm:gap-36 rounded-2xl drop-shadow-md p-4 second-bg'>
            <div className='flex flex-col items-center'>
              <img src={sunriseIcon} alt='Sunrise' className='filter-white' />
              <p>Sunrise</p>
              <p className='text-2xl'>5:45AM</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={sunsetIcon} alt='Sunset' className='filter-white' />
              <p>Sunrise</p>
              <p className='text-2xl'>6:15PM</p>
            </div>
          </div>

          <div className='p-4 rounded-2xl drop-shadow-md flex flex-col items-center gap-4 second-bg'>
            <h3 className='text-3xl'>UV Index</h3>
            <div className='flex flex-col items-center'>
              <p className='text-6xl'>3</p>
              <p className='uvReport_pholder text-4xl'>Low</p>
            </div>
            <div className='w-full border'></div>
            <p className='text-lg text-center'>Low for the rest of the day</p>
          </div>
        </div>

        <div className='p-4 rounded-2xl flex flex-col items-center gap-8 main-bg'>
          <div className='flex text-center shadow-md rounded-2xl w-full justify-center'>
            <div className='p-4 rounded-l-2xl w-full second-bg'>
              <p className='text-xl'>Hourly</p>
            </div>
            <div className='p-4 rounded-r-2xl w-full'>
              <p className='text-xl'>Daily</p>
            </div>
          </div>
          <div className='flex overflow-x-auto w-full gap-2 p-2'>
            <div className='flex flex-col items-center gap-8 p-4 rounded-2xl shadow-md w-45 flex-shrink-0 second-bg'>
              <p className='text-4xl'>1 PM</p>
              <FontAwesomeIcon icon={faCloud} className='text-7xl' />
              <p className='text-4xl'>10°</p>
              <p className='text-lg'>Overcast clouds</p>
            </div>
            <div className='flex flex-col items-center gap-8 p-4 rounded-2xl shadow-md w-45 flex-shrink-0 second-bg'>
              <p className='text-4xl'>1 PM</p>
              <FontAwesomeIcon icon={faCloud} className='text-7xl' />
              <p className='text-4xl'>10°</p>
              <p className='text-lg'>Overcast clouds</p>
            </div>
            <div className='flex flex-col items-center gap-8 p-4 rounded-2xl shadow-md w-45 flex-shrink-0 second-bg'>
              <p className='text-4xl'>1 PM</p>
              <FontAwesomeIcon icon={faCloud} className='text-7xl' />
              <p className='text-4xl'>10°</p>
              <p className='text-lg'>Overcast clouds</p>
            </div>
          </div>
        </div>

        <div className='p-4 rounded-2xl flex flex-col items-center gap-4 main-bg'>
          <h3 className='self-start text-2xl'>7 Days Forecasts</h3>
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCloud} className='text-4xl' />
              <p className='text-4xl'>10°</p>
            </div>
            <div className='flex items-center gap-6'>
              <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
              <div className='text-md'>
                <p>Sun</p>
                <p>May 26</p>
              </div>
            </div>
          </div>
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCloud} className='text-4xl' />
              <p className='text-4xl'>10°</p>
            </div>
            <div className='flex items-center gap-6'>
              <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
              <div className='text-md'>
                <p>Mon</p>
                <p>May 27</p>
              </div>
            </div>
          </div>
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCloud} className='text-4xl' />
              <p className='text-4xl'>10°</p>
            </div>
            <div className='flex items-center gap-6'>
              <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
              <div className='text-md'>
                <p>Tue</p>
                <p>May 28</p>
              </div>
            </div>
          </div>
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCloud} className='text-4xl' />
              <p className='text-4xl'>10°</p>
            </div>
            <div className='flex items-center gap-6'>
              <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
              <div className='text-md'>
                <p>Wed</p>
                <p>May 29</p>
              </div>
            </div>
          </div>
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
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
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCloud} className='text-4xl' />
              <p className='text-4xl'>10°</p>
            </div>
            <div className='flex items-center gap-6'>
              <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
              <div className='text-md'>
                <p>Fri</p>
                <p>May 31</p>
              </div>
            </div>
          </div>
          <div className='flex p-4 rounded-2xl w-full justify-around second-bg'>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCloud} className='text-4xl' />
              <p className='text-4xl'>10°</p>
            </div>
            <div className='flex items-center gap-6'>
              <FontAwesomeIcon icon={faCalendar} className='text-4xl' />
              <div className='text-md'>
                <p>Sat</p>
                <p>Jun 1</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
