import Image from "next/image";
import './styles.css';
import './responsiveStyles.css';
import Link from "next/link"; 

const imageStyle = {
    borderRadius: '1rem',
}

const allAboutQualityEducationSection = {
    'qualityEdu__Note__lg': {
        tag: <h2 className="h2__text text-2xl pb-5 font-bold md:text-4xl lg:text-5xl md:py-5">Quality <span className={"green__text text-green-600"}>Education</span> By Any Means Necessary.</h2>
    },
    'qualityEdu__Note__md': {
        tag: <h3>Learn from the best <span className={"green__text text-green-600"}>instructors</span> around the globe <Image src={"/image-victor.jpg"} quality={100} width={300} height={30} alt="" className=" rounded-full mx-auto mt-2 w-10" /></h3>
    },
    'qualityEdu__Note__sm': {
        tag: <h5> <i className={"text-green-600 k45"}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"></path><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd"></path></svg></i> <span className={"k45 text-green-600"}>45k</span> <br/> Amazing students around the globe</h5>
    }
}

function QualityEdu__Note__lg() {
    return allAboutQualityEducationSection.qualityEdu__Note__lg.tag
}

function QualityEduNote__lg() {
    return (
        <div className={"p-10"}>
            <QualityEdu__Note__lg />
            <Link href={'../signup'}><button className={`bg-green-500 p-2 rounded-md font-semibold text-slate-100`}>GET STATED</button></Link>
        </div>
    )
}

function QualityEdu__Note__md() {
    return allAboutQualityEducationSection.qualityEdu__Note__md.tag
}

function QualityEduNote__md() {
    return (
        <div className={"hidden md:font-semibold md:absolute md:top-32 md:w-48 md:shadow-lg md:bg-slate-50  md:rounded-md md:p-2 md:text-center md:inline md:right-64 lg:right-72"}>
            <QualityEdu__Note__md />
        </div>
    )
}

function QualityEdu__Note__sm() {
    return allAboutQualityEducationSection.qualityEdu__Note__sm.tag
}

function QualityEduNote__sm() {
    return (
        <div className={"hidden md:font-semibold md:absolute md:bg-slate-100 md:p-2 md:rounded-md md:w-32 md:h-auto md:text-center md:shadow-lg md:inline md:top-64 md:text-xs md:right-4 lg:right-16"}>
            <QualityEdu__Note__sm />
        </div>
    )
}

function Images({src, alt, width, height, quality, style}) {
    return (
        <>
        <Image 
        alt={alt}
        src={src}
        width={width}
        height={height}
        quality={quality}
        style={style}
        />
        </>
    )
}

function SecondFlex__item() {
    return (
        <div className={"relatively_Position__Items"}>
        <Images 
        alt={'A girl holding her note'} 
        src={'/Assets/a-girl-holding-her-note.jpg'} 
        width={'250'} 
        height={'200'} 
        quality={100} 
        style={imageStyle} 
        />
        <QualityEduNote__md />
        <QualityEduNote__sm />
        </div>
    )
}

export default function Quality__Education() {
    return (
        <header className={"grid sm:flex-row -mt-14 md:-mt-3"}>
        <QualityEduNote__lg />
        <SecondFlex__item />
        </header>
    )
}