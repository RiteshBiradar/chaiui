"use client";
import React, { useEffect, useRef } from "react";
import Fireflies from "./Fireflies";

const FirefliesShow = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (canvas && container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] bg-black overflow-hidden">
      <Fireflies canvasRef={canvasRef} />
    </div>
  );
};

export default FirefliesShow;
