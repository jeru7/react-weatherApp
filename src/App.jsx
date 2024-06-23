import Nav from './components/Nav.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const themeHandler = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <>
      <div
        className={
          'pb-4 second-bg ' +
          (isDarkMode ? 'main-bg white-text' : 'light-bg dark-text')
        }
      >
        <Nav
          isDarkMode={isDarkMode}
          themeHandler={themeHandler}
          screenWidth={screenWidth}
        />
        <Main isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  )
}

export default App
