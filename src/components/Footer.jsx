import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer({ isDarkMode }) {
  return (
    <footer
      className={
        'flex items-center justify-center mx-4 p-4 rounded-2xl shadow-md ' +
        (isDarkMode ? 'main-bg' : 'second-light-bg')
      }
    >
      <div className='flex gap-1 github--wrapper'>
        <FontAwesomeIcon icon={faGithub} className='text-5xl' />
        <h3 className='self-end text-xl font-extrabold'>jeru7</h3>
      </div>
    </footer>
  )
}

export default Footer
