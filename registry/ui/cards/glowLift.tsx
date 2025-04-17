import React from "react";

type GlowLiftCardProps = {
  title?: string;
  description?: string;
  className?: string;
};

const GlowLiftCard: React.FC<GlowLiftCardProps> = ({
  title = "Glow Lift",
  description = "Hover to see glow and lift effect.",
  className = "", 
}) => {
  return (
    <div
      className={`p-6 w-64 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-blue-400 hover:-translate-y-2 ${className}`}
    >
      <h2 className="font-bold text-lg text-gray-900">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default GlowLiftCard;
