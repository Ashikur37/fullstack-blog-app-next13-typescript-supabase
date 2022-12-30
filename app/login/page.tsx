'use client'

import { useState } from "react"

function Login() {
    const [showForm, setShowForm] = useState("login");
    return (
        <div>
            <div className="sm:hidden">
                <label className="sr-only">Select your country</label>
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Profile</option>
                    <option>Profile</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a href="#" className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Login</a>
                </li>
                <li className="w-full">
                    <a href="#" className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Register</a>
                </li>

            </ul>
            {

            }
        </div>
    )
}

export default Login