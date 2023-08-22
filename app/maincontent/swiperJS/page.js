"use client"

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'

function All_Swipers() {
    return (
        <section className=" px-8 dark:bg-slate-900 transition ease-in-out delay-100 dark:text-slate-100 py-4">
            <div className="flex gap-3 justify-between pb-4"><h1 className="font-bold text-[15px] font-sans lg:text-3xl">Choose Favourite Course Form Top Cartegories</h1> <Link href="" className="text-xs mobile:text-base">See all</Link></div>
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
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-vlada-karpovich-7433882.jpg'} height={'200'} width={'400'} quality={100} alt="Image 1"/>
                    <span className={`absolute top-1 flex items-center text-xs bg-green-600 rounded h-6 px-4 text-center left-1 font-semibold delay-300 dark:bg-green-500`}>MARKETING</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-edward-jenner-4033148.jpg'} height={'200'} width={'400'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 flex items-center text-xs bg-green-600 rounded h-6 px-4 text-center left-1 font-semibold transition delay-300 dark:bg-green-500`}>DESIGN</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-lukas-577210.jpg'} height={'200'} width={'400'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 flex items-center text-xs bg-green-600 rounded h-6 px-4 text-center left-1 font-semibold transition delay-300 dark:bg-green-500`}>DATA ANALYSIS</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-picjumbocom-196646.jpg'} height={'200'} width={'400'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 flex items-center text-xs bg-green-600 dark:bg h-6 px-4 text-center-n-500 rounded left-1 font-semibold transition delay-300`}>BUSINESS</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-tima-miroshnichenko-5380643.jpg'} height={'200'} width={'400'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 flex items-center text-xs bg-green-600 rounded h-6 px-4 text-center left-1 dark:bg-green-500 font-semibold transition delay-300`}>ETHICAL HARKING</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className=" w-96 relative rounded-md" src={'/Assets/popular-courses/pexels-andrea-piacquadio-755050.jpg'} height={'200'} width={'400'} quality={100} alt="Image 1"/>
                        <span className={`absolute top-1 flex items-center text-xs bg-green-600 rounded h-6 px-4 text-center left-1 dark:bg-green-500 font-semibold transition delay-300`}>DESIGN</span>
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