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
      <main className='flex flex-col p-4 gap-4'>
        <Button className='currBtn rounded-2xl flex py-2 px-4 gap-3 text-2xl items-center'>
          <FontAwesomeIcon icon={faEarthAmericas} />
          <p className='text-lg font-extrabold'>Get current location</p>
        </Button>
        <div className='flex flex-col main_card--wrapper w-full gap-4'>
          <div className='main_card--main card flex flex-col items-center gap-8 p-8 drop-shadow-md rounded-2xl'>
            <div className='main--top flex gap-4 items-center'>
              <FontAwesomeIcon icon={faLocationDot} className='text-5xl' />
              <h3 className='city_pholder text-5xl'>Valenzuela</h3>
            </div>
            <div className='main--mid flex w-full items-center justify-between'>
              <div className='temp--wrapper flex flex-col'>
                <h3 className='temp_pholder text-8xl'>10°</h3>
                <p className='tempReport_pholder'>Overcast Clouds</p>
              </div>
              <FontAwesomeIcon icon={faCloud} className='text-9xl' />
            </div>
            <div className='line w-full'></div>
            <div className='main--bot flex w-full justify-start gap-4 items-center'>
              <FontAwesomeIcon icon={faCalendar} className='text-3xl' />
              <p className='fullDate_pholder text-xl'>Saturday 25, May</p>
            </div>
          </div>

          <div className='main_card--today card flex flex-col gap-4 p-4 rounded-2xl'>
            <h3 className='text-2xl'>Today&apos;s highlights</h3>
            <div className='today_bars--wrapper flex flex-col gap-2'>
              <div className='today--wind todayCard rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md'>
                <div className='wind--top flex w-3/5 gap-4'>
                  <FontAwesomeIcon icon={faWind} className='text-5xl' />
                  <p className='wind_pholder text-5xl'>
                    3.7<span className='text-base'>km/h</span>
                  </p>
                </div>
                <p>Wind</p>
              </div>
              <div className='today--rainChance todayCard rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md'>
                <div className='rainChance--top flex w-3/5 gap-4'>
                  <FontAwesomeIcon icon={faCloudRain} className='text-5xl' />
                  <p className='rainChance_pholder text-5xl'>74%</p>
                </div>
                <p>Chance of Rain</p>
              </div>
              <div className='today_humidity todayCard rounded-2xl p-4 flex flex-col items-center justify-center gap-3 drop-shadow-md'>
                <div className='humidity--top flex w-3/5 gap-8'>
                  <FontAwesomeIcon icon={faDroplet} className='text-5xl' />
                  <p className='humidity_pholder text-5xl'>22%</p>
                </div>
                <p>Humidity</p>
              </div>
            </div>

            <div className='today_sun--wrapper todayCard flex justify-around rounded-2xl drop-shadow-md p-4'>
              <div className='todaySunrise flex flex-col items-center'>
                <img
                  src={sunriseIcon}
                  alt='Sunrise'
                  className='sunriseIcon filter-white'
                />
                <p>Sunrise</p>
                <p className='sunriseTime_pholder text-2xl'>5:45AM</p>
              </div>
              <div className='todaySunset flex flex-col items-center'>
                <img
                  src={sunsetIcon}
                  alt='Sunset'
                  className='sunsetIcon filter-white'
                />
                <p>Sunrise</p>
                <p className='sunriseTime_pholder text-2xl'>6:15PM</p>
              </div>
            </div>

            <div className='today_uv--wrapper p-4 todayCard rounded-2xl drop-shadow-md flex flex-col items-center gap-4'>
              <h3 className='text-3xl'>UV Index</h3>
              <div className='uvReport--wrapper flex flex-col items-center'>
                <p className='uvValue_pholder text-8xl'>3</p>
                <p className='uvReport_pholder text-4xl'>Low</p>
              </div>
              <div className='w-full border'></div>
              <p className='uvFullReport_pholder text-xl'>
                Low for the rest of the day
              </p>
            </div>
          </div>

          <div className='main_card--hrDay card p-4 rounded-2xl flex flex-col items-center gap-8'>
            <div className='hrDayToggler flex text-center shadow-md rounded-2xl w-full justify-center'>
              <div className='hourly--toggler p-4 rounded-l-2xl w-full'>
                <p className='text-3xl'>Hourly</p>
              </div>
              <div className='daily--toggler p-4 rounded-r-2xl w-full'>
                <p className='text-3xl'>Daily</p>
              </div>
            </div>
            <div className='hrDayCards--wrapper flex overflow-x-auto w-full gap-2'>
              <div className='hrDayCards flex flex-col items-center gap-8 p-4 todayCard rounded-2xl shadow-md w-45 flex-shrink-0'>
                <p className='text-4xl'>1 PM</p>
                <FontAwesomeIcon icon={faCloud} className='text-7xl' />
                <p className='text-4xl'>10°</p>
                <p className='text-lg'>Overcast clouds</p>
              </div>
              <div className='hrDayCards flex flex-col items-center gap-8 p-4 todayCard rounded-2xl shadow-md w-45 flex-shrink-0'>
                <p className='text-4xl'>1 PM</p>
                <FontAwesomeIcon icon={faCloud} className='text-7xl' />
                <p className='text-4xl'>10°</p>
                <p className='text-lg'>Overcast clouds</p>
              </div>
              <div className='hrDayCards flex flex-col items-center gap-8 p-4 todayCard rounded-2xl shadow-md w-45 flex-shrink-0'>
                <p className='text-4xl'>1 PM</p>
                <FontAwesomeIcon icon={faCloud} className='text-7xl' />
                <p className='text-4xl'>10°</p>
                <p className='text-lg'>Overcast clouds</p>
              </div>
            </div>
          </div>

          <div className='main_card--7days card p-4 rounded-2xl flex flex-col items-center gap-4'>
            <h3 className='self-start text-2xl'>7 Days Forecasts</h3>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Sun</p>
                  <p className='text-xl'>May 26</p>
                </div>
              </div>
            </div>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Mon</p>
                  <p className='text-xl'>May 27</p>
                </div>
              </div>
            </div>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Tue</p>
                  <p className='text-xl'>May 28</p>
                </div>
              </div>
            </div>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Wed</p>
                  <p className='text-xl'>May 29</p>
                </div>
              </div>
            </div>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Thu</p>
                  <p className='text-xl'>May 30</p>
                </div>
              </div>
            </div>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Fri</p>
                  <p className='text-xl'>May 31</p>
                </div>
              </div>
            </div>
            <div className='day_card flex todayCard p-4 rounded-2xl w-full justify-around'>
              <div className='day--left flex items-center gap-2'>
                <FontAwesomeIcon icon={faCloud} className='text-5xl' />
                <p className='text-5xl'>10°</p>
              </div>
              <div className='day--right flex items-center gap-6'>
                <FontAwesomeIcon icon={faCalendar} className='text-5xl' />
                <div className='day_right--wrapper'>
                  <p className='text-xl'>Sat</p>
                  <p className='text-xl'>June 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
