import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faMoon,
  faLocationDot,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import Search from './Search'

function Nav({
  isDarkMode,
  themeHandler,
  screenWidth,
  currentCity,
  weatherData,
  mobSearchOpenHandler,
  suggestions,
  searchValue,
  handleSuggestionClick,
  handleKeyDown,
  handleSearchClick,
  handleInputSearch,
}) {
  return (
    <nav
      className={`flex gap-4 p-4 ${
        isDarkMode ? 'main-bg ' : 'light-bg dark-text second-light-bg'
      } ${!weatherData && ' flex-col items-center justify-center bg-inherit'}`}
      id='nav'
    >
      <div
        className={
          'flex lg:rounded-xl lg:p-3 lg:px-5 ' +
          (isDarkMode
            ? screenWidth >= 1024
              ? 'main-bg '
              : 'bg-inherit '
            : 'second-light-bg ') +
          (weatherData
            ? 'items-center lg:justify-between lg:drop-shadow-md lg:basis-auto md:flex-1'
            : 'bg-inherit items-end ')
        }
      >
        <h1
          className={
            'font-extrabold justify-self-start bg-inherit ' +
            (weatherData
              ? 'text-2xl sm:text-2xl md:text-3xl'
              : 'text-5xl lg:text-8xl')
          }
        >
          WeatherApp
        </h1>
        {currentCity && (
          <>
            <div className='hidden lg:flex lg:gap-3'>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={
                  'text-xl xl:text-2xl ' + (isDarkMode ? 'filter-white' : '')
                }
              />
              <p className='lg:text-lg xl:text-xl'>{currentCity}</p>
            </div>
          </>
        )}
      </div>

      <div
        className={
          'z-50 flex gap-4 drop-shadow-md relative ' +
          (weatherData
            ? 'lg:basis-1/4 lg:w-1/5 basis-auto flex-1'
            : 'h-fit w-4/5 sm:w-3/5 xl:w-2/5')
        }
      >
        <Button
          className={`h-full rounded-lg flex-1 lg:basis-auto drop-shadow-md text-2xl lg:hidden py-2 ${
            isDarkMode ? 'second-bg' : 'second-light-bg'
          } ${weatherData ? '' : 'hidden'}`}
          onClick={() => mobSearchOpenHandler()}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>

        {/* triggered when the screen width hits lg(1024px) */}
        <div
          className={`flex flex-1 flex-col px-4 rounded-xl relative justify-center drop-shadow-md ${
            isDarkMode ? 'main-bg' : 'second-light-bg'
          } ${
            weatherData
              ? `lg:basis-2/4 ${screenWidth >= 1024 ? '' : 'hidden'}`
              : ''
          }`}
        >
          <Search
            isDarkMode={isDarkMode}
            weatherData={weatherData}
            searchValue={searchValue}
            handleInputSearch={handleInputSearch}
            handleKeyDown={handleKeyDown}
            handleSearchClick={handleSearchClick}
            handleSuggestionClick={handleSuggestionClick}
            suggestions={suggestions}
          />
        </div>

        <ThemeToggleButton
          isDarkMode={isDarkMode}
          themeHandler={themeHandler}
          screenWidth={screenWidth}
          weatherData={weatherData}
        />
      </div>
    </nav>
  )
}

function ThemeToggleButton({
  isDarkMode,
  themeHandler,
  screenWidth,
  weatherData,
}) {
  return (
    <Button
      className={
        'rounded-lg drop-shadow-md text-2xl items-center justify-center gap-4 ' +
        (isDarkMode
          ? screenWidth >= 1024
            ? 'main-bg '
            : 'second-bg '
          : 'second-light-bg ') +
        (weatherData ? 'lg:flex flex-1' : 'hidden')
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
