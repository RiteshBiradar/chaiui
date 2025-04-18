export const SignInCardcode = `
import React from 'react';
import { motion } from 'framer-motion';

const SignInCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-md text-center"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Sign In</h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full rounded-full px-4 py-2 border border-gray-200 focus:outline-none shadow-sm text-sm transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-full px-4 py-2 border border-gray-200 focus:outline-none shadow-sm text-sm transition-all duration-300"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-left mt-2 mb-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password ?</a>
        </div>

        {/* Sign In Button */}
        <button className="w-full py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
          Sign In
        </button>

        {/* Divider */}
        <div className="my-6 text-gray-400 text-sm">Or Sign in with</div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          {["G", "", "X"].map((icon, index) => (
            <button
              key={index}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md text-lg hover:scale-110 transition-all duration-300"
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Bottom Link */}
        <p className="text-xs text-blue-500 hover:underline cursor-pointer">
          Learn user licence agreement
        </p>
      </motion.div>
    </div>
  );
};

export default SignInCard;


`