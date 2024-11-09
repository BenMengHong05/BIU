import { Banner } from 'flowbite-react'
import React from 'react'
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';
import Banner4 from '../assets/Banner4.jpg';
import Banner1 from '../assets/Banner5.jpg';


export default function About() {
  return (
    <section id='about' className='min-h-20  flex items-center flex-col justify-center  ' style={{width:"100%"}}>
        <div className="about-title flex items-center justify-center flex-col py-5 bg-yellow-500 w-full">
            <div className="bg-lime-500 w-44 mt-2   min-h-1"></div>
            <div><h1 className='text-3xl font-bold about  cursor-pointer text-amber-950'>About</h1></div>
            <p className='font-medium text-amber-950 mt-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, corrupti nostrum animi dolore accusamus a?</p>
        </div>
        <div className="about-section grid grid-cols-none md:grid-cols-2 w-full" style={{minHeight: "80vh"}}>
            <div className="img-about relative flex justify-center items-center ">
                <img src={Banner1} alt="" className=' about-futter absolute img cursor-pointer'  style={{width:"60%"}} />
            </div>
            <div className="text-about flex items-center  md:items-start justify-center flex-col gap-2">
                <div className="title">
                    <a href="">
                        <h1 className='text-4xl  font-bold'>Holtel Rom</h1>
                    </a>
                </div>
                <div className="description">
                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur rem culpa neque debitis nesciunt assumenda hic? Ipsa unde modi quos, fuga molestias eveniet excepturi totam earum sint placeat quidem.</p>
                </div>
                <div className="btn flex gap-5 mt-5">
                    <a href="" className='p-2 px-4 md:p-3 md:px-4 bg-lime-500 hover:bg-yellow-500 hover:text-white duration-300 font-semibold text-nowrap'>Buy Rom</a>
                    <a href="" className='p-2 px-4 md:p-3 md:px-4 bg-lime-500 hover:bg-yellow-500 hover:text-white duration-300 font-semibold text-nowrap'>View Rom</a>
                </div>
            </div>
        </div>
    </section>
    
  )
}
