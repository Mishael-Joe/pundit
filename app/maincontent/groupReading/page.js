import './styles.css'

function GroupReading() {
    function Button({pros}) {
        return <button className={"bg-green-400 transition delay-300 hover:bg-green-500 dark:bg-green-500 dark:text-slate-100 rounded-md max-w-md p-2 font-semibold"}>{pros}</button>
    }

    return (
        <section className="padding antialiased dark:bg-[#0c2313fa] transition ease-in-out delay-100">
            <Button pros={'Problem Solving'}/>
            <Button pros={'Courses'}/>
            <Button pros={'Group Reading'}/>
            <Button pros={'Hand-on Activities'}/>
        </section>
    )
}

export default function Button() {
    return <GroupReading />
}