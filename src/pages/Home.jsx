import React from 'react'
import Landing1 from '../assets/Landing1.avif'

const Home = () => {
  return (
    <div className='h-screen'>
    
      <div className=' border px-10 py-10 flex flex-col items-center gap-4 justify-center  w-96'>
          <img src={Landing1} alt="" className='' />
          <button className='bg-[#0b3253] cursor-pointer hover:bg-[#141e27] w-40 text-white m-1 rounded-lg  '>Start Ordering</button>


      </div>
    </div>
  )
}

export default Home
