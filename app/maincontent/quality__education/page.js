import Image from "next/image";
import Link from "next/link"; 

const imageStyle = {
    borderRadius: '1rem',
}

export default function Quality__Education() {
    return (
        <header className="dark:bg-slate-900 transition ease-in-out delay-100">
            <div className="px-4 py-4 flex flex-col justify-evenly items-center gap-4 sm:flex-row">
                <div className=" basis-1/2 dark:text-slate-100 transition ease-in-out delay-100">
                    <p className="font-Rubik text-2xl pb-5 font-bold md:text-4xl lg:text-5xl md:py-5">Quality <span className={"font-Roboto text-green-600"}>Education</span> By Any Means Necessary.</p>
                    <Link href={'../signup'}><button className={`bg-green-600 hover:bg-green-500 h-12 w-32 rounded font-semibold text-slate-100`}>GET STATED</button></Link>
                </div>
                <div className=" basis-1/2 max-w-lg">
                    <div className="relative flex flex-col items-center">
                        <Image
                        alt={'A girl holding her note'} 
                        src={'/Assets/a-girl-holding-her-note.jpg'} 
                        width={'300'} 
                        height={'200'} 
                        quality={100} 
                        style={imageStyle} 
                        className=" object-cover object-center w-[28rem] h-[28rem]"
                        />
                        <span className="absolute max-w-[10rem] bg-slate-200 p-2 rounded-md font-semibold left-0 bottom-32 hidden sm:inline-block">Learn from the best <span className={"font-Roboto text-green-600"}>instructors</span> around the globe <Image src={"/image-victor.jpg"} quality={100} width={300} height={30} alt="" className=" rounded-full mx-auto mt-2 w-10" /></span>
                        <span className="absolute max-w-[10rem] bg-slate-200 p-2 rounded-md font-semibold right-0 bottom-14 hidden sm:inline-block"> <i className={"text-green-600"}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"></path><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd"></path></svg></i> <span className={"k45 text-green-600"}>45k</span> <br/> Amazing students around the globe</span>
                    </div>
                </div>
            </div>
        </header>
    )
}