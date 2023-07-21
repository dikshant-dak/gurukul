import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Powerbidetail = () => {
    return (
        <>
        <User_dashboard/>
            <div className='text-center py-5 mt-14 flex items-center justify-center'>
                {/* Yaha Iframe aayega */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3u7MQz1EyPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='rounded shadow-lg max-w-6xl ml-16 '>
                <div className='mt-20 p-10'>
                    <div className='font-bold text-2xl mb-2 text-center'>Power BI Full Course
                        <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
                        </div>
                    </div>
                    <br></br>
                    <p className='text-gray-600 font-light text-center'>

                        A Power BI course provides comprehensive training on Microsoft Power BI, a business intelligence and data visualization tool. These courses are designed to help individuals acquire the skills and knowledge necessary to effectively analyze data, create insightful visualizations, and generate interactive reports and dashboards.
                        In a Power BI course, you can expect to start with the basics of Power BI, including an introduction to the Power BI ecosystem, its components, and the overall data modeling process. You'll learn how to connect to various data sources, import and transform data, and create a data model to support your reporting needs.</p>
                </div>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
        </>
    )
}

export default Powerbidetail