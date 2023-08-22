import Image from "next/image";

export default function PopularCourse__item(props) {
    return (
        <div class="w-full md:h-[22rem] max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#252830]">
            <Image class="object-cover object-center w-full h-56" src={props.src} width={`200`} height={`200`} alt={props.alt} quality={100} />

            <div class="px-3 py-2 flex flex-col gap-8 justify-between">
                <div className="flex justify-between gap-2">
                    <h1 class="font-Rubik text-lg font-semibold text-gray-800 dark:text-white">{props.writeUp}</h1>
                    <span><i className={"flex items-center pr-2 text-green-600"}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg><span>{props.rating}</span></i></span>
                </div>
                <div className="flex justify-between">
                    <div class="text-gray-700 dark:text-gray-200">

                        <h1 class="text-sm font-Inconsolata">{props.duration}</h1>
                    </div>

                    <div class="text-gray-700 dark:text-gray-200">

                        <h1 class="text-sm font-Inconsolata">{props.coursesSoldTo}</h1>
                    </div>

                    <div class="text-gray-700 dark:text-gray-200">

                        <h1 class="text-lg font-Rubik text-green-600">{props.prices}</h1>
                    </div>
                </div>
            </div>
        </div>
        // <div className={"bg-slate-100 transition delay-150 dark:bg-green-900 shadow-xl max-w-md rounded-md hover:scale-105 cursor-pointer hover:shadow-2xl"}>
        //     <>
        //         <Image
        //         src={props.src}
        //         height={`200`}
        //         width={`413`}
        //         alt={props.alt}
        //         quality={100}
        //         className="rounded-md w-auto"
        //         />
        //     </>
        //     <div className="flex justify-between gap-8"><h3 className={"font-Rubik text-lg px-2 font-semibold"}>{props.writeUp}</h3> </div>
        //     <span className={"flex justify-between font-Roboto py-1 transition delay-150 italic text-green-500 dark:text-slate-100"}>
            
            
        //     </span>
        //     <span className={"flex justify-between pb-1 font-Inconsolata px-2"}>
        //         <h4 className={""}>{props.duration}</h4>
        //         <span className={"pr-2"}>{props.coursesSoldTo}</span>
        //         <span className={" "}>{props.prices}</span>
        //     </span>
        // </div>
    )
}