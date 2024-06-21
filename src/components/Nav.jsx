import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faMoon,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Nav() {
  return (
    <nav
      className='h-20 flex flex-row items-center p-4 lg:p-2 justify-between gap-4 main-bg'
      id='nav'
    >
      <div className='nav--main--wrapper flex-1 flex items-center lg:justify-between lg:rounded-xl lg:p-3 lg:px-6 lg:drop-shadow-md'>
        <h1 className='text-3xl sm:text-4xl justify-self-start font-extrabold'>
          WeatherApp
        </h1>
        <div className='currLoc-wrapper hidden lg:flex lg:gap-3'>
          <FontAwesomeIcon
            icon={faLocationDot}
            className='filter-white text-xl xl:text-2xl'
          />
          <p className='white-text text-xl xl:text-2xl'>
            Valenzuela City, Philippines
          </p>
        </div>
      </div>

      <div className='nav--buttons h-full flex-1 lg:flex-none flex gap-4 lg:flex-2 xl:w-2/5 lg:drop-shadow-md'>
        <Button className='searchBtn h-full rounded-lg flex-1 drop-shadow-md text-2xl lg:hidden second-bg'>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button className='themeBtn h-full rounded-lg flex-1 drop-shadow-md text-2xl lg:hidden second-bg'>
          <FontAwesomeIcon icon={faMoon} />
        </Button>

        <div className='search--desktop hidden lg:flex flex-1 items-center gap-3 rounded-xl p-4'>
          <FontAwesomeIcon icon={faSearch} className='white-text text-xl' />
          <input
            type='text'
            className='main-bg text-xl'
            placeholder='Search city...'
          ></input>
        </div>

        <div className='themeBtn--desktop hidden lg:flex white-text text-2xl gap-3 items-center rounded-xl p-4'>
          <FontAwesomeIcon icon={faMoon} className='' />
          <p>Dark</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav
