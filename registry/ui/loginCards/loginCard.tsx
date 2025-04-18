"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type LoginCardProps = {
  title?: string;
  subtitle?: string;
};

const LoginCard = ({
  title = "Web Development",
  subtitle = "Made easy!",
}: LoginCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Logging in with:", { email, password });
      // Perform actual login logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e3edf7]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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

        {/* Title */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div className="bg-[#f1f5f9] rounded-full flex items-center px-4 py-2 shadow-inner">
            <span className="text-gray-500 mr-2">
              <i className="fas fa-envelope" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 ml-2 -mt-2">{errors.email}</p>
          )}

          {/* Password */}
          <div className="bg-[#f1f5f9] rounded-full flex items-center px-4 py-2 shadow-inner">
            <span className="text-gray-500 mr-2">
              <i className="fas fa-lock" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 ml-2 -mt-2">{errors.password}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#3db4e6] text-white py-2 rounded-full shadow-md hover:bg-[#31a3d1] transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Forgot password?{" "}
          <span className="font-semibold text-black cursor-pointer">
            Or Sign Up
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginCard;
