"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

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
        {windowWidth >= 600 && (<h1 className={`font-bold text-2xl`}>REVIEWS</h1>)}
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
        <section className={"flex flex-col pt-10"}>
            <Reviews />
            <div className={`flex pt-5 sm:flex-row flex-col`}>
                <What_students_says />
                <div className={"ps-5 p-4 w-52 shadow-md rounded-md"}>
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