import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Slider from './Components/Slider/Slider'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Slider />
    </div>
  )
}

export default App