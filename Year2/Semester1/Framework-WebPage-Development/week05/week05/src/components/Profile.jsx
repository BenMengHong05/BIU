import React from 'react'
import ProfileImg from '../assets/LogoWebsite.jpg';
import { FaFacebook,FaYoutube ,FaInstagram,FaTwitter } from "react-icons/fa";

export default function Profile() {
  return (
    <section>
        <div className="about-title flex items-center justify-center flex-col py-5 bg-yellow-500 w-full" >
            <div className="bg-lime-500 w-44 mt-2   min-h-1"></div>
            <div><h1 className='text-3xl font-bold about  cursor-pointer text-white'>Profile</h1></div>
            <p className='font-medium text-white mt-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, corrupti nostrum animi dolore accusamus a?</p>
        </div>
        <div className="content-profile grid grid-cols-none md:grid-cols-2  " style={{minHeight: "80vh"}}>
            <div className="text-profile flex items-start m-auto justify-center flex-col  " style={{width:"80%"}}>
                <h1 className='font-bold text-4xl'>Hi I'M BenMengHong</h1>
                <p className='font-semibold text-lg mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, voluptate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum et, totam explicabo iusto ipsam </p>
                <div className="inf flex  w-full   ">
                    <div className="if-me font-medium  text-balance m-0 p-0 ">
                        <h1 className='text-lg font-semibold'>About Me</h1>
                        <ul className='ms-6 '>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">Name:BenMengHong</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">Age:20</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">Sex:M</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">Phone:09838438</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">Email:BMH@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="if-skile font-medium text-balance  ">
                        <h1 className='text-lg font-semibold '>Skile Me</h1>
                        <ul className='ms-6'>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">HTML</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">CSS</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">REACT JS</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">Tailwind</a></li>
                            <li className='hover:text-lime-700 transition-all duration-300 flex items-center gap-2'><div className='w-2 h-1 bg-lime-500'></div><a href="">JS</a></li>
                        </ul>
                    </div>
                </div>
                <p className='font-semibold text-lg '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, voluptate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum et, totam explicabo iusto ipsam </p>
                <div className="btn-profile flex m-auto mt-5 gap-2">
                    <a href="" className='p-3 px-5 rounded-full bg-lime-500 hover:text-white transition-all duration-300 font-semibold'>Show</a>
                    <a href="" className='p-3 px-5 rounded-full bg-lime-500 hover:text-white transition-all duration-300 font-semibold'>Downloand</a>
                </div>
            </div>
            <div className="img-profile flex items-center justify-center">
                <a href="" className='relative  flex items-center  justify-center  w-96'>
                    <img src={ProfileImg} className='w-96  rounded-full profile-img ' alt="admin" />
                    <div className="absolute inset-3   flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700" >
                        <h3 className='text-white absolute  z-50 text-2xl  profile-text  font-medium'>BenMengHong</h3>
                        <ul className='absolute z-50 mt-20  flex gap-3'>
                            <li className='text-yellow-500  hover:scale-125 transition-all duration-300'><a href="" className=' text-2xl '><FaFacebook /></a></li>
                            <li className='text-yellow-500  hover:scale-125 transition-all duration-300'><a href="" className=' text-2xl '><FaYoutube /></a></li>
                            <li className='text-yellow-500  hover:scale-125 transition-all duration-300'><a href="" className=' text-2xl '><FaTwitter /></a></li>
                            <li className='text-yellow-500  hover:scale-125 transition-all duration-300'><a href="" className=' text-2xl '><FaInstagram /></a></li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}
