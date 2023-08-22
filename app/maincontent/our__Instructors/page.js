import Image from "next/image"

export default function Our__instructors() {
    
    return (
        <section className="bg-white dark:bg-gray-900 transition ease-in-out delay-100 pb-8">
            <div className="container px-6 py-10 mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Meet our Instructors
                        </h1>

                        <div className="flex mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-green-600 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-green-600 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-green-600 rounded-full"></span>
                        </div>
                    </div>
                </div>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 border rounded-lg dark:border-gray-700 flex flex-col justify-between">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Education will be for you what you want it to be.
                            Tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                            aperiam dolorum, obcaecati corrupti aspernatur a.”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={'/Assets/professionals/happy-1836445_1280.jpg'} width={200} height={200} alt="fghj"></Image>

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-green-500 border border-transparent rounded-lg dark:bg-green-600 flex flex-col justify-between">
                        <p className="leading-loose text-white">
                            “To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={'/Assets/professionals/happy-successful-business-leader.jpg'} width={200} height={200} alt="fghj"></Image>

                            <div className="mx-2">
                                <h1 className="font-semibold text-white">Jeny Doe</h1>
                                <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg dark:border-gray-700 flex flex-col justify-between">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Knowledge has to be improved, challenged, and increased constantly, or it vanishes. Lorem ipsum 
                            dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={'/Assets/professionals/smile-2072907_1280.jpg'} width={200} height={200} alt="fghj"></Image>

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}