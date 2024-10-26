import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
         <footer style={{ backgroundColor: "#393e46" }} >
             <div className=' grid grid-rows-2 md:grid-cols-2'>
                 <div className=' px-2 flex justify-start py-2  md:justify-center gap-10' style={{ color: "#f7f7f7" }}>
                     <a href="" >
                         <h1 className='text-2xl font-mono font-bold' style={{ color: "#f7f7f7" }}>Menu Of Shop</h1>
                     </a>
                     <div className=''>
                         <div className='menu flex gap-2 text-sm lg:text-lg' >
                             <ul >
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Develoment</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Computer</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Desingner</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Programing</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">IT Support</a></li>
                             </ul>
                             <ul>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">PHP</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">JavaScript</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">HTML</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">CSS</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">JAVA</a></li>
                             </ul>
                             <ul>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">React Js</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Laravel</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Tailwind Css</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Bootstrap 5</a></li>
                                 <li className='hover:underline hover:text-yellow-400'><a href="">Next Js</a></li>
                             </ul>
                         </div>
                         <ul className='flex mt-2 w-full  gap-6 text-xl justify-center' style={{ color: "#f7f7f7" }}>
                             <li className=' bg-slate-500 hover:bg-slate-800 hover:text-yellow-400 duration-300 cursor-pointer p-3  px-3 rounded-full'><a href=""><FaFacebook /></a></li>
                             <li className=' bg-slate-500 hover:bg-slate-800 hover:text-yellow-400 duration-300 cursor-pointer p-3  px-3 rounded-full' ><a href=""><FaTwitter /></a></li>
                             <li className=' bg-slate-500 hover:bg-slate-800 hover:text-yellow-400 duration-300 cursor-pointer p-3  px-3 rounded-full' ><a href=""><FaInstagram /></a></li>
                             <li className=' bg-slate-500 hover:bg-slate-800 hover:text-yellow-400 duration-300 cursor-pointer p-3  px-3 rounded-full' ><a href=""><FaYoutube /></a></li>
                         </ul>
                     </div>
                 </div>
                 <div className=' px-2 py-4'>
                     <div className="header-footer grid grid-rows-2 2xl:grid-cols-2  items-center justify-between   ">
                         <div className='flex items-center justify-start'>
                             <form action="#" method='POST' className='flex items-center justify-start gap-2'>
                                 <input type="text" name="search" id="search" className='p-2 px-6 ps-4 sm:px-8 w-64 outline-none rounded-full' placeholder='Search' required />
                                 <button type='submit' className='p-2 px-4 rounded-full' style={{ backgroundColor: "#f8b500" }}>Search</button>
                             </form>
                         </div>
                         <div className='flex  '>
                             <a href="" >
                                 <h1 className='text-2xl font-mono font-bold' style={{ color: "#f7f7f7" }}>SHOP Computer</h1>
                             </a>
                         </div>
                     </div>
                     <p className='text-white font-semibold '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quas dignissimos, fugit dolore illum unde numquam esse ea vel accusamus quidem inventore quae rerum. Inventore consequatur provident possimus alias ducimus.
                         Rerum, consequatur suscipit doloremque perferendis, nulla necessitatibus, dolor repellat voluptatum beatae delectus similique obcaecati adipisci qui dignissimos repellendus odit quibusdam itaque molestiae quae eos corrupti dicta voluptatibus debitis quam! Accusantium?</p>
                 </div>
             </div>
             <div className='min-h-20 flex flex-col items-center justify-center' style={{ backgroundColor: "#f8b500" }}>
                 <p className='text-center text-black text-sm py-2'>&copy; 2022 Shop Computer. All Rights Reserved.</p>
                 <h1 className='text-sm'>Create By @Ben MengHong</h1>
             </div>
         </footer >
    )
}
