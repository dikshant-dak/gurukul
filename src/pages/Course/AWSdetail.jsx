import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
import User_dashboard from '../../components/User_dashboard';
const AWSdetail = () => {
    return (
        <>
        {/* <User_dashboard/> */}
            <div className='text-center py-5 mt-14 flex items-center justify-center'>
                {/* Yaha Iframe aayega */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZB5ONbD_SMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className='rounded shadow-lg max-w-6xl ml-16 '>
                <div className='mt-20 p-10'>
                    <div className='font-bold text-2xl mb-2 text-center'>Amazon Web Services
                        <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
                        </div>
                    </div>
                    <br></br>
                    <p className='text-gray-600 font-light text-center'>
                    Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon. It provides a wide range of scalable and cost-effective cloud services that help individuals and organizations build, deploy, and manage applications and infrastructure in a flexible and reliable manner.
                    AWS offers a vast array of services across various categories, including compute, storage, databases, networking, security, machine learning, analytics, and more. These services allow users to leverage the power of the cloud to meet their specific requirements, whether it's hosting a simple website, running complex applications, or analyzing large datasets.</p>
                </div>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
        </>
    )
}

export default AWSdetail