'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import './products.css';

import Image from 'next/image'

import porcelain from '../../../public/images/porcelain.png'

export default function Products() {
  
  return (
    <div className='productscarrousel'>
      <h1 id='title'>Canecas</h1>
      <Swiper
        slidesPerView={'auto'}
        
        className="ProductsSwiper"
        >
        <SwiperSlide id='product'>
          <Image src={porcelain} alt='porcelana' id='productphoto'/>
          <h2 id='producttitle'> Caneca de porcelana </h2>
          <p id='productprice'>A partir de <span id='value'>R$35,00</span></p>
          <button className='button1'>Ver mais</button>
          <button className='button2'>Compre pelo Whatsapp</button>
        </SwiperSlide>
        
        
        
      </Swiper>
    </div>
  )
}

