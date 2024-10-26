import React from 'react'
import '../header/Navbar.css';
import LogoImage from '../../asset/image/logofood.png'
import AdminImage from '../../asset/image/admin.jpg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <a href='#' className='logo-webfood'>
        <img src={LogoImage} alt='' />
      </a>
      <ul className='navmenu'>
        <li ><a href='#'>Home</a></li>
        <li ><a href='#'>About</a></li>
        <li ><a href='#'>Services</a></li>
        <li ><a href='#'>Product</a></li>
        <li ><a href='#'>Contact</a></li>
      </ul>
      <form action='#' method='POST' className='search'>
        <input type='text' placeholder='Search...' />
        <button type='submit'>
          <span>
            Search
          </span>
        </button>
      </form>
      <a href='#' className='logo-admin'>
        <img src={AdminImage} alt='' />
      </a>
    </nav>
  )
}
