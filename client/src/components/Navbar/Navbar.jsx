import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const { isMobile, setIsMobile } = useState(false)
  return (
    <nav>
      <ul className='nav-container'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills & Tools</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar