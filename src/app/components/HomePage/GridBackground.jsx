import React from "react";
import clsx from "clsx";

const GridBackground = ({ children }) => {
  return (
    <div
      className={clsx(
        "w-full h-full transition-colors duration-300",
        "bg-white dark:bg-[#191a1a]"
      )}
      style={{
        "--color": "rgba(114, 114, 114, 0.3)",
        backgroundImage: `
          linear-gradient(0deg, 
            transparent 24%, var(--color) 25%, var(--color) 26%, 
            transparent 27%, transparent 74%, 
            var(--color) 75%, var(--color) 76%, transparent 77%, transparent
          ),
          linear-gradient(90deg, 
            transparent 24%, var(--color) 25%, var(--color) 26%, 
            transparent 27%, transparent 74%, 
            var(--color) 75%, var(--color) 76%, transparent 77%, transparent
          )
        `,
        backgroundSize: "55px 55px",
      }}>
      {children}
    </div>
  );
};

export default GridBackground;
