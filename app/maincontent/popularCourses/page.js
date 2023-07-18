import React from "react";
import PopularCourse__item from "./popular--courses";
import { dataBase } from "./data--base";

export default function PopularCourses__grid() {
    const popularCourses = dataBase.map(course => {
        return (
            <PopularCourse__item key={course.id} {...course} />
        )
    })
    return (
        <section className={``}>
            <h1 className={`font-semibold pl-12`}>Most Popular Courses</h1>
            <div className={`g gap-4`}> {popularCourses} </div>
        </section>
    )
}