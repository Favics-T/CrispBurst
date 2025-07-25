import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import OnboardingImage from '../assets/Onboarding.avif'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Onboarding = () => {
  return (
    <div className="bg-[#113F67 text-[#113f67] flex flex-col gap-8 min-h-screen px-6 sm:px-10 md:px-20 ">
      {/* Navbar */}
      <nav className="flex items-center justify-between text-[#113F67] h-20 shadow-lg px-10 ">
        <h1 className="text-2xl font-bold tracking-wider">CRISPBURST</h1>
        
        <Link to='/signup'>
       <button className="flex items-center gap-2 bg-[#113F67] text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-[#e6e6e6] transition">
          <FaUser />
          
        </button>
        </Link>
       
      </nav>

      {/* Add onboarding content here */}
     
     <div className='flex items-center justify-center gap-'>
<div className='w-[50%] '>
  <img src={OnboardingImage} alt="Onboarding Image"  className='rounded-lg'/>
     
</div>
  <div className="mt-16 w-[40%]  flex flex-col justify-center items-center gap-8 py-8">
        <h2 className=" font-semibold text-center text-6xl">Welcome to CrispBurst!</h2>
        <p className="text-4xl text-center">
         Hot crust. Big taste. No stress
        </p>
        <Link to='/'>
        <button className='bg-[#113f67] text-white px-2 rounded hover:bg-blue-950 cursor-pointer'>Order now</button>
   </Link>
      </div>
     </div>
    
    </div>
  )
}

export default Onboarding
