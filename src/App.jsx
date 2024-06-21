import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className='app--wrapper pb-4 second-bg white-text'>
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
