import React from 'react'
import { useState } from 'react';
import User from "../assets/First/User.png";

const User_dashboard = () => {
    const [open, setOpen] = useState(false);
    const Menu = ["Profile", "Support", "Settings", "Log out"]
  return (
    <>
        <header className="w-full h-full">
        <div className="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-black text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            <h2>GURUKUL</h2>
                        </div>
                        <ul className="flex text-sm font-normal">
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">DashBoard</li>
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
                </div>
        </header>
    </>
  )
}

export default User_dashboard