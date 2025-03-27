import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>   
  )
}

export default App