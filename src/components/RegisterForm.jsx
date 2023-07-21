import React from 'react';
import imgr from "../components/loginimage.svg";
import { Link ,useNavigate} from 'react-router-dom';

const RegisterForm = () => {
    let navigate =useNavigate();
    const routeChange=()=>{
        let path=`/login`;
        navigate(path);
    }
    return (
        <>

            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="hidden lg:block w-full md:w-1/2 xl:w-3/4 ">
                    <img src={imgr} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create an Account</h1>

                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>
                            <br></br>
                            <div>
                                <label className="block text-gray-700">Mobile Number</label>
                                <input type="text"  placeholder="Enter Mobile Number"  minlength="10" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password"  placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                            </div>

                            <hr className="my-4 border-gray-300 w-full" />

                            <button type="submit" onClick={routeChange}className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                             px-4 py-3 mt-6 ">Sign Up</button>
                        </form>

                        <hr className="my-8 border-gray-300 w-full" />

                        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex items-center justify-center">
                                <span className="ml-4">
                                    Signup
                                    with
                                    Google </span>
                            </div>
                        </button>

                       
                        <p className="mt-8">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
                               Login Here{' '}
                            </Link> 
                        </p>


                    </div> 
                </div>

            </section>
        </>
    )
}

export default RegisterForm;
