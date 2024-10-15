import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-center grid grid-cols-3 min-h-24 fixed w-full bg-slate-200'>
        <div className="logo mx-auto ">
            <a href="/">
                <h1 className='text-5xl font-sans font-bold'>SHOP</h1>
            </a>
        </div>
        <div className="nav-menu mx-auto ">
            <div className="menu hidden lg:block">
                <ul className='flex gap-4 font-sans font-bold'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='mx-auto '>
            <div className='flex gap-2'>
                <a href="/" className='p-2 px-4 bg-black rounded-lg text-white ' >Create Account</a>
                <a href="/" className='p-2 px-3 bg-black rounded-lg text-white'>Login</a>
            </div>
        </div>
    </nav>
  )
}

export default Header