import React, { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  const dummyCartItems = [
    { id: 1, name: "Butter Croissant", price: 1200 },
    { id: 2, name: "Red Velvet Slice", price: 1500 },
  ];

  const total = dummyCartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-[#113f67]">CrispBurst</h1>
        <button
          className="bg-[#113f67] text-white px-4 py-2 rounded hover:bg-blue-900"
          onClick={() => setShowCart(true)}
        >
          View Cart
        </button>
      </header>

      <Modal isOpen={showCart} onClose={() => setShowCart(false)}>
        <h2 className="text-xl font-bold mb-4 text-[#113f67]">Your Cart</h2>
        {dummyCartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {dummyCartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>₦{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex justify-between font-semibold">
          <span>Total:</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
        <button
          className="mt-6 w-full bg-[#113f67] text-white py-2 rounded hover:bg-blue-900"
          onClick={() => setShowCart(false)}
        >
          Proceed to Checkout
        </button>
      </Modal>
    </div>
  );
};

export default Home;
