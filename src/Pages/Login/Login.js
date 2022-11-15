
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loginbg from '../../assets/images/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";




const Login = () => {
    const {user,singInPage,forgetPassword,singInAutoGoogle,GitHubLogin} = useContext(AuthContext);
    const navigate = useNavigate()
    const location= useLocation()
    const from = location?.state?.from?.pathname || '/';

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [userEmail, setUserEmail] = useState('')


   const handleLoginBtn = event =>{
    event.preventDefault();
   const form = event.target;
   const email = form.email.value;
   const password = form.password.value;
   singInPage(email,password)
   .then(result =>{
    const user = result.user;
    toast.success("login succesfull")
    navigate(from, { replace: true })
   }).catch(err => console.error(err))
     //if password did't match
     setTimeout(() => {
        if (!password) {
            return toast.success("You are success fully Log in ..")
        } else {
            return setError("Did't match you Password !")
        }
    }, 1200)
   }

   const handleGitHub = () =>{
    GitHubLogin()
    .then(()=>{
        navigate(from, { replace: true})
        toast.success("log in successfully")
    }).catch(err => console.error(err))
   }

    // //Forget password
    const forGetPassword = () => {
        // console.log(userEmail)
        forgetPassword(userEmail)
            .then(() => {
                // console.log(userEmail, "inside massage");
                toast.info("please check your email !")
            })
            .catch(error => {
                toast.warning(" You Email didn'tt Match !")
            })
    }

    const handleGoogleSignin = () => {
        //Google auto sing in 
        singInAutoGoogle()

            .then(() => {
                toast.success('Google Login successfully.')
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])


 return (
    <>
    <div className='reGistration flex justify-center items-center pt-5 mx-5 mt-16'>
        <div className='flex flex-col max-w-md  rounded-md sm:px-10 px-7 sm:py-3 py-1 bg-gray-100 text-gray-900'>
            <div className='mb-3 text-center'>
                <h1 className='mb-1 mt-1 text-4xl font-bold text-gray-900'><span className='text-amber-700'>Log</span>in</h1>
               
            </div>
            <form 
                onSubmit={handleLoginBtn}
                noValidate=''
                action=''
                className='space-y-1 ng-untouched ng-pristine ng-valid'
            >
                <div className='space-y-3'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Email address
                        </label>
                        <input
                            onBlur={(event) => setUserEmail(event.target.value)}
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
                    <Link onClick={forGetPassword}> <label htmlFor='password' className='text-sm'>
                               forget password?
                            </label></Link>
                    <p className='text-center text-red-400 text-xs pb-1'>{error}</p><p className='text-center text-green-500 text-xs pb-1'>{success}</p>
                </div>
                <div className='space-y-2'>
                    <div>
                        <button
                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            Login
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

                <button onClick={handleGoogleSignin}  aria-label='Log in with Google' className='p-3 rounded-sm'>
                    <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
                </button>

                <button aria-label='Log in with Facbook' className='p-3 rounded-sm'>
                    <h1 className='text-3xl text-blue-700'><FaFacebook></FaFacebook></h1>
                </button>

                <button onClick={handleGitHub} id='#' aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                    <h1 className='text-2xl'><FaGithub></FaGithub></h1>
                </button>
            </div>
            <p className='px-6 text-sm text-center text-gray-400 pb-3'>
                If you don't have an account yet?{' '}
                <Link to='/register' href='#' className='hover:underline text-gray-600'>
                    Register
                </Link>
                .
            </p>
        </div>
    </div>
</>
    );
};

export default Login;