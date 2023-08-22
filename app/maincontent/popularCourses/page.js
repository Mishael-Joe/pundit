import React from "react";
import PopularCourse__item from "./popular--courses";
import { dataBase } from "./data--base";
import { IoIosArrowDown } from '@/app/utils/icons/icons'

export default function PopularCourses__grid() {
    const popularCourses = dataBase.map(course => {
        return (
            <PopularCourse__item key={course.id} {...course} />
        )
    })
    return (
        <section className={`dark:bg-gray-900 py-4 px-4 md:px-8 dark:text-slate-100 transition ease-in-out delay-100`}>
            <div className="flex gap-2 justify-between md:items-baseline pb-4"><h1 className={`font-semibold text-xl lg:text-3xl`}>Most Popular Courses</h1> <button className="rounded h-fit w-fit text-sm bg-green-600 hover:bg-green-500 flex items-center gap-2 px-2 py-1"> <span><IoIosArrowDown /> </span> Sort by</button></div>
            <div className={`grid items-center justify-center mobile:justify-around mobile:grid-cols-2 md:grid-cols-3 gap-4`}> {popularCourses} </div>
        </section>
    )
}