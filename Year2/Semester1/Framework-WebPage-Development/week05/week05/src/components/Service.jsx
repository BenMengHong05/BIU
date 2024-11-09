import React from 'react'
import { MdFastfood } from "react-icons/md";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { FaHospitalSymbol } from "react-icons/fa";

export default function Service() {
  return (
    <section id='service' className='min-h-20  flex items-center flex-col justify-center  ' style={{width:"100%",minHeight:"20vh"}}>
        <div className="service-title flex items-center justify-center flex-col py-5 bg-yellow-500 w-full">
            <div className="bg-lime-500 w-44 mt-2   min-h-1"></div>
            <div><h1 className='text-3xl font-bold service  cursor-pointer text-white'>Service</h1></div>
            <p className='font-medium text-white mt-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, corrupti nostrum animi dolore accusamus a?</p>
        </div>
        <div className="product-content flex items-center justify-center " style={{width:"100%",minHeight:"80vh"}}>
            <div className=" grid grid-cols-none gap-5  md:grid-cols-2 xl:grid-cols-3   " style={{width:"80%"}}>
                <div className="product m-10 bg-lime-400 flex-col  transition-all duration-700  text-center hover:opacity-60   cursor-pointer   flex items-center justify-center" style={{minHeight:"35vh"}}>
                    <MdFastfood className='text-5xl' />
                    <h2 className='font-bold  text-2xl mt-2'>Foods</h2>
                    <p className='font-medium'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus, reprehenderit.</p>
                </div>
                <div className="product m-10 bg-lime-400 flex-col  text-center cursor-pointer hover:opacity-80 duration-700 flex items-center justify-center" style={{minHeight:"35vh"}}>
                    <FaHospitalSymbol className='text-5xl' />
                    <h2 className='font-bold  text-2xl mt-2'>Hospital</h2>
                    <p className='font-medium'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus, reprehenderit.</p>
                </div>
                <div className="product m-10 bg-lime-400 flex-col  text-center cursor-pointer hover:opacity-80 duration-700  flex items-center justify-center" style={{minHeight:"35vh"}}>
                    <RiPoliceBadgeFill className='text-5xl' />
                    <h2 className='font-bold  text-2xl mt-2 '>Police</h2>
                    <p className='font-medium'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus, reprehenderit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
