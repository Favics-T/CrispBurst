import React from 'react';
import { Link } from 'react-router-dom'; // Make sure React Router is set up
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

const BakeryCard = ({ image, name, slogan }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[280px">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#113F67]">{name}</h3>
        <p className="text-sm text-gray-600">{slogan}</p>
      </div>
    </div>
  );
};

const Bakery = () => {
  return (
    <div className="py-8 px-4 md:px-12">
      <h1 className="text-3xl text-[#113F67] font-bold mb-6 text-cente">Explore Pastries Around</h1>
      
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {bakery.slice(0, 3).map((item, index) => (
          <BakeryCard key={index} image={item.image} name={item.name} slogan={item.slogan} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          to="/pastry"
          className="bg-[#113F67] text-white px-6 py-2 rounded-full hover:bg-[#0e3050] transition"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Bakery;
