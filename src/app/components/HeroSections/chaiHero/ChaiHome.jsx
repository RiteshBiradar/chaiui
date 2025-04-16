"use client";
import React from "react";
import { motion } from "motion/react";
import WaveAnimation from "../../waveanimations/WaveAnimation";

const Home = () => {
  return (
    <div className="relative bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))] w-full h-full flex align-middle items-center justify-center  dark:bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(0,0,0,1))]">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className=" flex flex-col items-center relative z-10">
        <h1 className="text-xl mb-8 tracking-widest dark:text-white">
          Sweet, Minimalistic & Snacky
        </h1>
        <h1 className="text-8xl  tracking-wide font-bold drop-shadow-[3px_3px_1px_#b07a42] dark:text-white dark:drop-shadow-[2px_2px_1px_#653818]">
          Chai
          <span className=" text-8xl dark:text-chai-dark drop-shadow-[3px_3px_1px_#b07a42]">
            UI{" "}
            <motion.div
              animate={{ y: ["100%", "-100%"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeOut",
              }}
              className="  absolute top-[-10] right-2 w-[15px] h-[15px] rounded-full
                  bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))]
                  dark:bg-[linear-gradient(360deg,_rgba(141,64,2,1),_rgba(255,255,255,1))]
                  "></motion.div>
          </span>
        </h1>
        {/* random testing  */}

        {/* random testing  */}

        <div>
          {/* get the button component  */}
          {/* <Button width={"180px"} /> */}
        </div>
      </motion.div>
      {/* for the wave animation  */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeIn" }}
        className="absolute w-full h-[70%] top-[40%]">
        <WaveAnimation />
      </motion.div>
      {/* wave animation ends  */}
    </div>
  );
};

export default Home;
