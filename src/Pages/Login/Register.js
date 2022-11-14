import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <>
        <div className='reGistration flex justify-center items-center pt-5 mx-5 mt-16'>
            <div className='flex flex-col max-w-md  rounded-md sm:px-10 px-7 sm:py-3 py-1 bg-gray-100 text-gray-900'>
                <div className='mb-3 text-center'>
                    <h1 className='mb-1 mt-1 text-4xl font-bold text-gray-900'><span className='text-amber-700'>Re</span>gister</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form 
                    noValidate=''
                    action=''
                    className='space-y-1 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-3'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='Password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                required />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='confirm' className='text-sm'>
                                    Confirm-password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='cPasswor'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                required />
                        </div>
                        <p className='text-center text-red-400 text-xs pb-1'></p><p className='text-center text-green-500 text-xs pb-1'></p>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-4'>

                    <button  aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
                    </button>

                    <button aria-label='Log in with Facbook' className='p-3 rounded-sm'>
                        <h1 className='text-3xl text-blue-700'><FaFacebook></FaFacebook></h1>
                    </button>

                    <button id='#' aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                        <h1 className='text-2xl'><FaGithub></FaGithub></h1>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400 pb-3'>
                    Already have an account yet?{' '}
                    <Link to='/login' href='#' className='hover:underline text-gray-600'>
                        Sign In
                    </Link>
                    .
                </p>
            </div>
        </div>
    </>
    );
};

export default Login;