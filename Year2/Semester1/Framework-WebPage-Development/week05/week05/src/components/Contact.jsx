import React from 'react'
import { BiShowAlt } from "react-icons/bi";
import bgcontact from '../assets/contact.jpg';
import Product1 from '../assets/product4.jpg';



export default function Contact() {
  return (
    <section>
        <div className="about-title flex items-center justify-center flex-col py-5 bg-yellow-500 w-full" >
            <div className="bg-lime-500 w-44 mt-2   min-h-1"></div>
            <div><h1 className='text-3xl font-bold about  cursor-pointer text-white'>Contact</h1></div>
            <p className='font-medium text-white mt-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, corrupti nostrum animi dolore accusamus a?</p>
        </div>
        <div className="contact-project flex items-center justify-center  " style={{ minHeight:"90vh", backgroundImage: `url(${bgcontact})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="write-if-contact  grid grid-cols-none md:grid-cols-2 gap-10  rounded-2xl items-center justify-center" style={{width:"60%",minHeight:"70vh"}}>
             <div className="logo">
               <img src={Product1} alt="logo" className='rounded-s-2xl' style={{width:"100%",minHeight:"70vh"}} />
             </div>
             <div className="data flex flex-col items-center justify-center">
              <h1 className='text-3xl font-serif'>INFORMATION USER</h1>
              <form action="#" method='POST' className='flex flex-col gap-1 w-96 relative mt-5'>
                <label htmlFor="">Username</label>
                <input type="text" name="name" id="" className='p-2 border border-none rounded-lg' required />
                <label htmlFor="">Rom</label>
                <input type="text" name="rom" id="" className='p-2 border border-none rounded-lg' required />
                <label htmlFor="">Date</label>
                <input type="date" name="data" id="" className='p-2 border border-none rounded-lg' required />
                <label htmlFor="">Comment</label>
                <textarea name="textareact" id="" className=' border border-none rounded-lg'  rows={5} color='20'></textarea>    
                <button type='submit' className=' text-white p-2 mt-4 rounded-lg bg-lime-500 '>Submit</button>            
                
              </form>
             </div>
          </div>
        </div>
    </section>
  )
}
