"use client";
import React from "react";
import { useEffect, useState } from "react";
import Wave from "react-wavify";

const WaveAnimation = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    setIsDark(root.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Wave
      className="w-full h-full "
      fill={`url(#${isDark ? "darkGradient" : "lightGradient"})`}
      paused={false}
      style={{ display: "flex" }}
      options={{
        height: 20,
        amplitude: 50,
        speed: 0.15,
        points: 3,
      }}>
      <defs>
        {/* Light mode gradient */}
        <linearGradient id="lightGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fe7301" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Dark mode gradient */}
        <linearGradient id="darkGradient" x1="1" y1="0" x2="0.98" y2="1">
          <stop offset="0%" stopColor="rgba(173, 78, 0, 1)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 1)" />
        </linearGradient>
      </defs>
    </Wave>
  );
};

export default WaveAnimation;
