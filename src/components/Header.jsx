import React from 'react'
// import {User} from  'react-icons'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Header = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between text-[#113F67] h-20 shadow-lg px-10'>
        <h1 className='text-2xl font-bold tracking-wider'>CrispBurst</h1>

        <div className='flex gap-4 items-center justify-center'>
            <input type="text" className='border p-2 rounded-xl' placeholder='enter your search'/>
            <FaUser className='text-2xl'/>
        </div>

      </div>
    </div>
  )
}

export default Header
