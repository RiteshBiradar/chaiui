export const signupCardCode = `
"use client";

import React, { FormEvent } from "react";
import Buttons from "../buttons/basicButton";

type SignupProps = {
  title?: string;
  className?: string;
};

const Signup: React.FC<SignupProps> = ({
  title = "Create a new account",
  className = "",
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = (e.currentTarget.elements.namedItem("full-name") as HTMLInputElement)?.value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement)?.value;
    const confirmPassword = (e.currentTarget.elements.namedItem("confirm-password") as HTMLInputElement)?.value;

    // Handle signup logic here
  };

  return (
    <div className={\`flex items-center justify-center min-h-screen bg-gray-100 \${className}\`}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-gray-900">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              required
              placeholder="Enter your full name"
              className="block w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="block w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Create a password"
              className="block w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              placeholder="Confirm your password"
              className="block w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Buttons type="submit" variant="primary" size="m" className="w-full">
            Sign Up
          </Buttons>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
`;
