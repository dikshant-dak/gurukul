import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Flutterdetail = () => {
  return (
    <>
    <User_dashboard/>
      <div className='text-center py-5 mt-14'>
        Yaha Iframe aayega
      </div>
      <div className='rounded shadow-lg max-w-6xl ml-16 '>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>Flutter Tutorial
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>Flutter is an open-source UI (User Interface) software development kit (SDK) created by Google. It allows developers to build high-quality, cross-platform mobile, web, and desktop applications using a single codebase. With Flutter, you can write code once and deploy it on multiple platforms, including iOS, Android, Windows, macOS, Linux, and the web. One of the key features of Flutter is its fast development and hot reload capability. Changes made to the code are quickly reflected in the app's UI, allowing developers to see the results instantly without having to restart the application. This iterative development process greatly speeds up the development cycle and enhances productivity.</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Flutterdetail