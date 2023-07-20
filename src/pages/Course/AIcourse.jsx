import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer'
import User_dashboard from '../../components/User_dashboard';
const AIcourse = () => {
  return (
    <>
    <User_dashboard/>
      <div className='text-center py-5 mt-14'>
        Yaha Iframe aayega
      </div>
      <div className='rounded shadow-lg max-w-6xl ml-16 '>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>AI Course
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>An AI course provides a comprehensive learning experience for individuals interested in diving into the exciting world of artificial intelligence. These courses cover a wide range of topics, starting with the fundamentals of AI and gradually progressing to more advanced concepts and applications.
          In an AI course, you can expect to learn about the history and evolution of AI, gaining insights into how it has developed and its current state. You'll explore various problem-solving techniques, such as search algorithms and knowledge representation, to understand how AI systems can tackle complex challenges.</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default AIcourse