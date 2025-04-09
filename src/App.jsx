import './Styles/App.scss'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Slider from './Components/Slider'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Slider />
      <Projects />
      <Footer />
    </div>   
  )
}

export default App