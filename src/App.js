import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

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