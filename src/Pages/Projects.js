import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './project.css';

import img from '../assets/bg3.png'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Projects = () => {
  return (
    <main>
    <div className='component bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${img})` }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination,]}
        className="mySwiper "
      >
        <SwiperSlide><a href="https://yummerscakeph.netlify.app/"><img src={img7} alt="Yummers"  /></a></SwiperSlide>
        <SwiperSlide><a href="https://wd86koderesto.netlify.app/"><img src={img8} alt="KodeResto" /></a></SwiperSlide>
        <SwiperSlide><a href="https://cinezonev1.netlify.app/"><img src={img9} alt="CineZoneV1" /></a></SwiperSlide>
        <SwiperSlide><a href="https://wd86kodeledger.netlify.app/"><img src={img10} alt="KodeLedger"  /></a></SwiperSlide>
        <SwiperSlide><a href="https://kodecamp86.netlify.app/"><img src={img11} alt="KodeCamp"  /></a></SwiperSlide>
        <SwiperSlide><a href="https://wd86kodenews.netlify.app/"><img src={img12} alt="KodeNews"  /></a></SwiperSlide>
        <SwiperSlide><a href="https://cinezonev2.netlify.app/"><img src={img13} alt="CineZonev2"  /></a></SwiperSlide>
      </Swiper>
    </div>
      </main>
  )
}
