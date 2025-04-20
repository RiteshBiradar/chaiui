export const FirecrackerCard = `"use client"
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
        dark: "border-yellow-400 bg-[#1c1c1c] text-white",
        light:"border-gray-400 bg-gray-300 text-black"
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
    <div>
     <div
  className={twMerge(
    clsx(firecrackerCardVariants({ size, variant, animate }), className)
  )}
  onMouseEnter={() => setAnimate(true)}
  onMouseLeave={() => setAnimate(false)}
  {...props}
>
        <h2 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h2>
        <p className="text-sm text-center mb-4 text-gray-400">{description}</p>

        <button
          onClick={() => setAnimate(true)}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-400 rounded-full text-white font-semibold"
        >
          {buttonLabel}
        </button>

        {animate && (
          <>
            <span className="absolute w-2 h-2 bg-amber-400 rounded-full animate-firecracker1" />
            <span className="absolute w-2 h-2 bg-amber-400 rounded-full animate-firecracker2" />
            <span className="absolute w-2 h-2 bg-amber-400 rounded-full animate-firecracker3" />
           
          </>
        )}
      </div>

      {/* Keyframe Animations */}
      <style>
        {@keyframes firecracker1 {
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
        }
      </style>
 </div>
  );
};

export default FirecrackerCard;
`;

export const CracklingCard = `
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const cracklingCardVariants = cva(
  "relative p-[3px] rounded-xl animate-border overflow-hidden",
  {
    variants: {
      size: {
        sm: "w-[200px] h-[140px]",
        md: "w-[300px] h-[200px]",
        lg: "w-[400px] h-[250px]",
      },
      variant: {
        default: "bg-white text-black",
        dark: "bg-gray-900 text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);


type CracklingCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cracklingCardVariants> & {
    title?: string;
    description?: string;
    animationDuration?: string;
  };


const CracklingCard: React.FC<CracklingCardProps> = ({
  title = "Crackling Border",
  description = "This card has a sparkly moving border!",
  size,
  variant,
  className,
  animationDuration = "4s",
  ...props
}) => {
  return (
    <>
      <div className={twMerge(clsx(cracklingCardVariants({ size, variant }), className))} {...props}>
        <div className="w-full h-full rounded-xl flex flex-col items-center justify-center text-center px-4 py-6">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      {/* Dynamic animation styles */}
      <style>{
        @keyframes crackle-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-border {
          background: linear-gradient(
            270deg,
            #ff00c8,
            #00ffff,
            #ff9900,
            #ff00c8
          );
          background-size: 600% 600%;
          animation: crackle-border  linear infinite;
        }
      }</style>
    </>
  );
};

export default CracklingCard;

`;
