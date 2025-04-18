import React from "react";

type SlidingTextProps = {
  text: string;
  duration?: string; 
  gradientFrom?: string; 
  gradientTo?: string;   
};

const SlidingText: React.FC<SlidingTextProps> = ({
  text,
  duration = "10s",
  gradientFrom = "blue-500",
  gradientTo = "green-400",
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="overflow-hidden relative w-full">
        <div
          className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${gradientFrom} to-${gradientTo} animate-slide`}
        >
          <h1 className="whitespace-nowrap">{text}</h1>
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-slide {
            animation: slide ${duration} linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SlidingText;
