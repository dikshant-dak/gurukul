import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Dfull = () => {
    return (
        <>
        <User_dashboard/>
            <div className='text-center py-5 mt-14 flex items-center justify-center'>
                {/* Yaha Iframe aayega */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xiEC5oFsq2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='rounded shadow-lg max-w-6xl ml-16 '>
                <div className='mt-20 p-10'>
                    <div className='font-bold text-2xl mb-2 text-center'>Data Science
                        <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
                        </div>
                    </div>
                    <br></br>
                    <p className='text-gray-600 font-light text-center'>
                        A data science course provides a structured and comprehensive learning experience for individuals interested in mastering the skills and techniques required to become a data scientist. These courses cover a wide range of topics, starting from foundational concepts to advanced data analysis and machine learning algorithms
                        In a data science course, you can expect to learn the fundamentals of data manipulation, data cleaning, and exploratory data analysis. You'll gain proficiency in using popular programming languages like Python or R and tools such as SQL for data querying and manipulation. Additionally, you'll learn how to work with data in various formats, including structured databases, spreadsheets, and unstructured text data.</p>
                </div>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
        </>
    )
}

export default Dfull