"use client"

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'

function All_Swipers() {
    return (
        <section className=" p-10">
            <h1 className="font-semibold font-sans pb-4">Choose Favourite Course Form Top Cartegories</h1>
            <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            navigation
            a11y={true}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
                // 700px and up shows 2 slides
                200: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 2
                },
                750: {
                    slidesPerView: 3
                },
                // 1200px and up shows 3 slides
                700: {
                    slidesPerView: 2
                }
            }}
            >
                <SwiperSlide>
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-vlada-karpovich-7433882.jpg'} height={'200'} width={'800'} quality={100} alt="Image 1"/>
                    <span className={`absolute top-1 text-xs bg-green-400 rounded p-1 left-1 font-semibold`}>MARKETING</span>
                </SwiperSlide>
                <SwiperSlide>
                <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-edward-jenner-4033148.jpg'} height={'200'} width={'800'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 text-xs bg-green-400 rounded p-1 left-1 font-semibold`}>DESIGN</span>
                </SwiperSlide>
                <SwiperSlide>
                <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-lukas-577210.jpg'} height={'200'} width={'800'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 text-xs bg-green-400 rounded p-1 left-1 font-semibold`}>DATA ANALYSIS</span>
                </SwiperSlide>
                <SwiperSlide>
                <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-picjumbocom-196646.jpg'} height={'200'} width={'800'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 text-xs bg-green-400 rounded p-1 left-1 font-semibold`}>BUSINESS</span>
                </SwiperSlide>
                <SwiperSlide>
                <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-tima-miroshnichenko-5380643.jpg'} height={'200'} width={'800'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 text-xs bg-green-400 rounded p-1 left-1 font-semibold`}>ETHICAL HARKING</span>
                </SwiperSlide>
                <SwiperSlide>
                <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-andrea-piacquadio-755050.jpg'} height={'200'} width={'800'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 text-xs bg-green-400 rounded p-1 left-1 font-semibold`}>DESIGN</span>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default function AllSwiperSlides() {
    return (
        <All_Swipers />
    )
}