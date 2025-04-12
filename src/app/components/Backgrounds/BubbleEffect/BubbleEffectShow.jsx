"use client";

import React, { useEffect, useRef } from "react";
import BubbleEffect from "./BubbleEffect";

const BubbleEffectShow = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (canvas && container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[500px] relative">
      <BubbleEffect ref={canvasRef} />
    </div>
  );
};

export default BubbleEffectShow;
