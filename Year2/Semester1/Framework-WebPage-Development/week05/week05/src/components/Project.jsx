import React from 'react'
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Product from './Product.jsx';
import Service from './Service.jsx';
import Profile from './profile.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
export default function Project() {
  return (
    <>
        {/* <Topbar  title="HOLTEL" email="hotel001@gmail.com" phone="09939948"/> */}
        <Navbar  logo="MengHong"  login="Login" register="Register"/>
        <Home />
        <About />
        <Product />
        <Service />
        <Profile />
        <Contact />
        <Footer />
        
        
    </>
  )
}
