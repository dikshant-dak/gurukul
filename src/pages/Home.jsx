import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from "../assets/First/image-asset.jpeg";
import BannerImg from "../assets/SVG Images/undraw_online_stats_0g94 1.png";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>

            <header className="w-full h-full ">
                <img src={HeaderImage} alt="" className="bg-cover h-[260px] w-full md:h-[649px]" />
                <div class="absolute top-0 left-0 w-full h-[260px] md:h-[649px] bg-gradient-to-b from-[#434343] to-[#1f1b1b] opacity-80"></div>
                <div class="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-white text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            {/* <img src={Logo} alt="Logo" /> */}
                            <h2>GURUKUL</h2>
                        </div>

                        <ul className="flex text-sm font-normal">
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Home</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">About</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Courses</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Contact Us</li>
                        </ul>

                        <div className="">
                            <Link to="/register"><button className="md:w-[90px] md:h-[40px] bg-black rounded-xl md:mr-[35px] text-white font-medium text-[15px]
                        hover:opacity-80">Register</button></Link>
                            <Link to="/login"><button className="md:w-[90px] md:h-[40px] bg-black rounded-xl text-white font-medium text-[15px] hover:opacity-80">Log in</button></Link>
                        </div>
                    </div>

                    <div className="md:flex md:items-center md:justify-evenly">
                        <div className="leading-5 mt-[12px] text-center md:ml-[100px] md:p-3 md:leading-[30px] md:text-left">
                            <h1 className="text-[15px] md:text-3xl md:text-left">LEARN FROM THE EXPERTS</h1>
                            <p className="text-[12px] mt-[10px] text-center font-normal md:text-[16px] md:mt-[12px]
                            md:text-left">Elevate Your Knowledge, Unleash Your Potential - <br />Discover, Learn, Grow - Your Path to Success</p>
                            <Link>
                                <button className="w-[100px] h-[30px] text-[10px] md:w-[150px] md:h-[50px] bg-black mt-[20px] rounded-xl md:text-[15px] md:hover:opacity-80">Start Learning</button>
                            </Link>
                        </div>
                        <img src={BannerImg} alt="" className="hidden md:block md:w-[800px] md:h-[500px] " />
                    </div>
                </div>

            </header>

            <Footer />
        </>

    )
}

export default Home;
