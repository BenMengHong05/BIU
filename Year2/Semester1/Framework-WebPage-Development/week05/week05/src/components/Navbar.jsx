import React from 'react'
import Project from './Project.jsx'
import Home from './Home.jsx';
import { FiAlignJustify } from 'react-icons/fi'
import { IoMdClose } from "react-icons/io";
import About from './About.jsx';
import Login from './Login.jsx';
//  const Menu = [
//    { id: 1, title: 'Home' },
//    { id: 2, title: 'Product' },
//    { id: 3, title: 'Service' },
//    { id: 4, title: 'Profile' },
//    { id: 5, title: 'Contact' },
//  ]

export default function Navbar(props) {
  // const dataMenu = Menu.map((item) => {
  //   return (
  //     <li key={item.id} className='hover:text-white duration-300 m-0 p-0'>
  //       <a href="#about" className='m-0 p-0' >{item.title}</a>
  //     </li>
  //   )
  // })
  return (
    <nav  className=' items-center  fixed w-full z-50 grid grid-cols-3 min-h-20 bg-lime-500 justify-between'>
      <div className="logo m-auto min-h-20 flex items-center">
        <h1><a href="" className='text-lg font-sans font-bold lg:text-3xl'>{props.logo}</a></h1>
      </div>
      <div className="menu hidden lg:block m-auto min-h-20">
        <ul className='font-medium flex text-lg items-center m-0 p-0 gap-4 min-h-20'>
          <li className='hover:text-white duration-300 m-0 p-0'><a href="/">Home</a></li>
          <li className='hover:text-white duration-300 m-0 p-0'><a href="/about">About</a></li>
          <li className='hover:text-white duration-300 m-0 p-0'><a href="/about">Product</a></li>
          <li className='hover:text-white duration-300 m-0 p-0'><a href="/service">Service</a></li>
          <li className='hover:text-white duration-300 m-0 p-0'><a href="/profile">Profile</a></li>
          <li className='hover:text-white duration-300 m-0 p-0'><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="accout flex gap-5 items-center  m-auto ps-10 sm:ps-10 min-h-20">
        <a href="/login" className='p-2 px-3lg:p-2 rounded-full lg:px-5 bg-slate-300 text-black font-medium hover:bg-lime-600 duration-700 hover:text-white'>{props.login}</a>
        <a href="/register" className='p-2 px-3 rounded-full lg:p-2 lg:px-5 bg-slate-300 text-black font-medium hover:bg-lime-600 duration-700 hover:text-white'>{props.register}</a>
        <button className='block sm:hidden' type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
          <FiAlignJustify className='text-3xl cursor-pointer' />
        </button>
      </div>
      <div  >
        <div  id="drawer-example" className="fixed bg-lime-500  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-80 dark:bg-gray-800   " tabIndex={-1}aria-labelledby="drawer-label" >
          <h5 id="drawer-label"className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 ">

          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-500 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoMdClose className='text-3xl' />
            <span className="sr-only">Close menu</span>
          </button>
          <ul className='menu font-medium flex text-lg  m-0 p-0 gap-4 flex-col'>
            <li className='hover:text-white duration-300 m-0 p-0'><a href="#home">Home</a></li>
            <li className='hover:text-white duration-300 m-0 p-0'><a href="#about">About</a></li>
            <li className='hover:text-white duration-300 m-0 p-0'><a href="">Product</a></li>
            <li className='hover:text-white duration-300 m-0 p-0'><a href="">Service</a></li>
            <li className='hover:text-white duration-300 m-0 p-0'><a href="">Profile</a></li>
            <li className='hover:text-white duration-300 m-0 p-0'><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
