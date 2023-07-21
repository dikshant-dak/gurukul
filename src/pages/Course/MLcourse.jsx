import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const MLcourse = () => {
  return (
    <>
    <User_dashboard/>
      <div className='text-center py-5 mt-14 flex items-center justify-center'>
        {/* Yaha Iframe aayega */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GwIo3gDZCVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='rounded shadow-lg max-w-6xl ml-16 '>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>Machine Learning Course
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>
A machine learning (ML) course offers a comprehensive learning experience focused on understanding and applying various algorithms and techniques in the field of machine learning. These courses cover the fundamentals of ML, provide hands-on experience with popular ML frameworks, and explore advanced topics and applications
In an ML course, you can expect to start with the basics of ML, including the different types of learning (supervised, unsupervised, and reinforcement learning) and the key concepts of data preprocessing, feature engineering, and model evaluation. You'll gain an understanding of how ML algorithms work, such as decision trees, logistic regression, support vector machines (SVM)</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default MLcourse