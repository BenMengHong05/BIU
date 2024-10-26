import React from 'react'

const Main = () => {
  return (
    <main>
        <section className='h-screen  flex justify-center items-center'>
            <div className="content-home grid grid-cols-2  ">
                <div className="text-home flex flex-col items-center justify-center ">
                    <h1 className='text-5xl font-bold'>SHOP OF PRODUCT</h1>
                    <p className='text-lg font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore?</p>
                    <div className="btn flex gap-4">
                        <a href="/" className='p-2 px-8 bg-slate-700 rounded-md'>BUY</a>
                        <a href="/" className='p-2 px-5 bg-slate-700 rounded-md'>SELL</a>
                    </div>
                </div>
                <div className="image-home">
                    <figure>
                        <img src="https://via.placeholder.com/800x600" alt="Placeholder" />
                    </figure>
                </div>
            </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </main>
  )
}

export default Main