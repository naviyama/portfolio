import './App.css'
import Navbar from './components/Navbar/Navbar'
import Introduction from './pages/introduction/introduction'
import About from './pages/about/about'
import SkillsAndTools from './pages/skills-and-tools/skills-and-tools'
import Work from './pages/work/work'
import Certificates from './pages/certificates/certificates'
import Contact from './pages/contact/contact'
import Footer from './components/Footer/Footer'
import { AngleFive, AngleFour, AngleOne, AngleThree, AngleTwo } from './components/Angles/Angles'

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Introduction />
        <AngleOne />
        <About />
        <AngleTwo />
        <SkillsAndTools />
        <AngleThree />
        <Work />
        <AngleFour />
        <Certificates />
        <AngleFive />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

