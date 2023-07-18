import Image from "next/image";
import Link from "next/link";

const content = {
    boldRewriteUp: 'You Don\'t Have To See The Whole Staircase Just Take The First Step', 
    normalRewriteUp: 'You Don\'t Have To See The Whole Staircase Just Take The First Step', 
}

function RewriteUp__section() {
    return (
        <div className={`p-10 md:w-96 md:relative md:right-10 lg:right-28`}>
            <p className={`font-bold text-2xl text-slate-50 pb-5`}>{content.boldRewriteUp}</p>
            <p className={` text-lg text-slate-400 pb-5 font-semibold`}>{content.normalRewriteUp}</p>
            <div className={``}>
                <Link href={'../signup'}><button className={`bg-green-500 p-2 rounded-md font-semibold text-slate-100`}>Get Stated</button></Link>
                <button className={`bg-slate-50 rounded-md p-2 text-green-400 font-semibold border-green-400 border-2 ml-10`}>Place a call</button>
            </div>
        </div>
    )
}

function IMG() {
    return (
        <>
            <Image 
            src={'/Assets/pexels-tima-miroshnichenko-5702282.jpg'}
            width={300}
            height={300}
            quality={100}
            alt="abc"
            className={`hidden md:inline-block md:relative lg:left-20 md:left-10 md:bottom-10 md:rounded-lg`}
            />
        </>
    )
}

export default function FirstStep() {
    return (
        <section className={` bg-[url(/Assets/5172658.jpg)] `}>
            <div className={`flex`}>
                <IMG />
                <RewriteUp__section />
            </div>
        </section>
    )
}