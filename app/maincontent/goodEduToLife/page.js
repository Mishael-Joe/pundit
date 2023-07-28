import Image from "next/image"

const education = [
    'We Bring the good education to life',
    'let your education do the walking',
    'free e-book, videos and kits',
    'learn at your own pace',
    'collaborate with different learners around the globe',
    'top instructors around the globe'
]

const uppercase = education.map(item => {
    return item[0].toUpperCase() + item.slice(1)
})

function Container() {
    return (
        <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-around">
            <div>
                <Image className="rounded-md w-auto " quality={100} src="/Assets/pexels-christina-morillo-1181672.jpg" width={200} height={100} alt="sdf"/>
                {/* <span className="absolute sm:font-semibold z-10 top-10 p-2 text-sm bg-slate-200 -left-10 w-28 text-center rounded-md shadow-2xl md:left-5 dark:bg-slate-900 dark:text-slate-100 transition ease-in-out delay-100"><span className="text-green-400 text-lg font-semibold">Job</span> Opportunities</span> */}
            </div>
            <div>
                <div className="pb-5 font-semibold md:text-2xl">
                    {uppercase[1]}
                </div>
                <div>
                    <div className="px-4 font-sans md:text-lg md:font-semibold">
                        <div>
                        {uppercase[2]}
                        </div>
                        <div>
                        {uppercase[3]}
                        </div>
                        <div>
                        {uppercase[4]}
                        </div>
                        <div>
                        {uppercase[5]}
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
            <div className="ps-12 py-4 dark:bg-[#0c2313fa] dark:text-slate-100 transition ease-in-out">
                <div className="pb-5 font-semibold delay-300">{uppercase[0]}</div>
                <Container />
            </div>
        </section>
    )
}