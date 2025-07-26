import React from 'react'
import { product } from '../data/product'; // your updated data
import { useCart } from '../context/ChatContext';


const Pastries = () => {
    const { addToCart } = useCart();
  return (
    <div>
       <div className="px-6 py-10 ">
          
            <h1 className="text-3xl font-bold text-center text-[#113f67] mb-8">
              Shop Popular Pastries
            </h1>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
              {product.slice(0,3).map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-[#113f67]">{item.title}</h3>
                    <p className="text-[#113f67] mt-1">₦{item.price}</p>
      
                    <button
                      className="mt-3 bg-[#113f67] text-white py-2 w-full rounded hover:bg-blue-900"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Pastries
