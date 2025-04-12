"use client";
import React, { useEffect } from "react";

const Fireflies = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    let fireflies = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random(),
      delta: Math.random() * 0.02,
    }));

    const draw = () => {
      width = canvas.width;
      height = canvas.height;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      for (let f of fireflies) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 200, ${f.opacity})`;
        ctx.fill();

        f.x += f.dx;
        f.y += f.dy;
        f.opacity += f.delta;

        if (f.opacity <= 0 || f.opacity >= 1) f.delta *= -1;
        if (f.x < 0 || f.x > width) f.dx *= -1;
        if (f.y < 0 || f.y > height) f.dy *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0"
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
};

export default Fireflies;
