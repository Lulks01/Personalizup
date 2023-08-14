'use client';

import './banners.css';
import Image from 'next/image'
import img from './img1.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import React, { useRef, useState } from 'react';

export default function Banners() {
  return (
    <div>
      {/* Swiper configs */}
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination]}
        speed={1000}
        loop={true}
        pagination={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        >
        
        <SwiperSlide>
          <Image src={img} alt='imagem' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt='imagem'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt='imagem'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt='imagem'/>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
};
