import React from 'react'

const Header = () => {
    return (
        <nav className='flex items-center grid-cols-4 min-h-24 fixed w-full bg-black '>
            <div className="nav-menu mx-auto ">
                <div className="menu hidden lg:block">
                    <ul className='flex gap-4 font-sans font-bold text-lg  cursor-pointer'>
                        <li className='transat transition-all hover:text-sky-400 duration-300 text-gray-500 '>Home</li>
                        <li className='transat transition-all hover:text-sky-400 duration-300 text-gray-500'>About</li>
                        <li className='transat transition-all hover:text-sky-400 duration-300 text-gray-500'>Service</li>
                        <li className='transat transition-all hover:text-sky-400 duration-300 text-gray-500'>Product</li>
                        <li className='transat transition-all hover:text-sky-400 duration-300 text-gray-500'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="logo mx-auto ">
                <form action="#" method='POST' className='text-nowrap' >
                    <input type="text" className='p-2 px-5 w-52 cursor-auto lg:w-64  rounded-full outline-sky-200 transition-all focus:outline-sky-4    00 duration-300 ' name="search" id="search" placeholder='Search...' />
                    <button type="submit" className='mx-5 p-2 px-4 hover:bg-white hover:text-black transition-all duration-300  bg-black text-white  rounded-lg' >Search</button>
                </form>
            </div>
            <div className='mx-auto hidden sm:block'>
                <div className='flex gap-2 '>
                    <a href="/" className='p-2 px-4  hover:bg-white hover:text-black transition-all duration-300 bg-black rounded-lg text-white flex items-center text-nowrap justify-center' >Create Account</a>
                    <a href="/" className='p-2 px-3 hover:bg-white hover:text-black transition-all duration-300 bg-black rounded-lg text-white flex items-center justify-center'>Login</a>
                </div>
            </div>
            <div className="profile px-10">
                <a href="/">
                    <figure >
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=' w-12 h-12  rounded-full object-cover' alt="" />
                    </figure>
                </a>
            </div>
        </nav>
    )
}

export default Header