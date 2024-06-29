import './App.css'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'
import Skills from './Components/Skills'

function App() {

  return (
    <>
      <div className="card">
        <Navbar />
        <Presentation />
        <Skills/>
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
