import React from 'react'
import reactimage from "../../assets/SVG Images/undraw_React_re_g3ui.png";
import nextimage from "../../assets/SVG Images/undraw_next_js_8g5m.png";
import htmlcssjsimage from "../../assets/SVG Images/undraw_static_assets_rpm6.png";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import User_dashboard from '../../components/User_dashboard';
const Webdetail = () => {
  return (
    <>
      <User_dashboard/>
      <div className='text-5xl font-bold text-center py-10 mt-14'>Web Development</div>
      <hr className='w-2/5 mx-auto'/>
      <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-2 justify-items-center">
        <div className="py-10">
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={reactimage} alt='React Decvelopment' className='w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-center'>React JS Tutorial</div>
              <Link to="/React"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded">Go To Course</button></Link>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={nextimage} alt='Next JS Decvelopment' className='w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-center'>Next.JS Tutorial</div>
              <Link to="/Next"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded">Go To Course</button></Link>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={htmlcssjsimage} alt='HTML CSS JS' className='w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-center'>Html, CSS & Javascript Tutorial</div>
              <Link to="/Basic"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded">Go To Course</button></Link>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Webdetail