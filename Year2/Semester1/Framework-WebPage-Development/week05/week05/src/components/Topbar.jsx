import React from 'react'
import Logo from '../assets/LogoWebsite.jpg';



export default function Topbar(props) {
  return (
    <div className="Topbar">
      <div className='min-h-10  bg-slate-500  items-center  grid grid-cols-2 '>
          <h1 className='text-3xl font-mono font-bold ms-5 '>{props.title}</h1>
          <ul className='menu font-mono flex justify-end gap-4'>
            <li><a href="">Email:{props.email}</a></li>
            <li><a href="">Phone:{props.phone}</a></li>
          </ul>
      </div>
      <div className="banner">
        {/* <img src={Banner} alt="" className='w-full' style={{maxWidth: "auto", height: "40vh",objectFit: "cover"}} /> */}
      </div>
    </div>
  )
}
