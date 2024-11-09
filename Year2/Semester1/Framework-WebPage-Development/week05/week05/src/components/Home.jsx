import React from 'react'
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';
import Banner4 from '../assets/Banner4.jpg';
import Banner5 from '../assets/Banner5.jpg';
import BgBanner from '../assets/Background-img.jpg';


export default function Home() {
    return (
        <>
            <section id='home' className='home-page bg-slate-400' style={{minHeight:"100vh",backgroundImage: `url(${BgBanner}`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="content grid grid-cols-none md:grid-cols-2 " >
                    <div className="text-hotel gap-3 flex items-center md:items-start  justify-end  flex-col ml-10  " style={{minHeight:"87vh"}}>
                        <h1 className='text-4xl mt-52  text-white font-bold'>HELLO COME TO HOME </h1>
                        <p className='font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore  doloribus, <br /> distinctio  voluptas id ullam quasi cum commodi maxime assumenda cumque </p>
                        <div className="btn flex gap-4 mt-5 mb-16 ">
                            <a href="" className='p-2 px-3 sm:p-3 rounded-xl sm:px-4 bg-lime-500 text-nowrap  font-medium hover:text-white duration-300'>View Home</a>
                            <a href="" className='p-2 px-3 sm:p-3 rounded-xl sm:px-4 bg-lime-500 text-nowrap  font-medium hover:text-white duration-300'>Buy Home</a>
                        </div>
                    </div>
                    <div className="image-hotel flex  items-center justify-center flex-col  mt-32 " >
                        <div className=" w-full flex justify-center md:justify-end ">
                            <img src={Banner1} alt="" className='w-80 mt-5 rounded-3xl p-0 m-0 lg:mr-10 mr-0 img cursor-pointer'  />
                        </div>
                        <div className=" w-full flex justify-center md:justify-center">
                            <img src={Banner2} alt="" className='w-80 mt-5 rounded-3xl  p-0 m-0 img cursor-pointer' />
                        </div>
                        <div className=" w-full flex justify-center md:justify-start">
                            <img src={Banner3} alt="" className='w-80 mt-5  rounded-3xl mb-10  p-0 m-0 lg:ml-10 ml-0 img cursor-pointer' />
                        </div> 
                    </div>          
                </div>
            </section> 
        </>
    )
}
