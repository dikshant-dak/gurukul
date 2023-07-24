import React from 'react'
import Home from './Home'
import { Link , useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';

function About() {
  let navigate = useNavigate();
    const routeChange=()=>{
        let path=`/about`;
        navigate(path);
    }
  return (
    
    // <><Home />
  <>
  <div>
       <header className="w-full h-full ">
                {/* <img src={HeaderImage} alt="" className="bg-cover h-[260px] w-full md:h-[649px]" /> */}
                {/* <div class="absolute top-0 left-0 w-full h-[260px] md:h-[649px] bg-gradient-to-b from-[#434343] to-[#1f1b1b] opacity-80"></div> */}
                {/* <div class="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-white text-xl font-bold"> */}
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            {/* <img src={Logo} alt="Logo" /> */}
                            <h2>GURUKUL</h2>
                        </div>

                        <ul className="flex text-sm font-normal">
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Home</li>
                            <li onClick={routeChange} className="mx-[10px] cursor-pointer hover:opacity-90" >About</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Courses</li>
                            <li className="mx-[10px] cursor-pointer hover:opacity-90">Contact Us</li>
                        </ul>

                        <div className="">
                            <Link to="/register"><button className="md:w-[90px] md:h-[40px] bg-black rounded-xl md:mr-[35px] text-white font-medium text-[15px]
                        hover:opacity-80">Register</button></Link>
                            <Link to="/login"><button className="md:w-[90px] md:h-[40px] bg-black rounded-xl text-white font-medium text-[15px] hover:opacity-80">Log in</button></Link>
                        </div>
                    </div>
                    {/* </div> */}
                    </header>
                    </div>
                 <div>   
                 <div className="container" m-0>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-contents-center"></div>
      
              <h1 class="text-center ..." text-lg >Introduction</h1><br></br>
            {/* <h1 class="text-center ..." >Welcome to GuruKul</h1> */}
            {/* <div class="-m-4"></div> */}
            <div  class="mx-6">
            <p >
            At Gurukul, we believe that knowledge knows no bounds, and learning should be accessible to all, regardless of geographical constraints or time limitations. Our platform is designed to empower learners like you with the tools and resources needed to achieve your educational goals and unlock your full potential.
        
            </p><br></br>
          </div>
 </div>
          <div>
            <h4 class="text-center ..." > Who We Are:</h4><br></br>
            <div  class="mx-6">
            <p>
Gurukul is a cutting-edge online education platform committed to revolutionizing the way people learn. With a team of passionate educators, tech enthusiasts, and industry experts, we strive to create an inclusive and dynamic learning environment where students from all walks of life can thrive.
            </p><br></br>
            </div>
          </div>

          <div>
            <h4 class="text-center ...">Our Mission</h4><br></br>
            <div  class="mx-6">
            <p>
             Our mission is simple: to democratize education and bring high-quality learning experiences to everyone, anywhere. We envision a world where learning is a lifelong journey, and individuals can continuously acquire new skills and knowledge to adapt to an ever-changing world.
            </p><br></br>
            </div>
          </div>


          <div>
            <h4 class="text-center ...">Why Choose Gurukul?</h4><br></br>
            <div  class="mx-6">
            <p>
           1. We offer a wide array of courses, spanning various subjects and skill levels. From academic subjects to professional development and beyond, there's something for everyone.<br></br>  </p><br></br>
           2.Our courses are developed and delivered by industry-leading experts, ensuring that you receive top-notch instruction and insights.<br></br>
           3.Learning should fit seamlessly into your busy lifestyle. With our platform, you have the freedom to study at your own pace and on your schedule.<br></br>
           4. Engaging multimedia content, interactive quizzes, and real-world projects make learning both enjoyable and effective.<br></br>
          </div><br></br>
          </div>

          <div>
            <h4 class="text-center ...">Join Us Today:</h4><br></br>
            <div  class="mx-6">
            <p>
            Embark on your learning journey with Gurukul. Whether you're a student looking to supplement your education, a professional aiming to upskill, or an enthusiast pursuing a passion, we're here to support and guide you every step of the way.

Embrace the power of education and unlock a world of possibilities with Gurukul. Let's learn, grow, and thrive together!

Start your learning adventure today at www.Gurukul.com Happy learning!
            </p><br></br>
            </div>
          </div>

        </div>

        </div>    

</>

    
  );
};

export default About;
