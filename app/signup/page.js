"use client"

import Link from "next/link"
import { useState } from "react"

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        otherNames: '',
        passWord: '',
        confirmPassWord: '',
        email: '',
        matricNumber: [],
        faculty: '',
        department: ''
    })

    function handleChange(event) {
        const {name, value} = event.target

        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault()

        const {passWord, confirmPassWord} = formData

        if (passWord !== confirmPassWord) {
            console.log('equal password')
        }
    }

    return (
        
        <section className="bg-green-50 dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5 bg-[url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')]" >
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            WELCOME TO <Link href={``}><span className="text-green-500">WiSchool</span></Link>
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Let&#x27;s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>

                        <div className="mt-6">
                            <h1 className="text-gray-500 dark:text-gray-300 text-sm">I have an account <Link href={'./login'} className="text-green-500 text-base font-semibold"> LOGIN</Link> </h1>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>

                                <input 
                                name="lastName"
                                value={formData.lastName}
                                type="text"
                                placeholder="Mishael"
                                onChange={handleChange}
                                required 
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Other Names</label>

                                <input 
                                name="otherNames"
                                value={formData.otherNames}
                                type="text"
                                onChange={handleChange}
                                required 
                                placeholder="Joe"
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>

                                <input 
                                name="email"
                                value={formData.email}
                                type="email"
                                onChange={handleChange}
                                required
                                placeholder="johnsnow@example.com" 
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40" 
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>

                                <input 
                                name="passWord"
                                value={formData.passWord}
                                type="password"
                                onChange={handleChange}
                                required 
                                placeholder="Enter your password" 
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>

                                <input 
                                name="confirmPassWord"
                                value={formData.confirmPassWord}
                                type="password"
                                placeholder="Re-enter Password"
                                onChange={handleChange}
                                required
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:green-blue-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40" 
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Matric number</label>

                                <input 
                                name="matricNumber"
                                value={formData.matricNumber}
                                type="text"
                                onChange={handleChange}
                                required 
                                placeholder="" 
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Faculty</label>

                                <input 
                                name="faculty"
                                value={formData.faculty}
                                type="text"
                                onChange={handleChange}
                                required 
                                placeholder="E.g Social Science" 
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Department</label>

                                <input 
                                name="department"
                                value={formData.department}
                                type="text"
                                onChange={handleChange}
                                required 
                                placeholder="E.g Economics" 
                                className="block w-full px-3 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                />

                            </div>

                            <button className="group flex items-center justify-between w-28 px-3 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none">
                                <span className="pb-1">Sign Up </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" viewBox="0 0 10 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpForm