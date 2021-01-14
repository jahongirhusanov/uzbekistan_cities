import React from 'react'
// import logo from '../../../src/logo.svg'
import logo from '../../images/logo2.png'
import './navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo-img' />
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>

        <li>
          <a href='/' className='nav-link'>
            About
          </a>
        </li>

        <li>
          <a href='/' className='nav-link active'>
            Tours
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
