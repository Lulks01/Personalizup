'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import 'swiper/css/pagination';


import './abovebanners.css'
import { EconomicIcon, EditIcon, SecurityIcon } from "../../../public/Icons";

export default function AboveBanners() {
  return (
    <>
      <Swiper className="abovebanner" 
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}>
        <SwiperSlide>
          <SecurityIcon className='securityicon' id='icon'/>
          <div className="contentswiper" >
            <h1>Segurança</h1>
            <p>Compra 100% segura</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <EconomicIcon className='economicicon' id='icon'/>
          <div className="contentswiper">
            <h1>Economia</h1>
            <p>Preços que cabem no bolso</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <EditIcon className='editicon' id='icon'/>
          <div className="contentswiper">
            <h1>Detalhes</h1>
            <p>Pedidos customizados</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
