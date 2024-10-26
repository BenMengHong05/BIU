import React from 'react'
import Hero from '../../asset/image/hero.png';
import '../main/Main.css';
import cardimage from '../../asset/image/hero.png';

export default function Main() {
  return (
    <main >
        <section className='hero'>
            <div className='hero-content'>
                <h1>
                    Hi I'm Developer
                </h1>
                <p>
                    I'm a software engineer with a passion for technology and design. I have worked  <br/> projects ranging from small websites to complex software applications.
                </p>
            </div>
            <div className='hero-image'>
                <picture>
                    <img src={Hero} alt="Hero" />
                </picture>
            </div>
        </section>
        <section className='product-card'>
            <div className='card'>
                <img src={cardimage}  alt='' />
                <h1>Card</h1>
                <p>lorem this is a card  <br /> for Product shop </p>
            </div>
            <div className='card'>
                <img src={cardimage} alt='' />
                <h1>Card</h1>
                <p>lorem this is a card <br /> for Product shop</p>
            </div>
            <div className='card'>
                <img src={cardimage} alt='' />
                <h1>Card</h1>
                <p>lorem this is a card <br /> for Product shop</p>
            </div>
        </section>
    </main>
  )
}
