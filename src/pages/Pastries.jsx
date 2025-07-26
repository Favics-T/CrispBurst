import React, { useState } from 'react';
import { product } from '../data/product'; // your updated data
import { useCart } from '../context/ChatContext';

const Pastries = () => {
  const { addToCart } = useCart();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from the product list
  const uniqueCategories = [...new Set(product.map((item) => item.category))];

  // Filter by search + category
  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className='flex gap-8'>
        {/* side bar */}
        <div className=' w-2/10 shadow-lg h-screen p-4 '>
          <input
            type="text"
            placeholder='Search pastries..'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='border  border-gray-400 px-4 rounded-lg'
          />
        </div>

        {/* main page */}
        <div className='w-8/10 gap-8 items-center justify-center flex flex-col'>
          {/* categories */}
          <div className="flex gap-4 flex-wrap">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? '' : cat)}
                className={`py-1 px-4 rounded-lg text-sm ${
                  selectedCategory === cat
                    ? 'bg-green-700 text-white'
                    : 'bg-green-200 text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Popular Pastries */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold text-purple-950'>POPULAR PASTRIES</h1>

            <div className='grid grid-cols-3 gap-8'>
              {filteredProducts.slice(0, 6).map((item) => (
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
      </div>
    </div>
  );
};

export default Pastries;
