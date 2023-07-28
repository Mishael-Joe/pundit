"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

function GreaterThan(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" {...props}><path d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z" /></svg>;
}

function LessThan(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" {...props}><path d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z" /></svg>;
}

const students = [
    {
        name: 'Mohh Jumah',
        role: 'Senior Developer',
        commendation: 'Lorem jvn cskjfnmv dnoejsjdcjifd;skjmvmkd ;es;ndjk,sdmcirkememsk',
        useser__img: <Image src={'/image-victor.jpg'} width={300} height={30} alt="" className=" rounded-full w-12" quality={100} />
        
    },
    {
        name: 'Mishael Joe',
        role: 'Senior Developer',
        commendation: 'Lorem jvn cskjfnmv dnoejsjdcjifd;skjmvmkd ;es;ndjk,sdmcirkememsk',
        useser__img: <Image src={'/image-victor.jpg'} width={300} height={30} alt="" className=" rounded-full w-12" quality={100} />
    },
    {
        name: 'Josephin Nora',
        role: 'Senior Developer',
        commendation: 'Lorem jvn cskjfnmv dnoejsjdcjifd;skjmvmkd ;es;ndjk,sdmcirkememsk',
        useser__img: <Image src={'/image-victor.jpg'} width={300} height={30} alt="" className=" rounded-full w-12" quality={100} />
    },
    {
        name: 'Lois Luise',
        role: 'Senior Developer',
        commendation: 'Lorem jvn cskjfnmv dnoejsjdcjifd;skjmvmkd ;es;ndjk,sdmcirkememsk',
        useser__img: <Image src={'/image-victor.jpg'} width={300} height={30} alt="" className=" rounded-full w-12" quality={100} />
    }
]

function What_students_says() {
    return <h1 className={"text-2xl font-semibold ps-1 w-48"} >What Our <span className={"text-green-400 italic"}>Students</span> Say about Us</h1>
}

function Reviews() {
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize()
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        {/* {windowWidth >= 600 && ()} */}
        </>
    );
}

export default function StudentsOppinion() {
    
    const [index, setIndex] = useState(0);
    const [showmore, setShowmore] = useState(false);
    const hasNext = index < students.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        }else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowmore(!showmore);
    }

    let students_oppinion = students[index]

    return (
        <section className={"flex flex-col items-center dark:text-slate-100 dark:bg-[#0c2313fa] py-5"}>
            <h1 className={`font-bold text-2xl`}>REVIEWS</h1>
            <div className={`flex pt-5 sm:flex-row flex-col items-center xs:hidden`}>
                {/* <What_students_says /> */}
                <div className={"ps-5 p-4 w-52 shadow-md rounded-md dark:bg-green-900"}>
                    <button onClick={handleNextClick} className="text-green-400 font-semibold">Next</button>
                    <span className={`flex`}>
                        <span>{students_oppinion.useser__img}</span>
                        <h2 className={"font-semibold text-lg pl-5"}>
                            {students_oppinion.name} <br/> <span className={"text-green-600 italic"}>{students_oppinion.role}</span>
                        </h2>
                    </span>
                    {/* <h3>({index + 1} of {students.length})</h3> */}
                    <button onClick={handleMoreClick}>{showmore ? 'Hide' : 'Show'} details</button>
                    {showmore && <p>{students_oppinion.commendation}</p>}
                </div>
            </div>
        </section>
    )
}