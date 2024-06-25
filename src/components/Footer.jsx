import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer({ isDarkMode, weatherData }) {
  const conditionalClassnames = () => {
    if (isDarkMode) {
      if (weatherData) {
        return 'main-bg shadow-md'
      } else {
        return 'bg-inherit absolute bottom-0 left-1/2 transform -translate-x-1/2'
      }
    } else {
      if (weatherData) {
        return 'second-light-bg shadow-md'
      } else {
        return 'bg-inherit absolute bottom-0 left-1/2 transform -translate-x-1/2'
      }
    }
  }
  return (
    <footer
      className={`flex items-center justify-center p-4 rounded-2xl mx-4 mb-4
        ${conditionalClassnames()}`}
    >
      <div className='flex gap-1 github--wrapper'>
        <FontAwesomeIcon icon={faGithub} className='text-5xl' />
        <h3 className='self-end text-xl font-extrabold'>jeru7</h3>
      </div>
    </footer>
  )
}

export default Footer
