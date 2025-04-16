"use client"
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// 1. Define variants
const firecrackerCardVariants = cva(
  "relative w-full h-full rounded-xl border-2 shadow-xl flex flex-col items-center justify-center transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-orange-500 bg-white text-black",
        dark: "border-yellow-400 bg-black text-white",
      },
      size: {
        sm: "w-[250px] h-[160px]",
        md: "w-[300px] h-[200px]",
        lg: "w-[350px] h-[240px]",
      },
      animate: {
        true: "shadow-lg",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      animate: false,
    },
  }
);

// 2. Define props
type FirecrackerCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof firecrackerCardVariants> & {
    title?: string;
    description?: string;
    buttonLabel?: string;
  };

// 3. Component
const FirecrackerCard: React.FC<FirecrackerCardProps> = ({
  title = "Firecracker Card",
  description = "Click below to start the firework show!",
  buttonLabel = "Ignite Fireworks",
  size,
  variant,
  className,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="relative mx-auto mt-10">
     <div
  className={twMerge(
    clsx(firecrackerCardVariants({ size, variant, animate }), className)
  )}
  onMouseEnter={() => setAnimate(true)}
  onMouseLeave={() => setAnimate(false)}
  {...props}
>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-center mb-4">{description}</p>

        <button
          onClick={() => setAnimate(true)}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-400 rounded-full text-white font-semibold"
        >
          {buttonLabel}
        </button>

        {animate && (
          <>
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker1" />
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker2" />
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker3" />
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker4" />
          </>
        )}
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes firecracker1 {
            0%   { top: 0; left: 0; }
            25%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            75%  { top: 100%; left: 0; transform: translate(0, -100%); }
            100% { top: 0; left: 0; }
          }

          @keyframes firecracker2 {
            0%   { top: 0; left: 0; }
            25%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            50%  { top: 100%; left: 0; transform: translate(0, -100%); }
            75%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            100% { top: 0; left: 0; }
          }

          @keyframes firecracker3 {
            0%   { top: 0; left: 0; }
            25%  { top: 100%; left: 0; transform: translate(0, -100%); }
            50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            75%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            100% { top: 0; left: 0; }
          }

          @keyframes firecracker4 {
            0%   { top: 0; left: 0; }
            25%  { top: 100%; left: 0; transform: translate(0, -100%); }
            50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            75%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            100% { top: 0; left: 0; }
          }

          .animate-firecracker1 {
            animation: firecracker1 2s linear infinite;
          }
          .animate-firecracker2 {
            animation: firecracker2 2s linear infinite;
          }
          .animate-firecracker3 {
            animation: firecracker3 2s linear infinite;
          }
          .animate-firecracker4 {
            animation: firecracker4 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FirecrackerCard;
