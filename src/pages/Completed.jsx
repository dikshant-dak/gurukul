import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TaskComplete from "../assets/SVG Images/undraw_Complete_design_re_h75h.png";
import User from "../assets/First/User.png";
import DataAnalysis from "../assets/Courses/data.png"
import Cloud from "../assets/Courses/cloud.png"
import App from "../assets/Courses/app.jpg"
import Footer from '../components/Footer';
import ProgressBar from '@ramonak/react-progress-bar';

const completed = () => {
    const [open, setOpen] = useState(false);
    const Menu = ["Profile", "Support", "Settings", "Log out"]
    return (
        <>
            <header className="w-full h-full ">
                <img src={TaskComplete} alt="" className="bg-cover h-[260px] w-full md:h-[750px]" />
                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[750px] bg-gradient-to-b from-[#434343] to-[#1f1b1b] opacity-80"></div>
                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-white text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            <h2>GURUKUL</h2>
                        </div>
                        <ul className="flex text-sm font-normal">
                        <Link to="/"><li className="mx-[10px] cursor-pointer hover:opacity-90">DashBoard</li></Link>
                            <li className="hidden lg:block mx-[10px] cursor-pointer hover:opacity-90">About</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Courses</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Contact Us</li>
                        </ul>
                        <div className='relative'>
                            <img onClick={() => setOpen(!open)} src={User} alt='user' className='h-10 w-10 object-cover border-4 border-gray-400 rounded-full cursor-pointer mt-[5px] bg-white ' />
                            {
                                open && (<div className='bg-white p-2 w-50 shadow-lg absolute text-black'>
                                    <ul>
                                        {Menu.map((menu) => (
                                            <li onClick={() => setOpen(false)} className='p-1 text-sm cursor-pointer rounded hover:bg-gray-300' key={menu}>{menu}</li>
                                        ))}
                                    </ul>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='text-5xl font-bold text-center py-10'><h1>Completed Courses</h1></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 justify-items-center">
                        <div className="py-10">
                            <div className='bg-white rounded overflow-hidden shadow-lg max-w-sm transform transition duration-500 hover:scale-110' >
                                <img src={App} alt='Power BI' className='w-full' />
                                <div className='font-bold text-3xl mb-2 text-center text-black'>App Development</div>
                                <div className='font-bold text-xl mb-2 text-center text-black'>Progress :- 100%</div>
                                <div className='m-[25px]'>
                                    <span><ProgressBar completed={100} /></span>
                                </div>
                                <Link to="/"><button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded ml-[16px] mb-[8px]" >Go To Course</button></Link>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className='bg-white rounded overflow-hidden shadow-lg max-w-sm transform transition duration-500 hover:scale-110' >
                                <img src={Cloud} alt='Power BI' className='w-full' />
                                <div className='font-bold text-3xl mb-2 text-center text-black'>Cloud</div>
                                <div className='font-bold text-xl mb-2 text-center text-black'>Progress :- 100%</div>
                                <div className='m-[25px]'>
                                    <span><ProgressBar completed={100} /></span>
                                </div>
                                <Link to="/"><button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded ml-[16px] mb-[8px]" >Go To Course</button></Link>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className='bg-white rounded overflow-hidden shadow-lg max-w-sm transform transition duration-500 hover:scale-110' >
                                <img src={DataAnalysis} alt='Power BI' className='w-full' />
                                <div className='font-bold text-3xl mb-2 text-center text-black'>Data Analytics</div>
                                <div className='font-bold text-xl mb-2 text-center text-black'>Progress :- 100%</div>
                                <div className='m-[25px]'>
                                    <span><ProgressBar completed={100} /></span>
                                </div>
                                <Link to="/"><button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded ml-[16px] mb-[8px]" >Go To Course</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-black'><Footer /></div>
                </div>
            </header>
        </>
    )
}

export default completed