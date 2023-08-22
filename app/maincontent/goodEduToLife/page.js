import Image from "next/image"
import { Group, Book, CgToolbox, AiOutlineFieldTime } from "@/app/utils/icons/icons"

const education = [
    'We Bring The Good Education To Life',
    'let Your Education Do The Walking',
    'free E-book, Videos and Kits',
    'learn at your own pace',
    'Collaborate with different learners around the globe',
    'top instructors around the globe'
]

const uppercase = education.map(item => {
    return item[0].toUpperCase() + item.slice(1)
})

function Container() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row items-center sm:justify-around">
            <div className="basis-1/2 flex justify-center relative">
                <Image className="rounded-md w-[28rem] h-[30rem] object-center object-cover" quality={100} src="/Assets/pexels-christina-morillo-1181672.jpg" width={300} height={200} alt="sdf"/>
                {/* <span className="absolute sm:font-semibold z-10 top-10 p-2 h-20 text-sm bg-slate-200 -left-10 w-28 text-center rounded-md shadow-2xl md:left-5 dark:bg-slate-900 dark:text-slate-100 transition ease-in-out delay-100"><span className=" absolute top-1 text-green-400 text-lg font-semibold">Job</span> Opportunities</span> */}
            </div>
            <div className=" basis-1/2">
                <div className="pb-5 font-semibold md:text-3xl">
                    {uppercase[1]}
                </div>
                <div>
                    <div className="px-4 font-sans md:text-lg md:font-semibold">
                        <div className="flex items-center gap-2 pt-2">
                            <span><> <Book/> </></span>
                            <span className=" text-xl"> {uppercase[2]} </span>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <span><> <AiOutlineFieldTime /> </></span>
                            <span className=" text-xl">{uppercase[3]}</span>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <span><> <CgToolbox /> </></span>
                            <span className=" text-xl"> {uppercase[4]}</span>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <span><Group /></span>
                            <span className=" text-xl">{uppercase[5]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function GoodEducation() {
    return (
        <section>
            <div className="px-8 py-4 dark:bg-gray-900 dark:text-slate-100 transition ease-in-out">
                <div className="pb-5 font-semibold text-lg md:text-2xl delay-300">{uppercase[0]}</div>
                <Container />
            </div>
        </section>
    )
}