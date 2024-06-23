import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faMoon,
  faLocationDot,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Nav({ isDarkMode, themeHandler, screenWidth }) {
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
          'md:flex-1 lg:basis-auto flex items-center lg:justify-between lg:rounded-xl lg:p-3 lg:px-6 lg:drop-shadow-md ' +
          (isDarkMode ? 'main-bg' : 'second-light-bg')
        }
      >
        <h1 className='text-3xl font-extrabold sm:text-4xl justify-self-start bg-inherit'>
          WeatherApp
        </h1>
        <div className='hidden lg:flex lg:gap-3'>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={
              'text-xl xl:text-2xl ' + (isDarkMode ? 'filter-white' : '')
            }
          />
          <p className='lg:text-lg xl:text-xl'>Valenzuela City, PH</p>
        </div>
      </div>

      <div className='flex flex-1 h-full gap-4 basis-auto lg:basis-1/4 lg:w-1/5 lg:drop-shadow-md'>
        <Button
          className={
            'h-full rounded-lg flex-1 lg:basis-auto drop-shadow-md text-2xl lg:hidden py-2 ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>

        {/* triggered when the screen width hits lg(1024px) */}
        <Button
          className={
            'hidden lg:flex flex-1 lg:basis-1/4 items-center gap-3 rounded-xl p-4 ' +
            (isDarkMode ? 'main-bg' : 'second-light-bg')
          }
        >
          <FontAwesomeIcon icon={faSearch} className='text-xl' />
          <input
            type='text'
            className={
              'text-xl w-full outline-none ' +
              (isDarkMode ? 'main-bg' : 'second-light-bg')
            }
            placeholder='Search City, Country Code...'
          ></input>
        </Button>

        <ThemeToggleButton
          isDarkMode={isDarkMode}
          themeHandler={themeHandler}
          screenWidth={screenWidth}
        />
      </div>
    </nav>
  )
}

function ThemeToggleButton({ isDarkMode, themeHandler, screenWidth }) {
  return (
    <Button
      className={
        'rounded-lg flex-1 drop-shadow-md text-2xl lg:flex items-center justify-center gap-4 ' +
        (isDarkMode
          ? screenWidth >= 1024
            ? 'main-bg'
            : 'second-bg '
          : 'second-light-bg')
      }
      onClick={themeHandler}
    >
      <FontAwesomeIcon
        icon={isDarkMode ? faMoon : faSun}
        className='text-auto'
      />

      <p className='hidden lg:block'>{isDarkMode ? 'Dark' : 'Light'}</p>
    </Button>
  )
}
export default Nav
