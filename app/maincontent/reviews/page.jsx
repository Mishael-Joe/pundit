"use client"

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack }  from '@/app/utils/icons/icons'

const students = [
    {
        name: 'Mohh Jumah',
        role: 'Senior Developer',
        commendation: 'A person who never made a mistake never tried anything new and Procrastination makes easy things hard and hard things harder.',
        useser__img: <Image src={'/Assets/professionals/woman-657753_1280.jpg'} width={300} height={30} alt="" className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" quality={100} />
        
    },
    {
        name: 'Mishael Joe',
        role: 'Senior Developer',
        commendation: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. Teachers can open the door, but you must enter it yourself.',
        useser__img: <Image src={'/Assets/professionals/medium-shot-male-flight-attendant-posing.jpg'} width={300} height={30} alt="" className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" quality={100} />
    },
    {
        name: 'Josephin Nora',
        role: 'Senior Developer',
        commendation: 'The beautiful thing about learning is that no one can take it away from you. Don’t let what you cannot do interfere with what you can do.',
        useser__img: <Image src={'/Assets/professionals/confident-business-woman-portrait-smiling-face.jpg'} width={300} height={30} alt="" className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" quality={100} />
    },
    {
        name: 'Ema Watson',
        role: 'Marketing Manager at Stech',
        commendation: 'A person who never made a mistake never tried anything new. You don’t have to be great to start, but you have to start to be great.',
        useser__img: <Image src={'/Assets/professionals/professional-girl.png'} width={300} height={30} alt="" className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" quality={100} />
    },
    {
        name: 'Lois Luise',
        role: 'Senior Developer',
        commendation: 'The way to get started is to quit talking and begin doing. I think it’s possible for ordinary people to choose to be extraordinary.',
        useser__img: <Image src={'/Assets/professionals/smile-2072907_1280.jpg'} width={300} height={30} alt="" className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" quality={100} />
    }
]

function Reviews() {

    const [index, setIndex] = useState(0);
    const hasIndex = index < students.length - 1;

    function handlePrevClick() {
        if (index === 0) {
            setIndex(index + students.length - 1)
        } else {
            setIndex(index - 1);
        }
    
    }
    function handleNextClick() {
        if (hasIndex) {
            setIndex(index + 1)
        } else {
            setIndex(0);
        }
    }

    let students_review = students[index]

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <p className="text-xl font-medium text-green-500 ">Testimonials</p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What Our Student says
                </h1>

                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-green-600 -z-10 md:h-96 rounded-2xl"></div>
                    
                    <div className="w-full p-6 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        {students_review.useser__img}
                        
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">{students_review.name}</p>
                                <p className="text-blue-200 ">{students_review.role}</p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> {students_review.commendation}</p>
                            
                            <div className="flex items-center justify-between mt-6 md:justify-start">
                                <button title="left arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-green-400" onClick={handlePrevClick}>
                                    <IoIosArrowBack />
                                </button>

                                <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-green-400" onClick={handleNextClick}>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Reviews