'use client'

import { useState, FormEvent } from "react"
import { useRouter } from 'next/navigation';
import supabase from '../../utils/supabase-browser';
function Login() {
    const router = useRouter();
    const [showLogin, setShowLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (showLogin) {
            const { error, data: { session } } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                alert(error.message);
            }
            else {
                router.replace("/");
            }

        }
        else {

            const { error, data: { session } } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username: name
                    }
                }

            });
            if (error) {
                alert(error.message);
            }
            else {
                alert("check your email")
                setShowLogin(true);
            }
        }



    }
    return (
        <div>

            <ul className=" text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a onClick={() => setShowLogin(true)} href="#" className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Login</a>
                </li>
                <li className="w-full">
                    <a onClick={() => setShowLogin(false)} href="#" className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Register</a>
                </li>

            </ul>
            <form onSubmit={submitForm}>
                {
                    !showLogin && <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                        <input onChange={e => setName(e.target.value)} type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    </div>
                }
                <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form >
        </div>
    )
}

export default Login