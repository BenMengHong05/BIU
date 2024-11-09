import React from 'react'
import { BiShowAlt } from "react-icons/bi";
import bglogin from '../assets/bglogin.jpg';
import Contactimg from '../assets/contactimg.png';

export default function Login() {
  return (
    
        <div className="contact-project flex items-center justify-center  " style={{ minHeight:"100vh", backgroundImage: `url(${bglogin})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="write-if-contact p-16   rounded-2xl items-center justify-center" >
                <h1 className=' text-4xl font-bold font-mono text-center'>Login</h1>
                <form action="#" method='POST' className='flex flex-col gap-1 mt-4  relative' style={{width:"39vh"}}>
                    <label htmlFor="email" className=' font-semibold '>Email</label>
                    <input type="email" className='p-3 rounded-xl ps-5 border border-none' name="email" placeholder='email' required />
                    <label htmlFor="password" className=' font-semibold '>Password</label>
                    <input type="password" className='p-3 rounded-xl ps-5 border border-none' placeholder='password'  id='getpd' required />
                    <BiShowAlt className='text-2xl absolute  cursor-pointer ' onClick={showpd}  style={{marginTop:"13.4vh",marginLeft: "34vh"}} />
                    <div className='flex items-center  justify-between mt-3'>
                      <div className='gap-2 flex items-center'>
                        <input type="checkbox" className='cursor-pointer' name="checkbox" id="" />
                        <a href="">RememberMe</a>
                      </div>
                      <div>
                        <a href="">ForgetPassword</a>
                      </div>
                    </div>
                    <button type='submit' className='p-3 rounded-xl px-10 bg-lime-500  font-medium mt-3'>Submit</button>
                    <span className='text-center mt-10 '>do you not have account <a href="/register" className='underline'>register</a>?</span>
                </form>
            </div>
        </div>

  )
}
