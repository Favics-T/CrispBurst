import React from 'react'
// import {User} from  'react-icons'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbBrandWhatsappFilled } from "react-icons/tb";


const Header = ({onCartClick}) => {
  return (
    <div className=''>
      <div className='flex items-center justify-between text-[#113F67] h-20 shadow-lg px-10'>
     <Link to='/'>
     <h1 className='text-2xl font-bold tracking-wider'>CrispBurst</h1>
     
     </Link> 

     <div className='flex gap-6'>
      <Link to='/pastries'>
      
      </Link>
      <h1 className='font-semibold '>Pastries Category</h1>
     <Link to='/pastry'>
     <h1 className='font-semibold cursor-pointer'>Vendors</h1>
     </Link> 
      
      </div>  

        <div className='flex gap-4 items-center justify-center'>
            <input type="text" className='border p-2 rounded-xl' placeholder='enter your search'/>
            <FaUser className='text-2xl'/>
            <FaShoppingCart onClick={onCartClick} className='text-2xl'/>
          <Link to='/https://snapbite.vercel.app/'>
           <TbBrandWhatsappFilled  className='text-4xl text-green-500'/>
          </Link> 
          
        </div>


      </div>
    </div>
  )
}

export default Header
