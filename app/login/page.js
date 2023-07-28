"use client"

import Link from "next/link"
import { useState } from "react"

const LoginForm = () => {
    const [formData, setFormData] = useState({
        passWord: '',
        matricNumber: []
    })

    function handleChange(event) {
        const {name, value} = event.target

        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
        console.log(formData)
    }


    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        
        <section className="bg-green-50 dark:bg-gray-900">
            <div className="bg-gray-800 dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover md:block md:w-2/4 bg-[url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl text-slate-100 font-bold sm:text-3xl">WiSchool</h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                    autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                    molestiae
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <div className="flex justify-center mx-auto">
                                    <Link href={``}><h1 className="text-green-600 text-2xl font-bold">WiSchool</h1></Link>
                                </div>

                                <p className="mt-3 text-gray-300 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm text-gray-300 dark:text-gray-200">Matric Number</label>
                                        <input 
                                        name="matricNumber"
                                        value={formData.matricNumber}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="Your Matric Number"
                                        required
                                        id="email"  
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-green-400 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-10 focus:border-2" 
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label for="password" className="text-sm text-gray-300 dark:text-gray-200">Password</label>
                                            <a href="#" className="text-sm text-gray-300 focus:text-green-500 hover:text-green-500 hover:underline">Forgot password?</a>
                                        </div>

                                        <input 
                                        name="passWord"
                                        value={formData.passWord}
                                        type="password"
                                        onChange={handleChange}
                                        required
                                        id="password" 
                                        placeholder="Your Password" 
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-green-400 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-100 focus:outline-none focus:ring focus:ring-opacity-10 focus:border-2" 
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600">
                                            Sign in
                                        </button>
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-200">Don&#x27;t have an account yet? <Link href="./signup" className="text-green-500 font-semibold focus:outline-none focus:underline hover:underline">Register</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm