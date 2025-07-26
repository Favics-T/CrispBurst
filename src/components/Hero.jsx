// In your Home.jsx or Homepage component
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" py-16 px-44 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        Order Your Favorite Pastries and Groceries Instantly on WhatsApp!
      </h1>
      <p className="text-lg md:text-xl mb-6 text-gray-600">
            Just chat, cart and enjoy
        {/* No app downloads. No stress. Just chat, choose, and enjoy. */}
      </p>
      <a
        // href="https://wa.me/234XXXXXXXXXX?text=Hi%20I'm%20ready%20to%20order%20a%20pastry"
        href="https://snapbite.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-500 text-white py-3 px-6 rounded-full text-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-2xl" />
        Order on WhatsApp
      </a>
    </section>
  );
};

export default Hero;
