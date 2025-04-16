import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// 1. Define card variants
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

// 2. Define props
type CracklingCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cracklingCardVariants> & {
    title?: string;
    description?: string;
    animationDuration?: string;
  };

// 3. Component
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
      <style>{`
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
          animation: crackle-border ${animationDuration} linear infinite;
        }
      `}</style>
    </>
  );
};

export default CracklingCard;
