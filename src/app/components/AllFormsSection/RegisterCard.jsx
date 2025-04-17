import React from 'react';
import { motion } from 'framer-motion';

const RegisterCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        {/* Heading */}
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-2" />
          <h2 className="text-2xl font-semibold text-blue-600">Register</h2>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Signup now and get full access to our app.
        </p>

        {/* Name Fields */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Firstname"
            className="w-1/2 border border-gray-300 rounded-md p-2 text-sm focus:outline-blue-500 transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Lastname"
            className="w-1/2 border border-gray-300 rounded-md p-2 text-sm focus:outline-blue-500 transition-all duration-300"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4 focus:outline-blue-500 transition-all duration-300"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4 focus:outline-blue-500 transition-all duration-300"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border border-gray-300 rounded-md p-2 text-sm mb-6 focus:outline-blue-500 transition-all duration-300"
        />

        {/* Submit */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
          Submit
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Signin
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterCard;
