import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Nextdetail = () => {
  return (
    <>
    <User_dashboard/>
      <div className='text-center py-5 mt-14 flex items-center justify-center'>
        {/* Yaha Iframe aayega */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wm5gMKuwSYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='rounded shadow-lg max-w-6xl ml-16 '>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>Next.JS Tutorial
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>Next.js is a powerful framework for building modern web applications with React. It combines the best of server-side rendering (SSR), static site generation (SSG), and client-side rendering to deliver fast, optimized, and scalable applications. One of the key advantages of Next.js is its support for server-side rendering. With SSR, Next.js pre-renders the React components on the server and sends a fully rendered HTML page to the client. This approach improves initial page load times, enhances search engine optimization (SEO), and provides a better user experience.
          Next.js also offers static site generation, where it generates static HTML files at build time. This is particularly useful for content-heavy websites or pages that don't require real-time data updates.</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Nextdetail