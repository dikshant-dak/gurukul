import React from 'react'
import powerbi from "../../assets/SVG Images/undraw_Segment_analysis_re_ocsl.png"
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Dataanalyicts = () => {
  return (
    <>
    <User_dashboard/>
    <div className='text-5xl font-bold text-center py-10 mt-14'>Data Analytics </div>
    <hr className='w-2/5 mx-auto ' />
        <div className=" grid grid-cols-1 lg:grid-cols-1 lg:gap-1 justify-items-center">
            <div className="py-10">
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={powerbi} alt='Power BI' className='w-full' />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-center'>Power BI Tutorial</div>
                        <Link to="/Powerbi"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded">Go To Course</button></Link>
                    </div>
                </div>
        </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Dataanalyicts