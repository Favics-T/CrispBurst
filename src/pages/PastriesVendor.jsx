import React, { useState } from 'react';
import Anny from '../assets/Anny.webp';
import Buns from '../assets/Buns.jpg';
import Chorly from '../assets/Chorly.webp';
import Havillah from '../assets/Havillah.webp';
import Michy from '../assets/Michy.jpg';
import Other1 from '../assets/Other1.webp';
import Other2 from '../assets/Other2.webp';
import Other3 from '../assets/Other3.webp';

const bakery = [
  { image: Anny, name: "Anny's Cakes and Pastries", slogan: "Very fluffy, tasty and yummy cakes and pastries" },
  { image: Havillah, name: "Havilah Royale Bites", slogan: "Yummy and fluffy cakes" },
  { image: Michy, name: "Michy Cakes & Confectionaries", slogan: "Very fluffy, tasty and yummy cakes and pastries" },
  { image: Other3, name: "Nibbles Bakery and Confectionary", slogan: "Yummy and fluffy cakes" },
  { image: Other2, name: "Frenchies Ltd", slogan: "Very fluffy, tasty and yummy cakes and pastries" },
  { image: Chorly, name: "Gibsco Hygienic Bread", slogan: "Yummy and fluffy cakes" },
  { image: Buns, name: "Buns & Batter", slogan: "Very fluffy, tasty and yummy cakes and pastries" },
  { image: Other1, name: "Chorlys Cook and Bake", slogan: "Yummy and fluffy cakes" },
];

const BakeryCard = ({ image, name, slogan }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 w-full sm:w-[260px]">
    <img src={image} alt={name} className="h-40 w-full object-cover rounded-md mb-3" />
    <h3 className="text-lg font-bold text-[#113F67]">{name}</h3>
    <p className="text-sm text-gray-600">{slogan}</p>
  </div>
);

const PastriesVendor = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const filteredBakery = bakery
    .filter(vendor => vendor.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'asc') return a.name.localeCompare(b.name);
      if (sort === 'desc') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="py-10 px-4 md:px-10 flex flex-col gap-8  min-h-screen">
      <h1 className="text-3xl font-bold text-centr text-[#113F67] mb-6">Discover Pastry Vendors</h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search vendors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#113F67]"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full sm:w-[200px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#113F67]"
        >
          <option value="">Sort by</option>
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {filteredBakery.length > 0 ? (
          filteredBakery.map((item, index) => (
            <BakeryCard key={index} {...item} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No vendors found</p>
        )}
      </div>
    </div>
  );
};

export default PastriesVendor;
