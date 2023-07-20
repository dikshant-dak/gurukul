import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Kotlindetail = () => {
  return (
    <>
    <User_dashboard/>
      <div className='text-center py-5 mt-14'>
        Yaha Iframe aayega
      </div>
      <div className='rounded shadow-lg max-w-6xl ml-16 '>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>Kotlin Tutorial
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>Kotlin is a modern, statically-typed programming language developed by JetBrains, initially released in 2011. It is designed to be a general-purpose language that combines object-oriented and functional programming features. Kotlin is fully interoperable with Java, which means it can be used alongside existing Java codebases seamlessly.
          One of the main goals of Kotlin is to enhance developer productivity. It achieves this through a concise and expressive syntax, which allows developers to write clean and readable code. Kotlin reduces boilerplate code and introduces features such as type inference, data classes, lambda expressions, and extension functions, making code more concise and expressive.Kotlin provides a strong type system that promotes safer code and helps catch errors at compile time. It offers null safety features, which means the compiler checks for nullability, preventing null pointer exceptions during runtime.</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Kotlindetail