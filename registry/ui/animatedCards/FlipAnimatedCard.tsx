import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const flipCardVariants = cva("relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]", {
  variants: {
    animation: {
      flipY: "hover:[transform:rotateY(180deg)]",
      flipX: "hover:[transform:rotateX(180deg)]",
      flipBoth: "hover:[transform:rotateX(180deg)_rotateY(180deg)]"
    },
  },
  defaultVariants: {
    animation: "flipY",
  },
});

type FlipCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof flipCardVariants> & {
    front?: React.ReactNode;
    back?: React.ReactNode;
  };

export default function FlipCard({
  animation,
  className,
  front,
  back,
  ...props
}: FlipCardProps) {
  return (
    <div className="cursor-pointer w-64 h-40 [perspective:1000px]" {...props}>
      <div className={twMerge(clsx(flipCardVariants({ animation }), className))}>
        <div className="absolute w-full h-full bg-gray-500 text-white rounded-xl flex items-center justify-center text-xl backface-hidden overflow-hidden">
          {front ?? "Front"}
        </div>
        <div className="absolute w-full h-full bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xl backface-hidden [transform:rotateY(180deg)] overflow-hidden">
          {back ?? "Back"}
        </div>
      </div>
    </div>
  );
}
