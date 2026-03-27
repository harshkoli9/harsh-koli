"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden text-white">

      {/* DESKTOP VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/17.mp4" type="video/mp4" />
      </video>

      {/* MOBILE BACKGROUND (NO VIDEO) */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-full px-6 sm:px-10 max-w-7xl mx-auto gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, my name is{" "}
            <span className="text-red-500 block md:inline">
              Harsh Koli
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            I am a{" "}
            <span className="text-red-400 font-semibold">
              Frontend Developer
            </span>{" "}
            specializing in React.js, Next.js and Tailwind CSS.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-6 flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <a
              href="https://www.linkedin.com/in/harshkoli09"
              target="_blank"
              className="px-5 py-2 text-sm sm:text-base bg-red-600 rounded-full hover:bg-red-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="/Harsh_Koli_Resume.pdf"
              className="px-5 py-2 text-sm sm:text-base border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Resume
            </a>

            <a
              href="#projects"
              className="px-5 py-2 text-sm sm:text-base border border-red-500 text-red-400 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.5)] overflow-hidden">

            <Image
              src="/harsh_1.jpeg"
              fill
              alt="Harsh"
              className="object-cover"
              priority
            />

          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-300 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
};

export default Hero;