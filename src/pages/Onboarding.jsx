import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import OnboardingImage from '../assets/Onboarding.avif'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Onboarding = () => {
  return (
    <div className="bg-[#113F67 text-[#113f67] flex flex-col gap-8 px-4 sm:px-10 md:px-20 ">
      {/* Navbar */}
      <nav className="flex items-center justify-between text-[#113F67] h-20 shadow-lg px-10 ">
        <h1 className="text-2xl font-bold tracking-wider">CRISPBURST</h1>
        
        <Link to='/signup'>
       <button className="flex items-center gap-2 bg-[#113F67] text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-[#e6e6e6] transition">
          <FaUser />
          
        </button>
        </Link>
       
      </nav>

     
     
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
  {/* Image Section - Hidden on small screens */}
  <div className="hidden md:block md:w-[40%]">
    <img
      src={OnboardingImage}
      alt="Onboarding"
      className="rounded-lg object-cover w-full h-full"
    />
  </div>

  {/* Text Content Section */}
  <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-4 py-8 text-center">
    <h2 className="font-semibold text-center text-3xl md:text-6xl">Welcome to CrispBurst!</h2>
    <p className="text-lg md:text-2xl">Hot crust. Big taste. No stress</p>
    <Link to="/">
      <button className="bg-[#113f67] text-white px-6 py-2 rounded hover:bg-blue-950 transition duration-300">
        Order now
      </button>
    </Link>
  </div>
</div>

    
    </div>
  )
}

export default Onboarding
