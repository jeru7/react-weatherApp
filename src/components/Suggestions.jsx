const Suggestions = ({
  isDarkMode,
  weatherData,
  suggestions,
  mobSearchOpen,
  handleSuggestionClick,
}) => {
  return (
    <ul
      className={`flex flex-col w-full rounded-lg ${
        isDarkMode
          ? 'second-bg '
          : `${mobSearchOpen ? 'light-bg white-text' : 'second-light-bg'}`
      } ${
        weatherData ? `${mobSearchOpen ? '' : 'top-12 mt-5'}` : 'top-12 mt-3'
      } ${mobSearchOpen ? 'text-lg' : 'absolute drop-shadow-md'}`}
    >
      {suggestions.map((city) => (
        <li
          key={city.geonameId}
          onClick={() => handleSuggestionClick(city)}
          className='p-4 cursor-pointer bg-inherit'
        >
          <div className='flex justify-between'>
            <p>
              {city.name}, {city.countryCode}{' '}
            </p>
            <p
              className={`${
                mobSearchOpen
                  ? `${isDarkMode ? 'placeholder-text' : 'dark-text'}`
                  : 'placeholder-text'
              }`}
            >
              {city.countryName}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Suggestions
