export const buttonCode = `
// in components/ui/basicButton.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// 1. Define variants using cva
const buttonVariants = cva(
  "px-4 cursor-pointer text-white font-bold rounded-lg shadow-md transition transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl",
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
        sdot:"h-5 w-5",
        dot:"h-10 w-10",
        sm:"h-6 w-12",
        m:"h-10 w-20",
        default: "h-12 w-42",
        xl: "h-12 w-62",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
  className,
  ...props
}: AllButtonsProps) {
  return (
    <button
      {...props}
      className={twMerge(clsx(buttonVariants({ variant, size }), className))}
    />
  );
}
`;
