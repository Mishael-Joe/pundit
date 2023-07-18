import AllSwiperSlides from "./swiperJS/page"
import Quality__Education from "./quality__education/page"
import Button from "./groupReading/page"
import PopularCourses__grid from "./popularCourses/page"
import GoodEducation from "./goodEduToLife/page"
import StudentsOppinion from "./studentsOpinion/page"
import Our__instructors from "./our__Instructors/page"
import FirstStep from "./takeTheFirstStep/page"

export default function MainContent() {
  return (
    <main>
        <Quality__Education/>
        <Button />
        <AllSwiperSlides />
        <PopularCourses__grid />
        <GoodEducation />
        <StudentsOppinion />
        <Our__instructors />
        <FirstStep />
    </main>
  )
}
