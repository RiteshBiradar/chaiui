// app/page.tsx or pages/index.tsx (based on your Next.js version)

"use client";

import { motion } from "framer-motion";
import  Buttons  from "../../../../registry/ui/buttons/basicButton"; // Replace with your actual Button import
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-[#fffaf0] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-20 overflow-hidden">

      <div className="max-w-xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1c1c1c] leading-tight">
          Brew Better UIs <br /> with <span className="text-[#d97706]">ChaiUI</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          A simple, flexible, and spiced-up React component library. <br /> Built for speed. Designed with flavor.
        </p>
        <Buttons className="mt-6 px-6 py-3 text-lg rounded-xl bg-[#1c1c1c] text-white hover:bg-[#d97706] transition-all">
          Start Brewing →
        </Buttons>
      </div>


      <div className="relative w-full md:w-[50%] h-[400px] md:h-[600px]">
 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/chai-cup.svg"
            alt="chai cup"
            width={500}
            height={500}
          />
        </motion.div>


        {flyingComponents.map((item, index) => (
          <motion.div
            key={index}
            initial={item.initial}
            animate={item.animate}
            transition={{ repeat: Infinity, duration: 6, delay: index * 0.4 }}
            className="absolute"
            style={{ top: item.top, left: item.left }}
          >
            <Image src={item.src} alt={item.alt} width={100} height={100} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}


const flyingComponents = [
    {
      src: "/assets/images/logos/button-icon.jpeg",
      alt: "button",
      top: "10%",
      left: "80%",
      width: 140,
      height: 140,
      initial: { y: 0, rotate: 0 },
      animate: { y: [0, -20, 0], rotate: [0, 10, -10, 0] },
    },
    {
      src: "/assets/images/logos/card.jpeg",
      alt: "card",
      top: "70%",
      left: "60%",
      width: 160,
      height: 160,
      initial: { x: 0, y: 0 },
      animate: { x: [0, 15, -15, 0], y: [0, -10, 10, 0] },
    },
    {
      src: "/assets/images/logos/text.jpeg",
      alt: "toggle",
      top: "20%",
      left: "30%",
      width: 100,
      height: 100,
      initial: { y: 0 },
      animate: { y: [0, -15, 15, 0] },
    },
  ];
  