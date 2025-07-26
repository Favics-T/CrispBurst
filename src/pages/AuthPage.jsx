import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbBrandWhatsappFilled } from "react-icons/tb";

const AuthPage = ({ type = 'signin' }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate successful registration/login
    if (type === 'signup') {
      // normally you'd handle validation or API call here
      navigate('/home');
    } else {
      // for sign in
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-[#113F67] text-white flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 py-12 gap-10">
      {/* Left Side (Branding) */}
      <div className="hidden md:flex flex-col w-4/10 gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold tracking-wide text-center">
          Welcome to CrispBurst
        </h1>
        <p className='text-center font-bold text-lg'>Hot crust. Big taste. No stress</p>
        
        <div className='flex cursor-pointer flex-col justify-center items-center'>
            <TbBrandWhatsappFilled className='text-4xl text-green-500 '/>
        <p className='text-gray-300 font-semibold w-3/4 text-center'>Order your Pastries and Groceries Instantly on Whatsapp</p>
        </div>
        
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-6/10 bg-white text-[#113F67] p-8 rounded-lg shadow-md max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center capitalize">
          {type === 'signin' ? 'Sign In' : 'Sign Up'}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {type === 'signup' && (
            <>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Enter full name</label>
                <input type="text" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Enter email</label>
                <input type="email" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Enter phone number</label>
                <input type="tel" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Enter password</label>
                <input type="password" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Confirm password</label>
                <input type="password" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>
            </>
          )}

          {type === 'signin' && (
            <>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Enter email</label>
                <input type="email" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Enter password</label>
                <input type="password" required className="p-3 rounded-md border border-gray-300 bg-white text-[#113F67] outline-none" />
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-[#113F67] text-white py-3 rounded-md font-medium hover:bg-[#0e3556] transition"
          >
            {type === 'signin' ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          {type === 'signin' ? (
            <>
              Don’t have an account?{' '}
              <a href="/signup" className="text-[#113F67] font-semibold hover:underline">
                Sign Up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="/signin" className="text-[#113F67] font-semibold hover:underline">
                Sign In
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
