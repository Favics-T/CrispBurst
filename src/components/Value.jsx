import React from 'react'

const ListCard = ({title,description})=>{
    return(
        <div className='s '>
            <h1 className='text-2xl text-center font-semibold'>{title}</h1>
            <p className='text-center'>{description} </p>

        </div>
    )
}

const value = [
    {
    title:"Your city's top Pastries Vendors",
    description:"With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!"
    },
     {
    title:"Fast delivery",
    description:"Like a flash! Order or send anything in your city and receive it in minutes"
    },

     {
    title:"Pastries delivery & more",
    description:"Find anything you need! From supermarkets to shops, pharmacies to florists — if it's in your city order it and receive it."
    },


]

const Value = () => {
    
  return (
    <div className='grid grid-cols-3 text-[#113F67] bg-gray-50 px-20 py-10 gap-8'>
      {
        value.map(({title,description}) =>(
            <div >
                <ListCard title={title} description={description}/>
            </div>

        ))
      }
    </div>
  )
}

export default Value
