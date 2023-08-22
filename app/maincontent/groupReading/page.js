import { AiOutlineIssuesClose, HiOutlineChat, BiGroup, BsBook, FaHandsHelping } from '@/app/utils/icons/icons'


function GroupReading() {
    return (
        <section className="dark:bg-slate-900 transition ease-in-out delay-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-around items-center py-4 px-4">
            <div><button className={"bg-green-200 px-2 h-12 lg:w-48 rounded transition delay-100 hover:bg-green-300 font-semibold flex items-center justify-center gap-2 text-[13px] md:text-base"}> <span><AiOutlineIssuesClose /></span> Problem Solving</button></div>
            <div><button className={"bg-green-200 px-2 h-12 md:w-48 rounded transition delay-100 hover:bg-green-300 font-semibold flex items-center justify-evenly gap-2 text-[13px] md:text-base"}> <span><HiOutlineChat /></span> Live Chat</button></div>
            <div><button className={"bg-green-200 px-2 h-12 md:w-48 rounded transition delay-100 hover:bg-green-300 font-semibold flex items-center justify-center gap-2 text-[13px] md:text-base"}> <span>< BiGroup /></span> Group Reading</button></div>
            <div><button className={"bg-green-200 px-2 h-12 md:w-48 rounded transition delay-100 hover:bg-green-300 font-semibold flex items-center justify-center gap-2 text-[13px] md:text-base"}> <span><BsBook /></span> 10k Courses</button></div>
            <div><button className={"bg-green-200 px-2 h-12 w-fit rounded transition delay-100 hover:bg-green-300 font-semibold lg:flex items-center justify-center gap-2 hidden"}> <span><FaHandsHelping /></span> Hands-on-activities</button></div>
        </section>
    )
}

export default function Button() {
    return <GroupReading />
}