import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import OnboardingImage from '../assets/Onboarding.avif'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Logo from '../assets/Logo.jpg'


const Onboarding = () => {
  return (
    <div className="bg-[#113F67 text-[#113f67] flex flex-col gap-8 px-4 sm:px-10 md:px-20 ">
      {/* Navbar */}
      <nav className="flex items-center justify-between text-[#113F67] h-20 shadow-lg md:px-10 px-3 ">
        <h1 className="md:text-2xl font-bold tracking-wider">CRISPBURST</h1>
         
        

        <div className='flex justify-center items-center gap-4'>
            <TbBrandWhatsappFilled className='text-4xl text-green-500'/>

      <Link to='/signup'>

             <button className="flex items-center gap-2 bg-[#113F67] text-white font-medium p-2 md:px-4 md:py-2 rounded-lg shadow hover:bg-[#e6e6e6] transition">
        
          <FaUser />

          
        </button>
        </Link>

        </div>

      
       
      </nav>

     
     
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
  {/* Image Section - Hidden on small screens */}
  <div className=" md:block md:w-[40%]">

    <img
      src={OnboardingImage}
      alt="Onboarding"
      className="rounded-lg object-cover w-full h-full"
    />
  </div>

  {/* Text Content Section */}
  <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4 py-8 text-center">
    <div className='-mt-'>
<img src={Logo} alt="" className='h-10 ' />
    </div>
    
    <h2 className="font-semibold text-center text-3xl md:text-6xl">Welcome to CrispBurst!</h2>
    <p className="text-2xl ">
      {/* What if ordering your pastries and groceries was easy as texting your friends? Now it is! 
     <br /> <span className='font-bold text-sm'>
       Introducing CRISPBURST, the first AI-powered ORDERING assistant
      </span> */}
      Fresh in Every Taste
      
      
      </p>
    <Link to="/signup">
      <button className="bg-[#113f67] text-white px-6 py-2 rounded hover:bg-blue-950 transition duration-300">
        Get Started
      </button>
    </Link>
  </div>
</div>

    
    </div>
  )
}

export default Onboarding
