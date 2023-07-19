import Image from "next/image"

const instructors = [
    {
        id: 1,
        name: 'John Mark',
        role: 'Senior Developer',
        writeUp: 'Education will be for you what you want it to be',
        src: "/image-victor.jpg",
        alt: 'abc'
    },
    {
        id: 2,
        name: 'Lora Shrof',
        role: 'Marketing Lead',
        writeUp: 'Knowledge has to be improved, challenged, and increased constantly, or it vanishes',
        src: "/image-victor.jpg",
        alt: 'abc'
    },
    {
        id: 3,
        name: 'Zeng Chin',
        role: 'Data Analist at Pundit',
        writeUp: 'To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge',
        src: "/image-victor.jpg",
        alt: 'abc'
    }
]

function Cards(pros) {
    return (
        <figure class="hover:scale-105 hover:shadow-2xl lg:w-72 h-fit hover:bg-green-100 rounded-xl group text-center p-3 shadow-lg">
            <Image src={pros.src} className="mx-auto w-20 rounded-full" quality={100} width={400} height={30} alt="" />
            <div class="pt-6 space-y-4">
                <figcaption>
                    <div className={`font-bold text-lg md:text-base`}>
                        {pros.name}
                    </div>
                    <div className={`text-sm font-semibold text-green-400 md:text-xs`}>
                        {pros.role}
                    </div>
                </figcaption>
                <blockquote>
                    <p class="text-lg font-semibold md:text-sm">
                    &quot;{pros.writeUp}&rdquo;
                    </p>
                </blockquote>
            </div>
        </figure>
    )
}

export default function Our__instructors() {
    const meetOurInstructors = instructors.map(person => {
        return (
            <Cards key={person.id} {...person}/>
        )
    })
    return (
        <section className={`p-10 md:pb-32`}>
            <h1 className={`text-xl font-bold pb-10`}>Meet our instructors</h1>
            <div className={`flex flex-col gap-5  sm:flex-row`}>
                {meetOurInstructors}
            </div>
        </section>
    )
}