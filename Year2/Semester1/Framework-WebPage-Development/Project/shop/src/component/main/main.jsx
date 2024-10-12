import React from 'react'
import Hero from '../../assets/iamge/hero.jpg';



export default function main() {
  return (
    <main className='bg-black m-0 p-0'>
        <section className='hero grid   lg:grid-cols-2 grid-rows-1 h-screen' >
            <div className=' flex flex-col items-center  justify-center'>
                <h1 className=' text-3xl sm:text-5xl  font-sans font-bold  text-white  text-center w-full'>SHOP</h1>
                <div className="btn flex  gap-2 items-center justify-center mt-2  w-full">
                    <a href=""><button type='submit' className='p-3 px-8 rounded-3xl bg-slate-900 text-white'>Buy</button></a>
                    <a href=""><button type='submit' className='p-3 px-8 rounded-3xl bg-slate-900 text-white'>Sell</button></a>
                </div>
                <p className=' font-medium text-white text-lg mt-2 text-center w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, quidem.</p>
            </div>
            <div className=' bg-red-400 ' >
                <figure className='flex items-center justify-center '>
                    <img src={Hero}   alt="Hero" />
                </figure>
            </div>  
        </section>
        <section className='h-screen '>
            jfj
            
        </section>
        <section>
            

        </section>
    </main>
  )
}
