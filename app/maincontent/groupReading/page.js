import './styles.css'

function GroupReading() {
    function Button({pros}) {
        return <button className={"bg-green-300 hover:bg-green-400 rounded-md p-1 font-semibold"}>{pros}</button>
    }

    return (
        <section className="padding antialiased">
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