import React from 'react'
import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';

export default function Product() {
  return (
    <section id='about' className='min-h-20  flex items-center flex-col justify-center  ' style={{width:"100%",minHeight:"20vh"}}>
        <div className="about-title flex items-center justify-center flex-col py-5 bg-yellow-500 w-full">
            <div className="bg-lime-500 w-44 mt-2   min-h-1"></div>
            <div><h1 className='text-3xl font-bold about  cursor-pointer text-white'>New Product</h1></div>
            <p className='font-medium text-white mt-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, corrupti nostrum animi dolore accusamus a?</p>
        </div>
        <div className="product-content flex items-center justify-center  " style={{width:"100%",minHeight:"80vh"}}>
            <div className=" grid grid-cols-none gap-5  md:grid-cols-2 xl:grid-cols-4  " style={{width:"100%"}}>
                <div className="product m-10  relative  flex items-center  justify-center cursor-pointer hover:scale-105 duration-300  " style={{minHeight:"35vh"}}>
                  <img src={Product1} alt="product1" className='rounded-2xl' style={{minHeight:"35vh"}}  />
                  <div className="text-show absolute flex items-center justify-center  inset-0 opacity-0 hover:opacity-100 transition-all duration-700 ">
                    <a href=""><h1 className='text-2xl font-bold  text-white'>SHOW</h1></a>
                  </div>
                </div>
                <div className="product m-10  relative  flex items-center  justify-center cursor-pointer hover:scale-105 duration-300  " style={{minHeight:"35vh"}}>
                  <img src={Product2} alt="product1" className='rounded-2xl' style={{minHeight:"35vh"}}  />
                  <div className="text-show absolute flex items-center justify-center  inset-0 opacity-0 hover:opacity-100 transition-all duration-700 ">
                    <a href=""><h1 className='text-2xl font-bold  text-white'>SHOW</h1></a>
                  </div>
                </div>
                <div className="product m-10  relative  flex items-center  justify-center cursor-pointer hover:scale-105 duration-300  " style={{minHeight:"35vh"}}>
                  <img src={Product3} alt="product1" className='rounded-2xl' style={{minHeight:"35vh"}}  />
                  <div className="text-show absolute flex items-center justify-center  inset-0 opacity-0 hover:opacity-100 transition-all duration-700 ">
                    <a href=""><h1 className='text-2xl font-bold  text-white'>SHOW</h1></a>
                  </div>
                </div>
                <div className="product m-10  relative  flex items-center  justify-center cursor-pointer hover:scale-105 duration-300  " style={{minHeight:"35vh"}}>
                  <img src={Product4} alt="product1" className='rounded-2xl' style={{minHeight:"35vh"}}  />
                  <div className="text-show absolute flex items-center justify-center  inset-0 opacity-0 hover:opacity-100 transition-all duration-700 ">
                    <a href=""><h1 className='text-2xl font-bold  text-white'>SHOW</h1></a>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
