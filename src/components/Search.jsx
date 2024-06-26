import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Suggestions from './Suggestions'

const Search = ({
  weatherData,
  isDarkMode,
  searchValue,
  handleInputSearch,
  handleKeyDown,
  handleSearchClick,
  handleSuggestionClick,
  suggestions,
  mobSearchOpen,
}) => {
  return (
    <form
      className={`flex items-center w-full gap-3 justify-center ${
        weatherData ? '' : 'p-3'
      } ${
        mobSearchOpen
          ? `flex-row ${
              isDarkMode ? 'main-bg shadow-md' : 'second-light-bg'
            } rounded-2xl p-3 px-6`
          : 'flex-row-reverse'
      }`}
    >
      <input
        type='text'
        className={`w-full outline-none ${
          isDarkMode ? 'main-bg' : 'bg-inherit'
        } ${mobSearchOpen ? 'text-md md:text-lg' : 'text-sm lg:text-xl'}`}
        placeholder='Search City, Country Code...'
        value={searchValue}
        onChange={handleInputSearch}
        onKeyDown={handleKeyDown}
      ></input>
      <FontAwesomeIcon
        icon={faSearch}
        className={`text-xl cursor-pointer ${mobSearchOpen ? '' : ''}`}
        onClick={handleSearchClick}
      />
      {searchValue && suggestions.length > 0 && !mobSearchOpen && (
        <Suggestions
          isDarkMode={isDarkMode}
          weatherData={weatherData}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
    </form>
  )
}

export default Search
