import './App.css'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className="card">
        <Navbar />
        <Presentation />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
