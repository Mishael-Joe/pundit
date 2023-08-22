import Image from "next/image";
import Link from "next/link";

const content = {
    boldRewriteUp: 'You Don\'t Have To See The Whole Staircase Just Take The First Step', 
    normalRewriteUp: 'You Don\'t Have To See The Whole Staircase Just Take The First Step', 
}

function IMG() {
    return (
        <>
            <Image 
            src={'/Assets/pexels-tima-miroshnichenko-5702282.jpg'}
            width={200}
            height={200}
            quality={100}
            alt="abc"
            className={`hidden object-cover object-center shadow-md md:h-[25rem] md:w-80 lg:w-[26rem] md:rounded-2xl md:inline-block md:relative md:left-10 md:bottom-10`}
            />
        </>
    )
}

export default function FirstStep() {
    return (
        <section className="bg-[url(/Assets/3551377.jpg)]">
            <div className="px-8 mx-auto m">

                <main className="w-full md:flex md:justify-between gap-8 md:items-center">
                                   
                    <div className="w-full p-6 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-1 md:justify-evenly">
                        <IMG/>
                        {/* <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="client photo" /> */}
                        
                        <div className=" md:ps-20 container max-w-3xl">
                            <div>
                                <p className="tracking-tight text-2xl font-bold md:text-4xl text-slate-50">{content.boldRewriteUp}</p>
                                <p className="text-lg text-slate-400 pb-5 font-semibold">{content.normalRewriteUp}</p>
                            </div>

                            <div className={`flex gap-2`}>
                                <Link href={'../signup'}><button className={`bg-green-600 hover:bg-green-500 p-2 rounded font-semibold text-slate-100`}>Get Stated</button></Link>
                                <button className={`bg-slate-50 rounded p-2 text-green-400 font-semibold border-green-400 border-2 ml-10`}>Place a call</button>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </section>
        // <section className={`bg-[url(/Assets/3551377.jpg)] flex items-center justify-around md:gap-20 py-6 md:py-0 p-10`}>
        //     <IMG />
        //     <div className={`w-[30rem] md:pl-6`}>
        //     <p className={`font-bold text-2xl text-slate-50 pb-5`}>{content.boldRewriteUp}</p>
        //     <p className={` text-lg text-slate-400 pb-5 font-semibold`}>{content.normalRewriteUp}</p>
            // <div className={`flex gap-2`}>
            //     <Link href={'../signup'}><button className={`bg-green-600 hover:bg-green-500 p-2 rounded font-semibold text-slate-100`}>Get Stated</button></Link>
            //     <button className={`bg-slate-50 rounded p-2 text-green-400 font-semibold border-green-400 border-2 ml-10`}>Place a call</button>
            // </div>
        //     </div>
        // </section>
    )
}