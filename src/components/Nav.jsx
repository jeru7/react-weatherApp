import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Nav() {
  return (
    <nav
      className='h-20 flex flex-row items-center p-4 justify-between gap-4'
      id='nav'
    >
      <h1 className='text-4xl justify-self-start flex-1 font-extrabold'>
        WeatherApp
      </h1>
      <div className='nav--buttons h-full flex-1 flex justify-between gap-4'>
        <Button className='searchBtn h-full rounded-lg flex-1 shadow-md text-2xl'>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button className='themeBtn h-full rounded-lg flex-1 shadow-md text-2xl'>
          <FontAwesomeIcon icon={faMoon} />
        </Button>
      </div>
    </nav>
  )
}

export default Nav
