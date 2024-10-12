import React from 'react'

export default function header() {
  return (
    <nav className='flex items-center justify-center grid grid-cols-3 m-0 p-0 bg-black min-h-24  fixed w-full' >
        <div className="title flex items-center justify-center">
            <h1 className='font-sans text-5xl font-bold flex items-center justify-center text-white cursor-pointer'>HOLTEL</h1>
        </div>
        <div className='menu'>
            <div className='hidden lg:block'>
                <ul className='flex gap-5 font-medium  items-center justify-center   text-white text-xl cursor-pointer '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="login">
            <a href="#" className='flex items-center justify-center '>
                <button className='bg-slate-500 p-3 px-8    rounded-3xl text-white font-medium  ' type='submit' >Login</button>
            </a>
        </div>
    </nav>
  )
}
