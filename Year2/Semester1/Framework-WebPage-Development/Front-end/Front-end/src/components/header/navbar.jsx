import { useState } from 'react';
import { Dropdown, } from 'react-bootstrap';
import React from 'react'
import image from '../../assets/image/logo-shop.png';
import { FaAlignJustify } from 'react-icons/fa';
import { FaUserLarge } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imageadmin from '../../assets/image/admin.jpg'

const login = { image }
const navmenu = {
    'nav1': 'Home',
    'nav2': 'About',
    'nav3': 'Product',
    'nav5': 'Page',
    'nav6': 'Discound',
    'nav7': 'Contact',
};

export default function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <nav className='fixed w-screen z-index-999' style={{backgroundColor:"#818cf8" , zIndex:999}}>
            <div className="container-fluid  " >
                <div className="row flex items-center justify-center" data-aos="zoom-in">
                    <div className="col-lg-6 col-1  flex items-center justify-center  ">
                        <Offcanvas show={show} onHide={handleClose} backdrop="static" >
                            <Offcanvas.Header closeButton className='bg-yellow-400'>
                                <Offcanvas.Title className='text-2xl font-bold'>Namv Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='bg-white'>
                                <ul className='gap-4 flex flex-col items-start text-lg font-bold'>
                                    <li className='hover:text-yellow-400 duration-300'><a href="#">{navmenu.nav1}</a></li>
                                    <li className='hover:text-yellow-400 duration-300'><a href="#about">{navmenu.nav2}</a></li>
                                    <li className='hover:text-yellow-400 duration-300'><a href="#product">{navmenu.nav3}</a></li>
                                    <li className='hover:text-yellow-400 duration-300'><a href="">{navmenu.nav5}</a></li>
                                    <li className='hover:text-yellow-400 duration-300'><a href="">{navmenu.nav6}</a></li>
                                    <li className='hover:text-yellow-400 duration-300'><a href="#contact">{navmenu.nav7}</a></li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div className="navmenu hidden md:block ">
                            <ul className='gap-4 flex items-center text-white text-xl font-bold' style={{ fontFamily: "sans-serif" }}>
                                <li className='hover:text-yellow-400 duration-300'><a href="#">{navmenu.nav1}</a></li>
                                <li className='hover:text-yellow-400 duration-300'><a href="#about">{navmenu.nav2}</a></li>
                                <li className='hidden lg:block hover:text-yellow-400 duration-300'><a href="#product">{navmenu.nav3}</a></li>
                                <li className=' hidden lg:block hover:text-yellow-400 duration-300'><a href="">{navmenu.nav5}</a></li>
                                <li className=' hidden xl:block hover:text-yellow-400 duration-300'><a href="">{navmenu.nav6}</a></li>
                                <li className=' hidden xl:block hover:text-yellow-400 duration-300'><a href="#contact">{navmenu.nav7}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2  col-7 text-center">
                        <div className="logo">
                            <a href="">
                                <img src={image} alt="" className='img-fluid w-28' style={{ height: "auto", objectFit: "cover" }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4 flex gap-4 ">
                        <button className='text-2xl block md:hidden'>
                            <FaUserLarge />
                        </button>
                        <button className='text-2xl block md:hidden' variant="primary" onClick={handleShow}>
                            <FaAlignJustify />
                        </button>
  
                        <div className="setting hidden md:block">
                            <div className='flex gap-2'>
                                <a href="" className='btn btn-warning text-nowrap py-2 px-6'>Sing In</a>
                                <a href="" className='btn btn-warning text-nowrap py-2 px-6'>Create Account</a>
                                <a href="">
                                    <img src={imageadmin} alt="" className='img-fluid w-10 rounded-full' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
