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
  const banners = [
    {
    img: img,
    alt: "imgmock1",
    key: (Math.random()*5),
  },
  {
    img: img,
    alt: "imgmock2",
    key: (Math.random()*5),
  },
  {
    img: img,
    alt: "imgmock3",
    key: (Math.random()*5),
  },
  {
    img: img,
    alt: "imgmock4",
    key: (Math.random()*5),
  },
]

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
        {
          banners.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.img} alt={item.alt}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
};
