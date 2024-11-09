import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaTelegram } from 'react-icons/fa'

export default function Footer() {
  return (
    <section className='flex items-center justify-center' style={{width:"100%"}}>
        <div className="footer grid grid-cols-none lg:grid-cols-3 m-10 " style={{width:"70%"}}>
            <div className="footer-1 flex flex-col gap-4 m-auto mt-2">
                <h1 className='text-4xl font-semibold '>HOLTEL FT</h1>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat earum, odio assumenda dolore nam!</p>
                <ul className='flex gap-2'>
                    <li><a href=""><FaFacebook className='text-4xl scale-100 hover:scale-75 hover:text-lime-700 transition-all duration-700' /></a></li>
                    <li><a href=""><FaInstagram className='text-4xl scale-100 hover:scale-75 hover:text-lime-700 transition-all duration-700' /></a></li>
                    <li><a href=""><FaYoutube className='text-4xl scale-100 hover:scale-75 hover:text-lime-700 transition-all duration-700' /></a></li>
                    <li><a href=""><FaTwitter className='text-4xl scale-100 hover:scale-75 hover:text-lime-700 transition-all duration-700' /></a></li>
                    <li><a href=""><FaTelegram className='text-4xl scale-100 hover:scale-75 hover:text-lime-700 transition-all duration-700'  /></a></li>
                </ul>
                <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum dolorum quos, doloremque consequuntur exercitationem.</p>
            </div>
            <div className="w-10  m-0 lg:m-auto ">
                <div className="break w-1 min-h-72 bg-lime-500  m-auto">

                </div>
            </div>
            <div className="footer-2 flex flex-col m-auto gap-4  mt-2 ">
                <h1 className='text-4xl font-semibold '>Footer Infromation</h1>
                <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae repudiandae, illo vitae blanditiis mollitia corrupti.</p>
                <form action="" className='text-nowrap'>
                    <input type="search" name="search" id="" className='border p-3 w-72 lg:w-72 ps-5 rounded-s-full border-none bg-slate-100' placeholder='search..'/>
                    <button type='submit' className='p-3 px-4 rounded-e-full font-semibold bg-lime-500'>search</button>
                </form>
          
                <div className="information-holtel grid grid-cols-3 font-sans">
                    <ul>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">HOME</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">SERVICE</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">PROJECT</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">CONTACT</a></li>
                    </ul>
                    <ul>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">REACT JS</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">PHP</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">Laravel</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">JS</a></li>
                    </ul>
                    <ul>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">STAFF</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">CHEF</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">ADMIN</a></li>
                        <li className='hover:text-lime-400 transition-all duration-300 '><a href="">POLICE</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
