import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faMoon,
  faLocationDot,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Button from './Button'
import { useState } from 'react'

function Nav({
  isDarkMode,
  themeHandler,
  screenWidth,
  searchHandler,
  currentCity,
}) {
  const geoUserName = import.meta.env.VITE_WEATHERAPP_GEONAMES_USERNAME
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleInputSearch = async (e) => {
    setSearchValue(e.target.value)

    if (e.target.value.length > 0) {
      try {
        const response = await axios.get('http://api.geonames.org/searchJSON', {
          params: {
            q: e.target.value,
            maxRows: 5,
            username: geoUserName,
          },
        })
        setSuggestions(response.data.geonames)
      } catch (e) {
        console.log(`Failed fetching suggestions. ${e.message}`)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchHandler(searchValue)
    }
  }

  const handleSearchClick = () => {
    const splitValue = searchValue.split(',')
    searchHandler(splitValue[0], splitValue[1])
  }

  const handleSuggestionClick = (city) => {
    setSearchValue(`${city.name}, ${city.countryCode}`)
    setSuggestions([])
    searchHandler(city.name, city.countryCode)
  }

  return (
    <nav
      className={
        'flex lg:p-2 gap-4 p-4 ' +
        (isDarkMode ? 'main-bg' : 'light-bg dark-text second-light-bg')
      }
      id='nav'
    >
      <div
        className={
          'md:flex-1 lg:basis-auto flex items-center lg:justify-between lg:rounded-xl lg:p-3 lg:drop-shadow-md ' +
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
          <p className='lg:text-lg xl:text-xl'>{currentCity}</p>
        </div>
      </div>

      <div className='z-50 flex flex-1 gap-4 basis-auto lg:basis-1/4 lg:w-1/5 lg:drop-shadow-md '>
        <Button
          className={
            'h-full rounded-lg flex-1 lg:basis-auto drop-shadow-md text-2xl lg:hidden py-2 ' +
            (isDarkMode ? 'second-bg' : 'second-light-bg')
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>

        {/* triggered when the screen width hits lg(1024px) */}
        <div
          className={
            'hidden lg:flex flex-1 lg:basis-1/4 px-4 items-center gap-3 rounded-xl relative ' +
            (isDarkMode ? 'main-bg' : 'second-light-bg')
          }
        >
          <div className='flex flex-col items-center w-full'>
            <form className='flex items-center w-full gap-3 lg:flex-row-reverse '>
              <input
                type='text'
                className={
                  'text-xl w-full outline-none ' +
                  (isDarkMode ? 'main-bg' : 'second-light-bg')
                }
                placeholder='Search City, Country Code...'
                value={searchValue}
                onChange={handleInputSearch}
                onKeyDown={handleKeyDown}
              ></input>
              <FontAwesomeIcon
                icon={faSearch}
                className='text-xl cursor-pointer'
                onClick={handleSearchClick}
              />
            </form>
            {searchValue && suggestions.length > 0 && (
              <ul
                className={
                  'absolute flex flex-col w-full mt-12 rounded-lg drop-shadow-md ' +
                  (isDarkMode ? 'second-bg' : 'second-light-bg')
                }
              >
                {suggestions.map((city) => (
                  <li
                    key={city.geonameId}
                    onClick={() => handleSuggestionClick(city)}
                    className='p-4 text-xl cursor-pointer bg-inherit'
                  >
                    {city.name}, {city.countryCode}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

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
