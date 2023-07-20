import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const Azuredetail = () => {
    return (
        <>
        <User_dashboard/>
            <div className='text-center py-5 mt-14'>
                Yaha Iframe aayega
            </div>
            <div className='rounded shadow-lg max-w-6xl ml-16 '>
                <div className='mt-20 p-10'>
                    <div className='font-bold text-2xl mb-2 text-center'>Azure Course
                        <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
                        </div>
                    </div>
                    <br></br>
                    <p className='text-gray-600 font-light text-center'>An Azure course provides a comprehensive learning experience for individuals interested in gaining expertise in Microsoft Azure, a cloud computing platform offered by Microsoft. These courses cover a wide range of topics, from the fundamentals of Azure to advanced concepts and techniques for building and managing cloud-based solutions.
                    In an Azure course, you can expect to learn about the core components and services offered by the Azure platform. This includes understanding Azure subscriptions, resource groups, virtual machines, storage accounts, networking, and identity and access management through Azure Active Directory.
                    </p>
                </div>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
        </>
    )
}

export default Azuredetail