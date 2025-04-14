import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// 1. Define variants using cva
const buttonVariants = cva(
  " cursor-pointer text-white font-bold shadow-md",
  {
    variants: {
      variant: {
        default: "bg-gray-600",
        destructive: "bg-[#ED0800]",
        primary: "bg-teal-600",
        yellow:"bg-[#ffbd03]",
        chai:"bg-[#Ab784E]",
        lavender:"bg-[#a881af]",
        purple:"bg-[#80669d]",
        teal:"bg-[#5adbb5]",
        green:"bg-[#33b249]",
        sky:"bg-[#55c2da]",
        blue:"bg-[#5783db]",
        facebook:"bg-[#4681f4]",
        stroke:"bg-none border border-gray-800"
      },
      size: {
        sdot:"h-8 w-8 text-[8px]",
        dot:"h-15 w-15 text-[15px]",
        sm:"h-6 w-12 text-[12px]",
        m:"h-10 w-20 text-[15px]",
        default: "h-12 w-42 text-[20px]",
        xl: "h-12 w-62 text-[24px]",
        
      },
      rounded:{
        circle:"rounded-full",
        medium:"rounded-md",
        low:"rounded-lg",
        rectangle:"rounded-none",
        small:"rounded-sm"
      },
      hover:{
        float:"transition transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl",
        shadow:"",
        slide:"",
        ring:""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded:"low",
      hover:"float"
    },
  }
);

// 2. Define props type using VariantProps + button props
type AllButtonsProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

// 3. Create a reusable button
export default function Buttos({
  variant,
  size,
  rounded,
  hover,
  className,
  ...props
}: AllButtonsProps) {
  return (
    <button
      {...props}
      className={twMerge(clsx(buttonVariants({ variant, size,rounded , hover }), className))}
    />
  );
}
