// BubbleEffect.jsx
"use client";
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const BubbleEffect = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const bubbles = useRef([]);

  useImperativeHandle(ref, () => canvasRef.current);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    const createBubbles = () =>
      Array.from({ length: 30 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 30,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: Math.random() * 0.2 - 0.1,
        alpha: Math.random() * 0.5 + 0.1,
      }));

    bubbles.current = createBubbles();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let b of bubbles.current) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        b.y -= b.speedY;
        b.x += b.speedX;

        if (b.y + b.radius < 0) {
          b.y = height + b.radius;
          b.x = Math.random() * width;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width;
      height = canvas.height;
      bubbles.current = createBubbles();
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1]"
      style={{ background: "#000" }}
      {...props}
    />
  );
});

export default BubbleEffect;
