import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const themeHandler = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <>
      <div
        className={
          'app--wrapper pb-4 second-bg ' +
          (isDarkMode ? 'main-bg white-text' : 'light-bg dark-text')
        }
      >
        <Nav isDarkMode={isDarkMode} themeHandler={themeHandler} />
        <Main isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  )
}

export default App
