import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

function All_Swipers() {
    return (
        <section>
            <Splide 
            options={{
                cover: true,
                heightRatio: 0.3,
                autoplay: true,
                interval: 2000,
                focus: "center",
                rewind: true,
                perPage: 3,
                gap   : 8,
                breakpoints : {
                    600: {
                        perPage: 2,
                        heightRatio: 0.5,
                    }
                }
            }}
            aria-label="My Favorite Images">
            <SplideSlide>
                <Image src={'/Assets/popular-courses/pexels-vlada-karpovich-7433882.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>MARKETING</span>
            </SplideSlide>
            <SplideSlide>
                <Image src={'/Assets/popular-courses/pexels-edward-jenner-4033148.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>DESIGN</span>
            </SplideSlide>
            <SplideSlide>
                <Image src={'/Assets/popular-courses/pexels-lukas-577210.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>DATA ANALYSIS</span>
            </SplideSlide>
            <SplideSlide>
                <Image src={'/Assets/popular-courses/pexels-picjumbocom-196646.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>BUSINESS</span>
            </SplideSlide>
            <SplideSlide>
                <Image src={'/Assets/popular-courses/pexels-tima-miroshnichenko-5380643.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>ETHICAL HARKING</span>
            </SplideSlide>
            <SplideSlide>
                <Image src={'/Assets/popular-courses/pexels-andrea-piacquadio-755050.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>DESIGN</span>
            </SplideSlide>
            <SplideSlide>
                <Image src={'/Assets/IMG_20230610_123949.jpg'} height={'200'} width={'200'} quality={100} alt="Image 1"/>
                <span className={`p-2 bg-green-200 m-2 rounded-md font-semibold`}>DESIGN</span>
            </SplideSlide>
            </Splide>
        </section>
    )
}

export default function AllSwiperSlides() {
    return (
        <All_Swipers />
    )
}