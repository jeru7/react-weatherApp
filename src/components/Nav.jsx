import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faMoon,
  faLocationDot,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { useEffect, useState } from 'react'

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
          'md:flex-1 lg:basis-auto flex items-center lg:justify-between lg:rounded-xl lg:p-3 lg:px-6 lg:drop-shadow-md ' +
          (isDarkMode ? 'main-bg' : 'second-light-bg')
        }
      >
        <h1 className='text-3xl sm:text-4xl justify-self-start font-extrabold bg-inherit'>
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

      <div className='h-full flex-1 flex gap-4 basis-auto lg:basis-1/4 lg:w-1/5 lg:drop-shadow-md'>
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
            placeholder='Search city...'
          ></input>
        </Button>

        <ThemeToggleButton
          isDarkMode={isDarkMode}
          themeHandler={themeHandler}
        />
      </div>
    </nav>
  )
}

function ThemeToggleButton({ isDarkMode, themeHandler }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
