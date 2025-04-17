import React from "react";
import { motion } from "framer-motion";
const FeedbackForm = ()=> 
   {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg w-full max-w-sm p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Feedback</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-600 py-2 transition-all duration-300 ease-in-out"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-600 py-2 transition-all duration-300 ease-in-out"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-600 py-2 transition-all duration-300 ease-in-out"
          />
          <textarea
            placeholder="Message"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-600 py-2 transition-all duration-300 ease-in-out"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded shadow hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default FeedbackForm