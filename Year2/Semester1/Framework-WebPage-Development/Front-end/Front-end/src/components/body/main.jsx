import { useState } from 'react';
import React from 'react';
import Bghero1 from '../../assets/image/hero1.jpg';
import Bghero2 from '../../assets/image/hero2.jpg';
import Bghero3 from '../../assets/image/hero3.jpg';
import imagecard1 from '../../assets/image/card-1.png';
import imagecard2 from '../../assets/image/card-2.png';
import imagecard3 from '../../assets/image/card-3.png';
import imagecard4 from '../../assets/image/card-4.png';
import imagecard5 from '../../assets/image/card-5.png';
import imagecard6 from '../../assets/image/card-6.png';
import imagecard7 from '../../assets/image/card-7.png';
import { Card, CardTitle } from 'react-bootstrap';
import { IoMdStarOutline } from "react-icons/io";
import imgcontact from "../../assets/image/image-contact.png";


import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import aboutimage from '../../assets/image/about-image.png';
const about = {
  title: 'About',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry in the printing and typesetting industry',

  //about-content
  about_title: ' HeadPhones',
  about_description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry in the printing and typesetting industry',
  about_menu: {
    menu1: '1.Best Headphones',
    menu2: '2.High Quality',
    menu3: '3.Noise Cancellation',
    menu4: '4.Battery Life',
    menu5: '5.Wireless Connectivity',
  }
}
const Conatct = {
  title: 'Conatact',
  description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry in ',
}
const product = {
  title: 'Products',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry in the printing and typesetting industry',

  product_card1: {
    description1: 'lorem Ipsum is simply means that is  simply dummy text of the  ',
    price1: '150$',

    description2: 'lorem Ipsum is simply means that is  simply dummy text of the printing and typesetting industry in the pr  ',
    price2: '90$',

    description3: 'lorem Ipsum is simply means that is  simply dummy text of the printing and typesetting industry in the pr  ',
    price3: '140$',

    description4: 'lorem Ipsum is simply means that is  simply dummy text of the printing and typesetting industry in the pr  ',
    price4: '175$',
  }

}


// color for website react js (#021526) ,(#03346E) ,(#6EACDA) ,(#E2E2B6);




export default function Main() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center ' >
      <section>
        <Carousel data-bs-theme="white"  >
          <Carousel.Item interval={2000}>
            <img className="d-block  img-fluid h-screen w-screen object-cover " src={Bghero1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img className="d-block  img-fluid h-screen w-screen object-cover" src={Bghero2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block  img-fluid h-screen w-screen object-cover" src={Bghero3} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section id='about' className=' w-full  flex items-center justify-center flex-col'  >
        <div className="container-fluid " style={{ backgroundColor: "#2e1065" , minHeight:"15vh"}}>
          <div id='about-title' className="container text-center flex flex-col  py-2 text-white" data-aos="zoom-in">
            <h1 className='text-4xl font-bold  pt-2'>{about.title}</h1>
            <p className='text-lg mt-3 pb-2' style={{ fontFamily: "sans-serif" }}>{about.description}</p>
          </div>
        </div>
        <div className="container-fluid flex items-center justify-center  " style={{ minHeight:"85vh" }}>
          <div id='about-content' className="container flex items-center justify-center min-h-px" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-6">
                <h1 className='text-5xl font-bold' style={{ fontFamily: "sans-serif" }}>{about.about_title}</h1>
                <p className='text-xl mt-2' style={{ fontFamily: "sans-serif" }}>{about.description}</p>
                <ul className='ms-3 mt-2 text-lg' style={{ fontFamily: "sans-serif" }}>
                  <li><a href="" className='hover:underline hover:text-yellow-400  '>{about.about_menu.menu1}</a></li>
                  <li><a href="" className='hover:underline hover:text-yellow-400  '>{about.about_menu.menu2}</a></li>
                  <li><a href="" className='hover:underline hover:text-yellow-400  '>{about.about_menu.menu3}</a></li>
                  <li><a href="" className='hover:underline hover:text-yellow-400  '>{about.about_menu.menu4}</a></li>
                  <li><a href="" className='hover:underline hover:text-yellow-400  '>{about.about_menu.menu5}</a></li>
                </ul>
                <p className='text-xl mt-2' style={{ fontFamily: "sans-serif" }}>{about.description}</p>
                <div className="btn-about gap-4 mt-3 ms-3 flex">
                  <a href="" className='btn btn-warning text-nowrap py-2 px-6 font-bold' style={{ fontFamily: "sans-serif" }} >View</a>
                  <a href="" className='btn btn-warning text-nowrap py-2 px-6 font-bold' style={{ fontFamily: "sans-serif" }}>Price</a>
                </div>
              </div>
              <div className="col-lg-6">
                <article>
                  <img src={aboutimage} className='img-fluid object-cover' alt="" />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='product' className=' w-full  flex items-center justify-center flex-col'  >
        <div className="container-fluid " style={{ backgroundColor: "#2e1065", minHeight: "15vh" }}>
          <div id='product-title' className="container text-center flex flex-col  py-2 text-white" data-aos="zoom-in">
            <h1 className='text-4xl font-bold  pt-2'>{product.title}</h1>
            <p className='text-lg mt-3 pb-2' style={{ fontFamily: "sans-serif" }}>{product.description}</p>
          </div>
        </div>
         <div className="container-fluid flex items-center justify-center  " style={{ minHeight: "85vh" }}>
          <div id='product-content' className="container gap-4 flex flex-col items-center justify-center min-h-px">
            <div className="row flex items-center  justify-start sm:justify-center  mt-4 "  data-aos="zoom-in">
            <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={aboutimage} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard1} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard2} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard3} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row flex items-center justify-start sm:justify-center "  data-aos="zoom-in">
            <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard4} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard5} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard6} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className=" col-xl-3 col-lg-4  py-5  col-md-6 col-sm-8 col-12">
                <Card className='rounded-xl mx-4 py-3 p-2'style={{backgroundColor:"#9333ea"}} >
                  <Card.Title className='w-full  '>
                    <picture>
                      <img src={imagecard7} className='img-fluid object-contain   ' alt="" style={{width:"100%",height:"25vh"}} />
                    </picture>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className='text-md  font-semibold' style={{ fontFamily: "unset",color:"#ffffff" }}>{product.product_card1.description1}</p>
                    </Card.Text>
                    <Card.Text>
                      <ul className='flex text-xl' >
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href="" className='text-yellow-500 '><IoMdStarOutline /></a></li>
                        <li><a href=""><IoMdStarOutline /></a></li>
                      </ul>
                    </Card.Text>
                    <Card.Text>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-2xl text-white font-bold'>{product.product_card1.price1}</h1>
                        <a href="" className='btn btn-warning'>Add Card</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className=' w-full  flex items-center justify-center flex-col'  >
        <div className="container-fluid " style={{ backgroundColor: "#2e1065" , minHeight:"15vh",fontFamily:"sans-serif"}}>
          <div id='about-title' className="container text-center flex flex-col  py-2 text-white" data-aos="zoom-in">
            <h1 className='text-5xl font-bold pt-2'>{Conatct.title}</h1>
            <p className='text-lg mt-3 pb-2' >{Conatct.description}</p>
          </div>
        </div>
        <div className="container-fluid flex items-center justify-center  " style={{ minHeight:"85vh",backgroundColor:"#f59e0b" }}>
          <div id='about-content' className="container w-full  flex items-center justify-center min-h-px" data-aos="zoom-in">
            <div className="row flex items-center w-full">
            <h1 className='text-5xl font-bold text-center' >Contact</h1>
              <div className="col-lg-6">
                <picture>
                  <img src={imgcontact} className='img-fluid' alt="" />
                </picture>
              </div>
              <div className="col-lg-6  " style={{fontFamily:"sans-serif"}}>
                <form action="#" method='POST'>
                  <div className="mb-3 ">
                    <label for="name" className="form-label text-xl">Name</label>
                    <input type="text" className="form-control" id="name" name='name' required />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label text-xl">Email</label>
                    <input type="email" className="form-control" id="email" name='email' required />
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label text-xl">Message</label>
                    <textarea className="form-control" id="message" name='message' rows="3" required></textarea>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
