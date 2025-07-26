import React from 'react'
// import {User} from  'react-icons'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Logo from '../assets/Logo.jpg'

const Header = ({onCartClick}) => {
  return (
    <div className=''>
      <div className='flex items-center justify-between bg-[#021629] text-white text-[#113F67 h-20 shadow-lg px-10'>
   
   
   <div className='flex gap-2'>
     <img src={Logo} alt=""  className='h-10 '/>

 <Link to='/'>
     {/* <h1 className='text-2xl font-bold tracking-wider'>CrispBurst</h1> */}
     </Link>
        </div>     

     <div className='flex gap-6'>
      <Link to='/pastries'>
          <h1 className='font-semibold '>Pastries Category</h1>   
      </Link>

        <h1 className='font-semibold'>Groceries Categories</h1>
     
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
