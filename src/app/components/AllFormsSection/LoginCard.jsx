import React from 'react';
import { motion } from 'framer-motion';

const LoginCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e3edf7]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-[2rem] shadow-2xl p-8 w-[340px] relative"
      >
        {/* Profile Image */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <img
            // src="/logo.png"
            // alt="logo"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-black object-cover"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Web Development</h2>
          <p className="text-sm text-gray-500">Made easy!</p>
        </div>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          <div className="bg-[#f1f5f9] rounded-full flex items-center px-4 py-2 shadow-inner">
            <span className="text-gray-500 mr-2">
              <i className="fas fa-user" />
            </span>
            <input
              type="text"
              placeholder="username"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <div className="bg-[#f1f5f9] rounded-full flex items-center px-4 py-2 shadow-inner">
            <span className="text-gray-500 mr-2">
              <i className="fas fa-lock" />
            </span>
            <input
              type="password"
              placeholder="password"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full mt-6 bg-[#3db4e6] text-white py-2 rounded-full shadow-md hover:bg-[#31a3d1] transition">
          Login
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Forgot password?{' '}
          <span className="font-semibold text-black cursor-pointer">Or Sign Up</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginCard;
