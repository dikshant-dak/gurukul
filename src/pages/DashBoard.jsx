import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoingTask from "../assets/SVG Images/undraw_Working_remotely_re_6b3a.png";
import User from "../assets/First/User.png";
import ReactJS from '../assets/Courses/react.png';
import next from "../assets/Courses/next.png"
import AI from "../assets/Courses/AI.jpeg"
import Footer from '../components/Footer';
import ProgressBar from '@ramonak/react-progress-bar';

const DashBoard = () => {
    const [open, setOpen] = useState(false);
    const Menu = ["Profile", "Support", "Settings", "Log out"]
    return (
        <>
            <header className="w-full h-full ">
                <img src={DoingTask} alt="" className="bg-cover h-[260px] w-full md:h-[750px]" />
                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[750px] bg-gradient-to-b from-[#434343] to-[#1f1b1b] opacity-80"></div>
                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-white text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            <h2>GURUKUL</h2>
                        </div>
                        <ul className="flex text-sm font-normal">
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">DashBoard</li>
                            <li className="hidden lg:block mx-[10px] cursor-pointer hover:opacity-90">About</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Courses</li>
                            {/* <Link to="/dashboard"><li className="mx-[10px] cursor-pointer hover:opacity-90">Dashboard</li></Link> */}
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
                    <div className='text-5xl font-bold text-center py-10'><h1>Progress Tracker</h1></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 justify-items-center">
                        <div className="py-10">
                            <div className='bg-white rounded overflow-hidden shadow-lg max-w-sm transform transition duration-500 hover:scale-110' >
                                <img src={ReactJS} alt='Power BI' className='w-full' />
                                <div className='font-bold text-3xl mb-2 text-center text-black'>ReactJS</div>
                                <div className='font-bold text-xl mb-2 text-center text-black'>Progress :- 70%</div>
                                <div className='m-[25px]'>
                                    <span><ProgressBar completed={70} /></span>
                                </div>
                                <Link to="/"><button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded ml-[16px] mb-[8px]" >Continue</button></Link>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className='bg-white rounded overflow-hidden shadow-lg max-w-sm transform transition duration-500 hover:scale-110' >
                                <img src={next} alt='Power BI' className='w-full' />
                                <div className='font-bold text-3xl mb-2 text-center text-black'>NextJS</div>
                                <div className='font-bold text-xl mb-2 text-center text-black'>Progress :- 50%</div>
                                <div className='m-[25px]'>
                                    <span><ProgressBar completed={50} /></span>
                                </div>
                                <Link to="/"><button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded ml-[16px] mb-[8px]" >Continue</button></Link>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className='bg-white rounded overflow-hidden shadow-lg max-w-sm transform transition duration-500 hover:scale-110' >
                                <img src={AI} alt='Power BI' className='w-full' />
                                <div className='font-bold text-3xl mb-2 text-center text-black'>AI</div>
                                <div className='font-bold text-xl mb-2 text-center text-black'>Progress :- 80%</div>
                                <div className='m-[25px]'>
                                    <span><ProgressBar completed={80} /></span>
                                </div>
                                <Link to="/"><button className="hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded ml-[16px] mb-[8px]" >Continue</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:items-center md:justify-evenly'><Link to="/completed"><button className="bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded " >Completed Courses</button></Link></div>
                    <div className='text-black'><Footer /></div>
                </div>
            </header>
        </>
    )
}
export default DashBoard;













