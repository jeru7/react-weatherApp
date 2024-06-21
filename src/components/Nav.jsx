import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faMoon,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Nav({ isDarkMode, themeHandler }) {
  return (
    <nav
      className={
        'h-fit flex flex-row items-center p-4 lg:p-2 justify-between gap-4 ' +
        (isDarkMode ? 'main-bg' : 'light-bg dark-text second-light-bg')
      }
      id='nav'
    >
      <div
        className={
          'flex-1 flex items-center lg:justify-between lg:rounded-xl lg:p-3 lg:px-6 lg:drop-shadow-md ' +
          (isDarkMode ? 'main-bg' : 'second-light-bg')
        }
      >
        <h1 className='text-3xl sm:text-4xl justify-self-start font-extrabold bg-inherit'>
          WeatherApp
        </h1>
        <div className='currLoc-wrapper hidden lg:flex lg:gap-3'>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={
              'text-xl xl:text-2xl ' + (isDarkMode ? 'filter-white' : '')
            }
          />
          <p className='text-xl xl:text-2xl'>Valenzuela City, Philippines</p>
        </div>
      </div>

      <div className='h-full flex-1 lg:flex-none flex gap-4 lg:flex-2 xl:w-2/5 lg:drop-shadow-md'>
        <Button
          className={
            'h-full rounded-lg flex-1 drop-shadow-md text-2xl lg:hidden ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button
          className={
            'h-full rounded-lg flex-1 drop-shadow-md text-2xl lg:hidden ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <FontAwesomeIcon icon={faMoon} />
        </Button>

        {/* triggered when the screen width hits lg(1024px) */}
        <div
          className={
            'hidden lg:flex flex-1 items-center gap-3 rounded-xl p-4 ' +
            (isDarkMode ? 'main-bg' : 'second-light-bg')
          }
        >
          <FontAwesomeIcon icon={faSearch} className='text-xl' />
          <input
            type='text'
            className={
              'text-xl ' + (isDarkMode ? 'main-bg' : 'second-light-bg')
            }
            placeholder='Search city...'
          ></input>
        </div>

        <div
          className={
            'hidden lg:flex text-2xl gap-3 items-center rounded-xl p-4 ' +
            (isDarkMode ? 'white-text main-bg' : 'second-light-bg dark-text')
          }
        >
          <FontAwesomeIcon icon={faMoon} />
          <p>Dark</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav
